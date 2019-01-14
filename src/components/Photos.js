import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import * as React from "react";
import AllOK from '../resources/photos/slideshow/AllOk.png';
import ChrisTrack from '../resources/photos/slideshow/ChrisTrack.png';
import OkAtNj from '../resources/photos/slideshow/OkAtNJ.png';

const PHOTO_SET = [
    { src: ChrisTrack, width: 4, height: 3 },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
    { src: OkAtNj, width: 4, height: 3 },
    { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
    { src: AllOK, width: 4, height: 3 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
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

