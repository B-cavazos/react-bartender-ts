import React from 'react'
import video from '../assets/video.mp4'

const HeaderVid = () =>{

    const videoSource = '../assets/video.mp4';
    if (videoSource){
        return(
                <span className="video-control">
                    <span className="row text-center header-text">
                        <h1>
                            Drinksy
                        </h1>
                        <h2 className="sub-head">The Beverage Database</h2>
                    </span> 
                    <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '400px',
                        top:'50px',
                        left:'0px',
                        objectFit: 'cover',
                        zIndex:-1
                    }}
                    >
                        <source src={video} type="video/mp4"/>
                    </video>
            </span>
        )    
    } return (
        <div>
            <h1 className="static-header text-center">Drinksy</h1>
        </div>   
    )

}

export default HeaderVid