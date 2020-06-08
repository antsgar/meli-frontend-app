import axios from "axios";
import { Layout, SearchBar, SearchResults, ErrorMessage } from "../../components";
import { BASE_URL } from "../../constants";

const Items = ({ error, search, categories, items }) => {
    return (
        <Layout
            description={`Mercado Libre Argentina - Resultados de búsqueda para ${search}`}
        >
            <SearchBar search={search} />
            {error ? (
                <ErrorMessage message="Ha ocurrido un error al realizar la búsqueda. Por favor, inténtelo nuevamente en unos minutos." />
            ) : (
                <SearchResults categories={categories} items={items} />
            )}
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { search } = context.query;
    const response = await axios.get(`${BASE_URL}/api/items?q=${search}`);
    const { data } = response;

    if (response.status === 200) {
        const { items, categories } = data;

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
            error: true
        }
    }
}

export default Items;
