import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';
import React, { useState } from 'react';
import Button from './component/Button';
import Card from './component/Card';
import Counter from './component/Counter';
import PlaceContentCenter from './component/PlaceContentCenter';

function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={20} />
        </PlaceContentCenter>
    );
}

export default App;
