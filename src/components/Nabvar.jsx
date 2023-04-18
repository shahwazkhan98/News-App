import React, { useContext, useState } from 'react'
import NewsContext from '../context/NewsContext'
import { getNews } from '../context/NewsAction'

const Nabvar = ({ allNews }) => {

  const getWeather = async (topic)=> {
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=b217d1c910c64cc4962103628232802&q=${topic}&aqi=yes`)
    const data1 = await response.json()
      return data1
    }
  const [weather, setWeather] = useState(getWeather)
  console.log(getWeather)

  const { dispatch } = useContext(NewsContext)

  const [text, setText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text == "") {
      window.alert("Please Type Something")
    } else {

      const data = await getNews(text)
      dispatch({
        type: "GET_NEWS",
        payload: data
      })

      
    }

    setText("")
  }
  

  const btnhandle = (topic)=>{
    setText(topic)
    
  }


  return (
    <>
      <div className="main-navbar">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand h1  taaza-khabar" href="/">Taaza Khabar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex " role="search" onSubmit={(e) => handleSubmit(e)}>
             <span>
              <input value={text} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setText(e.target.value)} />
              <button className="btn btn-outline-danger" type="submit">Search</button>
              </span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-itm">
                  <button className="nav-btn"  onClick={() => btnhandle('Sports')}>SPORTS</button>
                </li>
                <li className="nav-item">
                  <button className="nav-btn"  onClick={() => btnhandle('Bussiness')}>BUSSINESS</button>
                </li>
                <li className="nav-item">
                  <button className="nav-btn" onClick={() => btnhandle('Technology')}>TECHNOLOGY</button>
                </li>
                <li className="nav-item">
                  <button className="nav-btn" onClick={() => btnhandle('Politics')}>POLITICS</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div className='mark'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVlI8gOTXaNtd8IdyaUhpYFC2MnnUfhiWFQ&usqp=CAU" alt="" />
        <marquee behavior="" direction=""> {allNews[0].title} </marquee>
        {/* <h1>{getWeather}</h1> */}
        <iframe src="https://free.timeanddate.com/clock/i8t55c34/n1641/ftb/tt0/tw0/tm1/ts1/tb4" frameborder="0" width="88" height="34"></iframe>
      </div>
      </div>
    </>
  )
}

export default Nabvar
