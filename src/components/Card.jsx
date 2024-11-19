import React, { useEffect, useState } from 'react';
import { CopyBtn } from '../assets/CopyBtn';

const Card = () => {
  const [memes, setMemes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await fetch('./meme.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMemes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the meme data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading memes...</p>;
  }

  return (

    <div>
      <div className="fixed inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#051334_100%)]" />
      {Object.keys(memes).map((type) => (
        <div key={type} className='border-dashed border-2 border-teal-600'>
          <h2 className="title text-center text-white text-3xl">{type}</h2>
          {Array.isArray(memes[type]) ? (memes[type].map((meme) => (<div key={meme.id}>
            <h3 className='text-white text-xl text-center mt-3 mb-3'>{meme.value}</h3>
            <CopyBtn copyMeme={meme.value} />
            <br />
          </div>
          ))
          ) : (
            <p>Data for {type} is not an array</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
