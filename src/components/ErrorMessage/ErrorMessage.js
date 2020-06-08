import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }) => {
    return <div className={styles.container}>{message}</div>;
};

export default ErrorMessage;
