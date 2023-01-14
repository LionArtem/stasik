import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="titl">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
