{/* Importación de componentes */}
import NotificacionExitosa from "./NotificacionExitosa";
import NotificacionAlert from "./NotificacionAlert";

{/**
 * Hooks en React. 
*/}
import { useState, useEffect } from "react";


function Formulario({coleccion_pacientes, setColeccionPacientes}) {


    {/**
     * Hooks de entrada.
     */}
     const [nombre_mascota, setNombreMascota] = useState('')
     const [nombre_propietario, setNombrePropietario] = useState('')
     const [email_propietario, setEmailPropietario] = useState('')
     const [ubicacion_propietario, setUbicacionPropietario] = useState('')
     const [url_fotografia, setUrlFotografia] = useState('')
     const [fecha_ingreso, setFechaIngreso] = useState('')
     const [historia_mascota, setHistoriaMascota] = useState('')
     
     {/**
     * Hooks de proceso.
     */}
     const [exception_form, setError] = useState(true)

     {/* Generar ID. */}
     const generarID = (e) => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
     }



     {/**
     * Hooks de salida.
     */}

     {/**
      * Controlar el envío de datos.
    */}
    const handleSubmit = (e) => {

      e.preventDefault();

      {/* Validación del formulario. */}
      if([nombre_mascota, nombre_propietario, email_propietario, ubicacion_propietario, url_fotografia, fecha_ingreso, historia_mascota].includes('')){

        {/* El formulario no es válido. */}
        console.log("Hay almenos un campo sin datos válidos. Por favor completar el formulario.")
        setError(true)
        return

      } else{

        {/* El formulario es válido. */}
        console.log("El formulario es válido.")
        setError(false)
         
        const registro_paciente = {
          nombre_mascota, 
          nombre_propietario, 
          email_propietario, 
          ubicacion_propietario, 
          url_fotografia, 
          fecha_ingreso, 
          historia_mascota,
          id: generarID()
        }

        {/* Mostrar tabla del objeto en la consola. */}
        console.table(registro_paciente)

        {/* Agregar un nuevo registro a la colección de pacientes existente. */}
        setColeccionPacientes([...coleccion_pacientes, registro_paciente])

        {/* Limpiar el formulario. */}
        setNombreMascota('')
        setNombrePropietario('')
        setEmailPropietario('')
        setUbicacionPropietario('')
        setUrlFotografia('')
        setFechaIngreso('')
        setHistoriaMascota('')
        
        {/* Establecer la excepción de validación del formulario a true. */}
        setError(true)

        return


      }

    }
  
    {/**
    |--------------------------------------------------
    | Retornar el componente formulario con un título.
    |--------------------------------------------------
    */}
    return (
    <div className="md:w-1/2 lg:w-2/5">
        {/* Encabezado del formulario. */}
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
        {/* Descripción del formulario. */}
        <p className=" text-lg mt-5 text-center">
          Agrega nuevos pacientes {''}
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Administrar</button>

        </p>
        {/* Formulario para registrar un nuevo paciente. */}
        <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white shadow-md rounded-lg py-10 px-5 uppercase">
            

            {/**
             * Entrada #1: Nombre de la mascota.
            */}
            <div className=" mb-5">

              {/* Notificación de validación */}
              { exception_form ? <NotificacionAlert></NotificacionAlert> : <NotificacionExitosa></NotificacionExitosa> }
             
              <div>
                <label htmlFor="nombre-mascota" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nombre de la mascota {nombre_mascota}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="nombre-mascota"
                    id="nombre-mascota"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Nombre de la mascota..."
                    value={nombre_mascota}
                    onChange={(e)=> setNombreMascota(e.target.value)}
                  />
                </div>
              </div>



            </div>

            {/**
             * Entrada #2 Nombre del propietario.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="nombre-propietario" className="block text-sm font-semibold leading-6 text-gray-900">
                 Nombre del propietario
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="nombre-propietario"
                   id="nombre-propietario"
                   autoComplete="given-name"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="Nombre del propietario..."
                   value={nombre_propietario}
                   onChange={(e)=> setNombrePropietario(e.target.value)}
                 />
               </div>
             </div>



           </div>

           

          

          {/**
             * Entrada #4 Email del propietario.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="email-propietario" className="block text-sm font-semibold leading-6 text-gray-900">
                 Email del propietario
               </label>
               <div className="mt-2.5">
                 <input
                   type="email"
                   name="email-propietario"
                   id="email-propietario"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="Email del propietario..."
                   value={email_propietario}
                   onChange={(e)=> setEmailPropietario(e.target.value)}
                 />
               </div>
             </div>



           </div>


           {/**
             * Entrada #5 Ubicación.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="ubicacion-mascota" className="block text-sm font-semibold leading-6 text-gray-900">
                 Ubicación de la mascota
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="ubicacion-mascota"
                   id="ubicacion-mascota"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   value={ubicacion_propietario}
                   onChange={(e)=> setUbicacionPropietario(e.target.value)}
                 />
               </div>
             </div>



           </div>


           {/**
             * Entrada #4 Email del propietario.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="url-foto-mascota" className="block text-sm font-semibold leading-6 text-gray-900">
                 URL de la fotografía
               </label>
               <div className="mt-2.5">
                 <input
                   type="url"
                   name="url-foto-mascota"
                   id="url-foto-mascota"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="URL hacía la foto de la mascota..."
                   value={url_fotografia}
                   onChange={(e)=> setUrlFotografia(e.target.value)}
                 />
               </div>
             </div>

            </div>

            {/**
             * Entrada #4 Fecha de ingreso.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="fecha-ingreso" className="block text-sm font-semibold leading-6 text-gray-900">
                 Fecha de ingreso
               </label>
               <div className="mt-2.5">
                 <input
                   type="date"
                   name="fecha-ingreso"
                   id="fecha-ingreso"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   value={fecha_ingreso}
                   onChange={(e)=> setFechaIngreso(e.target.value)}
                 />
               </div>
             </div>

            </div>



           {/**
             * Entrada #6 Descripción.
            */}
            <div className=" mb-5">
             
             <div>
               <label htmlFor="historia-mascota" className="block text-sm font-semibold leading-6 text-gray-900">
                 Historia
               </label>
               <div className="mt-2.5">
                 <textarea
                   type="text"
                   name="historia-mascota"
                   id="historia-mascota"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="Aquí relate una breve historia de la mascota."
                   value={historia_mascota}
                   onChange={(e)=> setHistoriaMascota(e.target.value)}
                 />
               </div>
             </div>



           </div>


           {/**
             * Acción #1 Guardar.
            */}
            <div className=" mb-5 text-center">
             
            <button type="submit" className=" mt-5 cursor-poninter px-4 py-1 text-sm text-purple-400 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Guardar datos del paciente</button>


           </div>



        </form>
    </div>
  );
}

{/**
|--------------------------------------------------
| Exportar el componente formulario.
|--------------------------------------------------
*/}
export default Formulario;
