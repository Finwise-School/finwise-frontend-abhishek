import React, { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Login = ({ authentication }) => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = "amandeepsinghbhalla.ab@outlook.com";
  const validPassword = "Thisiscompletelytrial";

  function onCloseModal() {
    setOpenModal(false);
  }

  const isButtonEnabled = email === validEmail && password === validPassword;
  authentication(isButtonEnabled);

  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body className='m-6'>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to view Dashboard</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Admin email" />
              </div>
              <TextInput
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Admin password" />
              </div>
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button disabled={!isButtonEnabled} onClick={onCloseModal}>View Dashboard</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
