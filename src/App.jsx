import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';
import React, { useState } from 'react';
import Button from './component/Button';
import Card from './component/Card';
import Counter from './component/Counter';
import PlaceContentCenter from './component/PlaceContentCenter';

function App() {
    const [counter, setCount] = useState(0);

    return (
        <PlaceContentCenter>
            <Counter setCount={setCount} counter={counter} />
        </PlaceContentCenter>
    );
}

export default App;
