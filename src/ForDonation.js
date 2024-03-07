import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
// import "./OrderForm.css";
import * as yup from "yup";
// import { copy } from "./App";
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button,Box } from '@mui/material';

const ForDonation = (props) => {
    const schema = yup.object().shape({
        name: yup.string().required('Name is a required field'),
        email: yup.string().email('Invalid email').required('Email is a required field'),
        sum: yup.string().required('Amount to donate is a required field'),
        creditCard: yup.string().required('Credit number is a required field').length(12, 'Expecting 12 characters'),
        validity: yup.string().required('Validity is a required field').length(4, 'Expecting 4 characters'),
        threeDigits: yup.string().required('Three digits on the back of the card is a required field').length(3, 'Expecting 3 characters'),
        id: yup.string().required("Card holder's ID number is a required field").length(9, 'Expecting 9 characters'),
        // dedication: yup.string().min(20,'Expecting 20 characters')
      }); 
    // <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M248 168v168c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168c0-75.1-60.9-136-136-136H24C10.8 32 0 42.7 0 56v408c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V112h112c30.9 0 56 25.1 56 56zM432 32h-48c-8.8 0-16 7.2-16 16v296c0 30.9-25.1 56-56 56H200V176c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v280c0 13.3 10.8 24 24 24h168c75.1 0 136-60.9 136-136V48c0-8.8-7.2-16-16-16z"/></svg>

    // let { register, handleSubmit, getValues, formState: { errors, dirtyFields, isValid } } = useForm({ mode: "onBlur" });//יוצא מאחורי הקלעים סוג של מופע של טופס
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode:"onBlur",
        resolver: yupResolver(schema)
      });
    const [submissionDate, setSubmissionDate] = useState(null);
    const save = (data) => {
        const currentDate = new Date();
        const newMember={
            name:data.name,
            email:  data.email,
            sum: data.sum,
            dedication: data.dedication,
            date: currentDate
        };
        props.myAdd(newMember);
    }
console.log(errors)
    return (
      // <form noValidate="true" onSubmit={handleSubmit(save)}>
      // <label>Name</label>
      // <input type="text" {...register("name")} />
      // {errors.name && <span className="err-message">{errors.name.message}</span>}
// ...

<form noValidate onSubmit={handleSubmit(save)}>
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width:500 ,marginTop:20}}>
  <TextField
    label="Name"
    type="text"
    {...register("name")}
    error={!!errors.name}
    helperText={errors.name?.message}
  />
  <TextField
    label="Email"
    type="email"
    {...register("email")}
    error={!!errors.email}
    helperText={errors.email?.message}
  />
  <TextField
    label="Sum"
    type="number"
    {...register("sum")}
    error={!!errors.sum}
    helperText={errors.sum?.message}
  />
  <TextField
    label="CreditCard"
    type="text"
    {...register("creditCard")}
    error={!!errors.creditCard}
    helperText={errors.creditCard?.message}
  />
  <TextField
    label="Validity"
    type="text"
    {...register("validity")}
    error={!!errors.validity}
    helperText={errors.validity?.message}
  />
  <TextField
    label="ThreeDigits"
    type="text"
    {...register("threeDigits")}
    error={!!errors.threeDigits}
    helperText={errors.threeDigits?.message}
  />
  {errors.threeDigits&&<span>שגיאה ב3 תווים</span>}
  <TextField
    label="Id"
    type="text"
    {...register("id")}
    error={!!errors.id}
    helperText={errors.id?.message}
  />
  <TextField
    label="Dedication"
    type="text"
    {...register("dedication", {
      required: { value: false },
      minLength: { value: 20, message: "Expecting a minimum of 20 characters" },
      maxLength: { value: 500, message: "Expecting a maximum of 500 characters" }
    })}
    error={!!errors.dedication}
    helperText={errors.dedication?.message}
  />
  <Button type="submit" >
    Submit
  </Button>
  </Box>
