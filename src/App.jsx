import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';
import React, { useState } from 'react';
import Button from './component/Button';
import Card from './component/Card';
import PlaceContentCenter from './component/PlaceContentCenter';

function App() {
    const [counter, setCount] = useState(0);

    function handleClick() {
        const nextCount = counter + 1;
        setCount((x) => x + 1);
        console.log({ counter, nextCount });
    }
    return (
        <PlaceContentCenter>
            <h1 className='text-5xl font-bold'>{counter}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                    }}>
                    +2
                </Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
