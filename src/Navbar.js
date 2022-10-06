const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="#" className="navbar_logo">
          LOGO <i className="fab fa-typo3" />
        </a>
        <div className="menu_icon">
          <i className="fas fa-bars" />
        </div>
        <ul className="nav_menu">
          <li className="nav_menu_item">
            <a href="#" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_link">
              Services
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_link">
              Products
            </a>
          </li>
          <li className="nav_menu_item">
            <a href="#" className="nav_link_mobile">
              Sign up
            </a>
          </li>
        </ul>
        <button className="btn btn_second">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
