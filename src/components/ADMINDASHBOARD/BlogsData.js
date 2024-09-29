import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Table } from "flowbite-react";
import { HiEye, HiTrash, HiCheckCircle, HiXCircle, HiRefresh, HiDownload } from 'react-icons/hi'; // Importing icons
import BlogsDataModal from './BlogsDataModal';
import DeletePage from './DeletePage';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const BlogsData = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteBlogId, setDeleteBlogId] = useState(null);
  let i = 1;
  let count = 0;
  const [btnClick, setBtnClick] = useState(count);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const handleOpenDeleteModal = (blogId) => {
    setDeleteBlogId(blogId);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteBlogId(null);
    setOpenDeleteModal(false);
  };

  const handleDeleteOption = async () => {
    if (deleteBlogId) {
      try {
        const response = await axios.post('https://api.finwiseschool.com/api/admindashboard/blogs-delete', { id: deleteBlogId });
        // const response = await axios.post('http://localhost:5000/api/admindashboard/blogs-delete', { id: deleteBlogId });
        if (response.status === 201) {
          console.log('Content Deleted');
          // Remove deleted blog from state
          setBlogsData(blogsData.filter(blog => blog._id !== deleteBlogId));
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
    const userInput = prompt("Type 'TRUE' to confirm deletion of all blogs:");
    
    if (userInput !== 'TRUE') {
      alert("Deletion canceled. Please type 'TRUE' to proceed.");
      return;
    }
  
    try {
      const response = await axios.delete('https://api.finwiseschool.com/api/delete-all-blogs');
      if (response.status === 200) {
        console.log('All blogs deleted');
        // Refresh the blogs data here
        setBlogsData([]); // Clear the state or refetch the blogs
        // Optionally, you could also fetch the latest blogs after deletion
        // fetchBlogs(); // Assuming you have a fetchBlogs function
      } else {
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  
  
  

  const handleApproveOption = async () => {
    if (selectedBlog) {
      const approveid = selectedBlog._id; // Get the ID of the selected blog
      const newApprovalStatus = !selectedBlog.isApproved; // Toggle the approval status
      try {
        const response = await axios.post('https://api.finwiseschool.com/api/admindashboard/blogs-isApproved', { id: approveid });
        // const response = await axios.post('http://localhost:5000/api/admindashboard/blogs-isApproved', { id: approveid });
        if (response.status === 200) {
          console.log('Status Changed');
          // Update the state based on the new approval status
          setBlogsData((prevBlogs) =>
            prevBlogs.map((blog) =>
              blog._id === approveid ? { ...blog, isApproved: newApprovalStatus } : blog
            )
          );
          handleCloseModal();
        } else {
          console.error('Error:', response.data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.finwiseschool.com/api/admindashboard/blogs');
        // const response = await axios.get('http://localhost:5000/api/admindashboard/blogs');
        setBlogsData(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
    fetchData();
  }, [btnClick]);
  
  // const fetchDataAndDownloadExcel = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/admindashboard/blogs-excel', {
  //       responseType: 'blob', // Set response type to 'blob'
  //     });
  
  //     // Create a Blob from the response data
  //     const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
  //     // Save the file with the desired name
  //     saveAs(blob, 'Blogsdata.xlsx');
  //   } catch (error) {
  //     console.error("Error downloading Excel file:", error);
  //   }
  // };

  const fetchDataAndDownloadExcel = async () => {
    try {
      const response = await fetch('https://api.finwiseschool.com/api/admindashboard/blogs'); // Replace with your API endpoint
      const data = await response.json();
  
      // Function to remove HTML tags
      const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>/g, ''); // Regular expression to remove HTML tags
      };
  
      // Clean up the data
      const cleanedData = data.map(item => {
        return {
          ...item,
          // Assuming 'content' is the attribute containing HTML. Replace it with your actual attribute name.
          content: stripHtmlTags(item.content) // Strip HTML tags from 'content'
        };
      });
  
      // Convert cleaned data to worksheet
      const worksheet = XLSX.utils.json_to_sheet(cleanedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      // Generate buffer and save file
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'Blogsdata.xlsx'); // Name your file as needed
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };
  
  

  return (
    <div>
      <div className='flex flex-row justify-between mb-4'>
      <button onClick={() => {setBtnClick(count++)}} className='text-right cursor-pointer'>
        <HiRefresh className="inline mr-1 m-auto" /> Refresh
      </button>
      <button onClick={handleDeleteAll} className={`text-right cursor-pointer text-red-800 font-bold ${blogsData.length > 0 ? 'block' : 'hidden'}`}>
        Delete All
      </button>
      <button onClick={fetchDataAndDownloadExcel} className='text-right cursor-pointer'>
        <HiDownload className="inline mr-1 m-auto" /> Download Excel
      </button>
      </div>
      {blogsData.length > 0 ? (
        <>
              <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>S.No</Table.HeadCell>
                  <Table.HeadCell>Writen By</Table.HeadCell>
                  <Table.HeadCell>Blogs ID</Table.HeadCell>
                  <Table.HeadCell>Title</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {blogsData.map((item) => (
                    <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {i++}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.By}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item._id}
                      </Table.Cell>              
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </Table.Cell>
                      <Table.Cell>{item.writeDate}</Table.Cell>
                      <Table.Cell>
                        <p className={`${item.isApproved ? 'text-green-800' : 'text-red-800'}`}>
                        {item.isApproved ? <HiCheckCircle className="inline m-auto" /> : <HiXCircle className="inline m-auto" />} 
                        {item.isApproved ? ' Approved' : ' Not Approved'}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                      <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => handleOpenModal(item)}>
                       <HiEye className="inline mr-1 m-auto" /> View
                      </button>
                      </Table.Cell>
                      <Table.Cell>
                      <button className="font-medium text-red-600 hover:text-red-800 dark:text-red-500" onClick={() => handleOpenDeleteModal(item._id)}>
                        <HiTrash className="inline mr-1 m-auto" /> Delete
                      </button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                  {selectedBlog && (
                    <BlogsDataModal
                      setOpenModal={handleCloseModal}
                      setApproveoption={handleApproveOption}
                      item_id={selectedBlog._id}
                      item_title={selectedBlog.title}
                      item_content={selectedBlog.content}
                      item_date={selectedBlog.writeDate}
                      item_imgurl={selectedBlog.imageUrl}
                      item_approved={selectedBlog.isApproved}
                    />
                  )}
                </Table.Body>
              </Table>
            </div>
      
            {openDeleteModal && (
              <DeletePage
                openModal={openDeleteModal}
                setOpenModal={handleCloseDeleteModal}
                handleDeleteOption={handleDeleteOption}
              />
            )}
            </>
      ) : (
        <div>No Data is Available</div>
      )}
    </div>
  );
};

export default BlogsData;



        // <div key={item._id} className="blog-item">
        //   <h2>{item.title}</h2>
        //   <p dangerouslySetInnerHTML={{ __html: item.content }} />
        //   <p>Write Date: {new Date(item.writeDate).toLocaleDateString()}</p>
        //   <p>Status: {item.isApproved ? 'Approved' : 'Not Approved'}</p>
        // </div>




            // <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-0'>
    //   {blogsData.map((item) => (
    //     <Card key={item._id} className="blog-item max-w-sm">
    //       <div className='flex flex-row justify-between'>
    //         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           {item.title}
    //         </h5>
    //         <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    //           {item.writeDate}
    //         </h5>
    //       </div>
    //       <p className="font-normal text-gray-700 dark:text-gray-400">Person Name Here</p>
    //       <Button onClick={() => handleOpenModal(item)}>
    //         Read more
    //         <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //           <path
    //             fillRule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </Button>
    //       <p className={`${item.isApproved ? 'text-green-800 font-black' : 'text-red-800 font-black'}`}>
    //         Status: {item.isApproved ? 'Approved' : 'Not Approved'}
    //       </p>
    //     </Card>
    //   ))}
      // {selectedBlog && (
      //   <BlogsDataModal
      //     setOpenModal={handleCloseModal}
      //     item_id={selectedBlog._id}
      //     item_title={selectedBlog.title}
      //     item_content={selectedBlog.content}
      //     item_date={selectedBlog.writeDate}
      //     item_approved={selectedBlog.isApproved}
      //   />
      // )}
    // </div>