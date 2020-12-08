import React from 'react'
import App from './_app'
import Link from 'next/link'


export default function Home() {
      return(
        <div className='main'>
          <div className='title'>
            <img src='logo.svg' width='35%'/>
            <h2>Você não é imóvel.</h2>
          </div>
          <div className='launch'>
          <h3>Lançamento em breve.</h3>
          </div>
          <div className='sign'>
          <p>Clique no botão abaixo para ser avisado na data do lançamento.</p>
          <Link href='/signup'>
            <button type="button" class="btn btn-outline-primary">Fazer pré-cadastro.</button>  
          </Link>
          </div>
        </div>
      )
}

