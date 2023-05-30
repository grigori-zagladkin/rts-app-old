import { FC } from "react";
import styles from "./Home.module.scss";

const EmployeesHome: FC = () => {
    return (
        <section className={styles.employeesWrapper}>
            <div className={styles.employeesInner}>
                <h2>Сотрудники</h2>
                <ul className={styles.employeesList}>
                    <li>
                        <div className={styles.employeePhoto}></div>
                        <h3 className={styles.employeeName}>Иванов иван</h3>
                        <p className={styles.employeeBiography}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis alias ea quaerat
                            deserunt repellendus, culpa pariatur veniam dolorum eos distinctio eum libero earum tempora
                            quas neque quis exercitationem laudantium!
                        </p>
                    </li>
                    <li>
                        <div className={styles.employeePhoto}></div>
                        <h3 className={styles.employeeName}>Иванов иван</h3>
                        <p className={styles.employeeBiography}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis alias ea quaerat
                            deserunt repellendus, culpa pariatur veniam dolorum eos distinctio eum libero earum tempora
                            quas neque quis exercitationem laudantium!
                        </p>
                    </li>
                    <li>
                        <div className={styles.employeePhoto}></div>
                        <h3 className={styles.employeeName}>Иванов иван</h3>
                        <p className={styles.employeeBiography}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis alias ea quaerat
                            deserunt repellendus, culpa pariatur veniam dolorum eos distinctio eum libero earum tempora
                            quas neque quis exercitationem laudantium!
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default EmployeesHome;
