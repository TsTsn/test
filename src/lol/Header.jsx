import React from 'react';
import {History} from './History'
import {Link} from 'react-router-dom'

export const Header=() => {
    const styles={
        container:{
            height:'15vh',
            width:'100vw',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            textAlign:'center'
        },
        buttonF:{
            border:'none',
            fontSize:'20px',
            fontWeight:'700',
            lineHeight:'23px',
            marginRight:'44px',
            color:'#02B589'
        },
        buttonS:{
            lineHeight:'45px',
            fontSize:'20px',
            fontWeight:'700',
            height:'50px',
            width:'180px',
            textAlign:'center',
            backgroundColor:'#02B589',
            borderRadius:'100px',
            marginRight:'5%',
            color:'white',
        },
        history:{
            lineHeight:'45px',
            fontSize:'20px',
            fontWeight:'700',
            borderRadius:'100px',
            color:'white',
            backgroundColor:'#02B589',
            height:'50px',
            width:'180px',
            marginRight:'2%'
        }
    }

return(
    <div style={styles.container}>
        {/* <form action="https://localhost:3000/lol/History">
           <input type="button"  style={styles.history} value="History" />
        </form> */}
        {/* <input type="button" value="History" style={styles.history}/> */}

        {/* <button style={styles.history} onclick="window.location.href='http://localhost:3000/lol/History';" >History</button> */}
        <Link to= '/History' style={styles.history}> History </Link>
        <Link to='/How' style={styles.buttonF}>How it works ???</Link>
        <Link to = '/Signin' style={styles.buttonS}> Sign in</Link>
       
        {/* <button style={styles.buttonS}> Sign in</button> */}
    </div>
)
}
































// import React from 'react';
// export const Header= () => {
   
//         const styles={
//             bigC:{
//                 height:'20vh',
//                 width:'100vw',
//                 display:'flex',
//                 flexDirection:'column'

//             },
//             buttonf:{
//                 color:'#02B589',
//                 height:'20px',
//                 width:'270px',
//             },
//             buttonS:{
//                 height:'40px',
//                 width:'180px',
//                 borderRadius:'100px',
//                 background:'#02B589;'
//             }
//         }
//         return(
//             <div style={styles.bigC}>a
//                 {/* <button variant='text'>how</button> */}
//             </div>
//         )

// }