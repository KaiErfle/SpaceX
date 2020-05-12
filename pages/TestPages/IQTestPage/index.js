import React from 'react';
import Link from 'next/link'
import './IQTest.css';
import Header from '../../../comps/Header'
import MenuButton from '../../../comps/Menu/MenuButton'
import IQ from '../../../comps/Test/IQ'
import Button from '../../../comps/Button'
import Router from 'next/router'

const IQTest = () => <div>
    <div className="IQbg">
    <Header text="Test" fontSize="34px" />
    <a id="IQbutton"><MenuButton /></a>
    <IQ />
    <Button text="continue" onClick={()=>{ Router.push("/CongratsPage")}}/>
    </div>
</div>

export default IQTest 