import Link from 'next/link';
import Router from 'next/router';
import './app.css';
import Header from '../comps/Header';
import Logo from '../images/SpaceX logo.png';
import MenuButton from '../comps/Menu/MenuButton'
import Button from '../comps/Button';


// import {data, ChangeData} from './data';

const stars = require('../images/stars.gif');

const Index = () => <div className="stars">
    <img src={stars} />
    <div  className="HomePage">
    <Header text="Home" fontSize="40px" />
    <a id="menu"><MenuButton /></a>
    <header>
        <img src={Logo} alt='logo' id="logo" />
    </header>
    <Link href="/InfoPage"><button>Info about Mars</button></Link>
    <Link href="/LivingPage"><button>How to live on Mars</button></Link>
    <Link href="/AboutPage"><button>About SpaceX</button></Link>
    <Link href="/GalleryPage"><button>Gallery</button></Link>
    <Link href="/WelcomePage"><Button text="Take the test " /></Link>
</div>
</div>

export default Index