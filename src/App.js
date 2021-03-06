import Conversor from './Components/Conversor';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="linha">
                <Conversor MoedaA={'USD'} MoedaB={'BRL'}></Conversor>
                <Conversor MoedaA={'BRL'} MoedaB={'USD'}></Conversor>
            </div>
            <hr />

            <div className="linha">
                <Conversor MoedaA={'USD'} MoedaB={'EUR'}></Conversor>
                <Conversor MoedaA={'EUR'} MoedaB={'USD'}></Conversor>
            </div>
            <hr />

            <div className="linha">
                <Conversor MoedaA={'BRL'} MoedaB={'EUR'}></Conversor>
                <Conversor MoedaA={'EUR'} MoedaB={'BRL'}></Conversor>
            </div>
        </div>
    );
}

export default App;
