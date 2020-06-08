import axios from "axios";
import { Layout, SearchBar, SearchResults } from "../../components";
import { BASE_URL } from "../../constants";

const Items = ({ search, categories, items, error, errorMessage }) => {
    return (
        <Layout description={`Mercado Libre Argentina - Resultados de búsqueda para ${search}`}>
            <SearchBar search={search} />
            <SearchResults categories={categories} items={items} error={error} errorMessage={errorMessage} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { search = "" } = context.query;

    try {
        const response = await axios.get(`${BASE_URL}/api/items?q=${search}`);
        const { data } = response;
        const { items, categories } = data;

        if (items.length > 0) {
            return {
                props: {
                    error: false,
                    search,
                    categories,
                    items,
                },
            };
        }

        return {
            props: {
                error: true,
                errorMessage: "No se han encontrado resultados para esta búsqueda.",
                search,
            },
        };
    } catch (e) {
        return {
            props: {
                error: true,
                errorMessage:
                    "Ha ocurrido un error al realizar la búsqueda. Por favor, inténtelo nuevamente en unos minutos.",
                search,
            },
        };
    }
}

export default Items;
