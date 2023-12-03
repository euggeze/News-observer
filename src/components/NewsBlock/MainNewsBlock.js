import React, {useEffect, useState} from 'react'
import '../../styles/NewsBlockStyles.css'
import PostBlock from "./PostBlock/PostBlock";
import axios from "axios";
import BlockPagination from "../Pagination/BlockPagination";

const MainNewsBlock = (selectedCategory) => {
    const newsLinks = {
            'New stories': 'https://hacker-news.firebaseio.com/v0/newstories.json',
            'Best stories': 'https://hacker-news.firebaseio.com/v0/beststories.json',
            'Top stories': 'https://hacker-news.firebaseio.com/v0/topstories.json'

        }
    const [currentListIds, setCurrentListIds] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const fetchIds = async () => {
        try {
            const ids = await axios.get(newsLinks[selectedCategory.selectedCategory])
            if (ids.data.length){
                setCurrentListIds(ids.data)
            }

        }
        catch (NetworkError){
            alert('Error')
        }
    }

    const fetchData = async () => {
        try {
            if (!currentListIds.length)
                return

            let data_list = []
            for (let i = currentPage*10; i < currentPage*10 + 10; i++) {
                const new_data = await axios.get('https://hacker-news.firebaseio.com/v0/item/' + currentListIds[i]  + '.json')
                data_list.push(new_data)
            }
        setCurrentData(data_list)
        console.log(currentData)
        }
        catch (NetworkError){
            alert('Error')
        }
    }

    useEffect(() => {
        fetchIds()
    }, [selectedCategory])

    useEffect(() => {
        setCurrentData([])
        fetchData()
    }, [currentListIds, currentPage]);

    function change_page (changerPage) {
        if (changerPage === 'Next'){
            setCurrentPage(currentPage+1 > 49? currentPage:currentPage+1)
        }
        else if (changerPage === 'Previous'){
            setCurrentPage(currentPage-1 < 0?currentPage:currentPage-1)
        }
    }
    return (
  <div className={'mainBlock'}>
      <BlockPagination change_page={change_page}/>
      <PostBlock currentData={currentData}/>
  </div>
);
}

export default MainNewsBlock