/**
 * Created by fazbat on 3/11/2016.
 */
import React from "react";

const VideoListItem = ({video, onVideoSelect})=> {//es6 same as const video = props.video
    const imgUrl = video.snippet.thumbnails.default.url;
  return (
      <li
          className="list-group-item"
          onClick={()=>{onVideoSelect(video)}}
      >
          <div className="media-list media">
              <div className="media-left">
                  <img src={imgUrl} alt={video.snippet.title} className="media-object"/>
              </div>
              <div className="media-body">
                  <div className="media-heading">{video.snippet.title}</div>
              </div>
          </div>
      </li>
  );
};


export default VideoListItem;