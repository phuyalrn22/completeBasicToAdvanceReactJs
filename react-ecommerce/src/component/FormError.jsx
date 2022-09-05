import React from 'react';
import { ErrorMessage } from 'formik';
const FormError = ({name}) => {
  return (
    <>
     <ErrorMessage name={name}>
        {(msg)=><p className='text-danger'>{msg}</p>}
     </ErrorMessage>
    </>
  )
}

export default FormError
