/**
 * Created by fazbat on 3/11/2016.
 */
import React, {Component} from "react";
import ReactDom from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import Variables from "../variables"; //not on GitHub
import VideoDetail from "././components/video_detail"

const API_KEY = Variables.YOUTUBE_API_KEY; //key in in .gitignore

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("puppy love");

    }

    render() {
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar  onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}>
                </VideoList>
            </div>
        );
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term: term}, (videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });

    }
}


ReactDom.render(<App />, document.querySelector(".container"));