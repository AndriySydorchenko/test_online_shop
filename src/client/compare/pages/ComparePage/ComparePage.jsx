import React from 'react';
import Button from "../../../../shared/Button";
import style from  "./ComparePage.module.scss"
import image_1 from "../../../../assets/image/image_1.png"
import {propsProduct} from "../../../products/pages/AllProductsPage/propsProducts";
import {shallowEqual, useSelector} from "react-redux";
import CompareProduct from "../../components/CompareProduct";

const ComparePage = () => {
    const productsId = useSelector(state => state.compare, shallowEqual);

    const products = propsProduct.filter( ({id})=> productsId.includes(id));
    let compareItems = ""
    if (products.length > 0) {
        compareItems = products.map( product => <CompareProduct {...product}/>)
    }

    return (
        <div className={style.comparePage}>

            <div className={style.comparePage__wrapper}>
                <div></div>
                <span className={style.comparePage__header}>Колір</span>
                <span className={style.comparePage__header}>Склад</span>
                <span className={style.comparePage__header}>Розмір</span>
                <span className={style.comparePage__header}>Ціна</span>
                <div ></div>
            </div>
            {compareItems}

        </div>
    );
};

export default ComparePage;
