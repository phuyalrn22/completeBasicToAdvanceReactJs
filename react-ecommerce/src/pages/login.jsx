import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name:{
        value:"",
        error:""
    },
    email:{
        value:"",
        error:""
    },
    password:{
        value:"",
        error:""
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
  return (
    <form onSubmit={submitHandler}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    Full Name: 
                    <input type="text" name="name" id="name" className='form-control my-4' 
                    value={formData.name.value} onChange={(e)=>{
                        setFormData({...formData,name:{value:e.target.value}});
                    }}/>
                    <span className="text-danger">Name is Not Valid!!</span><br/>
                    Enter Your Email:
                    <input type="text" name="email" id="email" className='form-control my-4' 
                    value={formData.email.value} onChange={(e)=>{
                        setFormData({...formData,email:{value:e.target.value}})
                    }}/>
                    {formData.email.error && (
                    <span className="text-danger">{formData.email.error}</span>)}<br/>
                    Enter Your Password:
                    <input type="password" name="password" id="password" className='form-control my-4'
                    value={formData.password.value} onChange={(e)=>{
                        setFormData({...formData,password:{password:e.target.password}})
                    }}/>
                    <span className="text-danger">Password is Not Valid!!</span>
                </div>
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
    </form>
  )
}

export default Login;
