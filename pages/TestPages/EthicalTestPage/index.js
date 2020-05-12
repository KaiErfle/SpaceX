import React from 'react';
import Link from 'next/link'
import './EthicalTest.css';
import Header from '../../../comps/Header'
import MenuButton from '../../../comps/Menu/MenuButton'
import Ethical from '../../../comps/Test/Ethical'
import Button from '../../../comps/Button'
import Router from 'next/router'

const EthicalTest = () => <div>
    <div className="ebg">
    <Header text="Test" fontSize="34px" />
    <a id="ebutton"><MenuButton /></a>
    <Ethical />
    <Button text="continue" onClick={()=>{ Router.push("/TestPages/IQTestPage")}}/>
    </div>
</div>

export default EthicalTest 