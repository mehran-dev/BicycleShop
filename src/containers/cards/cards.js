import React, { Component } from 'react';
//import {} from '../../assets/cards';

import css from './cards.module.css';
import Card from '../../components/card/card';
import b1 from '../../assets/cards/1.jpg';
import b2 from '../../assets/cards/2.jpg';
import b3 from '../../assets/cards/3.jpg';
import b4 from '../../assets/cards/4.jpg';
import b5 from '../../assets/cards/5.jpg';
import b6 from '../../assets/cards/6.jpg';
import b7 from '../../assets/cards/7.jpg';
import b8 from '../../assets/cards/8.jpg';
import b9 from '../../assets/cards/9.jpg';
import b10 from '../../assets/cards/10.jpg';

/* 

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
        console.log('[import All] executing...', r);
        return 0;
    });
    return images;
}
const imgs = importAll(require.context('../../assets/cards', false, /\.(png|jpe?g)$/));
 */

 
export default class cards extends Component {











    state = {
        prod: [
            { src: b1, alt: "new bike", disc: "دوچر خه لاستیک پهن  " },
            { src: b2, alt: "new bike", disc: "دوچر خه اسپرت   " },
            { src: b3, alt: "new bike", disc: " فنلاندی دوچر خه   " },
            { src: b4, alt: "new bike", disc: "دوچر خه تنه آپاچی   " },
            { src: b5, alt: "new bike", disc: "دو دوچر خه  " },
            { src: b6, alt: "new bike", disc: "دوچر خه دو فنری " },
            { src: b7, alt: "new bike", disc: "دوچر خه دو کمک " },
            { src: b8, alt: "new bike", disc: "دوچر خه تنه آلمینیوم " },
            { src: b9, alt: "new bike", disc: "دوچر خه دو فنردار " },
            { src: b10, alt: "new bike", disc: "دوچر خه دو دیسک " },

        ]
    }






    render() {


        return (
            <div className={css.container}>
                {this.state.prod.map(p => {

                    return (
                        <Card src={p.src} alt={p.alt} key={p.src} desc={p.disc} />
                    )
                })
                }
            </div>
        )
    }
}
