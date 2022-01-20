import { useState } from 'react';
import './App.css';

function App() {
    let [UsdValue, setUsdValue] = useState('');

    function handleValue(event) {
        setUsdValue(event.target.value);
    }
    return (
        <div className="App">
            <div className="usd-brl-container">
                <h1>USD - BRL</h1>
                <input
                    onChange={handleValue}
                    type="text"
                    name="usd"
                    placeholder="USD:"
                />
                <button>Converter</button>
                <h2>Valor Convertido: {UsdValue}</h2>
            </div>
        </div>
    );
}

export default App;
