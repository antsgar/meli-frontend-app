import Head from "next/head";

const Layout = ({ children, description }) => {
    return (
        <div>
            <Head>
                <meta name="Description" content={description} />
                <title>Mercado Libre Argentina</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </Head>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
