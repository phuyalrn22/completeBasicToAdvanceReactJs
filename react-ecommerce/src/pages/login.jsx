import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    isSubmitting:false,
    isValid:false,
    form:{
        email:{
            validator:(email)=>{
                if(!email.includes("@")){
                    return "Email is Not Valid!!";
                }
            },
            value:"",
            error:""
        },
        password:{
            validator:(password)=>{
                if(password.length<3){
                    return "Password is Not Valid!!";
                }
            },
            value:"",
            error:""
        }
    }
})
  const validator = (formData) =>{
    if(!formData.email.value.includes("@")){
        formData.email.error="Email is Not Valid!!";
    }
    return formData;
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    const newData = validator(formData);
    setFormData({...newData});
  }
  const handleInputChange = (e) =>{
    const newFormData = {...formData};
    newFormData.form[e.target.name].value = e.target.value;
    let error = newFormData.form[e.target.name].validator(e.target.value);
    if(error){
        newFormData.form[e.target.name].error = error;
    }else{
        newFormData.form[e.target.name].error = "";
    }
    setFormData(newFormData);
  }
  return (
    <form onSubmit={submitHandler}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    Enter Your Email:
                    <input type="text" name="email" id="email" className='form-control my-4' 
                    value={formData.form.email.value} onChange={handleInputChange}/>
                    {formData.form.email.error && (
                    <span className="text-danger">{formData.form.email.error}</span>)}<br/>
                    Enter Your Password:
                    <input type="password" name="password" id="password" className='form-control my-4'
                    value={formData.form.password.value} onChange={handleInputChange}/>
                    {formData.form.password.error && (
                    <span className="text-danger">{formData.form.password.error}</span>)}<br/>
                </div>
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
    </form>
  )
}

export default Login;