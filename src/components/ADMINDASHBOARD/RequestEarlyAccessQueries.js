import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';
import DeletePage from './DeletePage'; // Import your DeletePage component

const RequestEarlyAccessQueries = () => {
  const [reaData, setReaData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  let i = 1;
  let count = 0;
  const [btnClick, setBtnClick] = useState(count);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://finwisebackend.onrender.com/api/admindashboard/requestearlyaccess');
        setReaData(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
    fetchData();
  }, [btnClick]);

  const handleOpenDeleteModal = (id) => {
    setDeleteId(id);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteId(null);
    setOpenDeleteModal(false);
  };

  const handleDeleteOption = async () => {
    if (deleteId) {
      try {
        const response = await axios.post('https://finwisebackend.onrender.com/api/admindashboard/requestearlyaccess-delete', { id: deleteId });
        if (response.status === 201) {
          console.log('Content Deleted');
          // Remove deleted request from state
          setReaData(reaData.filter(item => item._id !== deleteId));
          handleCloseDeleteModal();
        } else {
          console.error('Error:', response.data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    }
  };

  return (
    <>
    <p onClick={() => {setBtnClick(count++)}} className='text-right cursor-pointer'>Refresh</p>
    {reaData.length > 0 ? (
      <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {reaData.map((item) => (
            <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {i++}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.name}
              </Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.phone}</Table.Cell>
              <Table.Cell>{item.writeDate}</Table.Cell>
              <Table.Cell>
                <button className="font-medium text-red-600 hover:text-red-800 dark:text-red-500" onClick={() => handleOpenDeleteModal(item._id)}>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {openDeleteModal && (
        <DeletePage
          openModal={openDeleteModal}
          setOpenModal={handleCloseDeleteModal}
          handleDeleteOption={handleDeleteOption}
        />
      )}
    </div>
    ) : (
      <div>No Data is Available</div>
    )}
    </>
  );
};

export default RequestEarlyAccessQueries;
