import { FC } from "react";
import styles from "./Home.module.scss";

const DevelopmentsHome: FC = () => {
    return (
        <section className={styles.developmentsWrapper}>
            <div className={styles.developmentsInner}>
                <h2>Разработки</h2>
            </div>
        </section>
    );
};

export default DevelopmentsHome;
