import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollectionList = ({ onSelectCollection }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/collections');
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
    fetchCollections();
  }, []);

  return (
    <div>
      <h2>Collections</h2>
      <ul>
        {collections.map((col, index) => (
          <li key={index}>
            <button onClick={() => onSelectCollection(col)}>{col}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;
