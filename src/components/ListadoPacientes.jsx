{/**
 * Importar componentes.
*/}
import Paciente from "./Paciente";

/**
 *  Componente ListadoPacientes.
 */
export default function ListadoPacientes({coleccion_pacientes}) {
  

   /**
    * Retornar el componente: ListadoPacientes.
    */ 
   return (
  
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll">
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        {/* Descripción del formulario. */}
        <p className=" text-lg mt-5 text-center">
            {coleccion_pacientes && coleccion_pacientes.length ? "¡Si hay pacientes! " : "¡No hay pacientes! "}
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Administrar</button>
        </p>

        {coleccion_pacientes.map((paciente) => {
          
          return(      

            <Paciente
                 key={paciente.id}
                 paciente={paciente}
            />
          )
        } )}

        {/* Presentación de la historia del paciente */}
        
        

        
        
    </div>

  );
  
}
