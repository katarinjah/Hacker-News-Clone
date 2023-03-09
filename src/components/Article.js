import React, { useState, useEffect } from 'react';

export const Article = ({id}) => {
    const [article, setArticle] = useState(null);
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setArticle(data) 
        })
        .catch(function(error) {
          console.error(error);
        });
    }, [id]);
    if(!article) return null;
    return (
    <li key={article.id}>
        <a href={article.url}>{article.title}</a>
    </li>);
}



  