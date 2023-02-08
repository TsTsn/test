import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Header} from './Header'
import { Footer } from './Footer'

export const History = () => {
    const styles={
        container:{
            height:'100vh',
            width:'100vw',
            backgroundColor:'#02B589'
        },
        bottomC:{
            display:'flex',
            flexDirection:'row',
        }
    }
    // const [ res, setRes ]= useState ({link:"", short:""})
    // const [ url, setUrl ]= useState(" ")
    // const save= async () => {
    //     await axios
    //     .get ('http://localhost:8000', {link:url})
    //     .then((response) => {
    //         setRes({link: response.data.data.link, short:response.data.data.short})
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     setUrl("")
    // };
    const [url, setUrl] =useState(" ")
    const save= async () => {
        await axios
    }

    return(
        <>
        <Header/>
        <div style={styles.container}>
            <p> History </p>
            <div style={styles.bottomC}>
                <p> Given url </p>
                <p> Short url</p>
                {/* <div>{res.url}</div>
                <div>{res.short}</div> */}
            </div>
        </div>
        <Footer/>
        </>
    )
    
}