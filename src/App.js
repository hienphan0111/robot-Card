import logo from './logo.svg';
import CardList from './CardList';

function App() {
  return (
    <div>
      <div className="header">
        <h1>Robot</h1>
        <input type="searchbox" placeholder="type name of robot to search"></input>
      </div>
      <CardList />
    </div>
  );
}

export default App;
