import React, { useEffect, useState } from 'react';
import { Card, Button, Accordion } from "flowbite-react";
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
import EmailQueries from './ADMINDASHBOARD/EmailBooksQueries';
import { useMediaQuery } from "react-responsive";

const ADMINDASHBOARD = ({ baseURL }) => {
    const [selectedContent, setSelectedContent] = useState('');
    const [server, isServerRunning] = useState(false);
    const [database, isDbConnected] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminDATA, setAdminData] = useState();

    const isLarge = useMediaQuery({ minWidth: 1024 });
    const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 767 });

    axios.defaults.baseURL = baseURL;

    // axios.defaults.baseURL = 'http://localhost:5000';

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
        localStorage.removeItem('ADMINEMAIL');
        setAdminData();
        setIsAuthenticated(false);
        refreshPage();
    };

    return (
        <>
            <Login baseURL={baseURL} authentication={setIsAuthenticated} admin={setAdminData} />
            {(!server || !database) && <SdError baseURL={baseURL} refresh={refreshPage} />}
            {isAuthenticated ? (
                <>
                    <h1 className={`text-center font-black text-4xl`}>ADMIN DASHBOARD</h1>
                    <h1 className={`text-center font-medium text-base ${adminDATA.MAJOR_RIGHTS ? 'text-dark-blue' : 'text-light-blue'}`}>
                      {adminDATA.NAME} {adminDATA.MAJOR_RIGHTS ? ' (Senior Admin)' : ' (Admin)'}
                    </h1>
                    {isLarge || isMedium ? (
                        <>
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
                                <Button color="gray" onClick={() => setSelectedContent('emailqueries')}>Email Queries</Button>
                                <Button color="gray" onClick={() => setSelectedContent('phonenumberqueries')}>Phone Number Queries</Button>
                                <Button color="gray" onClick={() => setSelectedContent('requestearlyaccessqueries')}>Request Early Access Data</Button>
                            </div>
                        </Card>
                    </div>
                    <div className='dataResultCard'>
                        <Card className="m-6">
                            {selectedContent ? (
                                <>
                                    {selectedContent === 'blogsdata' && <BlogsData majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'blogsuser' && <BlogsUser majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'chatbotqueries' && <ChatBotQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'contactus' && <ContactUs majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'emailqueries' && <EmailQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'phonenumberqueries' && <PhoneNumberQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                    {selectedContent === 'requestearlyaccessqueries' && <RequestEarlyAccessQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />}
                                </>
                            ) : (<p className='text-center'>Click on any tab to view data</p>)}
                        </Card>
                    </div>
                        </>
                    ) : (
    <>
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Blogs Data</Accordion.Title>
        <Accordion.Content>
          <BlogsData majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Blogs User</Accordion.Title>
        <Accordion.Content>
          <BlogsUser majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Chatbot Queries</Accordion.Title>
        <Accordion.Content>
          <ChatBotQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Contact Us Queries</Accordion.Title>
        <Accordion.Content>
          <ContactUs majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Email Queries</Accordion.Title>
        <Accordion.Content>
          <EmailQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Phone Number Queries</Accordion.Title>
        <Accordion.Content>
          <PhoneNumberQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Request Early Access Data</Accordion.Title>
        <Accordion.Content>
          <RequestEarlyAccessQueries majorRights={adminDATA.MAJOR_RIGHTS} baseURL={baseURL} />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
                    )}
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