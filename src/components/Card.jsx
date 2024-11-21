import React, { useEffect, useState } from 'react';
import { CopyBtn } from '../assets/CopyBtn';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Card = () => {
  const API_URL = 'https://emoticons-api.vercel.app';
  const [memes, setMemes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const topicsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + '/api/data);
        if (!response.ok) throw new Error('Failed to fetch memes');

        const data = await response.json();
        setMemes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <p>Loading memes...</p>;
  if (error) return <p>Error: {error}</p>;

  const topics = Object.keys(memes).filter((topic) =>
    topic.toLowerCase().includes(searchQuery.toLowerCase())
);


  const totalPages = Math.ceil(topics.length / topicsPerPage);
  const startIndex = (currentPage - 1) * topicsPerPage;
  const currentTopics = topics.slice(startIndex, startIndex + topicsPerPage);
  
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on search

  };

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-black text-white">
        <div className="absolute inset-0 [background:radial-gradient(circle,_#000000_10%,_#050e20_50%,_#0d1117_100%)]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-transparent bg-[url('https://svgshare.com/i/sxG.svg')] bg-repeat bg-opacity-10"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-500"></div>
          <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-t from-purple-600 via-pink-500 to-red-400"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center py-6 px-4">
        <div className="flex w-full max-w-lg items-center space-x-2 sm:space-x-4">
          <input
            type="text"
            placeholder="Search for types..."
            className="flex-grow px-4 py-2 rounded-md text-gray-900 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <li className=""><Link className="text-white hover:text-blue-600" to="/TypeName" >See Types</Link></li>
          {/* <button
            onClick={() => console.log('Searching for:', searchQuery)}
            className="relative overflow-hidden rounded-md bg-blue-400 px-3 py-2.5 text-black duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
          >
            Search
          </button> */}
        </div>
      </div>

      {/* Cards */}
      <div className="px-4">
        {currentTopics.map((type) => (
          <div
            key={type}
            className="border-dashed border-2 border-teal-600 rounded-lg p-4 mb-6 shadow-md"
          >
            <h2 className="title text-center text-white text-3xl capitalize">
              {type}
            </h2>
            {Array.isArray(memes[type]) ? (
              memes[type].map((value, index) => (
                <div key={index} className="my-3">
                  <h3 className="text-white text-xl text-center">{value}</h3>
                  <CopyBtn copyMeme={value} />
                </div>
              ))
            ) : (
              <p>Data for {type} is not an array</p>
            )}
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? 'bg-gray-500'
                : 'bg-teal-600 hover:bg-teal-500'
            } text-white`}
          >
            Previous
          </button>
          <span className="text-white text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? 'bg-gray-500'
                : 'bg-teal-600 hover:bg-teal-500'
            } text-white`}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Card;
