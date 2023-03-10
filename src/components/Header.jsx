{/* Definir un encabezado simple y exportarlo. */}
export default function Header(){

    {/* Retornar el componente Header. */}
    return(
        
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="/images/logo.png" alt="Control de citas"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Control de citas</div>
                    <p className="text-slate-500">¡Bienvenid@ a la veterinaria!</p>
            </div>
      </div>
        
        
    )

}

