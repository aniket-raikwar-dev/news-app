import React from 'react';
import { useParams } from 'react-router-dom';

const NewsFullData = ({ news }) => {

  const { id } = useParams();

  return (
   <div className="mx-0 lg:mx-36 mt-16">
     {
       news.filter(data => data._id === id).map(data => (
         <div key={data._id} className="px-4 pb-4 pt-4">
           <div className="pt-8 flex items-center">
             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600">
               <div className="w-8 h-4 rounded-full bg-indigo-700"></div>
             </div>
             <div className="ml-4">
               <h1 className="font-bold">{ data.author === null ? "unknown-artist" : data.author}</h1>
               <h1 className="text-sm">Posted at: {data.published_date}</h1>
             </div>
           </div>
           <h1 className="mt-12 font-semibold text-2xl lg:text-3xl">{data.title}</h1>
           <p className="py-4">{data.rights} <span className="text-indigo-700">[{data.country}]</span></p>
           <div className="mt-12 w-24 px-2 flex justify-center items-center py-2 rounded-md bg-indigo-600">
             <h1 className="text-white">#{data.topic}</h1>
           </div>
           <div className="mt-4 mb-4 h-[0.5px] w-5/6 bg-gray-500"></div>
           <p>{data.excerpt}</p>
           <p className="mt-12 pb-4">{data.summary}</p>
           <div className="mt-4 pb-8">
              <a href={data.link} target="_blank" className="text-indigo-700" rel="noreferrer">[Read Full Article]</a>
           </div>
         </div>
       ))
     }
   </div>
  )
}

export default NewsFullData