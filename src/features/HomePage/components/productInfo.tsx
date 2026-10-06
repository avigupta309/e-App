import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

import type { productsProps } from "@/type";
import {
  Heart,
  Package,
  RotateCcw,
  ShoppingCart,
  Star,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

interface propductsItemProps {
  product: productsProps;
}

export default function ProductInfo({ product }: propductsItemProps) {
  const theme = useTheme();
  const [cart, setCart] = useState<productsProps[]>([]);
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  const handleAddToCart = () => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <ThemedView style={{ backgroundColor: "transparent" }}>
      <ThemedView style={styles.badgeRow}>
        <ThemedView type="backgroundSelected" style={styles.badge}>
          <ThemedText
            themeColor="primary"
            style={[
              styles.badgeText,
              {
                fontFamily: Font.Medium,
              },
            ]}
          >
            {product.category}
          </ThemedText>
        </ThemedView>

        {product.brand && (
          <ThemedView type="backgroundElement" style={styles.outlineBadge}>
            <ThemedText
              themeColor="textSecondary"
              style={[
                styles.badgeText,
                {
                  fontFamily: Font.Medium,
                },
              ]}
            >
              {product.brand}
            </ThemedText>
          </ThemedView>
        )}
      </ThemedView>

      <ThemedText
        style={[
          styles.title,
          {
            fontFamily: Font.Bold,
          },
        ]}
      >
        {product.title}
      </ThemedText>

      <ThemedView style={styles.ratingRow}>
        <ThemedIcon icon={Star} size={20} type="rating" />

        <ThemedText
          style={[
            styles.rating,
            {
              fontFamily: Font.Medium,
            },
          ]}
        >
          {product.rating.toFixed(1)}
        </ThemedText>

        <ThemedText
          themeColor="textSecondary"
          style={[
            styles.reviewCount,
            {
              fontFamily: Font.Regular,
            },
          ]}
        >
          ({product.reviews?.length ?? 0} reviews)
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.priceRow}>
        <ThemedText
          themeColor="price"
          style={[
            styles.discountedPrice,
            {
              fontFamily: Font.Bold,
            },
          ]}
        >
          Rs. {discountedPrice.toFixed(0)}
        </ThemedText>

        {product.discountPercentage > 0 && (
          <>
            <ThemedText
              themeColor="textSecondary"
              style={[
                styles.originalPrice,
                {
                  fontFamily: Font.Regular,
                },
              ]}
            >
              Rs. {product.price}
            </ThemedText>

            <ThemedView type="backgroundElement" style={styles.discountBadge}>
              <ThemedText
                themeColor="discount"
                style={[
                  styles.discountText,
                  {
                    fontFamily: Font.SemiBold,
                  },
                ]}
              >
                {Math.round(product.discountPercentage)}% OFF
              </ThemedText>
            </ThemedView>
          </>
        )}
      </ThemedView>

      <ThemedView style={styles.descriptionSection}>
        <ThemedText
          style={[
            styles.heading,
            {
              fontFamily: Font.SemiBold,
            },
          ]}
        >
          Description
        </ThemedText>

        <ThemedText
          themeColor="textSecondary"
          style={[
            styles.description,
            {
              fontFamily: Font.Regular,
            },
          ]}
        >
          {product.description}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stockRow}>
        <ThemedIcon icon={Package} size={20} type="text" />

        <ThemedText
          style={[
            styles.stockLabel,
            {
              fontFamily: Font.Medium,
            },
          ]}
        >
          Stock:
        </ThemedText>

        <ThemedText
          themeColor={product.stock > 0 ? "success" : "error"}
          style={{
            fontFamily: Font.Medium,
          }}
        >
          {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoGrid}>
        <ThemedView type="backgroundElement" style={styles.infoCard}>
          <ThemedText
            themeColor="textSecondary"
            style={[
              styles.infoLabel,
              {
                fontFamily: Font.Regular,
              },
            ]}
          >
            Minimum Order
          </ThemedText>

          <ThemedText
            style={[
              styles.infoValue,
              {
                fontFamily: Font.SemiBold,
              },
            ]}
          >
            {product.minimumOrderQuantity}
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.infoCard}>
          <ThemedView style={styles.returnHeader}>
            <ThemedIcon icon={RotateCcw} size={16} type="text" />

            <ThemedText
              style={[
                styles.infoLabel,
                {
                  fontFamily: Font.Medium,
                },
              ]}
            >
              Return Policy
            </ThemedText>
          </ThemedView>

          <ThemedText
            themeColor="textSecondary"
            style={[
              styles.returnText,
              {
                fontFamily: Font.Regular,
              },
            ]}
          >
            {product.returnPolicy}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.actionRow}>
        <Pressable
          style={[styles.cartButton, { backgroundColor: theme.primary }]}
        >
          <ThemedIcon icon={ShoppingCart} size={20} type="text" />

          <ThemedText
            style={[
              styles.cartButtonText,
              {
                fontFamily: Font.SemiBold,
              },
            ]}
          >
            Add to Cart
          </ThemedText>
        </Pressable>
        <Pressable
          style={[
            styles.favoriteButton,
            {
              backgroundColor: theme.backgroundElement,
              borderColor: theme.border,
            },
          ]}
        >
          <ThemedIcon icon={Heart} size={22} type="text" />
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  badgeRow: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: Spacing.three,
    backgroundColor: "transparent",
  },

  badge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 6,
    backgroundColor: "transparent",
  },

  outlineBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "transparent",
  },

  badgeText: {
    fontSize: 12,
  },

  title: {
    fontSize: 28,
    marginTop: Spacing.three,
    backgroundColor: "transparent",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
    marginTop: Spacing.two,
    backgroundColor: "transparent",
  },

  rating: {
    fontSize: 15,
    backgroundColor: "transparent",
  },

  reviewCount: {
    fontSize: 13,
    backgroundColor: "transparent",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: Spacing.two,
    marginTop: Spacing.four,
    backgroundColor: "transparent",
  },

  discountedPrice: {
    fontSize: 30,
    backgroundColor: "transparent",
  },

  originalPrice: {
    fontSize: 17,
    textDecorationLine: "line-through",
    backgroundColor: "transparent",
  },

  discountBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 6,
    backgroundColor: "transparent",
  },

  discountText: {
    fontSize: 11,
    backgroundColor: "transparent",
  },

  descriptionSection: {
    marginTop: Spacing.four,
    backgroundColor: "transparent",
  },

  heading: {
    fontSize: 16,
    marginBottom: Spacing.two,
    backgroundColor: "transparent",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    backgroundColor: "transparent",
  },

  stockRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
    marginTop: Spacing.four,
    backgroundColor: "transparent",
  },

  stockLabel: {
    fontSize: 14,
    backgroundColor: "transparent",
  },

  infoGrid: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: Spacing.four,
    backgroundColor: "transparent",
  },

  infoCard: {
    flex: 1,
    minHeight: 90,
    padding: Spacing.three,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "transparent",
  },

  infoLabel: {
    fontSize: 13,
    backgroundColor: "transparent",
  },

  infoValue: {
    fontSize: 17,
    marginTop: Spacing.one,
    backgroundColor: "transparent",
  },

  returnHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
    backgroundColor: "transparent",
  },

  returnText: {
    fontSize: 12,
    marginTop: Spacing.one,
    backgroundColor: "transparent",
  },

  actionRow: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: Spacing.four,
    backgroundColor: "transparent",
  },

  cartButton: {
    flex: 1,
    height: 52,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.two,
    backgroundColor: "transparent",
  },

  cartButtonText: {
    fontSize: 15,
  },

  favoriteButton: {
    width: 52,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
