import React, { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";
import { HiLogout } from 'react-icons/hi';
import axios from 'axios';
import SdError from './ADMINDASHBOARD/sdError';
import Login from './ADMINDASHBOARD/Login';
import BlogsData from './ADMINDASHBOARD/BlogsData';
import BlogsUser from './ADMINDASHBOARD/BlogsUser';
import ChatBotQueries from './ADMINDASHBOARD/ChatBotQueries';
import PhoneNumberQueries from './ADMINDASHBOARD/PhoneNumberQueries';
import RequestEarlyAccessQueries from './ADMINDASHBOARD/RequestEarlyAccessQueries';
import ContactUs from './ADMINDASHBOARD/ContactUs';

const ADMINDASHBOARD = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [server, isServerRunning] = useState(false);
    const [database, isDbConnected] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    axios.defaults.baseURL = 'https://api.finwiseschool.com';

    useEffect(() => {
        axios.get('/').then(response => {
            isServerRunning(response.status === 200);
        }).catch(() => {
            isServerRunning(false);
        });

        axios.get('/isDbConnected').then(response => {
            isDbConnected(response.status === 200);
        }).catch(() => {
            isDbConnected(false);
        });
    }, []);

    const refreshPage = () => {
        window.location.reload();
    };

    const handleLogOut = () => {
        localStorage.removeItem('userEmail');
        setIsAuthenticated(false);
        refreshPage();
    };

    return (
        <>
            <Login authentication={setIsAuthenticated} />
            {(!server || !database) && <SdError refresh={refreshPage} />}
            {isAuthenticated ? (
                <>
                    <h1 className={`text-center font-black text-4xl`}>ADMIN DASHBOARD</h1>
                    <div className='dataSearchCard'>
                        <Card className="m-6">
                        <p className={`cursor-pointer`} onClick={handleLogOut}>
                           <HiLogout className="inline-block mr-1" /> Logout
                        </p>

                            <div className='flex flex-row justify-evenly'>
                                <Button color="gray" onClick={() => setSelectedContent('blogsdata')}>Blogs Data</Button>
                                <Button color="gray" onClick={() => setSelectedContent('blogsuser')}>Blogs User</Button>
                                <Button color="gray" onClick={() => setSelectedContent('chatbotqueries')}>Chatbot Queries</Button>
                                <Button color="gray" onClick={() => setSelectedContent('contactus')}>Contact Us Queries</Button>
                                <Button color="gray" onClick={() => setSelectedContent('phonenumberqueries')}>Phone Number Queries</Button>
                                <Button color="gray" onClick={() => setSelectedContent('requestearlyaccessqueries')}>Request Early Access Data</Button>
                            </div>
                        </Card>
                    </div>
                    <div className='dataResultCard'>
                        <Card className="m-6">
                            {selectedContent ? (
                                <>
                                    {selectedContent === 'blogsdata' && <BlogsData />}
                                    {selectedContent === 'blogsuser' && <BlogsUser />}
                                    {selectedContent === 'chatbotqueries' && <ChatBotQueries />}
                                    {selectedContent === 'contactus' && <ContactUs />}
                                    {selectedContent === 'phonenumberqueries' && <PhoneNumberQueries />}
                                    {selectedContent === 'requestearlyaccessqueries' && <RequestEarlyAccessQueries />}
                                </>
                            ) : (<p className='text-center'>Click on any tab to view data</p>)}
                        </Card>
                    </div>
                </>
            ) : (
                <h1 className={`text-center font-black text-4xl`}>Access Denied</h1>
            )}
        </>
    );
};

export default ADMINDASHBOARD;







// import React, { useEffect, useState } from 'react';
// import { Card, Button } from "flowbite-react";
// import axios from 'axios';
// import SdError from './ADMINDASHBOARD/sdError';
// import Login from './ADMINDASHBOARD/Login';
// import BlogsData from './ADMINDASHBOARD/BlogsData';
// import ChatBotQueries from './ADMINDASHBOARD/ChatBotQueries';
// import PhoneNumberQueries from './ADMINDASHBOARD/PhoneNumberQueries';
// import RequestEarlyAccessQueries from './ADMINDASHBOARD/RequestEarlyAccessQueries';
// import ContactUs from './ADMINDASHBOARD/ContactUs';
// // import CollectionList from './ADMINDASHBOARD/collectionList';
// // import CollectionData from './ADMINDASHBOARD/collectionData';
// // import axios from 'axios';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col';

// const ADMINDASHBOARD = () => {
//     const [selectedContent, setSelectedContent] = useState('');
//     const [server, isServerRunning] = useState(false);
//     const [database, isDbConnected] = useState(false);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // TEMPORARY
//     // axios.defaults.baseURL = 'https://api.finwiseschool.com';
//     axios.defaults.baseURL = 'http://localhost:5000';
//     useEffect(() => {
//       axios.get('/').then(response => {
//           isServerRunning(response.status === 200);
//       }).catch(() => {
//           isServerRunning(false);
//       });

//       axios.get('/isDbConnected').then(response => {
//           isDbConnected(response.status === 200);
//       }).catch(() => {
//           isDbConnected(false);
//       });
//   }, []);

//     const refreshPage = () => {
//       window.location.reload();
//     }

//     function handleLogOut() {
//       localStorage.removeItem('userEmail');
//       setIsAuthenticated(false);
//       refreshPage();
//     }

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //       try {
//     //         const response = await axios.get('http://localhost:5000/api/admindashboard/blogs');
//     //         setSelectedCollection(response.data);
//     //       } catch (error) {
//     //         console.error('Error fetching collections:', error);
//     //       }
//     //     };
//     //     fetchData();
//     //   }, []);

//   return (
//     <>
//     <Login authentication={setIsAuthenticated} />
//     {(!server || !database) && <SdError refresh={refreshPage} />}
//     {isAuthenticated ? (
//       <>
//           <h1 className={`text-center font-black text-4xl`}>ADMIN DASHBOARD</h1>
//           <div className='dataSearchCard'>
//           <Card className="m-6">
//           <p className={`cursor-pointer`} onClick={handleLogOut}>Logout</p>
//             <div className='flex flex-row justify-evenly'>
//              <Button color="gray" onClick={() => setSelectedContent('blogsdata')}>Blogs Data</Button>
//              <Button color="gray" onClick={() => setSelectedContent('chatbotqueries')}>Chatbot Queries</Button>
//              <Button color="gray" onClick={() => setSelectedContent('contactus')}>Contact Us Queries</Button>
//              <Button color="gray" onClick={() => setSelectedContent('phonenumberqueries')}>Phone Number Queries</Button>
//              <Button color="gray" onClick={() => setSelectedContent('requestearlyaccessqueries')}>Request Early Access Data</Button>
//             </div>
//           </Card>
//           </div>
//           <div className='dataResultCard'>
//           <Card className="m-6">
//            {selectedContent ? (
//              <>
//              {selectedContent === 'blogsdata' && <BlogsData />}
//              {selectedContent === 'chatbotqueries' && <ChatBotQueries />}
//              {selectedContent === 'contactus' && <ContactUs />}
//              {selectedContent === 'phonenumberqueries' && <PhoneNumberQueries />}
//              {selectedContent === 'requestearlyaccessqueries' && <RequestEarlyAccessQueries />}
//              </>
//            ) : (<p  className='text-center'>Click on any tab to view data</p>)}
//           </Card>
//           </div>
//           </>
//     ) : (
//       <h1 className={`text-center font-black text-4xl`}>Access Denied</h1>
//     )}
//     </>
//   )
// }

// export default ADMINDASHBOARD