import React from 'react'
import style from "./RerturnDeleted.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {propsProduct} from "../../../products/pages/AllProductsPage/propsProducts";
import {setDeletingItem} from "../../reducer/cartReducer";

const ReturnDeleted = () => {
    const cart = useSelector( ({cart}) => cart, shallowEqual);
    const dispatch = useDispatch();
    const cencerDel = () => {
        dispatch(setDeletingItem(null))
    }

    const {volume, color}= cart.products.find( ({id}) => id === cart.deletingId);
    const {title} = propsProduct.find( ({id}) => id === cart.deletingId);
    return (
        <div className={style.returnDeleted}>
            <span>Ви видалили товар <span className={style.returnDeleted__productInfo}>{title} {volume.text} {color}</span> з Вашої корзини.</span>
            <span onClick={cencerDel}><span className={style.returnDeleted__icon}>&#8617;</span> Відмініти дію</span>
        </div>
    );
};

export default ReturnDeleted;
