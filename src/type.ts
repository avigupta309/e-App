export interface productsProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];

  quantity: number;

  minimumOrderQuantity: number;
  returnPolicy: string;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
}
