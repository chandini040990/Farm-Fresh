import "./Footer.css"

function Footer() {
    return (
        <>

            <div className="container-fluid">
                <footer className="py-5">
                    <div className="row">

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-body-secondary">Home</a></li>
                                <li className="nav-item mb-2"><a href="#menu" className="nav-link p-0 text-body-secondary">Menu</a></li>
                                <li className="nav-item mb-2"><a href="#contacts" className="nav-link p-0 text-body-secondary">Contacts</a></li>
                                <li className="nav-item mb-2"><a href="#aboutus" className="nav-link p-0 text-body-secondary">About Us</a></li>
                                <li className="nav-item mb-2"><a href="#offers" className="nav-link p-0 text-body-secondary">Offers</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Contacts</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#address" className="nav-link p-0 text-body-secondary">Address: Anna Nagar,Chennai</a></li>
                                <li className="nav-item mb-2"><a href="#phone" className="nav-link p-0 text-body-secondary">Phone: 9943526111</a></li>
                                <li className="nav-item mb-2"><a href="#email" className="nav-link p-0 text-body-secondary">Email : farmfresh@gnail.com</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><img style={{ width: '40px' }} src="/images/twitter.png" alt="Twitter" /></li>
                            <li className="ms-3"><img style={{ width: '40px' }} src="/images/instagram.png" alt="instagram" /></li>
                            <li className="ms-3"><img style={{ width: '40px' }} src="/images/facebook.png" alt="facebook" /></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer