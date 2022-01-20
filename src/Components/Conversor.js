import { useState } from 'react';

function Conversor(props) {
    let [UsdValue, setUsdValue] = useState('');

    let [FinalValue, setFinalValue] = useState();

    function handleValue(event) {
        setUsdValue(event.target.value);
    }

    function handleConvert() {
        let de_para = `${props.MoedaA}_${props.MoedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=123d9951e3bc7a09b478`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(response => {
                let cotacao = response[de_para];

                let newValue = (parseFloat(UsdValue) * cotacao).toFixed(2);

                setFinalValue(newValue);
            });
    }
    return (
        <div className="conversor-container">
            <h1>
                {props.MoedaA} to {props.MoedaB}
            </h1>
            <input
                onChange={handleValue}
                type="text"
                name={props.MoedaA}
                placeholder={props.MoedaA}
            />
            <button onClick={handleConvert}>Converter</button>
            <h2>Valor Convertido: {FinalValue}</h2>
        </div>
    );
}

export default Conversor;
