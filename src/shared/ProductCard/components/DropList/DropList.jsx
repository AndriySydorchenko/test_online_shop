import React, {useState} from 'react';
import style from "./DropList.module.scss";

const DropList = (props) => {
    const {colors, color, setColor} = props;
    const [isOpen, setOpen] = useState(false);
    const listStyle = isOpen ? style.dropList__list : `${style.dropList__list} ${style.dropList__list_close}`
    const listItems = colors.map ( color => {
        return <li className={style.dropList__item} onClick={()=> {
            setColor(color)
            setOpen(!isOpen)
        }}>{color}</li>
    })

    return (
        <div className={style.dropList}>
            <div
                className={style.dropList__header}
                onClick={ () => setOpen(!isOpen)}
                >
                <span >{color}</span>
                <i className={style.dropList__arrowDown} />
            </div>
            <ul className={listStyle}>
                {listItems}
            </ul>
        </div>
    );
};

export default DropList;
