import './navbar.css'

function Navbar(){
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Notation Guru</div>
            <a className='navbar__item' href={"https://gitter.im/notation-converter/community"}>Help</a>   
        </header>
    );
}

export default Navbar