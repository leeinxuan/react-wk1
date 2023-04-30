import Header from"../components/Header"
import ProductList from"../components/ProducList"
import Footer from"../components/Footer"
import { useProducts } from "../react-query";

function Home(){
    const {data, isLoading } = useProducts();
    const products = data || [];

    return(
        <div className="main-layout">
            <Header className="layout-header"/>
            <ProductList 
                products={products}
                isLoading={isLoading}
                className="layout-content"
            />
            <Footer className="layout-footer"/>
        </div>
    );
}

export default Home;