import React from 'react';
import style from "./CompareProduct.module.scss";
import Button from "../../../../shared/Button";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../cart/reducer/cartReducer"

const CompareProduct = (props) => {
    const {id, img, title, colors, consist, volumes, price} = props;
    const dispatch = useDispatch();
    const handleClickAddProduct = () => {
        const productCart = {
            id,
            color: colors[0],
            volume: volumes[0].text,
            count: 1
        }
        dispatch(addProduct(productCart))
    }
    return (
        (<div className={style.compareProduct__wrapper}>
            <div className={style.compareProduct__productInfo}>
                <div className={style.compareProduct__imgWrapper}>
                    <img src={img} alt="shampoo" className={style.compareProduct__img}/>
                </div>
                <span className={style.compareProduct__title}>{title}</span>
            </div>
            <span className={style.compareProduct__text}>{colors[0]}</span>
            <span className={style.compareProduct__text}>{consist}</span>
            <span className={style.compareProduct__text}>{volumes[0].text}</span>
            <span className={style.compareProduct__text}>{price} грн</span>
            <span className={style.compareProduct__button}>
                <Button text={"Додати в кошик"} classType={"basic"} handleClick={handleClickAddProduct}/>
            </span>
        </div>)
    );
};

export default CompareProduct;
