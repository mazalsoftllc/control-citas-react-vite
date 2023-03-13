{/**
|--------------------------------------------------
| Inicio importar componentes.
|--------------------------------------------------
*/}

import { useState, useEffect } from "react";
import PiePagina from "./components/Footer";
import { Tabs } from "flowbite-react";

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
    const [coleccion_pacientes, setColeccionPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))??[]); 
    const [paciente, setPaciente] = useState({})

       

    {/* Vigilar los cambios en el componente. */}
    useEffect(() => {

      {/* La colección de pacientes ha sido actualizada. */}
      console.log("La colección de pacientes ha sido actualizada.")

      {/* Almacenamiento local. */}
      localStorage.setItem('pacientes', JSON.stringify(coleccion_pacientes))

    },[coleccion_pacientes] )

    

    {/**
      * Hooks de proceso.
      */}
 
 
 
    {/**
      * Hooks de salida.
      */}


  
    {/* Eliminar un paciente */}
      const eliminarPaciente = (id) => {       

      console.log("Eliminando paciente con el id: " + id)
      const pacientesActualizados = coleccion_pacientes.filter(paciente => paciente.id !== id)
      setColeccionPacientes(pacientesActualizados)

    }


  
  {/* Retornar el componente App. */}
  return ( 
    
    <>

    <Tabs.Group
     aria-label="Default tabs"
     style="default"
    >
    <Tabs.Item
      active={true}
      title="Formulario"
    >
    <Formulario
             
             coleccion_pacientes={coleccion_pacientes}
             setColeccionPacientes={setColeccionPacientes}
             paciente={paciente}
             setPaciente={setPaciente}
             
                   
         />
   </Tabs.Item>
   <Tabs.Item title="Historias">
     <ListadoPacientes
             coleccion_pacientes={coleccion_pacientes}
             setPaciente={setPaciente}
             eliminarPaciente={eliminarPaciente}
             
             
      />
    </Tabs.Item>
    <Tabs.Item title="Ayuda">
      <Header
    
    />
   </Tabs.Item>
   <Tabs.Item title="Contacto">
    <PiePagina
    
    />
  </Tabs.Item>
  
</Tabs.Group>

</>


    
    

  )
}

{/**
|--------------------------------------------------
| Fin del componente App.
|--------------------------------------------------
*/}

