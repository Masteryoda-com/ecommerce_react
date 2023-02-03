import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList/>
      
    </div>
  );
}

export default App;

