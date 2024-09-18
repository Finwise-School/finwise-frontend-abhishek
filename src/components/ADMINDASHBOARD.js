import React, { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";
import BlogsData from './ADMINDASHBOARD/BlogsData';
import ChatBotQueries from './ADMINDASHBOARD/ChatBotQueries';
import PhoneNumberQueries from './ADMINDASHBOARD/PhoneNumberQueries';
import RequestEarlyAccessQueries from './ADMINDASHBOARD/RequestEarlyAccessQueries';
import axios from 'axios';
import SdError from './ADMINDASHBOARD/sdError';
// import CollectionList from './ADMINDASHBOARD/collectionList';
// import CollectionData from './ADMINDASHBOARD/collectionData';
// import axios from 'axios';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const ADMINDASHBOARD = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [server, isServerRunning] = useState(false);
    const [database, isDbConnected] = useState(false);

    // TEMPORARY
    axios.defaults.baseURL = 'http://localhost:5000';
    useEffect(() => {
      axios.get('/')
       .then(response => {
        response.status === 200 ? isServerRunning(true) : isServerRunning(false);
       })
       .catch(error => {
        console.log('Error:', error);
        isServerRunning(false);
       })
  
       axios.get('/isDbConnected')
       .then(response => {
        response.status === 200 ? isDbConnected(true) : isDbConnected(false);
       })
       .catch(error => {
        console.log('Error:', error);
        isDbConnected(false);
       })
    }, )

    const refreshPage = () => {
      window.location.reload();
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:5000/api/admindashboard/blogs');
    //         setSelectedCollection(response.data);
    //       } catch (error) {
    //         console.error('Error fetching collections:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

  return (
    <>
    {(!server || !database) && <SdError refresh={refreshPage} />}
    <h1 className={`text-center font-black text-4xl`}>ADMIN DASHBOARD</h1>
     <div className='dataSearchCard'>
     <Card className="m-6">
       <div className='flex flex-row justify-evenly'>
        <Button color="gray" onClick={() => setSelectedContent('blogsdata')}>Blogs Data</Button>
        <Button color="gray" onClick={() => setSelectedContent('chatbotqueries')}>Chatbot Queries</Button>
        <Button color="gray" onClick={() => setSelectedContent('requestearlyaccessqueries')}>Request Early Access Data</Button>
        <Button color="gray" onClick={() => setSelectedContent('phonenumberqueries')}>Phone Number Queries</Button>
       </div>
     </Card>
     </div>
     <div className='dataResultCard'>
     <Card className="m-6">
      {selectedContent ? (
        <>
        {selectedContent === 'blogsdata' && <BlogsData />}
        {selectedContent === 'chatbotqueries' && <ChatBotQueries />}
        {selectedContent === 'requestearlyaccessqueries' && <RequestEarlyAccessQueries />}
        {selectedContent === 'phonenumberqueries' && <PhoneNumberQueries />}
        </>
      ) : (<p  className='text-center'>Click on any tab to view data</p>)}
     </Card>
     </div>
    </>
  )
}

export default ADMINDASHBOARD