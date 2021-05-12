import React, {useState} from 'react';
import Radio from "../../../Radio";

const Volume = (props) => {
    const {volumeList, setVolume} = props;
    const changeChecked = (id) => {
        const newVolumes = volumeList.map( (volume) => {
            if (volume.id === id) {

                return {...volume,checked:true,}
            } else {
                return {...volume,checked:false}
            }
        })

        return newVolumes
    }
    const handleChange = (e) => {
        const {id} = e.target;
        setVolume(changeChecked(id));
    }
    const listItems = volumeList.map( (volume) => <Radio {...volume} handleChange={handleChange}/>)
    return (
        <div>
            {listItems}
        </div>
    );
};

export default Volume;
