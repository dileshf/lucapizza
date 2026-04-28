
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">My website</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;