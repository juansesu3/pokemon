import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { DetailPokemon } from '../components/DetailPokemon'
import Navbaaar from '../components/Navbaaar'
import Pokemon from '../components/Pokemon'
import { UseFetch } from '../components/UseFetch'


const AppRouter = () => {

   

    return (
        <div>
            <BrowserRouter>
                <Navbaaar />
                <Routes>
                    <Route path="/" element={<Pokemon />} />

                    <Route path=":name" element={<DetailPokemon />} />


                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default AppRouter
