import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import styles from "./Searchcategories.module.css"

const Searchcategoties = ({filterData}) => {
    const [query , setQuary] = useState({difficulty:"",time:""})
    const router = useRouter()
   

    useEffect(()=>{
        const { difficulty , time} = router.query
         setQuary({difficulty,time})
    },[])

  


    const changehandeler = (e) => {
           
        setQuary({...query , [e.target.name]: e.target.value})
    }


    const clickhandeler = () => {
        console.log(router);
        router.push({
            pathname:"/categories",
            query:query

        })
    }

   
    return (
        <div className={styles.container}>
            <h2>categories</h2>
            <div className={styles.subContainer}>
            <div className={styles.select}>
            <select
            value={query.difficulty}
            name="difficulty"
            onChange={changehandeler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={changehandeler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
            <button onClick={clickhandeler}>search</button>
            </div>
            </div>
            <div className={styles.cards}>
                
                {!filterData.length ? <img src="/images/search.png" alt="serachfood"/>: filterData.map(food => <Card key={food.id} food={food}/>)}

      
        
        </div>
        </div>
    );
};

export default Searchcategoties;