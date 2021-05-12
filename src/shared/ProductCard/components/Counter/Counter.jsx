import React, {useState} from 'react';
import style from "./Counter.module.scss";

const Counter = (props) => {
    const {count, setCount, id} = props;
    const increaseCount = () => {
        setCount(count+1);
    }
    const decreaseCount = () => {
        if(count > 1) {
            setCount(count-1);
        }
    }
    return (
        <div className={style.counter}>
            <span className={style.counter__item} onClick={decreaseCount}>-</span>
            <span className={style.counter__item}>{count}</span>
            <span className={style.counter__item} onClick={increaseCount}>+</span>
        </div>
    );
};

export default Counter;
