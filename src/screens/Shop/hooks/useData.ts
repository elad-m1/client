import {useState} from "react";

import {CartItem} from "@/utils/types";

const useData = () => {
  const [products, setProducts] = useState<CartItem[]>([
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    },
    {
      id: (Math.random() * 1000).toString(),
      name: "שמפו נקה 7",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      price: 12.2,
      rating: 3.8,
      quantity: 1
    }
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return {products, searchQuery, onChangeSearch};
};

export default useData;
