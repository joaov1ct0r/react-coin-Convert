import './App.css';

function App() {
    return (
        <div className="App">
            <div className="usd-brl-container">
                <h1>USD - BRL</h1>
                <input type="text" name="usd" placeholder="USD:" />
                <button>Converter</button>
                <h2>Valor Convertido:</h2>
            </div>
        </div>
    );
}

export default App;
