import React, { useState } from 'react'
import { UseFetch } from './UseFetch'
import { Cards } from './cards/Cards'
import { Button } from 'react-bootstrap'
import '../styles/Pokemon.css'
import { DetailPokemon } from './DetailPokemon'

const Pokemon = () => {

    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const estado=UseFetch(url)
    const {cargando,data}=estado
    cargando?console.log('cargando')
    :console.log(data.results);







    // const [urlV,setUrlV]=useState('https://pokeapi.co/api/v2/evolution-chain')
    // const estadoV=UseFetch(urlV)
    // const {cargandoV,dataV}=estadoV
    // cargando?console.log('cargando')
    // :console.log('evolution',data.results);

    return (
        <div style={{marginTop:'150px'}}>
            <img className='image' src='https://res.cloudinary.com/dv08oqgvx/image/upload/v1642051098/AmazonasSprint3/og8k80oikvsfddkbcszb.png'/>
            {cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
            <Cards results={data.results}/>
            <div className='containerb'>
                <buttom onClick={()=>setUrl(data.previous)} className='botonA' >Anterior</buttom>
                <img className='pokeball' src='https://res.cloudinary.com/dv08oqgvx/image/upload/v1642051451/AmazonasSprint3/c09ancudodjz6kzrydy2.png'/>
                <buttom onClick={()=>setUrl(data.next)} className='botonA' >Siguiente</buttom>
            </div>
            
            </div>
            }
        </div>
    )
}

export default Pokemon
