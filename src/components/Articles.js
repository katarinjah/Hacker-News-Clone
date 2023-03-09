import React, { useState, useEffect } from 'react';
import './Articles.css';
import { Article } from './Article'

export function Articles() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setStoryIds(data.slice(0, 10));
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  return (
      <ol>
        {storyIds.map(id => <Article id={id}/>)}
      </ol>
  );
}