import { Formik,Field,Form } from 'formik';
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
                {()=> (
                <Form>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            Enter Your Email:
                            <Field type="text" name="email" className='form-control my-4'/>
                            
                            Enter Your Password:
                            <Field type="password" name="password" className='form-control my-4'/>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                 </div>
                </Form>)}
            </Formik>
      </div>
    </div>
  )
}

export default register;
