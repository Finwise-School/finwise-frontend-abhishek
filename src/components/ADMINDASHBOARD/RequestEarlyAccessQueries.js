import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';
import DeletePage from './DeletePage'; // Import your DeletePage component
import { HiEye, HiTrash, HiCheckCircle, HiXCircle, HiRefresh, HiDownload } from 'react-icons/hi'; // Importing icons
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const RequestEarlyAccessQueries = ({ majorRights, baseURL }) => {
  const [reaData, setReaData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  let i = 1;
  let count = 0;
  const [btnClick, setBtnClick] = useState(count);

  axios.defaults.baseURL = baseURL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admindashboard/requestearlyaccess');
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
        const response = await axios.post('/api/admindashboard/requestearlyaccess-delete', { id: deleteId });
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

  const handleDeleteAll = async () => {
    const userInput = prompt("Type 'TRUE' to confirm deletion of all Request Early data:");
    
    if (userInput !== 'TRUE') {
      alert("Deletion canceled. Please type 'TRUE' to proceed.");
      return;
    }
  
    try {
      const response = await axios.delete('/api/delete-all-reaccess');
      if (response.status === 200) {
        console.log('All Request Early deleted');
        // Refresh the blogs data here
        setReaData([]); // Clear the state or refetch the blogs
        // Optionally, you could also fetch the latest blogs after deletion
        // fetchBlogs(); // Assuming you have a fetchBlogs function
      } else {
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const fetchDataAndDownloadExcel = async () => {
    try {
      const response = await fetch(baseURL + '/api/admindashboard/requestearlyaccess'); // Replace with your API endpoint
      const data = await response.json();
  
      // Convert cleaned data to worksheet
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      // Generate buffer and save file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'REAdata.xlsx'); // Name your file as needed
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <>
      <div className='flex flex-row justify-between mb-4'>
      <button onClick={() => {setBtnClick(count++)}} className='text-right cursor-pointer'>
        <HiRefresh className="inline mr-1 m-auto" /> Refresh
      </button>
      {majorRights && (
      <button onClick={handleDeleteAll} className={`text-right cursor-pointer text-red-800 font-bold ${reaData.length > 0 ? 'block' : 'hidden'}`}>
        Delete All
      </button>
      )}
      <button onClick={fetchDataAndDownloadExcel} className='text-right cursor-pointer'>
        <HiDownload className="inline mr-1 m-auto" /> Download Excel
      </button>
      </div>
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
              {majorRights && (
              <Table.Cell>
                   <button className="font-medium text-red-600 hover:text-red-800 dark:text-red-500" onClick={() => handleOpenDeleteModal(item._id)}>
                   <HiTrash className="inline-block mr-1" /> Delete
                    </button>
              </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {openDeleteModal && (
        <DeletePage
          baseURL={baseURL}
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
