type Product = {
  description: string;
  id: number;
  images: {
    alt: string;
    src: { large: string; medium: string; small: string };
  }[];
  name: string;
  price: number;
  rating: number;
  stock: number;
};
