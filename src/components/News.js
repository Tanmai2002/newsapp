import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  api = "563b86e1120b463c9b33bb1f8ee9c6ec";
  api2 = "4f5fc9d993b941dcb8971168282d04c0";
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalPages: 1,
      pageSize: 9,
      loading: true,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.api2}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    console.log(json_data);
    this.setState({
      articles: json_data.articles,
      page: 1,
      total_results: json_data.totalResults,
      pageSize: 9,
      loading: false,
    });
  }
  addnew= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.api2}&pageSize=${this.state.pageSize}&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    console.log(json_data);
    this.setState({
      articles: this.state.articles.concat(json_data.articles),
      page: this.state.page + 1,
      loading: false,
    });
  }

  nextButtonClicked = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.api2}&pageSize=${this.state.pageSize}&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    console.log(json_data);
    this.setState({
      articles: json_data.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  previousButtonClicked = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.api2}&pageSize=${this.state.pageSize}&page=${
      this.state.page - 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let json_data = await data.json();
    console.log(json_data);
    this.setState({
      articles: json_data.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };


  render() {
    return (
      <div className="container my-3 text-center">
        <h1>Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        
        { (
         <InfiniteScroll
    dataLength={this.state.articles.length} //This is important field to render the next data
    next={this.addnew}
    hasMore={this.state.articles.length!=this.state.total_results}
    loader={<Spinner/>}
    endMessage={
      <p style={{ textAlign: "center" }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
  >
    <div className="container">
    <div className="row">
            {this.state.articles.map((element,key) => {
              console.log(element);
              return (
                
                <div key={element.id} className="col-md-4 my-2">
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
}

export default News;
