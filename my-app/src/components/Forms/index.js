import { useState } from "react"
import './Forms.css'
const  Forms =( )=>{
  const [altura,setAltura] = useState('')
  const [peso,setPeso] = useState('')
  const [resultado,setResultado] = useState('')
  function handlerSetAltura(event){
    const insertValue = event.target.value
    setAltura(insertValue)
  }
  function handlerSetPeso(event){
      const insertValue = event.target.value
      setPeso(insertValue)
    }
   function handlerCalculo(event){
   const resultadoTotal = peso / (altura*altura)
    setResultado("O resultado: "+ resultadoTotal.toFixed(2))
    event.preventDefault()
   }


  return(

  <div className="content__forms">
      <form action="" onSubmit={handlerCalculo}>
        <div className="resultado">
        <h1>IMC</h1>
        <h2>{resultado}</h2>

        </div>
        <label htmlFor="peso">Peso</label>
        <input id="peso" type="number" value={peso} onChange={handlerSetPeso}  step={'any'} required placeholder="Digite o peso" />
        <label htmlFor="">Altura</label>
        <input id='altura' type="number" value={altura} onChange={handlerSetAltura}step={'any'} required placeholder="Digite a altura" />
       <input id='btn' type="submit" />
      </form>
  </div>
)
}
export default Forms