import './Search.css';
const Search = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>Book Shop</h1>
            </div>

            <div class="search-container">
                <form>
                    <input className="search-box" type="text" placeholder="Search.." name="search" />
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>

            <div className="options">
                <div className="links">
                    <p className="link">Sign in</p>
                    <p>|</p>
                    <p className="link">Sign up</p>
                    <p>|</p>
                    <p className="link">Help</p>
                </div>
            </div>

        </div>
    );
}

export default Search;