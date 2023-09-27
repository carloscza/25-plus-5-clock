import React from 'react';
import './Clock.scss';
import '@fortawesome/fontawesome-free/css/all.css';

export default function TimeSetter(props)
{
    return ( 
        <section className='label-and-btns-container'>
            <label id={props.lengthName + '-label'}>
                {props.timerName} Length
            </label>
            <div className='timer-setter-btns'>
                <button id={props.lengthName+'-decrement'}className='increment-decrement-btn' onClick={props.onDecrementClick}>
                    <i className='fa-solid fa-arrow-down'></i>
                </button>
                <p id={props.lengthName + "-length"}>{props.time}</p>
                <button id={props.lengthName+'-increment'} className='increment-decrement-btn' onClick={props.onIncrementClick}>
                    <i className='fa-solid fa-arrow-up'></i>
                </button>
            </div>
        </section>
    );
}