import React,  { useCallback } from 'react'
import Styles from '../styles/Signup.module.css'
import app from '../utils/firebase'

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        //const actionCodeSettings = {
        //  dynamicLinkDomain: 'http://localhost:3000/novidades'
        //}
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push('./novidades')
        } catch(error) {
            alert(error)
        }
        try {
          await app.auth().currentUser.sendEmailVerification()
        } catch(error) {
          alert(error)
        }
        await app.auth().signOut()
    }, [history])

    return(
        <div className='main'>
          <div className={Styles.title}>
          <h2>Quer saber quando a Croosa vai ser lançada?<br/> Nós te avisamos.</h2>
          </div>
          <div className='launch'>
          <h3 className={Styles.subtitle}>Faça seu pré-cadastro</h3>
          </div>

          <form onSubmit={handleSignUp}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Onde você deseja ser avisado."/>
              <small id="emailHelp" class="form-text text-muted">Será usado somente no pré-cadastro e, futuramente, no cadastro.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Sua senha."/>
            </div>
            <button type="submit" class="btn btn-primary">Pronto!</button>
          </form>
          
        </div>
    )
  }

  export default SignUp