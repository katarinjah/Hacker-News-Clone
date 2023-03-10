import React, { useState, useEffect } from 'react';
import './SingleArticle.css';

export const SingleArticle = ({id}) => {
    const [article, setArticle] = useState(null);
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data)
          setArticle(data) 
        })
        .catch(function(error) {
          console.error(error);
        });
    }, [id]);

    if(!article) return null;

    const time = article.time;
    const date = new Date(time * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const comments = article.kids ? article.kids.length : 0;

    return (
    <li key={article.id}>
        <a href={article.url}>{article.title}</a>
        <br/>
        <span>{article.score} points</span>
        <span className="space">{article.by}</span>
        <span className="space">{formattedDate}</span>
        <span className="space">{comments} comments</span>
    </li>
    );
}



  