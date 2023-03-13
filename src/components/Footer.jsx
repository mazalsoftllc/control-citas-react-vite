{/* Importar las librerias. */}
import { Footer, Carousel } from "flowbite-react"

{/* Definir un pie de página. */}
export default function PiePagina(){

    {/* Retornar el componente NotificacionExitosa. */}
    return(
        <>

<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <img
      src="https://i.ibb.co/XDbFHLV/tarjeta-presentacion-1.png"
      alt="..."
    />
    <img
      src="https://i.ibb.co/KV8qN4X/tarjeta-presentacion-2.png"
      alt="..."
    />
    <img
      src="https://i.ibb.co/kcYkC5k/tarjeta-presentacion-marketing.png"
      alt="..."
    />
    <img
      src="https://i.ibb.co/nwJjMGj/tarjeta-presentacion-apps-moviles.png"
      alt="..."
    />
    <img
      src="https://i.ibb.co/d5kbYp1/tarjeta-presentacion-pmad.png"
      alt="..."
    />
  </Carousel>
</div>


           <Footer container={true}>
             <Footer.Copyright
                href="#"
                by="Mazalsoft™"
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="https://github.com/mazalsoftllc">
                    GitHub |
                </Footer.Link>
                <Footer.Link href="https://www.youtube.com/@mazalsoftllc"> 
                    Youtube |
                </Footer.Link>
                <Footer.Link href="https://www.twitter.com/mazalsoftllc/">
                    Twitter |
                </Footer.Link>
                <Footer.Link href="https://www.mazalsoft.xyz">
                    Sitio web |
                </Footer.Link>
            </Footer.LinkGroup>
            </Footer>
        </>
        
        
    )

}


