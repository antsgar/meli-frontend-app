import { Layout, SearchBar, SpinnerSupport } from "../components";

const Home = () => {
    return (
        <Layout description="Mercado Libre Argentina">
            <SearchBar search="" />
            <SpinnerSupport />
        </Layout>
    );
};

export default Home;
