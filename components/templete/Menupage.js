import Card from "../modules/Card";
import styles from "./Menupage.module.css"

const Menupage = ({data}) => {
   
    return (
        <div className={styles.container}>
            <h2>menu</h2>
            <div className={styles.subContainer}>

             {data.map(food => <Card food={food} key={food.id}/>)}

            </div>
        </div>
    );
};

export default Menupage;



