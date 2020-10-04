import React, { Component } from 'react'
import css from './home.module.css';
import Carousel from '../../components/Carousel/Carousel';


export default class home extends Component {
    render() {
        return (
            <div className={css.container}>
                <Carousel />

                <br />
                <br />
                <br />
                <br />
                مقالات به صورت اسکرولی مقالات بیان و رد بشن برن
            </div>
        )
    }
}
