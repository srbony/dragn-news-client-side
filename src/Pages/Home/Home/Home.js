import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../Shared/NewsSummary/NewsSummary';

const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews)
    return (
        <div>
            <h2>Dragon news Home data{allNews.length}</h2>
            {
                allNews.map(news => <NewsSummary

                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Home;