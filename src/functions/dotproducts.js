import { useState } from "react";

// function for dot menu products
export function useToggleDots() {
  const [dotOpen, setDotOpen] = useState(false);

  const toggleDots = (productId) => {
    setDotOpen((prevDotOpen) => ({
      ...prevDotOpen,
      [productId]: !prevDotOpen[productId] || false,
    }));
  };

  return { dotOpen, toggleDots };
}
