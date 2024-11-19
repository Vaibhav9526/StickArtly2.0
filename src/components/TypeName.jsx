import React, { useEffect, useState } from 'react';
import Footer from './Footer';

const TypeName = () => {
    const [memes, setMemes] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./Data.json');
                if (!response.ok) throw new Error('Failed to fetch memes');

                const data = await response.json();
                setMemes(data);
            } catch (err) {
            } finally {
            }
        };

        fetchData();
    }, []);

    const topics = Object.keys(memes)
    

    return (
        <>
            <div className="fixed inset-0 -z-10 bg-black text-white">

                <div className="absolute inset-0 [background:radial-gradient(circle,_#000000_10%,_#050e20_50%,_#0d1117_100%)]">
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full bg-transparent bg-[url('https://svgshare.com/i/sxG.svg')] bg-repeat bg-opacity-10"></div>
                </div>

                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-500"></div>
                    <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-t from-purple-600 via-pink-500 to-red-400"></div>
                </div>
            </div>
            <div className="px-2">
                {topics.map((type) => (
                    <div
                        key={type} 
                    >
                        <h2 className=" text-center text-white text-sm capitalize">
                            {type}
                        </h2>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default TypeName