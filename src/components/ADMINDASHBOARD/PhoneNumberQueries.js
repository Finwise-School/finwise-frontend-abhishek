import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';

const PhoneNumberQueries = () => {
  const [phoneData, setPhoneData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admindashboard/phonedata');
        setPhoneData(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="overflow-x-auto">
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Phone</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {phoneData.map((item) => (
        <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.phone}
          </Table.Cell>
          <Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
  )
}

export default PhoneNumberQueries