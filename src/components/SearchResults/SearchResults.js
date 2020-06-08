import { Breadcrumb, ResultsCard, SpinnerSupport, ErrorMessage } from "..";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ categories, items, error, errorMessage }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <SpinnerSupport>
                    {error ? (
                        <ErrorMessage message={errorMessage} />
                    ) : (
                        <div>
                            <Breadcrumb breadcrumbItems={categories} />
                            <ResultsCard results={items} />
                        </div>
                    )}
                </SpinnerSupport>
            </div>
        </div>
    );
};

export default SearchResults;
