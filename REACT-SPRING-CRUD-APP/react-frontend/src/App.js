import logo from './logo.svg';
import './App.css';
import ListMoviesComponents from './components/ListMoviesComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>    
      <div className="container">
       
        <ListMoviesComponents/>     
      </div>
        <FooterComponent/>
    </div>
    
  );

  
}


export default App;

