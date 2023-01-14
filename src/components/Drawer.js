function Drawer() {
  return (
    <div /*style={{ display: 'none' }}*/ className="overlay">
    <div className="drawer">
      <h2>
        Карзина <img src="/img/btn-remove.svg" alt="remove" />
      </h2>
      <div className="items">
        <div className="cartIten">
          <div
            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            className="cartIten__img"
          ></div>
          <div className="cartIten__price">
            <p>Мужские Кроссовки Nike Air Max 270 </p>
            <b>12 999руб.</b>
          </div>
          <img className="remove-btn" src="/img/btn-remove.svg" alt="remove" />
        </div>
        <div className="cartIten">
          <div
            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            className="cartIten__img"
          ></div>
          <div className="cartIten__price">
            <p>Мужские Кроссовки Nike Air Max 270 </p>
            <b>12 999руб.</b>
          </div>
          <img className="remove-btn" src="/img/btn-remove.svg" alt="remove" />
        </div>
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>И того:</span>
            <div></div>
            <b>21 498руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          Oформить заказ <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
    </div>
  );
}

export default Drawer;
