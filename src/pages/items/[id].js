import axios from "axios";
import { Layout, SearchBar, ItemDetail } from "../../components";
import { BASE_URL } from "../../constants";

const Item = ({ categories, item, error, errorMessage }) => {
    return (
        <Layout description={item ? `Mercado Libre Argentina - ${item.title}` : "Mercado Libre Argentina"}>
            <SearchBar search="" />
            <ItemDetail categories={categories} item={item} error={error} errorMessage={errorMessage} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    try {
        const response = await axios.get(`${BASE_URL}/api/items/${id}`);
        const { data } = response;
        const { item, categories } = data;

        return {
            props: {
                error: false,
                categories,
                item,
            },
        };
    } catch (e) {
        let errorMessage =
            "Ha ocurrido un error al buscar este producto. Por favor, inténtelo nuevamente en unos minutos.";

        if (e.response && e.response.status === 404) {
            errorMessage = "El producto solicitado no existe.";
        }

        return {
            props: {
                error: true,
                errorMessage,
            },
        };
    }
}

export default Item;
