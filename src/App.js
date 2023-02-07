import React from 'react';

function App() {
  const token = 'sO7zGyswnmlJSN5XZ342f_OX4cKzRMA1Pg02vMAny-s';

  const [items, setItems] = React.useState([]);
  const [searchVelue, setsearchVelue] = React.useState('');

  const searchSabmit = (searchVelue) => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchVelue}`,
      {
        headers: {
          authorization: `Client-ID ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
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
            <input
              value={searchVelue}
              onChange={(e) => setsearchVelue(e.target.value)}
            ></input>
            <button
              className="search__botton"
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                searchSabmit(searchVelue);
              }}
            >
              найти
            </button>
          </form>
        </section>
        <section>
          {items.map((item) => (
            <>
              <img
                width={200}
                height={200}
                key={item.urls.small}
                src={item.urls.small}
              />
            </>
          ))}
        </section>
        <footer>Stasik</footer>
      </main>
    </div>
  );
}

export default App;
