import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
/*import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies/>
    </div>
  )
}
*/

const App = () =>{
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
export default App;
