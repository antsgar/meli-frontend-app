import styles from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
            <div className={`${styles.circle} ${styles.circle4}`}></div>
            <div className={`${styles.circle} ${styles.circle5}`}></div>
            <div className={`${styles.circle} ${styles.circle6}`}></div>
            <div className={`${styles.circle} ${styles.circle7}`}></div>
            <div className={`${styles.circle} ${styles.circle8}`}></div>
            <div className={`${styles.circle} ${styles.circle9}`}></div>
            <div className={`${styles.circle} ${styles.circle10}`}></div>
            <div className={`${styles.circle} ${styles.circle11}`}></div>
            <div className={`${styles.circle} ${styles.circle12}`}></div>
        </div>
    );
};

export default Spinner;
