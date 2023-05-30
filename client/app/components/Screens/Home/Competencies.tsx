import { FC } from "react";
import styles from "./Home.module.scss";
const CompetenciesHome: FC = () => {
    return (
        <section className={styles.competenciesWrapper}>
            <div className={styles.competenciesInner}>
                <h2>Компетенции организации</h2>
                <ul className={styles.competenciesList}>
                    <li>
                        <div className={styles.img}></div>

                        <h3>Математика</h3>
                        <p>
                            Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы
                            1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод,
                            сделанный H. Rackham, 1914 год.
                        </p>
                    </li>
                    <li>
                        <div className={styles.img}></div>
                        <h3>Радиолокация</h3>
                        <p>
                            Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы
                            1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод,
                            сделанный H. Rackham, 1914 год.
                        </p>
                    </li>
                    <li>
                        <div className={styles.img}></div>
                        <h3>Программирование</h3>
                        <p>
                            Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы
                            1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод,
                            сделанный H. Rackham, 1914 год.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CompetenciesHome;
