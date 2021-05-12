import React from 'react';
import style from "./Radio.module.scss";

const Radio = (props) => {
    const {text, id, checked, handleChange} = props;
    return (
        <div>
            <input
                type="radio" id={id}
                className={style.customRadio}
                checked={checked}
                onChange={handleChange}
            />
            <label className={style.radio} htmlFor={id}>
                <span className={style.radio__text}>{text}</span>
            </label>
        </div>
    );
};

export default Radio;
