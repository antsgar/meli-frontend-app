import { Breadcrumb, SpinnerSupport, ErrorMessage } from "..";
import { parseCondition, parsePrice } from "../../helpers";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ error, categories, item }) => {
    const { picture, condition, quantity, price, title, description } = item;

    return (
        <div className={styles.container} data-test="item-detail">
            <div className={styles.content}>
                <SpinnerSupport>
                    {error ? (
                        <ErrorMessage message="Ha ocurrido un error al buscar este producto. Por favor, inténtelo nuevamente en unos minutos." />
                    ) : (
                        <div>
                            <Breadcrumb breadcrumbItems={categories} />
                            <div className={styles.card}>
                                <div className={styles.cardContent}>
                                    <div className={styles.pictureContainer}>
                                        <img className={styles.picture} src={picture} alt="Product picture"></img>
                                    </div>
                                    <div className={styles.productInfoContainer}>
                                        <div className={styles.condition}>
                                            {parseCondition(condition)} - {quantity} vendidos
                                        </div>
                                        <div className={styles.title}>{title}</div>
                                        <div className={styles.price}>{parsePrice(price)}</div>
                                        <button type="button" className={styles.button}>
                                            Comprar
                                        </button>
                                    </div>
                                    <div className={styles.descriptionContainer}>
                                        <div className={styles.descriptionHeader}>Descripción</div>
                                        <div className={styles.description}>{description}</div>
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
