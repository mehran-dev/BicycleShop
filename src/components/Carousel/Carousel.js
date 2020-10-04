import React, { Component } from 'react'
import css from './Carousel.module.css';


import imageA from '../../assets/carousel/1.jpg';
import imageB from '../../assets/carousel/2.jpg';
import imageC from '../../assets/carousel/3.jpg';
import imageD from '../../assets/carousel/4.jpg';
import imageE from '../../assets/carousel/5.jpg';
import imageF from '../../assets/carousel/6.jpg';
import imageG from '../../assets/carousel/7.jpg';
import imageH from '../../assets/carousel/8.jpg';
import imageI from '../../assets/carousel/9.jpg';
import imageJ from '../../assets/carousel/10.jpg';





export default class Carousel extends Component {

    state = {
        curPicture: imageA,
        curPictureIndex: 1,
        nextPicture: imageB,
        nextPicture2: imageC,
        prevPicture: imageD,
        prevPicture2: imageE,

        slideShow: ''
    }


    componentDidMount() {

        let slideShow = setInterval(() => {



            this.imageChangHandler(this.state.curPictureIndex + 1)
        }, 6000);



        this.setState({
            slideShow: slideShow
        })
    };
    componentWillUnmount() {
        clearInterval(this.state.slideShow)
    }

    imageChangHandler = (newPicIndex) => {

        let A0, A1, A2, A3, A4;



        if (newPicIndex >= 13) {
            newPicIndex = 1
        }

        if (newPicIndex <= -2) {
            newPicIndex = 10
        }


        console.log("newPictureIndex:", newPicIndex);

        //   if (newPicIndex <= 8 && newPicIndex >= 3) {

        A0 = newPicIndex - 2
        A1 = newPicIndex - 1
        A2 = newPicIndex
        A3 = newPicIndex + 1
        A4 = newPicIndex + 2

        // } else {

        //}



        let newImages = [];
        newImages = [A0, A1, A2, A3, A4];
        console.log(newImages);
        newImages.map((img, i) => {
            switch (img) {


                case -2:

                    //-2==8
                    newImages[i] = imageH
                    break;
                case -1:
                    //-1==9
                    newImages[i] = imageI
                    break;
                case 0:
                    //0==10
                    newImages[i] = imageJ
                    break;
                case 1:
                    newImages[i] = imageA
                    break;
                case 2:
                    newImages[i] = imageB
                    break;
                case 3:
                    newImages[i] = imageC
                    break;
                case 4:
                    newImages[i] = imageD
                    break;
                case 5:
                    newImages[i] = imageE
                    break;
                case 6:
                    newImages[i] = imageF
                    break;
                case 7:
                    newImages[i] = imageG
                    break;
                case 8:
                    newImages[i] = imageH
                    break;
                case 9:
                    newImages[i] = imageI
                    break;
                case 10:
                    newImages[i] = imageJ
                    break;
                case 11:
                    //11====1
                    newImages[i] = imageA;
                    break;
                case 12:
                    //12====2
                    newImages[i] = imageB;
                    break;
                case 13:
                    //13====3
                    newImages[i] = imageC;
                    break;
                case 14:
                    //14====4
                    newImages[i] = imageD;
                    break;

                default:
                    break;
            }

            return 0;
        })

        console.log(newImages);


        this.setState({
            curPicture: newImages[2],
            curPictureIndex: newPicIndex,
            nextPicture: newImages[3],
            nextPicture2: newImages[4],

            prevPicture: newImages[1],
            prevPicture2: newImages[0],
        })
        /*      setTimeout(() => {
                 console.log(
                     this.state
                 );
             }, 2000); */

    }


    render() {
        return (
            <div className={css.CarouselContainer} style={{
                backgroundImage: `url(${this.state.curPicture})`

            }} >

                <div className={css.goLeft}
                    onClick={() => this.imageChangHandler(this.state.curPictureIndex - 1)}
                >
                    <div className={css.signKeeper}> &gt; </div></div>
                <div className={css.bottomView}>
                    <div style={{
                        backgroundImage: `url(${this.state.prevPicture2})`
                    }}
                        onClick={() => this.imageChangHandler(this.state.curPictureIndex - 2)}

                    ></div>
                    <div style={{
                        backgroundImage: `url(${this.state.prevPicture})`

                    }}
                        onClick={() => this.imageChangHandler(this.state.curPictureIndex - 1)}

                    ></div>
                    <div style={{
                        backgroundImage: `url(${this.state.curPicture})`

                    }}
                        className={css.middle}
                        onClick={() => this.imageChangHandler(this.state.curPictureIndex)}

                    ></div>
                    <div style={{
                        backgroundImage: `url(${this.state.nextPicture})`

                    }}
                        onClick={() => this.imageChangHandler(this.state.curPictureIndex + 1)}

                    ></div>
                    <div style={{
                        backgroundImage: `url(${this.state.nextPicture2})`

                    }}

                        onClick={() => this.imageChangHandler(this.state.curPictureIndex + 2)}

                    ></div>


                </div>
                <div
                    className={css.goRight}
                    onClick={() => this.imageChangHandler(this.state.curPictureIndex + 1)}

                >
                    <div className={css.signKeeper}>&lt;  </div> </div>

            </div>
        )
    }
}
