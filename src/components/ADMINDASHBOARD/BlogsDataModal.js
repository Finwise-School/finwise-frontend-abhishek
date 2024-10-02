import { Button, Modal, Label, Textarea  } from "flowbite-react";
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'; // Import icons
import axios from "axios";
import { useState } from "react";


const BlogsDataModal = ({ setOpenModal, setApproveoption,
   setRevokeoption, item_id,
    item_title, item_content,
     item_date, item_imgurl,
      item_approved, majorRights,
      revokeReason, setRevokeReason }) => {

  axios.defaults.baseURL = 'https://api.finwiseschool.com';
  // axios.defaults.baseURL = 'http://localhost:5000';

  const [revokeModal, setRevokeModal] = useState(false);

  const closeRevokeModal = () => {
    setRevokeReason('');
    setRevokeModal(false)
  }

  // const [revokeModal, setRevokeModal] = useState(false);

  // const handleRevokeOption = async () => {
  //   if (selectedBlog) {
  //     const approveid = selectedBlog._id; // Get the ID of the selected blog
  //     const newApprovalStatus = !selectedBlog.isApproved; // Toggle the approval status
  //     try {
  //       const response = await axios.post('/api/admindashboard/blogs-isApproved', { id: approveid, approve: false });
  //       // const response = await axios.post('http://localhost:5000/api/admindashboard/blogs-isApproved', { id: approveid });
  //       if (response.status === 200) {
  //         console.log('Status Changed');
  //         // Update the state based on the new approval status
  //         setBlogsData((prevBlogs) =>
  //           prevBlogs.map((blog) =>
  //             blog._id === approveid ? { ...blog, isApproved: newApprovalStatus } : blog
  //           )
  //         );
  //         handleCloseModal();
  //       } else {
  //         console.error('Error:', response.data);
  //       }
  //     } catch (error) {
  //       console.log('Error', error);
  //     }
  //   }
  // };

  return (
    <>

    <Modal show={revokeModal} onClose={() => closeRevokeModal()}>
    <Modal.Header>Revoke Reason</Modal.Header>
    <Modal.Body>
    <div className="max-w-md">
                         <div className="mb-2 block">
                         <Label htmlFor="comment" value="Reason" />
                         </div>
                         <Textarea id="comment" value={revokeReason} onChange={(event) => setRevokeReason(event.target.value)} placeholder="Reason for Revoke" required rows={4} />
        </div>
    </Modal.Body>
        <Modal.Footer className={`${!revokeReason && 'hidden'}`}>
          <Button color="failure" onClick={() => setRevokeoption(item_id)} className="mx-1"><HiXCircle className="inline mr-1 m-auto" />Revoke</Button>
        </Modal.Footer>
  </Modal>



    <Modal show={true} size="7xl" onClose={() => setOpenModal()}>
      <Modal.Header>
        {item_title}
      </Modal.Header>
      <Modal.Body>
        <>
        <div className="space-y-6">
          <div className="flex flex-row">
           <img src={item_imgurl} alt="" />
           <p>This is Thumbnail</p>
          </div>
          <p dangerouslySetInnerHTML={{ __html: item_content }} />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Write Date: {item_date}
          </p>
        </div>
        </>
      </Modal.Body>
      <Modal.Footer className="flex flex-row justify-between">
        {majorRights && (
        <div className="flex flex-row">
          <Button color="success" onClick={() => setApproveoption(item_id)} className="mx-1"><HiCheckCircle className="inline mr-1 m-auto" />Approve</Button>
          {/* <Button color="failure" onClick={() => setRevokeoption(item_id)} className="mx-1"><HiXCircle className="inline mr-1 m-auto" />Revoke</Button> */}
          <Button color="failure" onClick={() => setRevokeModal(true)} className="mx-1"><HiXCircle className="inline mr-1 m-auto" />Revoke</Button>
        {/* <Button color={!item_approved ? "success" : "failure"} onClick={() => setApproveoption(item_id)} className="mx-1">
          {!item_approved ? <HiCheckCircle className="inline mr-1 m-auto" /> : <HiXCircle className="inline mr-1 m-auto" />}
          {!item_approved ? "Approve" : "Revoke"}
        </Button> */}

          {/* <Button color="gray" onClick={() => setOpenModal()} className="mx-1">
            Decline
          </Button> */}
        </div>
        )}
      </Modal.Footer>
    </Modal>

    </>
  );
};

export default BlogsDataModal;
