import React from 'react'
import Tilt from 'react-tilt'
import styles from './Logo.module.css'
import icon from '../../assets/icon.png'

const logo = (props)=>{
    return (
        <div className= {styles.Logo}>
            <Tilt className={styles.Tilt} options={{ max : 80 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img src={icon}></img> </div>
            </Tilt>
        </div>

    )
}

export default logo