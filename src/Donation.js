import {Card,Container,CardContent,Typography} from '@mui/material';
import { useContext, useState } from 'react';
import { DollarContext } from './App';
import { Color } from "./App";
import {convert} from './functions'

const Donation = (props) => {
  // let rate=useContext(DollarContext)
  // let [r,setR]=useState(rate.currencyInSite)
// console.log(r+" "+rate.currencyInSite)
    const {name,sum,email,dedication,timePassed}=props
    let myColor=useContext(Color);

    return (
      <Container sx={ {backgroundColor:myColor.backgroundColor, color: myColor.textColor}}>
        <Card sx={{ minWidth: 275}}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {name}
        </Typography>
        <Typography variant="h5" component="div">
          {/* {convert(sum,rate.dollar,r)} */}
          {sum}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
          {dedication}
        </Typography>
        <Typography variant="body2">
          {timePassed}
        </Typography>
            </CardContent>
        </Card>
        </Container>);
}
 
export default Donation;