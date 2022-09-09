
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';


function News(props) {
    const [articles, setarticles] = useState([]);
    const [totalResults, settotalResults] = useState(0);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);

    const upDateNews = async () => {
        props.setprogress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=57061c614fd54e1f877bb13f385eb040&pageSize=10&page=${page}`;
        setloading(true);
        props.setprogress(40);
        let data = await fetch(url);
        props.setprogress(60);
        let parseData = await data.json();
        props.setprogress(80);
        console.log(parseData.articles);
        console.log(parseData.totalResults);
        setarticles(parseData.articles);
        settotalResults(parseData.totalResults);
      
        setloading(false);
        props.setprogress(100);
    }

    useEffect(() => {
        upDateNews();

    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=57061c614fd54e1f877bb13f385eb040&pageSize=10&page=${page + 1}`
        setpage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData.articles);
        console.log(parseData.totalResults);
        setarticles(articles.concat(parseData.articles));
        settotalResults(parseData.totalResults);
    }
    const capitalize=(name)=>{
      return (name.charAt(0).toUpperCase())+name.substring(1);
    }
    return (
        <div className='news-container container my-3'>
            <h2 className='text-center'>NewsMonkey - Top {capitalize(props.category)} Headlines</h2>
            {loading ? <Spinner /> : null}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="row">
                    {articles.map((article, index) => {
                        return <div className="col-md-4"  key={index}>
                            <NewsItem title={article.title} desc={article.description} source={article.source.name} author={article.author} date={article.publishedAt} imageToUrl={article.urlToImage} url={article.url} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default News