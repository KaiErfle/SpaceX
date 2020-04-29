import React from 'react';
import './gallery.css';
import Header from '../../comps/Header';
import MenuButton from '../../comps/Menu/MenuButton';

const Gallery = () => <div>
    <div className="bg">
        <a id="button"><MenuButton /></a>
        <Header text="Gallery" fontSize="34px" />
        <div className="images"></div>
        <div className="images"></div>
        <div className="images"></div>
        <div className="images"></div>
        <div className="images"></div>
    </div>
</div>

export default Gallery
