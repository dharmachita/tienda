import './App.css';
import './styles/main.css';
import NavBar from './global/NavBar';
import palette from './assets/colors.json';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  const root = document.documentElement;
  palette.map(function(colors){
    return root.style.setProperty(`--${colors.name}`,colors.value);
  });
  
  return (
    <>
      <header className="shadow"> 
        <NavBar /> 
      </header>
      <main className="main-content shadow">
        {/*<ItemListContainer />*/}
        <ItemDetailContainer prodId="1"/>
      </main>
    </>
  );
}

export default App;



