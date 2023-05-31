import "./Story.css";
import React from 'react';

const Story = () => {
  // Mock data for stories (replace it with your actual data)
  const stories = [
    { id: 1, username: 'user1', imageUrl: '/images/OIP.jpg' },
    { id: 2, username: 'user2', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    { id: 1, username: 'user1', imageUrl: '/images/OIP.jpg' },
    { id: 2, username: 'user2', imageUrl: '/images/OIP.jpg' },
    { id: 3, username: 'user3', imageUrl: '/images/OIP.jpg' },
    // Add more stories as needed
  ];

  return (
    <div className="stories-container">
      <div className="horizontal-scroll">
        {stories.map(story => (
          <div key={story.id} className="story-circles">
            <div className="circle">
              <img src={story.imageUrl} alt={story.username} />
              <span>{story.username}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
