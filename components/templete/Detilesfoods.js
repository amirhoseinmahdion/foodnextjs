import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./detilesfood.module.css"

const Detilesfoods = ({data}) => {
  const{id,name,price,discount,introduction,details,ingredients,recipe} = data
    return (
        <div className={styles.container}>
          <h2>detiles</h2>
          <div className={styles.subcontainer}>
           
<div className={styles.banner}>
  <img src={`/images/${id}.jpeg`} alt="food"/>
  <div>
    <h3>{name}</h3>
    <span className={styles.location}>{details[0].Cuisine} 
    <Location/>
    </span>
    <span className={styles.price}>

    <Dollar/>
    {discount ? <span className={styles.discount}>{(price * (100 - discount)) / 100}$ off</span>  : <span>{price}$</span> }
    </span>
  
  </div>
  </div>
  <div className={styles.introduction}>
    <p>{introduction}</p>
  </div>

  <div className={styles.details}>
 <h4>details</h4>
<ul>
  {details.map((detail , index) => (
    <li key={index}>
           <p>{Object.keys(detail)[0]}:</p>
           <span>{Object.values(detail)[0]}</span>
    </li>
  ))}
</ul>


  </div>
  <div className={styles.details}>
  <h4>ingredients</h4>
  <ul>
    {ingredients.map((item ,  index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ))}
  </ul>
  </div>
  <div className={styles.recipe}>
    <h4>recipe</h4>
    {recipe.map((text ,index )=> 
    <div key={index} className={index % 2 ? styles.odd : styles.even}>

      <span>{index + 1}</span>
      <p>{text}</p>
        

    </div>)}



  </div >
  


          </div>
          <button>add to cart</button>
          
        </div>
    );
};

export default Detilesfoods;