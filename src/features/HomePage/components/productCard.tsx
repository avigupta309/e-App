import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";
import { Colors } from "@/constants/theme";
import { productsProps } from "@/type";
import { useRouter } from "expo-router";
import { Star } from "lucide-react-native";
import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";

interface ProductCardProps {
  product: productsProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  const route = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

  const oldPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <Pressable
      onPress={() =>
        route.push({
          pathname: "/(Product)/[id]",
          params: {
            id: product.id.toString(),
          },
        })
      }
    >
      <ThemedView
        style={[
          styles.card,
          {
            backgroundColor: theme.backgroundElement,
            borderColor: theme.border,
          },
        ]}
      >
        <ThemedView
          style={[
            styles.imageContainer,
            {
              backgroundColor: theme.background,
            },
          ]}
        >
          <ThemedView
            style={[
              styles.discountBadge,
              {
                backgroundColor: theme.discount,
              },
            ]}
          >
            <ThemedText
              style={[
                styles.discountText,
                {
                  color: "#FFFFFF",
                  fontFamily: Font.SemiBold,
                },
              ]}
            >
              -{Math.round(product.discountPercentage)}%
            </ThemedText>
          </ThemedView>

          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />
        </ThemedView>

        <ThemedView style={styles.content}>
          {product.brand && (
            <ThemedText
              style={[
                styles.brand,
                {
                  color: theme.textSecondary,
                  fontFamily: Font.Medium,
                },
              ]}
              numberOfLines={1}
            >
              {product.brand}
            </ThemedText>
          )}

          <ThemedText
            style={[
              styles.title,
              {
                color: theme.text,
                fontFamily: Font.SemiBold,
              },
            ]}
            numberOfLines={2}
          >
            {product.title}
          </ThemedText>

          <ThemedView style={styles.ratingRow}>
            <Star size={15} color={theme.rating} fill={theme.rating} />

            <ThemedText
              style={[
                styles.rating,
                {
                  color: theme.textSecondary,
                  fontFamily: Font.Medium,
                },
              ]}
            >
              {product.rating.toFixed(1)}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.priceRow}>
            <ThemedText
              style={[
                styles.price,
                {
                  color: theme.price,
                  fontFamily: Font.Bold,
                },
              ]}
            >
              ${product.price.toFixed(2)}
            </ThemedText>

            <ThemedText
              style={[
                styles.oldPrice,
                {
                  color: theme.textSecondary,
                  fontFamily: Font.Regular,
                },
              ]}
            >
              ${oldPrice.toFixed(2)}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 187,
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },

  imageContainer: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  image: {
    width: "85%",
    height: "85%",
  },

  discountBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  discountText: {
    fontSize: 11,
  },

  content: {
    padding: 12,
  },

  brand: {
    fontSize: 12,
    marginBottom: 3,
  },

  title: {
    fontSize: 14,
    lineHeight: 19,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },

  rating: {
    fontSize: 12,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 7,
  },

  price: {
    fontSize: 17,
  },

  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
  },
});
