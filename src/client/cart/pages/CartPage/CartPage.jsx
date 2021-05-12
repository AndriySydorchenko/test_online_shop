import React, {useEffect} from 'react'
import {propsProduct} from "../../../products/pages/AllProductsPage/propsProducts";
import {shallowEqual, useSelector} from "react-redux";
import ProductCart from "../../components/ProductsCart";
import {Link} from "react-router-dom";
import Button from "../../../../shared/Button";
import ReturnDeleted from "../../components/ReturnDeleted";
import style from "./CartPage.module.scss"


const CartPage = () => {
    const cart = useSelector( ({cart}) => cart, shallowEqual);

    const productsItems = cart.products.map(({id, color, volume, count}) => {
        const product = propsProduct.find( (product) => product.id===id);
        const productCart = {
            id,
            title: product.title,
            price: product.price,
            img: product.img,
            color,
            volume: volume.text,
            count
        }
        return <ProductCart {...productCart} key={id}/>
    })

    const deletingItem =  (cart.deletingId) ?  <ReturnDeleted/> : "";
    return (
        <section>
            <h2>Кошик</h2>
            {productsItems}
            {deletingItem}
            <div className={style.cardPage__funtionalItems}>
                <Link to="/products">
                    &lt;&lt; Повернутися до каталогу
                </Link>
                <Button text="Оформити замовлення" classType="basic" handleClick={"handleSubmit"}/>
            </div>



        </section>
    )
}

export default CartPage;