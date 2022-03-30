export default function ComponentA({propFn}) { //pasamos la prop

   const data = 'DATA DESDE ComponentA';

   function handleClick() {
      propFn(data); //prop que es una función, recibe los datos
      // en el componente le pasaremos un método que  <ComponentA  propFn={handleData}/>
      // handleData recibe el parámetro data 
   }

   return(
      <button onClick={handleClick}>Componente A</button>
   )
}