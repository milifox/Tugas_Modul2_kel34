import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Anggota from './Components/Anggota';
import DataDiri from './Components/DataDiri';
import Hobi from './Components/Hobi';
import "./style.css";
import Anan from "./images/anan.jpg";
import Indi from "./images/indi.jpg";


const datadiri = [
  {nama:'Anan', nim:'21120118130076', kelompok:'34', shift:'2'},
  {nama:'Indi', nim:'21120118130091', kelompok:'34', shift:'2'}
];

const hobi = [
  {nama:'Anan', anime:'Steins;Gate', game:'Arknigts', activity:'Rebahan'},
  {nama:'Indi', anime:'Konosuba', game:'MLBB', activity:'Makan'}
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div class="flex-container">
      <div>
        <Anggota nama="Nabil Hanan" gambar={Anan} />
      </div>
      <div>
        <Anggota nama="Indira Ananda Putra Utama" gambar={Indi} />
      </div>
    </div>
    <div class="flex-container">
      <div>
        <DataDiri datadiri={ datadiri } />
      </div>
      <div>
        <Hobi hobi={ hobi } />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
