import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Titlebar from './Components/Titlebar';
import Vdbar from './Components/Vdbar';
import Achref from './Components/Achref';
function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Titlebar/>
    <Vdbar/>
    <Cards/>
    <Achref/>
    </div>
  );
}

export default App;
