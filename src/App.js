import React from 'react';
// import axios from 'axios';

function App() {
  const token = 'sO7zGyswnmlJSN5XZ342f_OX4cKzRMA1Pg02vMAny-s';

  React.useEffect(() => {
    fetch('https://api.unsplash.com/photos/random', {
      headers: {
        authorization: `Client-ID ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        // setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <header>
        <h1>Поиск фотографий</h1>
      </header>
      <main>
        <section>
          <form>
            <input></input>
          </form>
        </section>
        <section></section>
        <footer>Stasik</footer>
      </main>
    </div>
  );
}

export default App;
