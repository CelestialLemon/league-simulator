import React from 'react'
import { useState, useEffect } from 'react';

import './Slider.css'

const Slider = ({sliderWidth, onChange}) => {

    const [sliderValue, setSliderValue] = useState(50);

    useEffect(() =>
    {
        onChange(sliderValue);
    }, [sliderValue])

    return (
        <div className="slider-container">
            <input style={{width : sliderWidth}} className="slider" type="range" min="0" max="100" value={sliderValue} onChange={e => setSliderValue(e.target.value)}></input>
            <h3 className="slider-value">{sliderValue}</h3>
        </div>
    )
}

export default Slider
