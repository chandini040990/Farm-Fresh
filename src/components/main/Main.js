import "./Main.css"


function Main() {
    return (
        <>
            <div className="container">

                <img src="images/bg1.jpg"
                    className="object-fit-fill border rounded" alt="Bgimg" />


                <section>
                    <nav className="navbar-fruits">
                        <a className="navbar-brand" href="#fruits">Fruits</a>
                    </nav>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-10">
                                    {/* <img src="images/orange.jpeg" style={{ width: '200px' }} className="card-img-top" alt="orange" /> */}
                                    <img src="images/orange.jpeg" className="card-img-top" alt="orange" />
                                    <div className="card-body">
                                        <h5 className="card-title">Orange</h5>
                                        <p className="card-text">Rs.110/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity </small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    {/* <img src="images/banana.jpeg" style={{ width: '300px' }} className="card-img-top" alt="banana" /> */}
                                    <img src="images/banana.jpeg"  className="card-img-top" alt="banana" />
                                    <div className="card-body">
                                        <h5 className="card-title">Banana</h5>
                                        <p className="card-text">Rs.150/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    {/* <img src="images/grapes.jpeg" style={{ width: '245px' }} className="card-img-top" alt="grapes" /> */}
                                    <img src="images/grapes.jpeg" className="card-img-top" alt="grapes" />
                                    <div className="card-body">
                                        <h5 className="card-title">Grapes</h5>
                                        <p className="card-text">Rs.100/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    {/* <img src="images/pomogranate.jpeg" style={{ width: '250px' }} className="card-img-top" alt="pomo" /> */}
                                    <img src="images/pomogranate.jpeg" className="card-img-top" alt="pomo" />
                                    <div className="card-body">
                                        <h5 className="card-title">Pomogranate</h5>
                                        <p className="card-text">Rs.80/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/strawberry.jpeg" style={{ width: '200px' }} className="card-img-top" alt="berry" />
                                    <div className="card-body">
                                        <h5 className="card-title">strawberry</h5>
                                        <p className="card-text">Rs.180/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div> 
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/apple.jpeg" style={{ width: '200px' }} className="card-img-top" alt="apple" /> 
                                    <div className="card-body">
                                        <h5 className="card-title">Apple</h5>
                                        <p className="card-text">Rs.200/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                 </section>

                 <section> 
                    <nav className="navbar-vegetables">
                        <a className="navbar-brand" href="#vegetables">Vegetables</a>
                    </nav>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/onion.jpeg" style={{ width: '200px' }} className="card-img-top" alt="onion" />
                                    <div className="card-body">
                                        <h5 className="card-title">Onion</h5>
                                        <p className="card-text">Rs.110/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/tomato.jpeg" style={{ width: '270px' }} className="card-img-top" alt="tomato" />
                                    <div className="card-body">
                                        <h5 className="card-title">Tomato</h5>
                                        <p className="card-text">Rs.150/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/beans.jpeg" style={{ width: '285px' }} className="card-img-top" alt="beans" />
                                    <div className="card-body">
                                        <h5 className="card-title">Beans</h5>
                                        <p className="card-text">Rs.110/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/cauliflower.jpeg" style={{ width: '200px' }} className="card-img-top" alt="cauli" />
                                    <div className="card-body">
                                        <h5 className="card-title">Cauliflower</h5>
                                        <p className="card-text">Rs.130/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/brinjal.jpeg" style={{ width: '200px' }} className="card-img-top" alt="brinjal" />
                                    <div className="card-body">
                                        <h5 className="card-title">Brinjal</h5>
                                        <p className="card-text">Rs.150/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-10">
                                    <img src="images/carrot.jpeg" style={{ width: '200px' }} className="card-img-top" alt="carrot" />
                                    <div className="card-body">
                                        <h5 className="card-title">Carrots</h5>
                                        <p className="card-text">Rs.200/kg</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Quantity</small>
                                        <img src="images/cart1.png" style={{ width: '30px' }} alt="cart1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>

            <section>
                <nav className="navbar-about">
                    <a className="navbar-brand" href="#aboutus">About Us</a>
                </nav>
                <div className="container-about">
                    <img src="images/aboutus1.jpeg" alt="aboutus" style={{ width: '100%' }} />
                    <div className="text-block">
                        <h4>About Us</h4>
                        <p>Most people know that fruits and vegetables are good for us. Both fruits and vegetables are high in dietary fibre as well as vitamins and minerals,
                            and other bioactive plant compounds, including many with antioxidant properties such as polyphenols or beta-carotene.
                            Fruits and vegetables contain, for example, vitamin A, B5, folate, C, E & K and are a rich source of calcium, iron, magnesium, manganese and potassium.
                            The amounts and types of nutrients vary between different types of fruits and vegetables. Fruits and vegetables are also high in water, ranging from 75-90% of their weight.
                            This fact explains their low energy content.Fruits and vegetables usually contain traces of fats and protein,
                            with a few exceptions such as avocados, which have a high fat content. </p>
                    </div>
                </div>
            </section>

            <section>
                <nav className="navbar-offer">
                    <a className="navbar-brand" href="#offer">Offers</a>
                </nav>
                <div className="card1" style={{ width: '70%' }}>
                    <img src="https://as1.ftcdn.net/v2/jpg/05/06/03/78/1000_F_506037896_Ey88cFvfz5wgzlbT2zpMnFnL4zEgHaEA.jpg" className="card-img-top" alt="coupon" />
                    <div className="card1-body">
                        <p className="card1-text">Copy the coupon code and apply during payment.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main