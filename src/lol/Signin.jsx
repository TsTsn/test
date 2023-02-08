import React from 'react'
import { Footer } from "./Footer";
import logo from '../zurag/logo.png'
import {Link} from 'react-router-dom'


export const Signin = () => {
    const styles={
        container:{
            height:"100vh",
            width:'100vw',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        ww:{
            padding:'10px',
            lineHeight:'37px',
            fontSize:'23px',
            fontWeight:'700',
            height:'37px',
            width:'130px',
            color:'#02B589',
            marginLeft:'6%'
        },
        input1:{
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.16)',
            height:'44px',
            width:'381px',
            borderRadius:'100px',
            border:'1px solid #F0F0F0',
            textAlign:'center',
            fontWeight: '300',
            fontSize: '16px',
            color:'grey'
        },
        input2:{
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.16)',
            height:'44px',
            width:'381px',
            borderRadius:'100px',
            border:'1px solid #F0F0F0',
            textAlign:'center',
            fontWeight: '400',
            fontSize: '20px',
            color:'grey'
        },
        logbutton:{
            height:'43px',
            width:'380px',
            backgroundColor:'#02B589',
            color:'white',
            fontWeight: '700',
            fontSize: '20px',
            borderRadius:'100px',
        },
        link:{
            color:'#02B589',
            height:'18px',
            width:'257px',
            padding:'20px',
            marginLeft:'7%',
        }
    }
    return (
        <>
        <div style={styles.container}>
            <img src={logo} style={{height:'120px', width:'180px'}}></img>
            <p style={styles.ww}> Sign in</p>
            <div style={{ display:'flex', flexDirection:'column'}}>
                <p style={{marginLeft:'4%'}}>Email</p>
                <input value=' name@mail.doman' style={styles.input1}/>
                <p style={{marginLeft:'5%'}}>Password</p>
                <input value='********' style={styles.input2}/>
            </div>
            <div style={{display:'flex', flexDirection:'row', padding:'25px'}}>
                <Link style={{color:'#02B589', height:'18px', width:'120px'}}> remember me</Link>
                <Link style={{width:'148px', height:'18px', color:'black', marginLeft:'26%'}} > Forgot password</Link>
            </div>
            <button style={styles.logbutton}> Log in</button>
            <Link style={styles.link}> Tap here if you're new here</Link>
        </div>
        <Footer/>
        </>
    )
}