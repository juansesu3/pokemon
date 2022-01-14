import { useEffect, useState } from "react";


export const UseFetch = (url, urlb) => {

    const[resultado,setResultado]=useState({cargando:true,data:null})

    useEffect(()=>{
        getDatos(url)
        getDatos2(urlb)
    },[url])

    async function getDatos(url){
        // console.log(url);
        try{
            setResultado({cargando:true,data:null})
            const resp= await fetch(url)
            const data= await resp.json()
            setResultado({cargando:false,data})
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        
        getDatos2(urlb)
    },[urlb])
    async function getDatos2(urlb){
        // console.log(url);
        try{
            setResultado({cargando:true,data:null})
            const resp= await fetch(urlb)
            const data= await resp.json()
            setResultado({cargando:false,data})
        }
        catch(er){
            console.log(er)
        }
    }
    


    return resultado
}
