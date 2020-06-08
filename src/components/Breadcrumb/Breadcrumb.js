import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ breadcrumbItems }) => {
    const items = breadcrumbItems.map((item) => (
        <span key={item} className={styles.item}>
            {item}
        </span>
    ));

    return <div className={styles.container}>{items}</div>;
};

export default Breadcrumb;
