import React from 'react';

const VideoDetail=({video})=>{
    
    if(!video)
    return <div>Nothing has selected yet</div>
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
return (
    <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
            <div className="ui header">{video.snippet.title}</div>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    );
};

export default VideoDetail;