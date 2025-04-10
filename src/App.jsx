import './App.css'
import Button from './components/ejemplos/Button'
import Navbar from './components/Navbar'

function App() {
 

const saludar = () => {
alert('Hola Mundo')
}

const despedir = () => {
  alert('Adios Mundo')
}

  return (
    <>
    <Navbar></Navbar>
      <Button estilo="Button-app" text="Hola Mundo" handler={saludar} />
      <Button estilo="Button-coder" text="coderhouse" handler={despedir}/>
    </>
  )
}

export default App
