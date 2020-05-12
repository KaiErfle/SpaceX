import React from 'react';
import Link from 'next/link'
import './PhysicalTest.css';
import Header from '../../../comps/Header'
import MenuButton from '../../../comps/Menu/MenuButton'
import Physical from '../../../comps/Test/Physical'
import Button from '../../../comps/Button'
import Router from 'next/router'

const PhysicalTest = () => <div>
    <div className="Pbg">
    <Header text="Test" fontSize="34px" />
    <a id="Pbutton"><MenuButton /></a> 
    <Physical />
    <Button text="continue" onClick={()=>{ Router.push("/TestPages/EthicalTestPage")}}/>
    {/* <Link href="/TestPages/EthicalTestPage"> <a>test</a> </Link> */}
    </div>
</div>



export default PhysicalTest 