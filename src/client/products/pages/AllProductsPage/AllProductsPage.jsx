import React, {useEffect} from 'react';
import ProductCard from "../../../../shared/ProductCard/components/ProductCard";
import {propsProduct} from "./propsProducts";
import style from "./AllProductPage.module.scss";
import {Link} from "react-router-dom";
const AllProductsPage = () => {

    const productItems = propsProduct.map ( product =>  <ProductCard {...product}/>)

    return (
        <section>
            <a className={style.productPage__link}><Link to="/cart" >go to Cart</Link></a>
            <a className={style.productPage__link}><Link to="/compare" >go to Compare</Link></a>

            <h2>ALL PRODUCTS</h2>
            <div className={style.productPage}>
                {productItems}
            </div>

        </section>
    )
}

export default AllProductsPage;