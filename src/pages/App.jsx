import React from 'react';
import axios from 'axios';
import logo from '../zurag/logo.png'
import { useState } from 'react';
import {Header} from '../lol/Header'
import {Footer} from '../lol/Footer'


export const App = () => {
    const styles={
        container:{
            height:'100vh',
            width:'100vw',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        },
        containerM:{
            height:'80vh',
            width:'100vw',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        logo:{
            height:'120px',
            width:'180px',
            display:'flex',
            justifyContent:'center'
        },
        input:{
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.16)',
            height:'40px',
            width:'580px',
            borderRadius:'100px',
            textAlign:'center'
        },
        button:{
            height:'44px',
            width:'190px',
            backgroundColor:'#02B589',
            textAlign:'center',
            color:'white',
            padding:'13px',
            borderRadius:'100px'
        },
        buttonC:{
            padding:'40px',
            dislpay:'flex',
            flexDirection:'row'
        },
        bottomC:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            paddingTop:'55px',
            textAlign:'center'
        },
        bottomInput:{
            border:'0.5px solid grey',
            borderRadius:'50px'
        },
        bottomButton:{
            borderRadius:'50px',
            height:'20px',
            width:'90px',
            marginLeft:'3%',
        },
        BB:{
            display:'flex',
            flexDirection:'row',
        },
        pp:{
            opacity: '0.5',
        },
        bbC:{
            height:'21px',
            border:'0.5px solid grey',
            borderRadius:'50px'
        },
        BOTTOM:{
            display:'flex',
            flexDirection:'row'
        }
    }
    // const [res, setRes]= useState({link:"", short:""})
    // const [link, setLink]= useState("")
    // const create= async () => {
    //     await axios
    //     .post('http://localhost:8000/link', {link:link})
    //     .then((response) => {
    //         setRes({link: response.data.data.link, short: response.data.data.short})
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     });
    //     setLink("");
    // };

  const [link, setLink] = useState("");
  const [res1, setRes1] = useState();
  const [res2 , setRes2] = useState();

  const create = async () => {
    await axios
      .post("http://localhost:8000/link", {link : link})
      .then((response) => {
        setRes1(response.data.data.link);
        setRes2(response.data.data.short);
      })
      .catch((error) => {
        console.log(error); 
      });
      setLink("")
    };

    return (
        <>
        <Header/>
        <div style={styles.container}>
          
                <div style={styles.logo}>
                  <img src={logo} alt='img'></img>
                </div>
                <div style={styles.buttonC}>
                    <input style={styles.input} 
                    placeholder="Type a url"
                    onChange={(e)=> setLink(e.target.value)}/>
                    <button style={styles.button} onClick={create} >shorten it</button>
                </div>
                
                <div style={styles.BOTTOM}>
                    <div style={styles.bottomC}>
                        <p style={styles.pp}>given url</p>
                        {/* <input style={styles.bottomInput} >{link}</input> */}
                      <div style={styles.bbC}>{res1}</div>
                        <p style={styles.pp}>shorten url</p>

                      <div style={styles.BB}>
                         <div id="textt">{res2}</div>
                         <button onClick={() => {navigator.clipboard.writeText(res2)}} style={styles.bottomButton}> copy url</button>
                      </div>
                    </div>
                </div>
                
        </div>
        <Footer/>
        </>
    )
}











































// import React from 'react'
// import logo from '../zurag/logo.png'
// import {Header} from '../lol/Header'

// export const App = () => {
//     const styles={
//         bigC:{
//             border: "1px solid grey",
//             display:'flex',
//             flexDirection:'row',
//             justifyContent:'center',
//             alignItems:'center',
//             height:'100vh',
//             width:'100vw',
//             zIndex:'-1'
//         },
//         zurag:{
//             display:'flex',
//             justifyContent:'center',
//             alignItems:'cneter',
//             height:'80px',
//             width:'180px'

//         },
//         input:{
//             border:'1px solid #F0F0F0',
//             height:'40px',
//             width:'580px',
//             boxShadow:'0px 1px 5px rgba(0, 0, 0, 0.16)',
//             borderRadius:'100px' 
//         },
//         button:{
//             background:'#02B589',
//             heihgt:'44px',
//             width:'190px',
//             borderRadius:'100px',
//             color:'#02B589'
//         },
//         littleC:{
//             display:'flex',
//             flexDirection:'column'
//         }

//     }
//     return (
       
        
//         <div style={styles.bigC}>
//             <Header/>
//             <div style={styles.zurag}>
//                  <img src={logo} alt='img'></img>
//             </div>
           
//             <div style={styles.littleC}>
//                 <input type='text' placeholder='aaa'/>
              
//             </div>
//         </div>  
//     )
// }

