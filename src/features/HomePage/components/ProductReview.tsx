import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { productsProps } from "@/type";
import { Star } from "lucide-react-native";
import { StyleSheet } from "react-native";

interface ProductItemProps {
  product: productsProps;
}

export default function ProductsReview({ product }: ProductItemProps) {
  const theme = useTheme();
  return (
    <ThemedView style={[styles.container]}>
      {product.reviews?.map((review, index) => (
        <ThemedView
          key={index}
          type="backgroundElement"
          style={[
            styles.card,
            [{ borderColor: theme.border, backgroundColor: theme.background }],
          ]}
        >
          <ThemedView style={styles.header}>
            <ThemedView style={{ backgroundColor: "transparent" }}>
              <ThemedText
                style={[
                  styles.reviewerName,
                  {
                    fontFamily: Font.SemiBold,
                  },
                ]}
              >
                {review.reviewerName}
              </ThemedText>

              <ThemedView style={styles.stars}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <ThemedIcon
                    key={starIndex}
                    icon={Star}
                    size={16}
                    type={
                      starIndex < review.rating ? "rating" : "textSecondary"
                    }
                  />
                ))}
              </ThemedView>
            </ThemedView>

            <ThemedText
              themeColor="textSecondary"
              style={[
                styles.date,
                {
                  fontFamily: Font.Regular,
                },
              ]}
            >
              {new Date(review.date).toLocaleDateString()}
            </ThemedText>
          </ThemedView>

          <ThemedText
            themeColor="textSecondary"
            style={[
              styles.comment,
              {
                fontFamily: Font.Regular,
              },
            ]}
          >
            {review.comment}
          </ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
    marginTop: Spacing.three,
    backgroundColor: "transparent",
  },

  card: {
    padding: Spacing.three,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "transparent",
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: Spacing.three,
    backgroundColor: "transparent",
  },

  reviewerName: {
    fontSize: 15,
    backgroundColor: "transparent",
  },

  stars: {
    flexDirection: "row",
    gap: 2,
    marginTop: Spacing.one,
    backgroundColor: "transparent",
  },

  date: {
    fontSize: 11,
    backgroundColor: "transparent",
  },

  comment: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: Spacing.three,
    backgroundColor: "transparent",
  },
});
