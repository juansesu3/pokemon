import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cards } from './cards/Cards';

import { UseFetch} from './UseFetch';
import '../styles/Cards.css'
import { Carousel } from 'react-bootstrap';

export const DetailPokemon = ( ) => {

    

    const {name} = useParams()
    const [urlb,setUrlb]=useState(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const estado=UseFetch(urlb)
    const {cargando,data}=estado
    cargando?console.log('cargando')
    :console.log("Name:",data);


    return (
        <div>

{cargando
    ?
    <h1>Cargando...</h1>
    : 
    <div className='card-detail' >
   
        <div className='card-header'>
            <h5 className='card-title'>{data.id}</h5>
        </div>
        <div className='image'>
        <Carousel variant="dark">
  <Carousel.Item>
  <img src={data.sprites.front_default} alt='pokemon' />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={data.sprites.back_shiny} alt='pokemon' />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src={data.sprites.front_shiny} alt='pokemon' />
    <Carousel.Caption>
     
    </Carousel.Caption>

    
  </Carousel.Item>
  <Carousel.Item>
  <img src={data.sprites.back_default} alt='pokemon' />
    <Carousel.Caption>
     
    </Carousel.Caption>

    
  </Carousel.Item>
</Carousel>
            
        </div>
        <div className='card-footer'>
            <p className='card-text text-capitalize'><strong>NAME:</strong> {data.name}</p>

        </div>
        <div className='card-footer'>
            <p className='card-text text-capitalize'><strong>Type:</strong> {data.types[0].type.name}</p>

        </div>
        
    </div>}
       
         
        
        

                

        </div>
    )
}


// {cargando
//     ?
//     <h1>Cargando...</h1>
//     : 
//     <div className='card' stle={{width:'14rem'}}>
//    
//         <div className='card-header'>
//             <h5 className='card-title'>{data.name}</h5>
//         </div>
//         <div className='card-body'>
//             <img src={data.name} alt='pokemon' />
//         </div>
//         <div className='card-footer'>
//             <p className='card-text text-capitalize'><strong>NAME:</strong> {data.name}</p>

//         </div>
//         <div className='card-footer'>
//             <p className='card-text text-capitalize'><strong>Type:</strong> {data.name}</p>

//         </div>
//         
//     </div>}