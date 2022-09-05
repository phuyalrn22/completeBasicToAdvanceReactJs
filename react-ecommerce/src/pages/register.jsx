import { Formik,Field,Form, setSubmitting} from 'formik';
import React from 'react';
import * as yup from 'yup';
import FormError from '../component/FormError';

const validationSchema = yup.object().shape({
  email:yup.string().required().email("Email Address is Not Valid").label("Email Address"),
  password:yup.string().required().min(5,"Password is must be greater then 5 character"),
});
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
            validationSchema={validationSchema}
            onSubmit={(value,{setSubmitting})=>{
              setSubmitting(true);
              setTimeout(() => {
                setSubmitting(false);
              }, 1000);
                console.log(value);
            }}
            initialValues={{
                email:"",
                password:""
            }}>
                {({isSubmitting})=> (
                <Form>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            Enter Your Email:
                            <Field type="text" name="email" className='form-control my-4'/>
                            <FormError name="email"/>
                            Enter Your Password:
                            <Field type="password" name="password" className='form-control my-4'/>
                            <FormError name="password"/>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary'>{isSubmitting? "Loading..":"Submit"}</button>
                 </div>
                </Form>)}
            </Formik>
      </div>
    </div>
  )
}

export default register;
