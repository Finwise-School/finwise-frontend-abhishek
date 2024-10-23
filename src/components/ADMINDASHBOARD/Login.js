// import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
// import speakeasy from "speakeasy";
// import QRCode from "qrcode";
// import CryptoJS from "crypto-js";

// const Login = () => {
//   const [image, setImage] = useState("");
//   const [secret, setSecret] = useState("");
//   const [validCode, setValidCode] = useState("");
//   const [isCodeValid, setIsCodeValid] = useState(null);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     const secret = {
//       ascii: "?:SD%oDD<E!^q^1N):??&QkeqRkhkpt&",
//       base32: "H45FGRBFN5CEIPCFEFPHCXRRJYUTUPZ7EZIWWZLRKJVWQ23QOQTA",
//       hex: "3f3a5344256f44443c45215e715e314e293a3f3f26516b6571526b686b707426",
//       otpauth_url:
//         "otpauth://totp/Adidas%Adidas?secret=H45FGRBFN5CEIPCFEFPHCXRRJYUTUPZ7EZIWWZLRKJVWQ23QOQTA"
//     };

//     // Backup codes
//     const backupCodes = [];
//     const hashedBackupCodes = [];

//     for (let i = 0; i < 10; i++) {
//       const randomCode = (Math.random() * 10000000000).toFixed();
//       const encrypted = CryptoJS.AES.encrypt(randomCode, secret.base32).toString();
//       backupCodes.push(randomCode);
//       hashedBackupCodes.push(encrypted);
//     }

//     console.log("backupCodes ----->", backupCodes);
//     console.log("hashedBackupCodes ----->", hashedBackupCodes);

//     QRCode.toDataURL(secret.otpauth_url, (err, image_data) => {
//       if (!err) {
//         setImage(image_data);
//         setSecret(secret);
//       }
//     });
//   }, []);

//   const getCode = () => {
//     const { hex } = secret;
//     const code = speakeasy.totp({
//       secret: hex,
//       encoding: "hex",
//       algorithm: "sha1"
//     });

//     setValidCode(code);
//   };

//   const verifyCode = () => {
//     const { hex } = secret;
//     const isVerified = speakeasy.totp.verify({
//       secret: hex,
//       encoding: "hex",
//       token: inputValue,
//       window: 1
//     });

//     console.log("isVerified -->", isVerified);
//     setIsCodeValid(isVerified);
//   };

//   return (
//     <div>
//       <img src={image} alt="QR Code" />
//       <div style={{ marginTop: 20 }}>Verify code</div>
//       <input
//         type="number"
//         onChange={e => setInputValue(e.target.value)}
//       />
//       <button onClick={verifyCode}>Verify</button>
//       {isCodeValid !== null && <div>{isCodeValid ? "✅" : "❌"}</div>}
//     </div>
//   );
// };

// export default Login; // Exporting the App component







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

const Login = ({ authentication, admin, baseURL }) => {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState('');

  // const validEmail = "amandeepsinghbhalla.ab@outlook.com";
  // const validPassword = "Thisiscompletelytrial";

  axios.defaults.baseURL = baseURL;
  // axios.defaults.baseURL = 'http://localhost:5000';


  useEffect(() => {
    const savedEmail = localStorage.getItem('ADMINEMAIL');
    if (savedEmail) {
      axios.post('/api/admindashboard/ADMIN-CHECK', {
        EMAIL: savedEmail
      }).then(response => {
        if(response.status === 201) {
          setUserId(response.data[0]._id);
          admin(response.data[0]);
          setOtpModal(true);
          // authentication(true);
          // setOpenModal(false);
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
          setUserId(response.data[0]._id);
          setOtpModal(true); // Open OTP modal
          localStorage.setItem('ADMINEMAIL', email);
          admin(response.data[0]);



          // setOtpModal(true);


          //   await verifyotp(response.data[0]._id)
          //   localStorage.setItem('ADMINEMAIL', email);
          //   admin(response.data[0]);
          //   authentication(true);
          //   setOpenModal(false);
        }
    } catch (error) {
        alert('Invalid email or password.');
        console.log('Account does not exist', error);
    } finally {
        setLoading(false);
    }
};

  const verifyOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/v1/command/admin/verification', { otp, userId });
      if (response.status === 200) {
        authentication(true);
        setOpenModal(false);
        setOtpModal(false);
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      alert('An error occurred during OTP verification.');
      console.log(error);
    } finally {
      setOtp(''); // Clear OTP input after verification
    }
  };

  return (
    <>
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

    <Modal show={otpModal} size="md" popup>
        <Modal.Body className='m-6'>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
            <div>
              <Label htmlFor="otp" value="Enter OTP" />
              <TextInput
                id="otp"
                type="text"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                required
                className="border-0 focus:ring-0"
              />
            </div>
            <div className="w-full">
              <Button onClick={verifyOtp}>Verify OTP</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;

