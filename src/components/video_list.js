/**
 * Created by fazbat on 3/11/2016.
 */
import React from "react";
import  VideoListItem from "./video_list_item";

const VideoList = (props)=>{
    const VideoList = props.videos.map((video)=>{
        return <VideoListItem
            video={video} key={video.etag}
            onVideoSelect={props.onVideoSelect}
        />;
    });
    return (
        <ul className="col-md-4 list-group" >
            {VideoList}
        </ul>
    );
};

export default VideoList;