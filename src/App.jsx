import './App.css';
import './styles/main.css';
import NavBar from './global/NavBar';
import palette from './assets/colors.json';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const root = document.documentElement;
  palette.map(function(colors){
    return root.style.setProperty(`--${colors.name}`,colors.value);
  });
  
  return (
    <>
      <header className="navbar"> 
          <NavBar /> 
      </header>
      <main className="main-content">
        <ItemListContainer/>
      </main>
    </>
  );
}

export default App;



