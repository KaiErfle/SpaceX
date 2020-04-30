import React from 'react';
import Link from 'next/link'
import './IQTest.css';
import Header from '../../../comps/Header'
import MenuButton from '../../../comps/Menu/MenuButton'
import IQ from '../../../comps/Test/IQ'
import Button from '../../../comps/Button'

const IQTest = () => <div>
    <div className="bg">
    <Header text="Test" fontSize="34px" />
    <a id="button"><MenuButton /></a>
    <IQ />
    <Button text="Continue"/>
    </div>
</div>

export default IQTest 