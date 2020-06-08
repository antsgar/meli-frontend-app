import { Breadcrumb, ResultsCard, SpinnerSupport } from "..";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ categories, items }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SpinnerSupport>
                    <Breadcrumb breadcrumbItems={categories} />
                    <ResultsCard results={items} />
                </SpinnerSupport>
            </div>
        </div>
    );
};

export default SearchResults;
