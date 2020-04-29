import React from 'react';
import Link from 'next/link'
import './PhysicalTest.css';
import Header from '../../../comps/Header'
import MenuButton from '../../../comps/Menu/MenuButton'
import Ethical from '../../../comps/Test/Ethical'
import Button from '../../../comps/Button'

const EthicalTest = () => <div>
    <div className="bg">
    <Header text="Test" fontSize="34px" />
    <a id="button"><MenuButton /></a>
    <Ethical />
    <Button text="Continue"/>
    </div>
</div>

export default EthicalTest 