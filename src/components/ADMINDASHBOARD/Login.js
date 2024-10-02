import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

const Login = ({ authentication, admin }) => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const validEmail = "amandeepsinghbhalla.ab@outlook.com";
  // const validPassword = "Thisiscompletelytrial";

  axios.defaults.baseURL = 'https://api.finwiseschool.com';
  // axios.defaults.baseURL = 'http://localhost:5000';


  useEffect(() => {
    const savedEmail = localStorage.getItem('ADMINEMAIL');
    if (savedEmail) {
      axios.post('/api/admindashboard/ADMIN-CHECK', {
        EMAIL: savedEmail
      }).then(response => {
        if(response.status === 201) {
          admin(response.data[0]);
          authentication(true);
          setOpenModal(false);
        }
      }).catch(() => {
        console.log('Failed to verify saved email');
    });
}
}, [authentication, admin]);
  // const handleLogIn = () => {
  //   if (email === validEmail && password === validPassword) {
  //     localStorage.setItem('userEmail', email);
  //     authentication(true);
  //     setOpenModal(false);
  //   } else {
  //     alert('Invalid email or password.');
  //   }
  // };

  const handleLogIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        const response = await axios.post('/api/admindashboard/ADMIN', {
            EMAIL: email,
            PASSWORD: password
        });
        if (response.status === 201) {
            localStorage.setItem('ADMINEMAIL', email);
            admin(response.data[0]);
            authentication(true);
            setOpenModal(false);
        }
    } catch (error) {
        alert('Invalid email or password.');
        console.log('Account does not exist', error);
    } finally {
        setLoading(false);
    }
};

  return (
    <Modal show={openModal} size="md" popup>
      <Modal.Body className='m-6'>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to view Dashboard</h3>
          <div>
            <Label htmlFor="email" value="Admin email" />
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <HiOutlineMail className="text-gray-500 mr-2" />
              <TextInput
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="border-0 focus:ring-0"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" value="Admin password" />
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <HiLockClosed className="text-gray-500 mr-2" />
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="border-0 focus:ring-0"
              />
            </div>
          </div>
          <div className="w-full">
            <Button onClick={handleLogIn}>View Dashboard</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;

