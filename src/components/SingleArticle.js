import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

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
  const url = article.url ? article.url : `https://news.ycombinator.com/item?id=${article.id}`;

  return (
    <li key={article.id}>
        <a href={url}>{article.title}</a>
        <br/>
        <span id="score"><FontAwesomeIcon icon={faHeart} className="icon"/> {article.score} points</span>
        <span className="space" id="author"><FontAwesomeIcon icon={faUser} className="icon"/> {article.by}</span>
        <span className="space" id="date"><FontAwesomeIcon icon={faClock} className="icon"/> {formattedDate}</span>
        <span className="space" id="comments">{comments} comments</span>
        <hr/>
    </li>
  );
}