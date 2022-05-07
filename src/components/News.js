import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
    api='563b86e1120b463c9b33bb1f8ee9c6ec';
   api2='4f5fc9d993b941dcb8971168282d04c0';
    constructor(){
        super();
        this.state={
            articles : [],
            page :1,
            totalPages : 1,
            pageSize : 9,
            loading :true

        }
    }
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.api2}&pageSize=9`
      this.setState({loading :true})
      let data=await fetch(url)
      let json_data=await data.json()
      console.log(json_data)
      this.setState({articles : json_data.articles,page :1 , total_results : json_data.totalResults, pageSize :9,loading :false})
    }

    nextButtonClicked =async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.api2}&pageSize=9&page=${this.state.page+1}`
      this.setState({loading :true})
      let data=await fetch(url)
      let json_data=await data.json()
      console.log(json_data)
      this.setState({articles : json_data.articles,page :this.state.page+1, loading :false})

    }
    previousButtonClicked= async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.api2}&pageSize=9&page=${this.state.page-1}`
      this.setState({loading :true})
      let data=await fetch(url)
      let json_data=await data.json()
      console.log(json_data)
      this.setState({articles : json_data.articles,page :this.state.page-1,loading :false})
    }
  render() {
      
    return (
      <div className='container my-3 text-center'>
          <h1>Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          {!this.state.loading && <div className='row'>
                    {this.state.articles.map((element)=>{
                            console.log(element);
                return <div key={element.id}  className="col-md-4 my-2">
                            <Newsitem title={element.title==null?"":element.title} desc={element.description==null?"":element.description.slice(0,88)} img={element.urlToImage} newsurl={element.url}/>
                            
                </div>
                    }
                    )
                    
            
                    }
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <=1} className='btn btn-primary' onClick={this.previousButtonClicked}>Previous</button>
            <button disabled={this.state.page== Math.ceil(this.state.total_results/this.state.pageSize)} className='btn btn-primary' onClick={this.nextButtonClicked}>Next</button>
          </div>
                 
          </div>}
      </div>
    )
  }
}

export default News