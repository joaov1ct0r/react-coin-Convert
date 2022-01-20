import Conversor from './Components/Conversor';

import './App.css';

function App() {
    return (
        <div className="App">
            <Conversor MoedaA={'USD'} MoedaB={'BRL'}></Conversor>
        </div>
    );
}

export default App;
