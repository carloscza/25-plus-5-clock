import React from 'react';
import './Clock.scss';

export default function Title()
{
    return (
        <section className='title-heading-container' aria-labelledby='application-title'>
            <h1 className='title' id="title">25 + 5 Clock</h1>
        </section>
    );
}