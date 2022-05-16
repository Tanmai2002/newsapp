import React, { Component,useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";

import InfiniteScroll from 'react-infinite-scroll-component';

let api = "563b86e1120b463c9b33bb1f8ee9c6ec";
let api2 = "4f5fc9d993b941dcb8971168282d04c0";
const News=(props)=>{
  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(9);
  const [total_results, settotal_results] = useState(0);

  const initializeNews= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${api2}&pageSize=${pageSize}`;
 
    let data = await fetch(url);
    let json_data = await data.json();
    // console.log(json_data);
    setArticles(json_data.articles);
    setPage(1);
    settotal_results(json_data.totalResults);

  }
  useEffect(() => {
    
    initializeNews();
    }, []);
  


  const addnew= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${api2}&pageSize=${pageSize}&page=${
      page + 1
    }`;
    let data = await fetch(url);
    let json_data = await data.json();
    console.log(json_data);
    setArticles(articles.concat(json_data.articles));
    setPage(page+1);
    
  }

 


    return (
      <div className="container my-3 text-center">
        <h1>Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        
        { (
         <InfiniteScroll
    dataLength={articles.length} //This is important field to render the next data
    next={addnew}
    hasMore={articles.length!=total_results}
    loader={<Spinner/>}
    endMessage={
      <p style={{ textAlign: "center" }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
  >
    <div className="container">
    <div className="row">
            {articles.map((element,key) => {
              console.log(element);
              return (
                
                <div key={key} className="col-md-4 my-2">
                  <Newsitem
                    title={element.title == null ? "" : element.title}
                    desc={
                      element.description == null
                        ? ""
                        : element.description.slice(0, 88)
                    }
                    img={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
                
              );
            })}
            </div>
            </div>
        </InfiniteScroll>
           
        )}
      </div>
      
    );
  
}

News.propTypes={
  category : PropTypes.string
}

News.defaultProps={
  category : 'general'
}
export default News;
