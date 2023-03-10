{/* Definir un encabezado simple y exportarlo. */}
export default function NotificacionExitosa(){

    {/* Retornar el componente NotificacionExitosa. */}
    return(
    
       
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="/images/notification-success.png" alt="Formulario no válido"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Validación de datos</div>
                <p className="text-slate-500">¡El formulario es válido!</p>
            </div>
        </div>
        
        
    )

}
