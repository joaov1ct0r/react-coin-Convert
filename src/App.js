import { useState } from 'react';
import './App.css';

function App() {
    let [UsdValue, setUsdValue] = useState('');

    let [BrlValue, setBrlValue] = useState();

    function handleValue(event) {
        setUsdValue(event.target.value);
    }

    function handleConvert() {
        let url = `https://free.currconv.com/api/v7/convert?q=USD_BRl&compact=ultra&apiKey=123d9951e3bc7a09b478`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(response => {
                let cotacao = response.USD_BRL;

                let newValue = (parseFloat(UsdValue) * cotacao).toFixed(2);

                setBrlValue(newValue);
            });
    }
    return (
        <div className="App">
            <div className="usd-brl-container">
                <h1>USD to BRL</h1>
                <input
                    onChange={handleValue}
                    type="text"
                    name="usd"
                    placeholder="USD:"
                />
                <button onClick={handleConvert}>Converter</button>
                <h2>Valor Convertido: R${BrlValue}</h2>
            </div>
        </div>
    );
}

export default App;
