import React, { useEffect, useState } from "react";

const Hearts = ({ recipeId }) => {
  const [rating, setRating] = useState(0);
  const icon = "💚";

  useEffect(() => {
    const storedRating = localStorage.getItem("recipeRatings");

    if (storedRating) {
      const ratings = JSON.parse(storedRating);
      if (ratings[recipeId]) {
        setRating(ratings[recipeId]);
      }
    }
  }, [recipeId]);

  return (
    <div>
      {Array(rating)
        .fill(icon)
        .map((item, index) => (
          <span key={index}>{item}</span>
        ))}
    </div>
  );
};

export default Hearts;
