import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const [showMore, setShowMore] = useState(false);

  const getMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div>
      <div className="mt-16 lg:mx-36 bg-gray-100"> 
 
      {showMore ? (
        <div>
          {news.map(data => (
          <div 
            key={data._id} 
            className="cursor-pointer shadow py-4 mb-6 bg-white">
              <Link to={`newsBlog/${data._id}`} >
                <div className="mx-5">
                    <h1 className="font-bold text-lg lg:text-xl">{data.title}</h1>
                    <h6 className="text-sm mt-2">{ data.excerpt === null ? "No Description" : data.excerpt }</h6>
                    <div className="mt-4 flex items-center">
                      <div className="h-4 w-8 rounded-full bg-cyan-600"></div>
                      <h1 className="font-semibold text-indigo-600 text-sm ml-4">{ data.author === null ? "unknown-artist" : data.author}</h1>
                    </div>
                    <div className="flex justify-end mt-8">
                      <h1 className="text-sm">{data.published_date}</h1>
                    </div>
                </div>
              </Link>
          </div>
      ))}
        </div>
      ):(
        <div>
          {news.slice(1, 10).map(data => (
          <div 
            key={data._id} 
            className="cursor-pointer shadow py-4 mb-6 bg-white">
              <Link to={`newsBlog/${data._id}`} >
                <div className="mx-5">
                    <h1 className="font-bold text-lg lg:text-xl">{data.title}</h1>
                    <h6 className="text-sm mt-2">{ data.excerpt === null ? "No Description" : data.excerpt }</h6>
                    <div className="mt-4 flex items-center">
                      <div className="h-4 w-8 rounded-full bg-cyan-600"></div>
                      <h1 className="font-semibold text-indigo-600 text-sm ml-4">{ data.author === null ? "unknown-artist" : data.author}</h1>
                    </div>
                    <div className="flex justify-end mt-8">
                      <h1 className="text-sm">{data.published_date}</h1>
                    </div>
                </div>
              </Link>
          </div>
      ))}
        </div>
      )}
      <h1 
        onClick={() => getMore()}
        className="text-base font-semibold text-center pb-8 pt-4 text-indigo-700">{showMore ? "Show Less" : "Show More"}</h1>
    </div>
    </div>
  )
}

export default NewsCard