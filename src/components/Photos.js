import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import * as React from "react";

// Photo imports
import ALLOK from '../resources/photos/slideshow/AllOk.png';
import OKATNJ from '../resources/photos/slideshow/OkAtNJ.png';

let STEPSHOW2009 = 'https://i.imgur.com/4PMLP5F.jpg';
let GRADUATION2010 = 'https://i.imgur.com/vq3SSwZ.jpg';
let AVONWEDDING = 'https://i.imgur.com/C5iX3wE.jpg';
let BOATPARTY2016 = 'https://i.imgur.com/EmiMh6m.jpg';
let BROTHERSOF010205 = 'https://i.imgur.com/3cA8CNW.jpg';
let CHRISANDMSU = 'https://i.imgur.com/ePRoDJP.jpg';
let OKATSP18PRO = 'https://i.imgur.com/wqZbczH.jpg';
let SP18LINEJACKETS = 'https://i.imgur.com/z7W2RZx.jpg';
let SP16PROVINCE = 'https://i.imgur.com/S44AgoR.jpg';
let SP18PROVINCE = 'https://i.imgur.com/8p93VMA.jpg';
let JOVAN = 'https://i.imgur.com/ZxjDjOj.jpg';
let CALVIN = 'https://i.imgur.com/clCg73u.jpg';
let JUJUANDOTHERS = 'https://i.imgur.com/n8j9hHz.jpg';
let MORAVIANSIGN = 'https://i.imgur.com/TzoZRfZ.jpg';
let KKBALL2008CED = 'https://i.imgur.com/PLCsm7O.jpg';
let KKBALL2008BROS = 'https://i.imgur.com/iH58ZT9.jpg';
let MIAMI = 'https://i.imgur.com/TuvAjxr.jpg';
let SP07PROBATE1 = 'https://i.imgur.com/8Lz3iS8.jpg';
let SP07PROBATE2 = 'https://i.imgur.com/SI7MdyO.jpg';
let SP12ANDSCOTT = 'https://i.imgur.com/MyZTaKo.jpg';
let UZIANDDT = 'https://i.imgur.com/63jjwut.jpg';
let JUJUANDCHRIS = 'https://i.imgur.com/tSH8w0j.png';

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

