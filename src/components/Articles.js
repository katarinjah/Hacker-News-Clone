import React, { useState } from 'react';
import './Articles.css';

export const Articles = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);

  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(data => setStoryIds(data.slice(0, 10)));

  storyIds.forEach(id => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => response.json())
      .then(data => {
        setStories(prevStories => [...prevStories, data]);
      });
  });

return (
    <ol>
      {stories.map(story => {
        return (
          <li key={story.id}>
            <a href={story.url}>{story.title}</a>
          </li>
        );
      })}
    </ol>
);
}
