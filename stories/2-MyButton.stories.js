import React from 'react';
import Button from '../comps/Button';

export default {
    title:"My Buttons",
    component:Button
};

// export const MyButtons = () => <Button />

export const PageWithButtons = () => <div>
    <Button
    text="Continue"
    />
    
    <Button
    text="Take the test"
    />

<Button
    text="Finish"
    />
</div>
