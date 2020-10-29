import React from 'react'

const PhotoViewer = props  => {
    return (
        <div>
            <img style={{width:'100%',borderRadius:'4px'}} alt='dummy' src={props.imageUrl}></img>
        </div>
    )
}

export default PhotoViewer