</form>
    );
  }
  
  export default ForDonation;

      //   <label>Email</label>
      //   <input type="email" {...register("email")} />
      //   {errors.email && <span className="err-message">{errors.email.message}</span>}
      //   <label>Sum</label>
      //   <input type="number" {...register("sum")} />
      //   {errors.sum && <span className="err-message">{errors.sum.message}</span>}
      //   <label>CreditCard</label>
      //   <input type="text" {...register("creditCard")} />
      //   {errors.creditCard && <span className="err-message">{errors.creditCard.message}</span>}
      //   <label>Validity</label>
      //   <input type="text" {...register("validity")} />
      //   {errors.validity && <span className="err-message">{errors.validity.message}</span>}
      //   <label>ThreeDigits</label>
      //   <input type="text" {...register("threeDigits")} />
      //   {errors.threeDigits && <span className="err-message">{errors.threeDigits.message}</span>}
      //   <label>Id</label>
      //   <input type="text" {...register("id")} />
      //   {errors.id && <span className="err-message">{errors.id.message}</span>}
      //   <label>Dedication</label>
      //   <input type="text" {...register("dedication",{ required: { value: false},
      //   minLength: { value: 20, message: "Expecting to minimum 20 characters" } , maxLength: { value: 500, message: "Expecting to maxinum 500 characters"  }})}/>
      //   {errors.dedication && <span className="err-message"> {errors.dedication.message}</span>}
      //   <input type="submit" disabled={!isValid} />
      // </form>
    // <form noValidate="true" onSubmit={handleSubmit(save)}>
    //     <label>שם</label>
    //     <input type="text" {...register("name", { required: true })} />
    //     {errors.name && <span className="err-message">שגיאה בשם</span>}
    //     <label>מייל</label>
    //     <input type="email"  {...register("email", { required: { value: true, message: "מייל שדה חובה" },
    //      minLength: { value: 5, message: "מייל לפחות 5 תווים" } })} />
    //     {errors.email && <span className="err-message"> {errors.email.message}</span>}
    //     <label>סכום לתרומה</label>
    //     <select {...register("sum", { required: true })}>
    //         <option ><img src="שקל.png"/>שקל</option>
    //         <option>דולר</option>
    //     </select>
    //     {/* <input type="number"  {...register("sum", { required: true })} /> */}
    //     {/* <label>תז</label>
    //     <input type="text"  {...register("tzConfirm", {
    //         required: true, validate: (value) => {
    //             if (value != getValues("tz"))
    //                 return false;
    //             return true;
    //         }
    //     })} /> */}
    //     {/* {errors.tz && <span className="err-message"> שגיאה באימות תז</span>} */}
    //     <label>מספר אשראי</label>
    //     <input type="text" {...register("credictCard",{ required: { value: true, message: " שדה חובה" },
    //      minLength: { value: 12, message: "מצפה ל12 תווים" } , maxLength: { value: 12, message: "מצפה ל12 תווים" }})}/>
    //     {errors.credictCard && <span className="err-message"> {errors.credictCard.message}</span>}
    //     <label>תוקף</label>
    //     <input type="text" {...register("validity", { required: { value: true, message: " שדה חובה" },
    //      minLength: { value: 4, message: "מצפה ל4 תווים" } , maxLength: { value: 4, message: "מצפה ל4 תווים" }})}/>
    //     {errors.validity && <span className="err-message"> {errors.validity.message}</span>}
    //     <label>שלוש ספרות בגב הכרטיס</label>
    //     <input type="text" {...register("threeDigits", { required:  { value: true, message: " שדה חובה" },
    //      minLength: { value: 3, message: "מצפה ל3 תווים" } , maxLength: { value: 3, message: "מצפה ל3 תווים" }})}/>
    //     {errors.threeDigits && <span className="err-message"> {errors.threeDigits.message}</span>}
    //     <label>ת"ז של בעל הכרטיס</label>
    //     <input type="text" {...register("id", { required: { value: true, message: " שדה חובה" },
    //      minLength: { value: 9, message: "מצפה ל9 תווים" } , maxLength: { value: 9, message: "מצפה ל9 תווים" }})}/>
    //     {errors.id && <span className="err-message"> {errors.id.message}</span>}
    //     <input type="submit" disabled={!isValid} />
    //     <label>הקדשה</label>
    //     <input type="text" {...register("dedication",{ required: { value: false},
    //     minLength: { value: 20, message: "מינימום 20 תווים" } , maxLength: { value: 500, message: "מקסימום 500 תווים" }})}/>
    //     {errors.dedication && <span className="err-message"> {errors.dedication.message}</span>}
    // </form>




