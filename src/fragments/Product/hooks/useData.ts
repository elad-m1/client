import {useEffect, useState} from "react";

const useData = (productId: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [productId]);

  const hardcodedData = {
    name: "שמפו נקה 7",
    description:
      "השמפו והמרכך האהובים באריזה חדשה ונוסחא משופרת, מועשרים בתמציות צמחים לטיפוח השיער בכל חפיפה",
    price: 24.9,
    category: "טיפוח שיער",
    imageUrls: [
      "https://www.andrewbarbershop.it/images/large/p174_hard-matt.jpg",
      "https://www.andrewbarbershop.it/images/large/p174_hard-matt.jpg",
      "https://www.andrewbarbershop.it/images/large/p174_hard-matt.jpg"
    ],
    sale: 0.4
  };

  const toggleLike = () => setIsLiked(!isLiked);
  const toggleBookmark = () => setIsBookmarked(!isBookmarked);

  return {
    hardcodedData,
    isLiked,
    isBookmarked,
    loading,
    toggleLike,
    toggleBookmark
  };
};

export default useData;
