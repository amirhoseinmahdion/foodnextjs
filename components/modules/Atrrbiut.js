import Choice from "../icons/Choice";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Location from "../icons/Location";
import Tesla from "../icons/Tesla";
import styles from "./atrrbiut.module.css"

const Atrrbiut = () => {
    return (
       
        <div className={styles.container}>
            <h3>why us ?</h3>
            <div className={styles.subContainer}>
                <div>
                    <Fast/>
                    <p>fast</p>
                </div>
                <div>
                    <Food/>
                    <p>best restaurants</p>
                </div>
                <div>
                    <Choice/>
                    <p>your choice</p>
                </div>
                <div>
                <Fast/>
                    <p>24-7</p>
                </div>
            </div>
        </div>
        
       
    );
};

export default Atrrbiut;