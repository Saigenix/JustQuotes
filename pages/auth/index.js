import { useState } from 'react'
import styles from '../../styles/Auth.module.css'
import Router from 'next/router'

export default function Auth() {
const [Text,setText] = useState("")
 const handleAuth = () => {
    if(Text == ""){
        alert("Plz Enter Something")
        return
    }
    const {pathname} = Router
    if (Text == "Sai4545" && pathname == '/auth'){
       Router.push({pathname:'/auth/Sai4545',
       query: {auth:true}})
   }else{
    alert("Wrong Password")
   }

    }
 
  return (
    <div className={styles.box}>
        <input type="text" className={styles.inp} placeholder="Password" name="name" id='name' required value={Text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAuth} className={styles.btn}>
            Login
        </button>
    </div>
  )
}
