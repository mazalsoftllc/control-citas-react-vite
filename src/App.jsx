{/**
|--------------------------------------------------
| Inicio importar componentes.
|--------------------------------------------------
*/}

{/**
 * Hooks en React. 
*/}
import { useState } from "react";

{/* Importar componentes. */}
import Formulario from "./components/Formulario" 
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


{/**
|--------------------------------------------------
| Fin importar componentes.
|--------------------------------------------------
*/}


{/**
|--------------------------------------------------
| Inicio del componente App.
|--------------------------------------------------
*/}
export default function App() {

  {/**
 * Hooks de entrada.
 */}
 const [coleccion_pacientes, setColeccionPacientes] = useState([]); 


 {/**
  * Hooks de proceso.
  */}
 
 
 
 {/**
   * Hooks de salida.
   */}


  
  {/* Retornar el componente App. */}
  return (    
    
    <div className="container mx-auto mt-20">
        <Header></Header>
        <div   className="mt-12 flex">

          <Formulario
             
              coleccion_pacientes={coleccion_pacientes}
              setColeccionPacientes={setColeccionPacientes}
                    
          />
          <ListadoPacientes
             coleccion_pacientes={coleccion_pacientes}
          />

        </div>
        
    </div>   

  )
}

{/**
|--------------------------------------------------
| Fin del componente App.
|--------------------------------------------------
*/}

