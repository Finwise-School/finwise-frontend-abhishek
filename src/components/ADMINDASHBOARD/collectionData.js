import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollectionData = ({ collectionName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/collections/${collectionName}`);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching collection data:', error);
      }
    };
    fetchCollectionData();
  }, [collectionName]);

  return (
    <div>
      <h2>{collectionName} Data</h2>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionData;
