import Link from "next/link";
import styles from "./Guide.module.css"

const Guide = () => {
    return (
        <div className={styles.container}>
            <Link href="/menu">menu</Link>
            <Link href="/categories">categories</Link>
            <Link href="/">discount</Link>
            
        </div>
    );
};

export default Guide;