import React from 'react'
import styles from './FaceRecognition.module.css'
import {connect} from 'react-redux'

const FaceRecognition = (props)=>{
    let boundingBox = null
    if(props.resultBox){
        boundingBox = <div className={styles.boundingbox} style={{top:props.resultBox.topRow,left:props.resultBox.leftCol,right:props.resultBox.rightCol,bottom:props.resultBox.bottomRow}} />
    }
    return (
        <div className={styles.FaceRecognition}>
            <img id='faceImage' src={props.resultUrl}></img>
            {boundingBox}
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        resultUrl: state.url,
        resultBox: state.box
    }
}
export default connect(mapStateToProps)(FaceRecognition) 