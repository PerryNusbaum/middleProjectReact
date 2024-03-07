import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
// import Footer from './Footer'
import Home from "./Home";
import ForDonation from "./ForDonation";
import { createContext,useContext, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import N2avBar from './Try';
import Donation from './Donation';
import { Try } from '@mui/icons-material';
//import CurenncyBoard from './CurrencyBoard';
// import axios from "axios";
export const DollarContext = createContext();
export const Color=createContext();
const useTheme = () => useContext(Color);

function App() {

  let [arr, setArr] = useState(
    [{ name: "Moshe", sum: 20, email: "ghjjik", dedication: "לזכות הורי שיחיו", date: new Date(2015,10,12) },
    { name: "Lea", sum: 1800, email: "ghjjik", dedication: "נחת מהילדים", date: new Date(2021,12,12) },
    { name: "Pery", sum: 300000, email: "ghjjik", dedication: "הצלחה בלימודים", date: new Date(2020, 10, 22)},
    { name: "Yosy", sum: 4500, email: "ghjjik", dedication: "פרנסה בשפע", date: new Date(2022,12,12) }]
  );
  const addMember = (newMember) => {
    let copyArr = [...arr, newMember]
    setArr(copyArr);
  }
  console.log(arr)
 
  let [rate, setRate] = useState({ dollar: undefined, currencyInSite: "ILS" })
  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/e11a1ee6ad7b99dfe1fc2237/latest/USD')
  .then(response => response.json())
  .then(data => {
    setRate( {...rate,dollar:data.conversion_rates.ILS })
 console.log(rate)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  },[])
  // const changeCurrencyInSite = () => {
  //   setRate({ ...rate, currencyInSite: rate.currencyInSite == "ILS" ? "USD" : "ILS" })
  // }
  return (<>
  <DollarContext.Provider value={rate}>
    <Color.Provider value={{
    backgroundColor: "",
    textColor: ""
  }}>
    <Container sx={{ marginTop: '64px' }}>
      <Routes>
        <Route path="" element={<Home myArr={arr} />} />
        <Route path="home" element={<Home myArr={arr} />} />
        <Route path="/:route" element={<FormProvider><ForDonation myArr={arr} myAdd={addMember} /></FormProvider>} />
      </Routes>
    </Container>
    <NavBar />
    </Color.Provider>
    </DollarContext.Provider>
    <Container sx={{ marginTop: '64px' }}>
   </Container>
   {/* <Footer/> */}

  </>
  );
}

export default App;
//import React, { useState, useEffect } from 'react';

// const CurrencyConverter = () => {
//   const [dollarValue, setDollarValue] = useState(null);
//   const [selectedCurrency, setSelectedCurrency] = useState('shekels');

//   useEffect(() => {
//     fetch('https://api.exchangeratesapi.io/v1/latest/27d93d22a58d57d62102eb3e90fa5ae8/=USD') // Replace with your server's endpoint
//       .then(response => response.json())
//       .then(data => setDollarValue(data.value))
//       .catch(error => console.log(error));
//   }, []);

//   const convertCurrency = () => {
//     if (selectedCurrency === 'shekels') {
//       // Convert dollars to shekels
//       const shekels = 100 * dollarValue; // Change the conversion formula as per your requirements
//       console.log(shekels);
//       // Do something with the shekels value
//     } else {
//       // Do something with the dollar value
//       console.log(dollarValue);
//     }
//   };

//   return (
//     <div>
//       <button onClick={convertCurrency}>Convert</button>
//       <select value={selectedCurrency} onChange={e => setSelectedCurrency(e.target.value)}>
//         <option value="shekels">Shekels</option>
//         <option value="dollars">Dollars</option>
//       </select>
//     </div>
//   );
// };

// export default CurrencyConverter;

