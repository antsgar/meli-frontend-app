import { Breadcrumb, SpinnerSupport, ErrorMessage } from "..";
import { parseCondition, parsePrice } from "../../helpers";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ categories, item, error, errorMessage }) => {
    const defaultDescription = "El vendedor no incluyó una descripción del producto.";

    return (
        <div className={styles.container} data-test="item-detail">
            <div className={styles.content}>
                <SpinnerSupport>
                    {error ? (
                        <ErrorMessage message={errorMessage} />
                    ) : (
                        <div>
                            <Breadcrumb breadcrumbItems={categories} />
                            <div className={styles.card}>
                                <div className={styles.cardContent}>
                                    <div className={styles.pictureContainer}>
                                        <img className={styles.picture} src={item.picture} alt="Product picture"></img>
                                    </div>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.condition}>
                                            {parseCondition(item.condition)} - {item.quantity} vendidos
                                        </div>
                                        <div className={styles.title}>{item.title}</div>
                                        <div className={styles.price}>{parsePrice(item.price)}</div>
                                        <button type="button" className={styles.button}>
                                            Comprar
                                        </button>
                                    </div>
                                    <div className={styles.descriptionContainer}>
                                        <div className={styles.descriptionHeader}>Descripción</div>
                                        <div className={styles.description}>{item.description || defaultDescription}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </SpinnerSupport>
            </div>
        </div>
    );
};

export default ItemDetail;
