import React, {useState} from 'react'
import  '../../../styles/NewsBlockStyles.css'
import RedirectSVG from "./RedirectSVG/redirectSVG"
import axios from "axios";

const PostBlock = (currentData) => {
    if (!currentData.currentData.length){
        return <div className='container'>
                Upload data ...
        </div>
    }
    const news = []
    for (let i = 0; i<10; i++)
        {
        news.push(<div className='container'>
        <div className='informationBlock'>
            <h4 className='newsTitle'>{currentData.currentData[i].data.title}</h4>
            <h6 className='newsLink'>{currentData.currentData[i].data.url}</h6>
            <h6 className='userNTime'>by {currentData.currentData[i].data.by} on {new Date(currentData.currentData[i].data.time * 1000)
                .toLocaleString('en-US', {timeZoneName: 'short'})}</h6>
            <h6 className='scoreStyle'>Score: {currentData.currentData[i].data.score + (currentData.currentData[i].data.score === 1 ? ' point' : ' points')}</h6>
            <hr/>
        </div>

        <div className='redirectBlock'>
            <a href={currentData.currentData[i].data.url}>
                <RedirectSVG/>
            </a>
        </div>

    </div>)
    }
    return news
}


export default PostBlock;