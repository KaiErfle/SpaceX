import React from 'react';
import './gallery.css';
import Header from '../../comps/Header';
import MenuButton from '../../comps/Menu/MenuButton';
import img1 from '../../images/img 1.jpg'
import img2 from '../../images/img 2.jpg'
import img3 from '../../images/img 3.jpg'
import img4 from '../../images/img 4.jpg'
import img5 from '../../images/img 5.jpg'
import img6 from '../../images/img 6.jpg'

const Gallery = () => <div>
    <div className="bg">
        <a id="button"><MenuButton /></a>
        <a id="header"><Header text="Gallery" fontSize="34px" /></a>
        <div className="column" id="left">
            <div className="images"><img src={img1} alt='img' id="img1" /></div>
            <div className="images"><img src={img6} alt='img' id="img6" /></div>
            <div className="images"><img src={img4} alt='img' id="img4" /></div>
        </div>
        <div className="column" id="right">    
            <div className="images"><img src={img3} alt='img' id="img3" /></div>
            <div className="images"><img src={img5} alt='img' id="img5" /></div>
            <div className="images"><img src={img2} alt='img' id="img2" /></div>
        </div>
    </div>
</div>

export default Gallery
