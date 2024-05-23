import { useState } from 'react';
import './styles/App.css';
import './styles/responsive.css';


import { BsCashCoin } from "react-icons/bs";


function App() {

  const [quantia, setQuantia] = useState('1');
  const [deMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, setParaMoeda] = useState("USD");
  const [resultado, setResultado] = useState('');


  const converterMoeda = () => {

    if(quantia == '' || quantia == '0'){
      alert('Operação inválida, Digite um valor!')
    }

    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${quantia}&from=${deMoeda}&to=${paraMoeda}`)
    .then((resp) => resp.json())
    .then((data) => setResultado(String(data.rates[paraMoeda])));

  }


  const convertCoin = (money: number) => {
    return money.toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency'
    })
  }


  return (    
      <>
        <div className='main'>
          <h1> Conversor de Moedas  <BsCashCoin /> </h1>
            <div className='container-value'>
              <label  className='label' htmlFor='value'> Valor a converter </label>
              <input type="text" id='value'
              placeholder='Digite algum valor'    
              value={quantia} onChange={e => setQuantia(e.target.value)} />
            </div>

            <div className='select-content'>
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

            <button className='button' onClick={() => converterMoeda()}> Converter </button>
            <div className='result'>
              <h2> Resultado: </h2> 
              <h2>{convertCoin(Number(resultado))}</h2> 
            </div>
        </div>     
      </>
  )
}

export default App
