import Conversor from './Components/Conversor';

import './App.css';

function App() {
    return (
        <div className="App">
            <Conversor MoedaA={'USD'} MoedaB={'BRL'}></Conversor>
            <Conversor MoedaA={'BRL'} MoedaB={'USD'}></Conversor>
            <Conversor MoedaA={'USD'} MoedaB={'EUR'}></Conversor>
            <Conversor MoedaA={'EUR'} MoedaB={'USD'}></Conversor>
            <Conversor MoedaA={'BRL'} MoedaB={'EUR'}></Conversor>
            <Conversor MoedaA={'EUR'} MoedaB={'BRL'}></Conversor>
        </div>
    );
}

export default App;
