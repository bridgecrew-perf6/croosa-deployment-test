import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Novidades from './Novidades'
import SignUp from './signup'
import Croosa from './croosa'
import { AuthProvider } from '../utils/auth'
import PrivateRoute from '../utils/PrivateRoute'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = ({Component, pageProps}) => {
  return(
      <div className='container'>
        <AuthProvider>
          <Component {...pageProps}/>
        </AuthProvider>
      </div>
  )
}

export default App