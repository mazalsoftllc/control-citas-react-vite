{/**
 * Importar componentes.
*/}
import Paciente from "./Paciente";

/**
 *  Componente ListadoPacientes.
 */
export default function ListadoPacientes({coleccion_pacientes, setPaciente, eliminarPaciente}) {



   /**
    * Retornar el componente: ListadoPacientes.
    */ 
   return (
  
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll">
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        {/* Descripción del formulario. */}
        <p className=" text-lg mt-5 text-center">
            {coleccion_pacientes && coleccion_pacientes.length ? "¡Si hay pacientes! " : "¡No hay pacientes! "}
        </p>

        {coleccion_pacientes.map((paciente) => {
          
          return(      

            <Paciente
                 key={paciente.id}
                 paciente={paciente}
                 setPaciente={setPaciente}
                 eliminarPaciente={eliminarPaciente}
            />
          )
        } )}

        {/* Presentación de la historia del paciente */}
            
        
    </div>

  );
  
}
