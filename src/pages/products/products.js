import React, { Component } from 'react'
import css from './products.module.css';
import Cards from '../../containers/cards/cards';






export default class products extends Component {
    state = {

    }
    render() {
        return (
            <div className={css.container}>
                <Cards />
            </div>
        )
    }
}
