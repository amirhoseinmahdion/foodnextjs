import Searchcategoties from "@amirmahdion/components/templete/Searchcategoties";
import React from "react";

const Categories = ({ filteredData }) => {
  return (
    <div>
      <Searchcategoties filterData={filteredData} />
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === query.difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetail = cookingTime.split(" ")[0];
      if (query.time === "less" && timeDetail && timeDetail <= 30) {
        return detail;
      } else if (query.time === "more" && timeDetail > 30) {
        return detail;
      }
    });
    if (query.time && query.difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!query.time && query.difficulty && difficultyResult.length) {
      return item;
    } else if (query.time && !query.difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: {
      filteredData,
    },
  };
}
