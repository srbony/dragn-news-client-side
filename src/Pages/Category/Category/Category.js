import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../Shared/NewsSummary/NewsSummary';


const Category = () => {

    const categoryNews = useLoaderData();
    // console.log(categoryNews);

    return (
        <div>
            <p>this is category has news {categoryNews.length}</p>
            {
                categoryNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}

                ></NewsSummary>)
            }
        </div>
    );
};

export default Category;