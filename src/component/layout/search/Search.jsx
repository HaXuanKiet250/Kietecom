import "./style.css";

export default function Search() {
    return (
        <div className="Search ">
            <div className="Navbar">
                <img className="hinh1" src="./assets/image/hinh1.png" />
                <img className="hinh2" src="./assets/image/hinh2.png" />
                <img className="hinh3" src="./assets/image/hinh3.png" />
                <img className="hinh4" src="./assets/image/hinh4.png" />
                <img className="hinh5" src="./assets/image/hinh5.png" />
            </div>
            <nav className="Beard">
                <p>Home &gt; Gala Apples</p>
            </nav>
            <div className="phan-than">
                <div className="phan-2">
                    <article className="Filter">
                        <div className="Departments">
                            <h1>Department</h1>
                            <label className="checkbox">
                                <input type="checkbox" />
                                Fruity &amp; Vegetables
                            </label>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" />
                                Pantry
                            </label>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" />
                                Organic Shop
                            </label>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" />
                                Health Snack
                            </label>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" />
                                Kitchen and FoodStuffs
                            </label>
                            <br />
                            <label className="checkbox">
                                <input type="checkbox" />
                                Frozen Food
                            </label>
                        </div>
                        <div className="Brands">
                            <h1>Brands</h1>
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Fruity &amp; Vegetables
                            </label>
                            <br />
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Pantry
                            </label>
                            <br />
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Organic Shop
                            </label>
                            <br />
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Health Snack
                            </label>
                            <br />
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Kitchen and FoodStuffs
                            </label>
                            <br />
                            <label className="checkbox2">
                                <input type="checkbox" />
                                Frozen Food
                            </label>
                        </div>
                        <div className="Nutrition">
                            <h1>Nutrition</h1>
                        </div>
                    </article>
                </div>
                <div className="phan-3">
                    <aside className="List">
                        <div className="result">
                            <a>Result from ‘’Apple’’ (34 Result)</a>
                        </div>
                        <img className="list" src="./assets/image/Card 1.jpg" />
                        <img className="list" src="./assets/image/Card 2.jpg" />
                        <img className="list" src="./assets/image/Card 3.jpg" />
                        <img className="list" src="./assets/image/Card 4.jpg" />
                        <img className="list" src="./assets/image/Card 1.jpg" />
                        <img className="list" src="./assets/image/Card 2.jpg" />
                        <img className="list" src="./assets/image/Card 3.jpg" />
                        <img className="list" src="./assets/image/Card 4.jpg" />
                        <img className="list" src="./assets/image/Card 1.jpg" />
                        <img className="list" src="./assets/image/Card 2.jpg" />
                        <img className="list" src="./assets/image/Card 3.jpg" />
                        <img className="list" src="./assets/image/Card 4.jpg" />
                        <img className="list1" src="./assets/image/Pagination.jpg" />
                    </aside>
                </div>
                <footer className="Footer">
                    <img className="list2" src="./assets/image/Footer.jpg" />
                </footer>
            </div>
        </div>
    );
}