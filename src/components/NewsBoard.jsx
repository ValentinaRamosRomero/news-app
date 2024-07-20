import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem';
import articles from "./data.json";

export const NewsBoard = () => {

  return (
  <div>
      <h2 className='text-center'><span className='badge bg-primary p-2'>News</span></h2>
      {articles.map((article,index)=>{
          return <NewsItem key={index} 
                  title={article.title}
                  description={article.description}
                  src={article.urlToImage}
                  url={article.url}
                  />
      })}
  </div>
)
}