import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import style from "./ProductCard.module.scss";
import compareImg from "../../../../assets/image/compareImg.png";
import Volume from "../Volume/Volume";
import Counter from "../Counter";
import Button from "../../../Button";
import DropList from "../DropList";
import NewProduct from "../NewProduct";
import {addProduct} from "../../../../client/cart/reducer/cartReducer";
import {addProductToCompare} from "../../../../client/compare/reducer/comparePageReducer";


const ProductCard = (props) => {
    const {id, title, price, img, description, colors, volumes, newProduct} = props;
    const dispatch = useDispatch();
    const [color, setColor] = useState("Цвет");
    const [volumeList, setVolume] = useState(volumes);
    const [count, setCount] = useState(1);


    const newProductItem = newProduct ? <NewProduct/> : <div></div>;


    const handleSubmit = () => {
        const productCart = {
            id,
            color,
            volume: volumeList.find( ({checked}) => checked === true),
            count
        }
        dispatch(addProduct(productCart))
        const cart = JSON.parse(localStorage.getItem('cart'));
        const serialObj = JSON.stringify([...cart, productCart]);
        localStorage.setItem("cart", serialObj);
    }
    const handleClickCompare = () =>{
        dispatch((addProductToCompare(id)))
    }
    return (
        <div className={style.productCard} key={id}>
            <div className={style.productCard_wrapper}>
                {newProductItem}
                <div className={style.productCard__imgWrapper}>
                    <img src={img} alt="shampoo" className={style.productCard__img}/>
                </div>
                <div className={style.productCard__compareImg} onClick={handleClickCompare}>
                    <img src={compareImg} alt="shampoo" className={style.productCard__img}/>
                </div>
            </div>
            <h4 className={style.productCard__title}>{title}</h4>
            <p >{description}</p>
            <div className={style.productCard__priceAndColor}>
                <DropList colors = {colors} color={color} setColor={setColor}/>
                <span className={""}>{price} грн</span>
            </div>
            <Volume volumeList={volumeList} setVolume={setVolume}/>
            <div className={style.productCard__bay}>
                <Counter count={count} setCount={setCount}/>
                <Button text="Купить" classType="basic" handleClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default ProductCard;
