import React from 'react';
import Physical from '../comps/Test/Physical';
import Ethical from '../comps/Test/Ethical';
import IQ from '../comps/Test/IQ'

export default {
    title:"Test",
    component:Physical
};

export const PhysicalTest = () => <Physical />

export const EthicalTest = () => <Ethical />

export const IQTest = () => <IQ />