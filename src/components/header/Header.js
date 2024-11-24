import "./Header.css"
function Header() {
    return (
        <>

            <header className="header" aria-current="page">FARM FRESH <span><img src="/images/icon1.png" style={{ paddingLeft: '20px', width: '100px', height: '70px' }} alt="icon" /></span>

            </header>
            <nav className="navbar">
                {/* <div className="container-fluid"> */}
                <a className="navbar-brand" href="#menu">Menu</a>
                <a className="navbar-brand" href="#contacts">Contacts</a>
                <a className="navbar-brand" href="#aboutus">About Us</a>
                <a className="navbar-brand" href="#offers">Offers</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <img src="/images/cart.png" style={{ width: '40px' }} alt="cart" />
                {/* </div> */}
            </nav>
        </>
    )
}

export default Header