import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

const Login = ({ authentication }) => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = "amandeepsinghbhalla.ab@outlook.com";
  const validPassword = "Thisiscompletelytrial";

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      authentication(true);
      setOpenModal(false);
    }
  }, [authentication]);

  const handleLogIn = () => {
    if (email === validEmail && password === validPassword) {
      localStorage.setItem('userEmail', email);
      authentication(true);
      setOpenModal(false);
    } else {
      alert('Invalid email or password.');
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
