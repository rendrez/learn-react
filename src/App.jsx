import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';
import Button from './component/Button';
import Card from './component/Card';

function App() {
    const type = 'submit';
    const onClick = () => console.log('login');
    return (
        <div className='bg-slate-100 grid place-content-center min-h-screen'>
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Title>Hello World</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui fugiat veritatis pariatur esse numquam et odit natus
                        corporis officiis, necessitatibus, asperiores delectus perspiciatis eos praesentium nihil error nesciunt soluta.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
