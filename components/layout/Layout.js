import Link from "next/link";
import styles from "./layout.module.css"

const Layout = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
               <div className={styles.left}>
                <Link href="/">FoodProject</Link>
               </div>
               <div className={styles.right}>
               <Link href="/menu">Menu</Link>
               <Link href="/categories">Categories</Link>
               </div>
            </header>
           <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                   <h3>FoodProject nextjs || Amirhosein-Mahdion</h3>
            </footer>
        </div>
    );
};

export default Layout;