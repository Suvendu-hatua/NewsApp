import React from 'react'

function NewsItem(props) {
    return (
        <div className=' news-item my-3' style={{ alignItems: "center" }}>
            <div className="card" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "auto" }}>
               <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
               <span className="  badge rounded-pill bg-danger">
                {props.source}
                </span>
               </div>
                <img src={props.imageToUrl === null ? "https://images.news18.com/ibnlive/uploads/2022/07/national-emblem-1-165770803516x9.jpg" : props.imageToUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} <span className="badge bg-success">New</span></h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"}, on {new Date(props.date).toDateString()}</small></p>
                    <a href={props.url} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem