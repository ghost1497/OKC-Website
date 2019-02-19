import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import * as React from "react";
import AllOK from '../resources/photos/slideshow/AllOk.png';
import OkAtNj from '../resources/photos/slideshow/OkAtNJ.png';

const PHOTO_SET = [
    { src: 'http://drive.google.com/uc?export=view&id=1oTlD-h2ZFhDpqmpuoJlq-Gn7E-rNhD1I', width: 3, height: 2 },
    { src: 'http://drive.google.com/uc?export=view&id=13pO3IbCwlXZNb3M3erO9aGiHhoCTCRhl', width: 2.5, height: 2 },
    { src: 'http://drive.google.com/uc?export=view&id=1tXxluSH412dg8r_ijQXxmF6kyJiLGIWY', width: 4, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1OgfrdZ3KO_GtoDFOMmGTIfEz6CUuseM7', width: 3.5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1L898Lj9EOQ3AaeUXyEUAWBXiagjHbn5s', width: 4, height: 2.5 },
    { src: OkAtNj, width: 4.5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1FJhuVVjiow1Y1WSmb7_7s2wjQkYcpjr_', width: 6, height: 3 },
    { src: AllOK, width: 4, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1BRhzjZRMB5QsjuiuZjek5rF8VFYeRSEO', width: 4, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1Xe4GOd3fEXbE7xD-Nrosb9IVwrTgHLBJ', width: 3.5, height: 4.5 },
    { src: 'http://drive.google.com/uc?export=view&id=1i06HMThyJsf9jjWWTlb4-Z5YkYv_1531', width: 3, height: 4 },
    { src: 'http://drive.google.com/uc?export=view&id=1AYCacePBlZ5PJbFM3teXGPPE8xDOQpJE', width: 4, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1VamwZ2BNtmQSHv0lN_cIVc_htf7OStqC', width: 5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=11UkROElUWzNT2cY15HsXqW4_5C4M_MvS', width: 5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=18xskoAlVRe5XqZRAd6Kk5Ls0Dw9O-VbE', width: 4.5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1bXbdDlmzpW9RqPvLKKgiiDhVJccoFoK-', width: 5, height: 3 },
    { src: 'http://drive.google.com/uc?export=view&id=1CVS5E43lnrUOTu5XBaVfbmYQdjjO_eya', width: 5, height: 3.5 },
    { src: 'http://drive.google.com/uc?export=view&id=1DxYi_SgtYG1TPZBfcWJJbatunsHhUM-a', width: 5, height: 3 }
];

class Photo extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
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
                <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
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

