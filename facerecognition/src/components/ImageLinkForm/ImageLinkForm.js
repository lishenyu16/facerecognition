import React,{useEffect,useState} from 'react'
import styles from './ImageLinkForm.module.css'
import Clarifai from 'clarifai'
import {connect} from 'react-redux'

const ImageLinkForm = (props)=>{

    const [url,setUrl] = useState('')

    const inputChangeHandler = (event)=>{
        setUrl(event.target.value)
        props.onSetUrl(event.target.value)
    }
    const calculateFaceLocation = (data)=>{
        const image = document.getElementById('faceImage')
        const width = Number(image.width)
        const height = Number(image.height)
        return {
            leftCol: data.left_col*width,
            rightCol: width-data.right_col*width,
            topRow: data.top_row*height,
            bottomRow: height-data.bottom_row*height
        }
    }
    const displayFaceBox = (box)=>{
        console.log(box)
        props.onSetBox(box)
    }
    const detectHandler = ()=>{
        const app = new Clarifai.App({
            apiKey: '73aec42aa5b54cd2ad3188eb56a1df7d'
           });
        app.models.predict(Clarifai.FACE_DETECT_MODEL, url)
            .then(res=>{
                displayFaceBox( calculateFaceLocation(res.outputs[0].data.regions[0].region_info.bounding_box) )
            })
            .catch(err=>{
                console.log(err)
            })
        
    }
    return (
        <div className={styles.ImageLinkForm}>
            <p>this will detect the brain in your image just give it a link to detect:</p>
            <div className={styles.Input}>
                <input type='text' onChange={inputChangeHandler}></input>
                <button onClick={detectHandler}>Detect</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        resultUrl: state.url
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSetUrl: (url)=>dispatch({type:'setUrl',payload:url}),
        onSetBox: (box)=>dispatch({type:'setBox',payload:box})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageLinkForm)