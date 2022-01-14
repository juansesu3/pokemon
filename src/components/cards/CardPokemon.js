import React from 'react'
import { Link } from 'react-router-dom'
import { UseFetch } from '../UseFetch'

export const CardPokemon = ({ url }) => {
    // console.log(urlb);

    const estado = UseFetch(url)
    const { cargando, data } = estado

    
    return (
        <div>
            
            {cargando
                ?
                <h1>Cargando...</h1>
                : 
                <div className='card' stle={{width:'14rem'}}>
                <Link data={`${data.forms[0].name}` } style={{textDecoration:'none', color:'black'}} to={`${data.forms[0].name}` } >
                    <div className='card-header'>
                        <h5 className='card-title'>{data.id}</h5>
                    </div>
                    <div className='card-body'>
                        <img src={data.sprites.front_default} alt='pokemon' />
                    </div>
                    <div className='card-footer'>
                        <p className='card-text text-capitalize'><strong>NAME:</strong> {data.forms[0].name}</p>

                    </div>
                    <div className='card-footer'>
                        <p className='card-text text-capitalize'><strong>Type:</strong> {data.types[0].type.name}</p>

                    </div>
                    </Link>
                </div>}
                
        </div>
    )
}
