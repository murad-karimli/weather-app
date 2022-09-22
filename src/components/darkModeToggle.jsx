import React from 'react'
import{IoMdSunny}from "react-icons/io"
import{FaMoon} from "react-icons/fa"
import styles from "../style/darkModeToggle.module.css"
function DarkModeToggle() {
    function toggle()
    {
        document.body.classList.toggle('dark');
    }
  return (
 <>
    <div className='p-4 '>
    <input onChange={toggle} type="checkbox" className={styles.checkbox} id="checkbox"/>
    <label htmlFor="checkbox" className={styles.label}>
      <FaMoon className={styles.famoon}/>
      <IoMdSunny className={styles.fasun}/>
      <div className={styles.ball}/>
      </label>
    </div>
 </>
  )
}

export default DarkModeToggle