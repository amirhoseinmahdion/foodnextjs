import Atrrbiut from "../modules/Atrrbiut";
import Banner from "../modules/Banner";
import Definiton from "../modules/Definiton";
import Guide from "../modules/Guide";
import Logo from "../modules/Logo";
import Restriction from "../modules/Restriction";
import Usepage from "../modules/Usepage";
import styles from "./homepage.module.css"

const Homepage = () => {
    return (
        <div className={styles.container}>
           <Banner/>
           <Atrrbiut/>
           <Definiton/>
           <Logo/>
           <Usepage/>
           <Guide/>
           <Restriction/>
        </div>
    );
};

export default Homepage;