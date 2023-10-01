import { Link } from 'react-router-dom'
import ButtonFatec from '../../components/ButtonFatec'
import InputFatec from '../../components/InputFatec/InputFatec'
import './App.css'
import Layout from '../../components/Layout'
// import './App.css'
// import ButtonFatec from './components/ButtonFatec'
// import InputFatec from './components/InputFatec/InputFatec'

function App() {

  return (
    <>
    <Layout>
  <body>
  <div className='form'>
  <h2>
    Formulário de Contato
  </h2>

  <div className="input-container">
    <InputFatec type='text' placeholder='Nome'/>
  </div>
  <div className="input-container">
    <InputFatec type='email' placeholder='E-mail'/>
  </div>
  <div className="input-container">
    <InputFatec type='tel' placeholder='Telefone'/>
  </div>
  <div className="input-container">
     <ButtonFatec type='button' label='ENVIAR'/>
  </div>
    {/* <ButtonFatec type='reset' label='Enviar form'/> */}
  </div>
  </body>    
    </Layout>
    </>
  )
}
//
//<ButtonFatec ></ButtonFatec>
//para comentar ctrl + ;
export default App
