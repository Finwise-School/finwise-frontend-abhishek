import React, { useEffect, useState } from 'react';
import { Checkbox, Card, Button, FloatingLabel, TextInput, Label, FileInput } from "flowbite-react";
import axios from 'axios';

const LoginBlogs = ({ authentication, data }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false);

    axios.defaults.baseURL = 'https://api.finwiseschool.com';
    // axios.defaults.baseURL = 'http://localhost:5000';

    useEffect(() => {
      const savedEmail = localStorage.getItem('blogsUserEmail');
      const savedPassword = localStorage.getItem('blogsUserPassword')
      if (savedEmail) {
        axios.post('/api/bloguser-authentication', {
          email: savedEmail,
          password: savedPassword
      }).then(response => {
          if(response.status === 201) {
              data(response.data);
              authentication(true);
              setIncorrect(false);
          }
      }).catch(() => {
          setIncorrect(true);
          console.log('Account does not exist');
      })
      }
    }, [authentication]); 

    const handleLogIn = async (event) => {
        event.preventDefault();
        axios.post('/api/bloguser-authentication', {
            email: email,
            password: password
        }).then(response => {
            if(response.status === 201) {
                localStorage.setItem('blogsUserEmail', email);
                localStorage.setItem('blogsUserPassword', password);
                data(response.data);
                authentication(true);
                setIncorrect(false);
            }
        }).catch(() => {
            setIncorrect(true);
            console.log('Account does not exist');
        })
      };

  return (
    <>
      <Card className="text-center justify-center items-center">
        <form className="flex flex-col gap-4" onSubmit={handleLogIn}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput className={`${incorrect && 'border-red-800 border rounded-lg'}`} id="password1" value={password} onChange={(event) => setPassword(event.target.value)} type="password" required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  )
}

export default LoginBlogs