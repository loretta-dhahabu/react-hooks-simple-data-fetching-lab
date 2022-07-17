// create your App component here
import React,{useState, useEffect} from "react";

function App ()
{
    const [ image, setImage ] = useState( "" );
    const [ isLoaded, setIsLoaded ] = useState( false );

    useEffect( () =>
    {
        fetch( "https://dog.ceo/api/breeds/image/random" )
        .then( response => response.json ())
            .then( ( data ) =>
            {
                setIsLoaded( !isLoaded )
               setImage( data.message)
            } )
    }, [] )
    if ( !isLoaded )
    {
        return <p>Loading...</p>;
    }
    else
    {
        return (
          <>
            <img src={image} alt="A Random Dog"></img>
          </>
        ); 
    }
    
}
export default App;

