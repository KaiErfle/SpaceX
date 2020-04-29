import React from 'react';
import Link from 'next/link'
import './test.css';
import Header from '../../comps/Header'
import MenuButton from '../../comps/Menu/MenuButton'
import Physical from '../../comps/Test/Physical'

const Test = () => <div>
    <div className="bg">
    <Header text="Test" fontSize="34px" />
    <a id="button"><MenuButton /></a>
    <Physical />
    </div>
</div>

export default Test 