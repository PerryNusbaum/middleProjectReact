import { useState } from "react";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { fromDollarToShekel, fromShekelToDollar, convert } from "./functions";
import { useContext } from 'react';
import { DollarContext } from './App';
const Sum = (props) => {
  let { array } = props
  let shekelIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-shekel" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
    <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  </svg>
  let [isShow, setIsShow] = useState(true);
  let dollarIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
    <path d="M12 3v3m0 12v3" />
  </svg>
  //  let [sum, setSum] = useState('')
  //  setSum(()=>{ let x = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     x += parseInt(array[i].sum)
  //   }return x;
  // })
  const getSum = () => {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
      x += parseInt(array[i].sum)
    }
    // setIsShow(!isShow)
    // setSum(x)
    return x
  }


  let rate = useContext(DollarContext);
  function showDetails() {
    setIsShow(!isShow)

    // setSum(fromShekelToDollar(sum, rate.dollar, rate.currencyInSite));
    // rate = { dollar: rate.dollar, currencyInSite: "USD" }
    // console.log(rate.dollar)
    // console.log(rate.currencyInSite)
    // console.log(sum)
    // return sum;
  }

  let [s, setS] = useState(getSum)
  const getPercentage = () => {
    let percent = (s / 1000000) * 100
    percent = parseInt(percent)
    return percent
  }
  let [r, setR] = useState(rate.currencyInSite)
  let [p, setP] = useState(getPercentage)
  //   return (<div style={{ direction: "rtl" }}><h1>{ convert(getSum(),rate.dollar,r) }<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-shekel" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  //     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //     <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
  //     <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  //   </svg></h1>
  //     <h2>{getPercentage()}</h2>
  //     <h2 >מתוך 1,000,000<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-shekel" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
  //       <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  //     </svg></h2>
  //     <button type="button" onClick={() => { 
  //       if(rate.currencyInSite=='USD'){
  //       setR('ILS')
  //       rate.currencyInSite='ILS'
  //     }
  //     else{setR('USD')
  //     rate.currencyInSite='USD'
  //   }
  //   showDetails()
  //   // showDetails();
  //   // if (isShow) {
  //   //   fromDollarToShekel();
  //   // } else {
  //   //   fromShekelToDollar();
  //   // }
  // }}>{!isShow ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-shekel" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
  //       <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  //     </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
  //       <path d="M12 3v3m0 12v3" />
  //     </svg>}
  //     </button>


  //   </div>);


  return (
    <div style={{ direction: "rtl" }}>
      <h1>{parseInt(convert(getSum(), rate.dollar, r))}{isShow ? shekelIcon : dollarIcon}</h1>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={getPercentage()}{...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            getPercentage(),
          )}%`}</Typography>
        </Box>
      </Box>

      <h2 >מתוך {parseInt(convert(1000000, rate.dollar, r))}{isShow ? shekelIcon : dollarIcon}</h2>
      <button type="button" onClick={() => {
        if (rate.currencyInSite == 'USD') {
          setR('ILS')
          rate.currencyInSite = 'ILS'
        }
        else {
          setR('USD')
          rate.currencyInSite = 'USD'
        }
        showDetails()
        // showDetails();
        // if (isShow) {
        //   fromDollarToShekel();
        // } else {
        //   fromShekelToDollar();
        // }
      }}>
        {isShow ? dollarIcon : shekelIcon}
      </button>


    </div>);

}

export default Sum;