import LoadingAnimated from "@/components/loading";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";
import { Spacing } from "@/constants/theme";
import ProductInfo from "@/features/HomePage/components/productInfo";
import ProductsReview from "@/features/HomePage/components/ProductReview";
import { useTheme } from "@/hooks/use-theme";
import type { productsProps } from "@/type";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { Ruler } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Info() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();

  const [product, setProduct] = useState<productsProps | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );

        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
      } catch (error) {
        console.log("Failed to fetch product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <LoadingAnimated />;
  }

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ThemedView
          style={[
            styles.imageContainer,
            {
              backgroundColor: theme.background,
              borderColor: theme.border,
            },
          ]}
        >
          <Image
            source={{ uri: selectedImage }}
            style={[styles.mainImage]}
            resizeMode="contain"
          />
        </ThemedView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.thumbnailContainer}
        >
          {product.images?.map((image, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedImage(image)}
              style={[
                styles.thumbnail,
                {
                  backgroundColor: theme.backgroundElement,
                  borderColor:
                    selectedImage === image ? theme.primary : theme.border,
                },
              ]}
            >
              <Image
                source={{ uri: image }}
                style={styles.thumbnailImage}
                resizeMode="contain"
              />
            </Pressable>
          ))}
        </ScrollView>

        <ProductInfo product={product} />

        <ThemedView style={styles.section}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedIcon icon={Ruler} size={20} type="text" />

            <ThemedText
              style={[
                styles.sectionTitle,
                {
                  fontFamily: Font.SemiBold,
                },
              ]}
            >
              Product Dimensions
            </ThemedText>
          </ThemedView>

          <ThemedView style={[styles.dimensionGrid]}>
            <DimensionCard label="Width" value={product.dimensions?.width} />

            <DimensionCard label="Height" value={product.dimensions?.height} />

            <DimensionCard label="Depth" value={product.dimensions?.depth} />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText
            style={[
              styles.sectionTitle,
              {
                fontFamily: Font.SemiBold,
              },
            ]}
          >
            Customer Reviews ({product.reviews?.length ?? 0})
          </ThemedText>
          <ProductsReview product={product} />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

interface DimensionCardProps {
  label: string;
  value: number;
}

function DimensionCard({ label, value }: DimensionCardProps) {
  const theme = useTheme();
  return (
    <ThemedView
      type="backgroundElement"
      style={[
        styles.dimensionCard,
        [{ backgroundColor: theme.background, borderColor: theme.border }],
      ]}
    >
      <ThemedText
        themeColor="textSecondary"
        style={[
          styles.dimensionLabel,
          {
            fontFamily: Font.Regular,
          },
        ]}
      >
        {label}
      </ThemedText>

      <ThemedText
        style={[
          styles.dimensionValue,
          {
            fontFamily: Font.SemiBold,
          },
        ]}
      >
        {value}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.three,
    paddingBottom: Spacing.six,
  },

  imageContainer: {
    height: 350,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "transparent",
  },

  mainImage: {
    width: "90%",
    height: "90%",
    backgroundColor: "transparent",
  },

  thumbnailContainer: {
    gap: Spacing.two,
    paddingVertical: Spacing.three,
    backgroundColor: "transparent",
  },

  thumbnail: {
    width: 72,
    height: 72,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  thumbnailImage: {
    width: "85%",
    height: "85%",
    backgroundColor: "transparent",
  },

  section: {
    marginTop: Spacing.five,
    backgroundColor: "transparent",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    marginBottom: Spacing.three,
    backgroundColor: "transparent",
  },

  sectionTitle: {
    fontSize: 20,
    backgroundColor: "transparent",
  },

  dimensionGrid: {
    flexDirection: "row",
    gap: Spacing.two,
    backgroundColor: "transparent",
  },

  dimensionCard: {
    flex: 1,
    padding: Spacing.three,
    borderWidth: 1,
    borderRadius: 12,
  },

  dimensionLabel: {
    fontSize: 13,
  },

  dimensionValue: {
    fontSize: 17,
    marginTop: Spacing.one,
  },
});
