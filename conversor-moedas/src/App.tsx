import { useState } from 'react';
import './App.css';


function App() {

  const [quantia, setQuantia] = useState('');
  const [deMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, setParaMoeda] = useState("USD");
  const [resultado, setResultado] = useState(0);


  const converterMoeda = () => {

    const host = "api.frankfurter.app";

    fetch(`https://${host}/latest?amount=${quantia}&from=${deMoeda}&to=${paraMoeda}`)
    .then((resp) => resp.json())
    .then((data) => setResultado(data.rates[paraMoeda]));
  }


  return (    
      <>
        <div>

            <div>
              <label> Quantia: </label>
              <input type="text" value={quantia} onChange={e => setQuantia(e.target.value)} />
            </div>

            <div>
              <select value={deMoeda} onChange={e => setDeMoeda(e.target.value)} >
                <option value='USD' > DÓLAR </option>
                <option value='BRL' > REAL </option>
                <option value='EUR' > EURO </option>
                <option value='GBP'> LIBRA </option>
              </select>
              
              <select value={paraMoeda} onChange={e => setParaMoeda(e.target.value)} >
                <option value='USD' > DÓLAR </option>
                <option value='BRL' > REAL </option>
                <option value='EUR' > EURO </option>
                <option value='GBP'> LIBRA </option>
              </select>
            </div>

            <button onClick={() => converterMoeda()}> Converter </button>
            <div> {resultado.toFixed(2)} </div>
        </div>     
      </>
  )
}

export default App
