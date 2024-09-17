// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function App() {
//   return (
//     <Editor
//       apiKey='ypo1fmswbyn1ye2jhqzf5k7otdoe4qi3l7a3oe58xisjkd1w'
//       init={{
//         plugins: [
//           // Core editing features
//           'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//           // Your account includes a free trial of TinyMCE premium features
//           // Try the most popular premium features until Sep 29, 2024:
//           'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
//         ],
//         toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//         tinycomments_mode: 'embedded',
//         tinycomments_author: 'Author name',
//         mergetags_list: [
//           { value: 'First.Name', title: 'First Name' },
//           { value: 'Email', title: 'Email' },
//         ],
//         ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
//       }}
//       initialValue="Welcome to TinyMCE!"
//     />
//   );
// }

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import EATemplate from './EarlyAccessTemplate';
import { FloatingLabel, TextInput, Label } from "flowbite-react";
import axios from 'axios';

const BlogsWriting = ({ placeholder }) => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: '2-digit' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    const date = new Date();

    const writeDate = formatDate(date);

    // const config = {
    //     uploader: {
    //       url: 'http://localhost:5000/upload', // Backend upload endpoint
    //       format: 'json',
    //       process: (response) => {
    //         if (response && response.url) {
    //           return { files: [{ url: response.url }] };
    //         }
    //         return null;
    //       },
    //     },
    //   };

    axios.defaults.baseURL = 'http://localhost:5000';

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let data;

            data = {
                title,
                content,
                writeDate
            }

            const response = await axios.post('/api/blogcontent', data);

            if (response.status === 201) {
                console.log('Content Saved');
            } else {
                console.error('Error:', response.data);
            }
        } catch (error) {
            console.log('Error', error);
        }
    }

	return (
       <> 
        <div className='flex flex-col md:mx-32 m-[14px] md:mb-16 mt-16'>
          <div>
            <h1 className='font-semibold text-[28px] leading-10 md:text-5xl md:leading-[72px] finwise-blue text-center md:text-left'>
             Compose Your Blog Here
            </h1>
            <p className='font-medium text-sm md:text-lg leading-7 finwise-para text-center md:text-left'>
             Explore fresh ideas and inspire your next breakthrough.
            </p>
          </div>
          <div className='my-6'>
          {/* <FloatingLabel
            variant="filled"
            label="Please enter the title of the blog post here."
            helperText="Please provide a concise title that reflects the main topic of your post."
            value={title}
            onChange={newTitle => setTitle(newTitle)}
          /> */}
                <div>
        <div className="mb-2 block">
          <Label htmlFor="blogsTitle" value="Please enter the title of the blog post here." />
        </div>
        <TextInput id="blogsTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Please provide a concise title that reflects the main topic of your post." required />
      </div>
      <div className='my-6'>
      <Label htmlFor="blogsContent" value="Please write the content of the blog here." />
          <JoditEditor
              id="blogsContent"
              ref={editor}
              value={content}
            //   config={config}
              onChange={newContent => setContent(newContent)}
              className='my-2'
          />
          </div>
          <div>
            <p className='font-bold text-sm md:text-lg leading-7 text-center md:text-left'>{writeDate}</p>
          </div>
          </div>
          <button onClick={handleSubmit} className={`${!(title.length > 0 || content.length > 0) ? 'hidden' : 'block'}`}>Click Me</button>
        </div>
       </>
	);
}

export default BlogsWriting