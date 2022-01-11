import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App" style={{color: 'white'}}>
      <h1>Navbar</h1>
      <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      <Outlet />
    </div>
  );
}

export default App;
