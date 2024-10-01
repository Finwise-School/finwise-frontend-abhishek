import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import axios from 'axios';
import DeletePage from './DeletePage';
import BlogsUserCreate from './BlogsUserCreate';
import { HiEye, HiEyeOff, HiTrash, HiDownload, HiRefresh } from 'react-icons/hi';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const BlogsUser = ({ majorRights }) => {
  const [blogsUserData, setBlogsUserData] = useState([]);
  const [blogsUserId, setBlogsUserId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let i = 1;
  let count = 0;
  const [btnClick, setBtnClick] = useState(count);

  axios.defaults.baseURL = 'https://api.finwiseschool.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admindashboard/bloguser');
        // const response = await axios.get('http://localhost:5000/api/admindashboard/bloguser');
        setBlogsUserData(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
    fetchData();
  }, [btnClick]);

  const handleOpenDeleteModal = (id) => {
    setBlogsUserId(id);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setBlogsUserId(null);
    setOpenDeleteModal(false);
  };

  const handleDeleteOption = async () => {
    if (blogsUserId) {
      try {
        const response = await axios.post('/api/admindashboard/bloguser-delete', { id: blogsUserId });
        // const response = await axios.post('http://localhost:5000/api/admindashboard/bloguser-delete', { id: blogsUserId });
        if (response.status === 201) {
          console.log('Content Deleted');
          // Remove deleted blog user from state
          setBlogsUserData(blogsUserData.filter(user => user._id !== blogsUserId));
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
    const userInput = prompt("Type 'TRUE' to confirm deletion of all blogs users:");
    
    if (userInput !== 'TRUE') {
      alert("Deletion canceled. Please type 'TRUE' to proceed.");
      return;
    }
  
    try {
      const response = await axios.delete('/api/delete-all-blogsUser');
      if (response.status === 200) {
        console.log('All blogs users deleted');
        // Refresh the blogs data here
        setBlogsUserData([]); // Clear the state or refetch the blogs
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
      const response = await fetch('https://api.finwiseschool.com/api/admindashboard/bloguser'); // Replace with your API endpoint
      const data = await response.json();
  
      // Convert cleaned data to worksheet
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      // Generate buffer and save file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'BlogsUserdata.xlsx'); // Name your file as needed
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <>
    {openCreateModal && (<BlogsUserCreate openParentModal={setOpenCreateModal} />)}
    <div className='flex flex-row justify-between'>
      <div>
        {majorRights && (
          <button className='text-right cursor-pointer text-blue-900 font-bold mr-5' onClick={() => setOpenCreateModal(true)}>Create New</button>
        )}
       <button onClick={() => {setBtnClick(count++)}} className='text-right cursor-pointer'>
        <HiRefresh className="inline mr-1 m-auto" /> Refresh
       </button>
       {majorRights && (
       <button onClick={handleDeleteAll} className={`text-right cursor-pointer text-red-800 font-bold ${blogsUserData.length > 0 ? 'block' : 'hidden'}`}>
        Delete All
      </button>
       )}
      </div>
      <button onClick={fetchDataAndDownloadExcel} className='text-right cursor-pointer'>
        <HiDownload className="inline mr-1 m-auto" /> Download Excel
      </button>
    </div>
    {blogsUserData.length > 0 ? (
          <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>S.No</Table.HeadCell>
              <Table.HeadCell>User Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              {majorRights && (
                <Table.HeadCell>Password<span className='cursor-pointer text-center' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HiEyeOff /> : <HiEye />}</span></Table.HeadCell>
              )}
              <Table.HeadCell>Created</Table.HeadCell>
              <Table.HeadCell>Blogs</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {blogsUserData.map((item) => (
                <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {i++}
                  </Table.Cell>   
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.username}
                  </Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  {majorRights && (
                    <Table.Cell><p className={`${showPassword ? 'block' : 'hidden'}`}>{item.password}</p></Table.Cell>
                  )}
                  <Table.Cell>{item.writeDate}</Table.Cell>
                  <Table.Cell>{item.blogPost.map((bitem, index) => (
                    <div className='flex flex-row justify-start' key={index}>
                     <p className='me-5'>{index + 1}</p>
                     <p>{bitem}</p>
                    </div>
                  ))}</Table.Cell>
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

export default BlogsUser;
