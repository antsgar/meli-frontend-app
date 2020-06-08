import { useRouter } from "next/router";
import { parsePrice } from "../../helpers";
import styles from "./Result.module.scss";

const Result = ({ result }) => {
    const router = useRouter();

    const {
        id,
        picture,
        price,
        title,
        state_name: stateName,
        free_shipping: freeShipping,
    } = result;

    const openItemDetail = () => {
        router.push("/items/[id]", `/items/${id}`);
    };

    return (
        <div
            className={styles.hoverable}
            data-test="result-item"
            data-id={id}
            onClick={openItemDetail}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <img
                        className={styles.picture}
                        src={picture}
                        alt="Product picture"
                    ></img>
                    <div className={styles.productInfoContainer}>
                        <div className={styles.priceAndStateContainer}>
                            <div className={styles.priceAndShipping}>
                                {parsePrice(price)}
                                {freeShipping && (
                                    <img
                                        className={styles.freeShippingIcon}
                                        src="/ic_shipping@2x.png.png"
                                        alt="Free shipping icon"
                                    ></img>
                                )}
                            </div>
                            <div className={styles.stateName}>{stateName}</div>
                        </div>
                        <div className={styles.title}>{title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
