import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Button from './components/Button';

function App() {

  const [datosA, setDatosA] = useState(''); //actualizado con data del ComponentA con el método handleData

  const [datosB, setDatosB] = useState(1); //vamos a actualizar este estado desde ComponentB
  //pasamos como prop la referencia a setDatosB,  al ComponentB
  //la prop se puede llamar como quieras. En este caso voy a ponerle el mismo nombre del método del setState


  function handleData(param) { //recibe data, de la prop propFn ComponentA
    console.log(param) // puedes manejar los datos de propFn ComponentA
    setDatosA(param); //normalmente utilizarás los datos para actualizar un estado
    //setDatosA(prevState => prevState = param) //también puedes llamar de esta forma a setState,
    //recibe un callback con el estado anterior se crea un clousure sobre la variable de estado
  }

  // function handleClick() {
  //   setDatosB(prevState => prevState + 1); //clousure
  // }
  // si descomentas este método y el botón que lo lanza, verás que puedes actualizar 
  // la misma varible de estado desde app.js y desde ComponentB (clousure), manteniendo el estado
  const arrayBtn = [
    {element: 1, value: ''},
    {element: 2, value: ''},
    {element: 3, value: ''}
  ];

  const [buttonValues, setButtonValues] = useState(arrayBtn);

  function handleClickButton(element) {
    const findElement = buttonValues.find(el => el.element === element );

    setButtonValues(prevState => prevState.map((el) => {
      return el === findElement ? {...el, value: el.value === '' ? 'x' : '' } : el;
    }))
  }
  return (
    <div className="App">
      {JSON.stringify(buttonValues)}
      {buttonValues.map(({element, value}) => {
        return <Button key={element} handleClick={() => handleClickButton(element)} value={value}/>
      })}
      <p>Datos A: {datosA}</p>
      <p>Datos B: {datosB}</p>
  
      <ComponentA  propFn={handleData}/> 
      <ComponentB setDatosB={setDatosB}/>
      {/* <button onClick={handleClick}>App.js</button>  */}
    </div>
  );
}

export default App;
