// const OrderFormYup = () => {
//     let cities = [
//         { id: 1, name: "elad" },
//         { id: 2, name: "bb" },
//         { id: 3, name: "jerusalem" },
//         { id: 4, name: "ashdod" },
//     ]
//     let { register, handleSubmit, getValues, formState: { errors, dirtyFields, isValid } } = 
//     useForm({ mode: "onBlur" ,resolver:yupResolver(orderSchema)});//יוצא מאחורי הקלעים סוג של מופע של טופס

//     const save = (data) => {
//         alert(JSON.stringify(data))
//     }
//     console.log(errors)
//     // console.log(dirtyFields)
//     return (<form noValidate="true" onSubmit={handleSubmit(save)}>

//         <label>שם</label>
//         <input type="text" {...register("name")} />
//         {errors.name && <span className="err-message">שגיאה בשם</span>}
//         <label>מייל</label>
//         <input type="email"  {...register("email")} />

//         {errors.email && <span className="err-message"> {errors.email.message}</span>}

// //         <label>תז</label>
// //         <input type="text"  {...register("tz")} />
// //         <label>תז</label>
// //         <input type="text"  {...register("tzConfirm")} />
// //         {errors.tz && <span className="err-message"> שגיאה באימות תז</span>}

// //         <label>עיר</label>
// //         <select  {...register("city")}>
// //             {cities.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
// //         </select>
// //         <label>שולם?</label>
// //         <input type="checkbox"  {...register("isPayed")} />
// //         <input type="submit" disabled={!isValid} />

// //     </form>);
// // }

// // export default OrderFormYup;
// // import { Button, TextField } from '@mui/material';
// // const Try = () => {
// //     return ( 
// //         <div>
// //         <Button variant="contained" color="primary">
// //           Click me
// //         </Button>
// //         <TextField label="Enter your name" variant="outlined" />
// //       </div>
// //      );
// // }
 
// // export default Try;
// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState([
//     { id: 1, value: 'Item 1' },
//     { id: 2, value: 'Item 2' },
//     { id: 3, value: 'Item 3' },
//     { id: 4, value: 'Item 4' },
//     { id: 5, value: 'Item 5' },
//   ]);
//   const [sortOrder, setSortOrder] = useState('');
//   const [searchName, setSearchName] = useState('');

//   const sortData = (order) => {
//     setSortOrder(order);

//     if (order === 'newest') {
//       setData([...data.sort((a, b) => b.id - a.id)]);
//     } else if (order === 'oldest') {
//       setData([...data.sort((a, b) => a.id - b.id)]);
//     } else if (order === 'sum') {
//       const sum = data.reduce((total, item) => total + item.id, 0);
//       setData([{ id: 'sum', value: `Sum: ${sum}` }]);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchName(event.target.value);
//   };

//   const filteredData = sortOrder === 'sum' ? data.slice(1) : data.filter((item) => item.value.includes(searchName));

//   return (
//     <div>
//       <h1>Data Management</h1>
//       <button onClick={() => sortData('newest')}>Sort by Newest</button>
//       <button onClick={() => sortData('oldest')}>Sort by Oldest</button>
//       <button onClick={() => sortData('sum')}>Calculate Sum</button>
//       <br />
//       <input type="text" placeholder="Search by name" onChange={handleSearch} />
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// <nav>
//   <div class="navbar">
//     <div class="logo">
//       <image src="your-image.jpg" alt="Logo">
//     </div>
//     <ul class="nav-links">
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Services</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   </div>
// </nav>
// export default MyComponent;
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import {Avatar, AppBar, Toolbar,Box, Button,Typography } from '@mui/material';
const N2avBar = () => {
  return(
    <div>
      <AppBar className='nav-bar' position="static" color='white'>
        <Toolbar>
          <Typography variant="title" >
          <img src='שקל.png' width={182} height={64} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};
export default N2avBar;
