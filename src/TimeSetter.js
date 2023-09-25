import React from 'react';
import './Clock.scss';
import '@fortawesome/fontawesome-free/css/all.css';

export default function TimeSetter(props)
{
    return ( 
        <section className='label-and-btns-container'>
            <label id={props.timerName + '-label'}>
                {props.timerName} Length
            </label>
            <div className='timer-setter-btns'>
                <button  value="999"className='increment-decrement-btn' onClick={props.onDecrementClick}>
                    <i id={props.buttonId + "Decrement"} className='fa-solid fa-arrow-down' ></i>
                </button>
                <p>{props.time}</p>
                <button name={props.timerName}className='increment-decrement-btn'>
                    <i id={props.buttonId + "Increment"} className='fa-solid fa-arrow-up' onClick={props.onIncrementClick}></i>
                </button>
            </div>
        </section>
    );
}