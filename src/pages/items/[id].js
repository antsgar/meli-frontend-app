import axios from "axios";
import { Layout, SearchBar, ItemDetail } from "../../components";
import { BASE_URL } from "../../constants";

const Item = ({ error, categories, item }) => {
    return (
        <Layout description={`Mercado Libre Argentina - ${item.title}`}>
            <SearchBar search="" />
            <ItemDetail categories={categories} item={item} error={error} />
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    const response = await axios.get(`${BASE_URL}/api/items/${id}`);
    const { data } = response;

    if (response.status === 200) {
        const { item, categories } = data;

        return {
            props: {
                error: false,
                categories,
                item,
            },
        };
    }

    return {
        props: {
            error: true,
        },
    };
}

export default Item;
