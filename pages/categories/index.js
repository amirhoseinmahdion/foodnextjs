import Searchcategoties from "@amirmahdion/components/templete/Searchcategoties";
import React from "react";

const Categories = ({ filterData }) => {
   
  return (
    <div>
      <Searchcategoties filterData={filterData} />
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
    const {query} = context
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  
  const filterData = data.filter(item => {
    const difficultyResult = item.details.filter(detail => {
        detail.Difficulty && detail.Difficulty === query.difficulty
    })
       
    const timeResult = item.details.filter(detail => {
        const detiletime = detail["Cooking Time"] ||""
        const splittime = detiletime.split(" ")[0]
        if(splittime && query.time ==="Less"&& splittime <= 30){
            return detail
        }
       else if(splittime && query.time ==="More"&& splittime > 30){
            return detail
        }
    })

    if(query.difficultyResult && query.time && difficultyResult.length && timeResult.length){
        return item
      }
      if(!query.difficultyResult && query.time  && timeResult.length){
        return item
      }
      if(query.difficultyResult && !query.time && difficultyResult.length){
        return item
      }
      

  })


 

  

  return {
    props: {
        filterData
    },
  };
}
