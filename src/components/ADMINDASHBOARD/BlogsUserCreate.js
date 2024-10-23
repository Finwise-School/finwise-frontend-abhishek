import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
// import successLogo from '../../../assets/images/success.gif';
import axios from "axios";
import { HiUser, HiMail, HiKey } from 'react-icons/hi';


const BlogsUserCreate = ({ openParentModal, baseURL }) => {
    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: '2-digit' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    const [openModal, setOpenModal] = useState(true);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailAlready, setEmailAlready] = useState(false);
    // const [success, setSuccess] = useState(false);

    axios.defaults.baseURL = baseURL;

    const onCloseModal = () => {
        setOpenModal(false);
        openParentModal(false);
        setUserName('');
        setEmail('');
        setPassword('');
        setEmailAlready(false); // Reset state on close
        // setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const data = {
            username,
            email,
            password,
            writeDate: formatDate(new Date()), // Get current date here
        };

        try {
            const response = await axios.post('/api/blogsuser', data);

            if (response.status === 201) {
                console.log("User Created");
                // setSuccess(true);
                onCloseModal(); // Close the modal on success
            } else if (response.status === 403) { // Check for email already exists
                console.log("Email Already Exists");
                setEmailAlready(true);
            } else {
                console.error('Error:', response.data);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            if (error.response && error.response.status === 403) {
                setEmailAlready(true); // Also set this on catch if the response indicates the email exists
            }
        }
    };

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create User for Blog Writing</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="m-5">
                            <div className="mb-2 block">
                            <Label htmlFor="username" value={<><HiUser className="inline-block mr-2" /> User Name</>} />
                            </div>
                            <TextInput
                                id="username"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="m-5">
                            <div className="mb-2 block">
                            <Label htmlFor="email" value={<><HiMail className="inline-block mr-2" /> User Email</>} />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <p className={`text-red-800 font-bold text-sm ${emailAlready ? 'block' : 'hidden'}`}>Email Already Exists</p>
                        </div>
                        <div className="m-5">
                            <div className="mb-2 block">
                            <Label htmlFor="password" value={<><HiKey className="inline-block mr-2" /> User Password</>} />
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
                        <Button type="submit"><HiUser className="inline-block mr-2" /> Create User</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default BlogsUserCreate;
