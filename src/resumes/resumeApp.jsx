import React, { useState } from 'react'
import { AppContext } from '../context/context';
import ShopInput from './resumeInput';
import ShopList from './resumeList';
import ResumeInput from './resumeInput';

const ResumeApp = () => {

//   const [email, setEmail] = useState("");


  return (
    // <AppContext.Provider value={{email, setEmail}}>
      <div className='container border'>
        <ResumeInput />
        <hr />
      </div>
    // </AppContext.Provider>

  )
}

export default ResumeApp