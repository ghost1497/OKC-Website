import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import * as React from "react";

// Photo imports
import ALLOK from '../resources/photos/slideshow/AllOk.png';
import OKATNJ from '../resources/photos/slideshow/OkAtNJ.png';

let STEPSHOW2009 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2F2009%20Step%20Show.jpg?alt=media&token=17294d2c-0cd8-4eb5-bfe7-db1e21a279f5';
let GRADUATION2010 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2F2010%20Graduation.jpg?alt=media&token=f1868354-a2ba-44ec-b651-ee2895a0821a';
let AVONWEDDING = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FAvon%20wedding%20pic%202.jpg?alt=media&token=02dcaa17-1e28-4ab2-8649-9c2d51ebbe4e';
let BOATPARTY2016 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FBoat%20Party%202016.jpg?alt=media&token=60cc9b57-2f7f-4ab5-becb-7e3d73e74a2a';
let BROTHERSOF010205 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FCopy%20of%20IMG_2993.JPG?alt=media&token=81ef5708-adb6-4bcd-bfc6-1eac493ee306';
let CHRISANDMSU = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FCopy%20of%20IMG_3024.JPG?alt=media&token=cd5d72ba-68b5-48f3-bf7e-0a0cf4d8cbf9';
let OKATSP18PRO = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FCopy%20of%20IMG_3038.JPG?alt=media&token=54ddd65c-1b2e-4ec8-a04f-378823de59c9';
let SP18LINEJACKETS = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FCopy%20of%20IMG_3039.JPG?alt=media&token=1c8c3a67-6bc9-4626-a30b-7a67c67ad206';
let SP16PROVINCE = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FCopy%20of%20IMG_4415.jpg?alt=media&token=7aaf80eb-0427-4a1b-ad18-0dd11cfa9b17';
let SP18PROVINCE = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FgahDamn.jpg?alt=media&token=f528d86c-b1fe-4b17-81d2-037ab819329b';
let JOVAN = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FjovanC.jpg?alt=media&token=b9c60277-cc86-47c6-bb26-964cf1504a29';
let CALVIN = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2F26bday%20part%202.jpg?alt=media&token=52264e2e-3700-47e3-8d19-4e3cc5aab40f';
let JUJUANDOTHERS = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FjujuAndOthers.jpg?alt=media&token=663c2129-6e2a-4d30-ab1a-14e10082765d';
let MORAVIANSIGN = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FkappaMoravian.jpg?alt=media&token=48d6ec08-6ed9-46eb-bfa4-7a64fc986bf4';
let KKBALL2008CED = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FKrimson%20and%20Kreme%20Ball%202008-2009.jpg?alt=media&token=3f3d4730-2ee7-481c-b51e-e469ba2dcf66';
let KKBALL2008BROS = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FKrimson%20and%20Kreme%20Ball%202008.jpg?alt=media&token=afedc9f4-1301-463c-9a9d-2d68f5dd12bb';
let MIAMI = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2Fmiami.jpg?alt=media&token=e57160b9-3f50-44f3-8370-b18a88d8132f';
let SP07PROBATE1 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FSP07-Probate%201.jpg?alt=media&token=df4b1cd9-7119-4c6e-a7d5-33206e698251';
let SP07PROBATE2 = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FSP07-Probate.jpg?alt=media&token=963a3daa-c80d-4170-9022-97919ad98774';
let SP12ANDSCOTT = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2Fsp12AndScott.jpg?alt=media&token=5763bb04-0b8b-47c6-bcfb-b59c591d977f';
let UZIANDDT = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FuziAndDT.jpg?alt=media&token=7044c1df-00c3-4177-8842-6ae82a242eed';
let JUJUANDCHRIS = 'https://firebasestorage.googleapis.com/v0/b/ok-website-228515.appspot.com/o/Gallery%20Photos%2FScreen%20Shot%202019-02-21%20at%207.04.43%20AM.png?alt=media&token=08412b74-ab64-4bb1-91b3-ef1a6f93b047';

const PHOTO_SET = [
    {src: MIAMI, width: 2.5, height: 2},
    {src: SP07PROBATE1, width: 4, height: 3},
    {src: SP12ANDSCOTT, width: 3.7, height: 5},
    {src: UZIANDDT, width: 4, height: 2.5},
    {src: OKATNJ, width: 4.5, height: 3},
    {src: ALLOK, width: 4, height: 3},
    {src: JOVAN, width: 3.5, height: 4},
    {src: CALVIN, width: 4, height: 4.5},
    {src: BROTHERSOF010205, width: 5.5, height: 4},
    {src: AVONWEDDING, width: 5, height: 3.5},
    {src: SP07PROBATE2, width: 5, height: 3.5},
    {src: CHRISANDMSU, width: 5, height: 3},
    {src: BOATPARTY2016, width: 5, height: 4},
    {src: JUJUANDOTHERS, width: 4, height: 5},
    {src: SP18PROVINCE, width: 5, height: 3.5},
    {src: KKBALL2008BROS, width: 5, height: 3.5},
    {src: MORAVIANSIGN, width: 4, height: 5},
    {src: KKBALL2008CED, width: 5, height: 3.5},
    {src: STEPSHOW2009, width: 5, height: 3.5},
    {src: OKATSP18PRO, width: 5, height: 3},
    {src: SP18LINEJACKETS, width: 5, height: 3},
    {src: SP16PROVINCE, width: 4.7, height: 3.5},
    {src: GRADUATION2010, width: 5, height: 3.5},
    {src: JUJUANDCHRIS, width: 5.2, height: 3.4},
];

class Photo extends React.Component {
    constructor() {
        super();
        this.state = {currentImage: 0};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return (
            <div>
                <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>
                <Lightbox images={PHOTO_SET}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}

export default Photo;

