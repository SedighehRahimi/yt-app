import './VideoItem.css'
import React from 'react'

const videoItem= ({video,onVideoClick}) =>{
    return (
        <div className="video-item item" onClick={()=>onVideoClick(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};
export default videoItem;