import "./Bienvenido.scss"

export const Bienvenido = ( {greeting} ) =>{
    return(
        <section>
            <img src="imagenesInicio/fondo.png" className="imagenPrincipalFondo" alt="fondo Web"></img>
            <h1>{greeting}</h1>
            <h2>Descubre nuestra amplia selección de bebidas de alta calidad y encuentra 
            el perfecto compañero para cada ocasión. Desde el refinado sabor del whisky, 
            hasta la versatilidad del gin y el vodka, tenemos todo lo que necesitas para satisfacer tus 
            gustos. ¡Salud!
            </h2>
        </section>

    )
}