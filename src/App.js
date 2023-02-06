import React from 'react';
// import axios from 'axios';

function App() {
  const token = 'sO7zGyswnmlJSN5XZ342f_OX4cKzRMA1Pg02vMAny-s';

  let searchVelue

  const [items, setItems] = React.useState([]);

  // const form = document.querySelector('.search__form');
  // console.log(form);
  // form.addEventListener('submit',(evt)=>{
  //   evt.preventDefault()
  //   searchSabmit()
  // })

  const searchSabmit = (searchVelue) => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchVelue}`, {
      headers: {
        authorization: `Client-ID ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        console.log(res);
        setItems(res.results);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?&count=10', {
      headers: {
        authorization: `Client-ID ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        console.log(res);
        setItems(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="wrapper">
      <header>
        <h1>Поиск фотографий</h1>
      </header>
      <main>
        <section>
          <form className="search__form">
            <input value={searchVelue}></input>
            <button
              className="search__botton"
              type="submit"
              onClick={()=> searchSabmit(searchVelue)}
            >
              найти
            </button>
          </form>
        </section>
        <section>
          {items.map((item) => (
            <>
              <img width={200} height={200} src={item.urls.small} />
            </>
          ))}
        </section>
        <footer>Stasik</footer>
      </main>
    </div>
  );
}

export default App;
