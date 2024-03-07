import Donation from "./Donation";
import Sum from "./Sum"
import { useState, useContext } from "react";
import { Color } from "./App";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "@mui/material";


const Home = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  let [color, setColor] = useState({
    backgroundColor: "",
    textColor: ""
  })
  const handleThemeChange = () => {
    const newBackgroundColor = prompt("Enter a background color:");
    const newTextColor = prompt("Enter a text color:");
    setColor({
      backgroundColor: newBackgroundColor,
      textColor: newTextColor
    });
  };
  const handleColorChange = () => {
    const color = prompt('Enter a color:');
    setBackgroundColor(color);
  };
  let { myArr } = props
  const timeDiff = (date) => {
    if (date.getYear() == new Date().getYear())
      if (date.getMonth() == new Date().getMonth()) {
        if (date.getDay() == new Date().getDay()) {
          if (date.getHours() == new Date().getHours()) {
            return new Date().getMinutes() - date.getMinutes() + " minutes"
          }
          return new Date().getHours() - date.getHours() + " hours"
        }
        return new Date().getMonth() - date.getMonth() + " monthes"
      }
    return new Date().getYear() - date.getYear() + " years"

  }
  console.log(color)
  const [sortOrder, setSortOrder] = useState('');
  const [searchName, setSearchName] = useState('');

  const sortData = (order) => {
    setSortOrder(order);

    if (order === 'newest') {
      myArr = [...myArr.sort((a, b) => b.date - a.date)];
    } else if (order === 'oldest') {
      myArr = [...myArr.sort((a, b) => a.date - b.date)];
    }
    else if(order === 'highest') {
      myArr = [...myArr.sort((a, b) => b.sum - a.sum)];
    }

  };

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };
  const filteredData = myArr.filter((item) => item.name.includes(searchName) || item.dedication.includes(searchName));
  console.log(filteredData);
  return (<div style={{  backgroundColor: color.backgroundColor, color: color.textColor }}>
    <Stack spacing={2} direction="ro">
    {/* <button variant="text"  onClick={() => sortData('')}>Sort by Newest</button>
    <button variant="contained" onClick={() => sortData('')}>Sort by Oldest</button> */}
    {/* <button variant="outlined" onClick={() => sortData('highest')}>Sort by sum</button>
     */}
     {/* <Container sx={{ marginTop: '60%' }}> */}
     <Box sx={{
        width: 500,
        maxWidth: '100%',
      }}>
    <Button  sx={{ marginTop: '50px' }}  variant="outlined" onClick={() => sortData('newest')}>Sort by Newest</Button>
    <Button  sx={{ marginTop: '50px' }} variant="outlined" onClick={() => sortData('oldest')}>Sort by Oldest</Button>
    <Button   sx={{ marginTop: '50px' }}variant="outlined" onClick={() => sortData('highest')}>Sort by sum</Button>
    </Box>
    </Stack> <br />
    {/* <input type="text" placeholder="Search by name" onChange={handleSearch} /> */}
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      
      }}
    >
      <TextField fullWidth label="Search by name or dedication" id="fullWidth" onChange={handleSearch} >
      <SearchIcon/>
      </TextField>
    </Box>
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
    <button onClick={handleThemeChange}>Change Background Color</button>
    <Sum array={myArr} />


    {filteredData.map((item, index) => {
      return <Donation key={index} name={item.name} sum={item.sum} email={item.email}
        dedication={item.dedication} timePassed={timeDiff(item.date)} />

    })}

  </div>);
}

export default Home;