import logo from './logo.svg';
import './App.css';
import Soma from './Soma';


function App() {
  return (
    <div className="App">
        <h1>Calculadora de Soma</h1>
        <Soma numero1={5} numero2={3}/>
        <Soma numero1={10} numero2={3.5}/>
        <Soma numero1={-5} numero2={8}/>
        <Soma numero1={2.7} numero2={3.8}/>


    </div>
  );
}

export default App;
