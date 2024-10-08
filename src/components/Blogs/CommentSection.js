import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Textarea, Card, Spinner } from "flowbite-react";
import { FaUser, FaComment } from 'react-icons/fa'; // Import icons from react-icons;
import axios from 'axios';

const CommentSection = ({ baseURL, blogID }) => {

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [comments, setComments] = useState([]);
    const [isPosting, setIsPosting] = useState(false);

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: '2-digit' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    const writeDate = formatDate(new Date());

    axios.defaults.baseURL = baseURL;

    useEffect(() => {
        setComments([]);
        clear();
        axios.get('/api/blogsCommentsFetch', {
            params: {
                blogID
            }
        })
        .then(response => {
            setComments(response.data);
        })
        .catch(error => console.error('Error fetching comments:', error));
    }, [blogID]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPosting(true);

        try {
            const response = await axios.post('/api/blogsComments', {
                Name: name,
                Content: content,
                forBlog: blogID,
                writeDate: writeDate
            });
            if (response.status === 200) {
                clear();
                fetchComments();
                setIsPosting(false);
                console.log("Comment Posted");
            } else {
                console.error('Error:', response.data);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }

    const fetchComments = () => {
        axios.get('/api/blogsCommentsFetch', { params: { blogID } })
            .then(response => {
                setComments(response.data);
            })
            .catch(error => console.error('Error fetching comments:', error));
    };

    const clear = () => {
        setName('');
        setContent('');
    }


  return (
    <>
      <h1 className='text-center font-bold text-2xl m-8'>Comment Section</h1>
      <div className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between md:h-[28rem] overflow-hidden">
      <div className='md:w-2/4 overflow-y-scroll'>
      <h2 className="text-lg font-semibold mb-4">Join the Conversation</h2>
      <p className="mb-4 text-sm text-gray-600">
        We’d love to hear your thoughts! Please share your comments below.
      </p>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 flex items-center">
            <FaUser className="mr-2" /> {/* User Icon */}
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" />
        </div>
        <div className="max-w-md">
          <div className="mb-2 flex items-center">
            <FaComment className="mr-2" /> {/* Comment Icon */}
            <Label htmlFor="comment" value="Your Comment" />
          </div>
          <Textarea id="comment" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Leave a comment..." required rows={4} />
        </div>
        <Button type="submit">{isPosting ? (<p>Posting<Spinner className='mx-5' aria-label="Default status example" /></p>) : (<p>Post</p>)}</Button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Your feedback is important to us, and we appreciate your contribution to the discussion!
      </p>
    </div>
    <div className='md:w-2/4 overflow-y-scroll'>

    {comments.length > 0 ? (
    comments.map(data => (
        <Card key={data._id} className="md:mx-4 my-8">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {data.Name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {data.Content}
            </p>
        </Card>
    ))
) : (
    <p>No Comments</p>
)}
    </div>
    </div>
    </>
  );
};

export default CommentSection;
