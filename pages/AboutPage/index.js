import React from 'react';
import './about.css';
import Header from '../../comps/Header';
import Info from '../../comps/Info';
import MenuButton from '../../comps/Menu/MenuButton'
import img7 from '../../images/img 7.jpg'


const Home = () => <div>
    <div className="abg">
        <a id="button"><MenuButton /></a>
        <Header text="About SpaceX" fontSize="34px" />
        <div id="acontainer">
        <img src={img7} />
        <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets. <br /> <br />
        As one of the world’s fastest growing providers of launch services, SpaceX has secured over 100 missions to its manifest, representing over $12 billion on contract. These include commercial satellite launches as well as US government missions. SpaceX’s Dragon spacecraft is flying numerous cargo resupply missions to the space station under a series of Commercial Resupply Services contracts. Dragon was designed from the outset to carry humans to space and will soon fly astronauts under NASA’s Commercial Crew Program.</p>
</div>
</div>
</div>

export default Home