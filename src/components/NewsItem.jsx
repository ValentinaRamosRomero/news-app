import React from 'react';
import image from '../assets/news.jpg'

export const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card
                        bg-info-subtle
                        text-dark 
                        d-inline-block
                        my-3 mx-3 
                        px-2 py-2"
            style={{ maxWidth: "348px" }}>
            <img src={src ? src : image}
                style={{ height: "200px", width: "330px" }}
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">
                    {description ? description.slice(0.90) : "News Description is unavailable"}
                </p>
                <a href={url} className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
}
