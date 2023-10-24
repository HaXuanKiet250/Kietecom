import "./hm.css"
function Homes() {
    return (
        <div>
            <div>
                <div className="Navbar">
                    <div className="Menu">
                        <p className="rect1" />
                        <p className="rect2" />
                        <p className="rect3" />
                    </div>
                    <div className="logo">
                        <img src="/src/assets/image/logo2.jpg" alt="" className="Logo" />
                    </div>
                    <div className="srcbar">
                        <img className="icon" src="/src/assets/image/src.jpg" />
                        <input
                            className="icon1"
                            type="text"
                            placeholder="Search food ..."
                        />
                    </div>
                    <div className="sign">
                        <img className="Signin" src="/src/assets/image/sign.jpg" />
                        <p className="text">Sign In</p>
                    </div>
                    <div className="wishlist">
                        <img className="Wishlist" src="/src/assets/image/wish.jpg" />
                        <p className="text1">Wishlist</p>
                    </div>
                    <div className="cart">
                        <img className="Cart" src="/src/assets/image/cart.jpg" />
                        <p className="text2">$0.00</p>
                    </div>
                </div>
                <p className="loo">Looking for Good Qualiy Ingredients</p>
                <p className="chs">Checkout</p>
                <button className="BttOrder" type="reset">
                    Order Online
                </button>
                <div className="footer3">
                    <div className="Groud477">
                        <img src="/src/assets/image/logo2.jpg" alt="" className="Logo1" />
                        <img className="a1a" src="/src/assets/image/dc.jpg"></img>
                        <p className="ph1">221 B Santa Monica, Los Angeles</p>
                        <img className="a2a" src="/src/assets/image/te.jpg"></img>
                        <p className="ph2">(+1) 923 2341 22</p>
                        <img className="a3a" src="/src/assets/image/gm.jpg"></img>
                        <p className="ph3">Contact@tanahairstudio.com</p>
                        <p className="gg">@2020 TanahAir Studio. All rights reserved.</p>
                    </div>
                    <div className="Category">
                        <p className="c1c">Categories</p>
                        <p className="c0c">Dairy & Milk</p>
                        <p className="c0c">Fresh Produce</p>
                        <p className="c0c">Meat</p>
                        <p className="c0c">Snacks</p>
                        <p className="c0c">Frozen</p>
                        <p className="c0c">Vegetables</p>
                    </div>
                    <div className="Company">
                        <p className="b1b">Company</p>
                        <p className="b0b">About Us</p>
                        <p className="b0b">Contact Us</p>
                        <p className="b0b">Privacy & Poilicy</p>
                        <p className="b0b">Payment Method</p>
                    </div>
                    <div className="join">
                        <p className="Join">Join Our Newsletter</p>
                        <p className="em">Your Email</p>
                        <input className="gml" type="text" placeholder="Enter Your Email" />
                        <button className="re1" type="reset">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Homes;
