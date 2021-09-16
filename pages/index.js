import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionInformation from "../components/SectionInformation";
import ProductList from "../components/ProductList/productList";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Shopify Test Task</title>
                <meta name="description" content="Applied Labs testing task"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <main>
                <SectionInformation/>
                <ProductList/>
            </main>
            <Footer/>
        </div>
    )
}
