import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue }) {
    const [counter, setCount] = useState(initialValue);

    function handleClick() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <div>
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
        </div>
    );
}
