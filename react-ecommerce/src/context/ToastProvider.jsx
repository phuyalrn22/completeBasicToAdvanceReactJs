import React, { createContext, useState } from 'react'
 export const ToastContext = createContext();
    const ToastProvider = ({children}) => {
    const [message, setMessage] = useState();
    const [showToast, setShowToast] = useState(false);
    const displayToast = (message) =>{
        setMessage(message);
        setShowToast(true);
    }
    const hideToast = () =>{
        setMessage(" ");
        setShowToast(false);
    }
  return (
    <ToastContext.Provider value={{displayToast}}>
        <div>
            {children}
           { showToast && (<div className="bg-red" style={{
               height:"100px",
               background:"white",
               width:"500px",
               position:"fixed",
               bottom:"10px",
               right:"10px",
               border:"2px solid black"
            }}>
                <div className="toast-header">
                    <button type="button" onClick={hideToast} className="btn-close">X</button>
                </div>
                <div className="toast-body">{message}</div>
            </div>)}
        </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider;
