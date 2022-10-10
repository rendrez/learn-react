function Card({ children }) {
    return <div className={'shadow overflow-hidden rounded bg-white'}>{children}</div>;
}

function Title({ children }) {
    return <h1 className='text-2xl p-4 border-b'>{children}</h1>;
}

function Body({ children }) {
    return <p className='leading-relaxed p-4'>{children}</p>;
}

function Footer({ children }) {
    return <div className='bg-slate-50 p-4'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
