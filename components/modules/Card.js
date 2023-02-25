import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./Card.module.css";

const Card = ({ food }) => {
  return (
    
    <div className={styles.container}>
      <img src={`/images/${food.id}.jpeg`} alt={food.name} />
      <div className={styles.details}>
        <h4>{food.name}</h4>
        <div>
        <Location />
        {food.details[0].Cuisine}
        </div>
        
      </div>
      <div className={styles.price}>
        <Dollar />
       {food.discount ? <span className={styles.discount}>
        {(food.price * (100 - food.discount)) / 100}$
       </span>: (<span>{food.price}$</span>)}
      </div>
      {food.discount ? <div className={styles.badge}>{food.discount}%</div>:null}
      <Link href={`/menu/${food.id}`}>see detiles</Link>
    </div>
  );
};

export default Card;
