function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="header_titl">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li className="header_list">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
