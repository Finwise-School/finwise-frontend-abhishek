import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import LoginBlogs from './Blogs/LoginBlogs';
import YourBlogs from './Blogs/YourBlogs';
import { TextInput, Label, FileInput, Button, Modal } from "flowbite-react";
import axios from 'axios';

const BlogsWriting = ({ placeholder }) => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState([]);
    const [histBlogs, setHistBlogs] = useState([]);
    const [successModal, setSuccessModal] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailUrl, setThumbnailUrl] = useState('');


    axios.defaults.baseURL = 'https://api.finwiseschool.com';
    // axios.defaults.baseURL = 'http://localhost:5000';


    const handleReload = () => {
      window.location.reload(); // Reload the page
  };

    useEffect(() => {
        const fetchBlogs = async () => {
            if (userData.length > 0) {
                try {
                    const response = await axios.post('/api/userBlogsContentFetch', {
                        ids: userData[0].blogPost // Assuming this is an array of IDs
                    });
                    if (response.status === 200) {
                        setHistBlogs(response.data);
                    } else {
                        console.error('Error:', response.data);
                    }
                } catch (error) {
                    console.error('Error:', error.response ? error.response.data : error.message);
                }
            }
        };

        fetchBlogs();
    }, [userData]);

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: '2-digit' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    const writeDate = formatDate(new Date());

    // const handleImageUpload = async (blobInfo, success, failure) => {
    //     const formData = new FormData();
    //     formData.append('file', blobInfo.blob(), blobInfo.filename());
    
    //     try {
    //         const response = await axios.post('/api/upload-image', formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //         if (response.data.url) {
    //             success(response.data.url); // Use the URL returned from the backend
    //         } else {
    //             failure('Image upload failed: No URL returned.');
    //         }
    //     } catch (error) {
    //         failure('Image upload failed: ' + error.message);
    //     }
    // };

    // const handleImageUpload = async (blobInfo, success, failure) => {
    //     const formData = new FormData();
    //     formData.append('image', blobInfo.blob(), blobInfo.filename());
    //     formData.append('key', '65f8bb755163a2c0fb7741e95ee4944c'); // Your Imgbb API key

    //     try {
    //         const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //         if (response.data && response.data.data && response.data.data.url) {
    //             success(response.data.data.url); // Use the URL returned from Imgbb
    //         } else {
    //             failure('Image upload failed: No URL returned.');
    //         }
    //     } catch (error) {
    //         failure('Image upload failed: ' + error.message);
    //     }
    // };
    

    const handleThumbnailUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('key', '65f8bb755163a2c0fb7741e95ee4944c'); // Your Imgbb API key

        try {
            const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.data && response.data.data && response.data.data.url) {
                setThumbnailUrl(response.data.data.url); // Store the uploaded thumbnail URL
            } else {
                console.error('Thumbnail upload failed: No URL returned.');
            }
        } catch (error) {
            console.error('Thumbnail upload failed:', error);
        }
    };

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setThumbnailFile(file);
        handleThumbnailUpload(file); // Call the refactored thumbnail upload function
    };
    
    // const handleImageUpload = async (blobInfo, success, failure) => {
    //     const formData = new FormData();
    //     formData.append('file', blobInfo.blob(), blobInfo.filename());
    
    //     try {
    //         const response = await axios.post('/api/upload-image', formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //         if (response.data.url) {
    //             success(response.data.url); // Use the URL returned from the backend
    //         } else {
    //             failure('Image upload failed: No URL returned.');
    //         }
    //     } catch (error) {
    //         failure('Image upload failed: ' + error.message);
    //     }
    // };
    
    // const handleThumbnailUpload = async (file) => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    
    //     try {
    //         const response = await axios.post('/api/upload-thumbnail', formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //         if (response.data.url) {
    //             setThumbnailUrl(response.data.url); // Store the uploaded thumbnail URL
    //         } else {
    //             console.error('Thumbnail upload failed: No URL returned.');
    //         }
    //     } catch (error) {
    //         console.error('Thumbnail upload failed:', error);
    //     }
    // };
    
    // const handleThumbnailChange = (event) => {
    //     const file = event.target.files[0];
    //     setThumbnailFile(file);
    
    //     // Call the refactored thumbnail upload function
    //     handleThumbnailUpload(file);
    // };
    
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                By: userData[0].username,
                title,
                content,
                writeDate,
                imageUrl: thumbnailUrl,
            };

            const response = await axios.post('/api/blogcontent', data);
            if (response.status === 201) {
                const data_id = {
                    updateId: response.data,
                    userId: userData[0]._id
                };
                const bloguserResponse = await axios.post('/api/admindashboard/bloguser-update', data_id);
                if (bloguserResponse.status === 201) {
                    setSuccessModal(true);
                    console.log('Content Saved');
                } else {
                    console.error('Error:', bloguserResponse.data);
                }
            } else {
                console.error('Error:', response.data);
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    const refreshPage = () => {
      window.location.reload();
  };

    const handleLogOut = () => {
      localStorage.removeItem('blogsUserEmail');
      localStorage.removeItem('blogsUserPassword');
      setIsAuthenticated(false);
      refreshPage();
  };

    return (
        <>
            {isAuthenticated ? (
              <>
                    <Modal show={successModal} onClose={() => handleReload()}>
                    <Modal.Header>Blog Uploaded Successfully!</Modal.Header>
                     <Modal.Body>
                       <div className="space-y-6">
                         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                           Congratulations!
                         </p>
                         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                         Your blog has been successfully submitted. Once approved by our admin, it will be published online. In the meantime, you can check the status of your approval in the "My Blogs" section.
                         </p>
                       </div>
                     </Modal.Body>
                   </Modal>

                <div className='flex flex-col md:mx-32 m-[14px] md:mb-16 mt-16'>
                    <div className='flex flex-col-reverse md:flex-row justify-between'>
                      <h1 className='text-6xl text-center md:text-left'>Hi, <span>{userData[0]?.username}</span></h1>
                      <p className={`cursor-pointer text-red-700 text-xl font-bold`} onClick={handleLogOut}>Logout</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[28px] leading-10 md:text-5xl md:leading-[72px] finwise-blue text-center md:text-left'>
                            Compose Your Blog Here
                        </h1>
                        <p className='font-medium text-sm md:text-lg leading-7 finwise-para text-center md:text-left'>
                            Explore fresh ideas and inspire your next breakthrough.
                        </p>
                    </div>
                    <div className='my-6'>
                        <div className="mb-2 block">
                            <Label htmlFor="blogsTitle" value="Please enter the title of the blog post here." />
                        </div>
                        <TextInput id="blogsTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Please provide a concise title that reflects the main topic of your post." required />
                        <div className='my-10'>
    <div className="mb-2 block">
        <Label htmlFor="file-upload-helper-text" value="Upload file For Thumbnail" />
    </div>
    <FileInput 
        id="file-upload-helper-text" 
        helperText="SVG, PNG, JPG or GIF" 
        type="file" 
        name="Thumbnail" 
        accept=".jpeg, .png, .gif, .bmp, .tiff" 
        onChange={handleThumbnailChange} // Handle file change
        required 
    />
</div>
                                {/* <form action="/upload" method="POST" enctype="multipart/form-data">
                                    <input
                                        class="AI_Input"
                                        type="file"
                                        name="resume"
                                        accept=".jpeg, .png, .gif, .bmp, .tiff"
                                        required="required">
                                    <button class="resume_btn" type="submit">AI ✨</button>
                                </form> */}

                        <div className='my-6'>
                            <Label htmlFor="blogsContent" value="Please write the content of the blog here." />
                            <Editor
                                apiKey='ypo1fmswbyn1ye2jhqzf5k7otdoe4qi3l7a3oe58xisjkd1w'
                                init={{
                                    plugins: [
                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                    ],
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                    // images_upload_handler: handleImageUpload,
                                }}
                                initialValue="Start writing your Blogs!"
                                onEditorChange={(newContent) => setContent(newContent)}
                            />
                        </div>
                        <p className='font-bold text-sm md:text-lg leading-7 text-center md:text-left'>{writeDate}</p>
                        <div className="flex justify-center my-4">
                         <button
                          onClick={handleSubmit}
                          className={`finwise-blue-bg text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out 
                        hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${!(title && content) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
                          disabled={!title || !content} // Disable button if title or content is missing
                        >
                         Submit
                        </button>
</div>
                        <YourBlogs dataYourBlogs={histBlogs} />
                    </div>
                </div>
                </>
            ) : (
                <LoginBlogs authentication={setIsAuthenticated} data={setUserData} />
            )}
        </>
    );
};

export default BlogsWriting;




// import React, { useState, useRef, useMemo } from 'react';
// import JoditEditor from 'jodit-react';
// import EATemplate from './EarlyAccessTemplate';
// import { FloatingLabel, TextInput, Label } from "flowbite-react";
// import axios from 'axios';

// const BlogsWriting = ({ placeholder }) => {
//     const editor = useRef(null);
// 	const [content, setContent] = useState('');
//     const [title, setTitle] = useState('');

//     const formatDate = (date) => {
//         const options = { day: 'numeric', month: 'short', year: '2-digit' };
//         return new Intl.DateTimeFormat('en-GB', options).format(date);
//     };

//     const date = new Date();

//     const writeDate = formatDate(date);

//     const config = {
//       uploader: {
//           url: 'http://localhost:5000/api/upload-image', // Backend upload endpoint
//           format: 'json',
//           process: (response) => {
//               if (response && response.url) {
//                   return { files: [{ url: response.url }] };
//               }
//               return null;
//           },
//           // Make sure to specify the field name here
//           fieldName: 'image', // This should match the name used in Multer
//       },
//   };

//     axios.defaults.baseURL = 'http://localhost:5000';

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             let data;

//             data = {
//                 title,
//                 content,
//                 writeDate
//             }

//             const response = await axios.post('/api/blogcontent', data);

//             if (response.status === 201) {
//                 console.log('Content Saved');
//             } else {
//                 console.error('Error:', response.data);
//             }
//         } catch (error) {
//             console.log('Error', error);
//         }
//     }

// 	return (
//        <> 
//         <div className='flex flex-col md:mx-32 m-[14px] md:mb-16 mt-16'>
//           <div>
//             <h1 className='font-semibold text-[28px] leading-10 md:text-5xl md:leading-[72px] finwise-blue text-center md:text-left'>
//              Compose Your Blog Here
//             </h1>
//             <p className='font-medium text-sm md:text-lg leading-7 finwise-para text-center md:text-left'>
//              Explore fresh ideas and inspire your next breakthrough.
//             </p>
//           </div>
//           <div className='my-6'>
//           {/* <FloatingLabel
//             variant="filled"
//             label="Please enter the title of the blog post here."
//             helperText="Please provide a concise title that reflects the main topic of your post."
//             value={title}
//             onChange={newTitle => setTitle(newTitle)}
//           /> */}
//                 <div>
//         <div className="mb-2 block">
//           <Label htmlFor="blogsTitle" value="Please enter the title of the blog post here." />
//         </div>
//         <TextInput id="blogsTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Please provide a concise title that reflects the main topic of your post." required />
//       </div>
//       <div className='my-6'>
//       <Label htmlFor="blogsContent" value="Please write the content of the blog here." />
//           <JoditEditor
//               id="blogsContent"
//               ref={editor}
//               value={content}
//               config={config}
//               onChange={newContent => setContent(newContent)}
//               className='my-2'
//           />
//           </div>
//           <div>
//             <p className='font-bold text-sm md:text-lg leading-7 text-center md:text-left'>{writeDate}</p>
//           </div>
//           </div>
//           <button onClick={handleSubmit} className={`${!(title.length > 0 || content.length > 0) ? 'hidden' : 'block'}`}>Click Me</button>
//         </div>
//        </>
// 	);
// }

// export default BlogsWriting;