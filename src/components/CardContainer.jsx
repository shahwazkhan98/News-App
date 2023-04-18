import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard'
import NewsContext from '../context/NewsContext'
import { getNews } from "../context/NewsAction"
import Nabvar from './Nabvar'
import Slidder from './Slidder'
import Spinner from './Spinner'

const CardContainer = () => {

const {allNews , dispatch} = useContext(NewsContext)

const getData = async() => {
   const data = await getNews("India")
    dispatch({
        type : "GET_NEWS",
        payload : data
    })
}

useEffect(()=>{
    getData()
},[])


if(!allNews || allNews.length === 0){
    return(
        <>
       <Spinner/>
        </>
    )
}
 return (
    <>
    <Nabvar allNews={allNews}/>
    <Slidder allNews={allNews}/>
   <div className="row g-5 p-5">
    {
        allNews.map((news , index) => <NewsCard key={index} news={news}/>)
    }
   </div>
    </>
  )
}

export default CardContainer
