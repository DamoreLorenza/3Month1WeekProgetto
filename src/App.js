
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import NavBarra from './components/nav';
import Section from './components/section';
import Potter from './components/potter';
import StarWars from './components/Millenium';
import Hunger from './components/HungerGames';
import Footer from './components/footer';
import SpiderMan from './components/provaCarosello';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <NavBarra/>
      </header>
      <Section/>
      <SpiderMan/>
      <Potter/>
      <StarWars/>
      <Hunger/>
      <Footer/>
    </div>
  );
}

export default App;


// key: ca6b81c6