function Card() {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/img/unlike.svg" alt="unlike" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card__oder">
        <div className="card__price">
          <p>Цена:</p>
          <b>12 999руб.</b>
        </div>
        <button className="card__button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
