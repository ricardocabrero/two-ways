

export default function ComponentB({setDatosB}) {

   function handleClick() {
      setDatosB(prevState => prevState + 1); //clousure
   }
 
   return(
      <button onClick={handleClick}>Componente B</button>
   )
}