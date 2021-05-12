import React from 'react';
import Counter from "../../../../shared/ProductCard/components/Counter";
import style from "./ProductCart.module.scss";
import deleteImg from "../../../../assets/image/deleteImg.png"
import {useDispatch} from "react-redux";
import {setCountStore, setDeletingItem} from "../../reducer/cartReducer";
import {cartActionCreators} from "../../reducer/cartActionCreators";


const ProductCart = (props) => {
    // console.log(props);
    const {id, title, price, img, color, volume, count} = props;
    const dispatch = useDispatch();

    const setCount = (count) =>{
        dispatch(setCountStore({count, id}));
    }
    const deleteProduct = () =>{
        dispatch(cartActionCreators(id));
    }
    return (
        <div className={style.productCart}>
            <div className={style.productCart__imgWrapper}>
                <img src={img} alt="" className={style.productCart__img}/>
            </div>

            <span className={style.productCart__title}>{title}</span>
            <span className={style.productCart__text}>Колір: {color}</span>
            <span className={style.productCart__text}>Розмір: {volume}</span>
            <Counter count={count} setCount={setCount} id={id}/>
            <span className={style.productCart__text}>{price} грн</span>
            <img src={deleteImg} alt="" className={style.productCart__img} onClick={deleteProduct}/>

            
        </div>
    );
};

export default ProductCart;
