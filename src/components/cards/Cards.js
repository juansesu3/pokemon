import React from 'react'
import { CardPokemon } from './CardPokemon'
import '../../styles/Cards.css'

export const Cards = ({results}) => {
    
    
    return (
        <div className='conatiner'>
            <ul className='cards'>
                {results.map(p=>(
                    <li className='cards-item' key={p.name}>
                        <CardPokemon url={p.url}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
