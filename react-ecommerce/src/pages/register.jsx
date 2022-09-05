import { Formik } from 'formik';
import React from 'react';

const register = () => {
  return (
    <div style={{
        maxWidth:"700px",
        margin:"auto",
        height:"90vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
      <div style={{
        width:"100%",
        padding:"10px"
      }}>
            <Formik
            onSubmit={(value)=>{
                console.log(value);
            }}
            initialValues={{
                email:"",
                password:""
            }}>
                {({handleChange, handleSubmit})=> (
                <form onSubmit={handleSubmit}>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            Enter Your Email:
                            <input type="text" name="email" className='form-control my-4'onChange={handleChange}/>
                            
                            Enter Your Password:
                            <input type="password" name="password" className='form-control my-4' onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                 </div>
                </form>)}
            </Formik>
      </div>
    </div>
  )
}

export default register;
