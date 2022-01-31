import React from 'react'
import VideoItem from './VideoItem';


const VideoList=({videos,onVideoClick})=>{
    const RenderedList=videos.map(video=>{
        return <VideoItem video={video} onVideoClick={onVideoClick} />;
    });
    return <div className="ui list">{RenderedList}</div>;
};

export default VideoList;