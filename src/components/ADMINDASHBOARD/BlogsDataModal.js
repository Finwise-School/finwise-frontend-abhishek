import { Button, Modal, Label, Textarea, Tabs, Card } from "flowbite-react";
import { HiCheckCircle, HiXCircle, HiChat, HiClipboardList, HiTrash } from 'react-icons/hi'; // Import icons
import axios from "axios";
import { useState, useEffect } from "react";

const BlogsDataModal = ({ setOpenModal, setApproveoption,
   setRevokeoption, blogID,
    item_title, item_content,
     item_date, item_imgurl,
      item_approved, majorRights,
      revokeReason, setRevokeReason, baseURL }) => {

  axios.defaults.baseURL = baseURL;

  const [revokeModal, setRevokeModal] = useState(false);
  const [commentsData, setCommentsData] = useState([]);

  const closeRevokeModal = () => {
    setRevokeReason('');
    setRevokeModal(false);
  }

  useEffect(() => {
    setCommentsData([]);
    fetchComments();
  }, [blogID]);

  const fetchComments = () => {
    axios.get('/api/blogsCommentsFetch', { params: { blogID } })
        .then(response => {
          setCommentsData(response.data);
        })
        .catch(error => console.error('Error fetching comments:', error));
  };

  const handleCommentDeleteOption = async (commentId) => {
    try {
        const response = await axios.post('/api/blogsComments-delete', { commentId });
        if (response.status === 200) { // Expect 200 for successful deletion
            console.log('Comment Deleted');
            fetchComments(); // Refresh comments after deletion
        } else {
            console.error('Error:', response.data);
        }
    } catch (error) {
        console.log('Error', error);
        alert('Error deleting comment. Please try again.');
    }
};

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
          <Button color="failure" onClick={() => setRevokeoption(blogID)} className="mx-1"><HiXCircle className="inline mr-1 m-auto" />Revoke</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={true} size="7xl" onClose={() => setOpenModal()}>
        <Modal.Header>
          {item_title}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Tabs aria-label="Default tabs" variant="default">
              <Tabs.Item active title="Content" icon={HiClipboardList}>
                <div className="flex flex-row">
                  <img src={item_imgurl} alt="" />
                  <p>This is Thumbnail</p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: item_content }} />
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Write Date: {item_date}
                </p>
              </Tabs.Item>
              <Tabs.Item title="Comments" icon={HiChat}>
                {commentsData.length > 0 ? (
                  commentsData.map(data => (
                    <Card key={data._id} className="md:mx-4 my-8">
                      <div className="flex flex-row justify-between">
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.Name}
                      </h5>
                      <button className="font-medium text-red-600 hover:text-red-800 dark:text-red-500" onClick={() => handleCommentDeleteOption(data._id)}>
                          <HiTrash className="inline mr-1 m-auto" /> Delete
                      </button>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {data.Content}
                      </p>
                    </Card>
                  ))
                ) : (
                  <p>No Comments</p>
                )}
              </Tabs.Item>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-row justify-between">
          {majorRights && (
            <div className="flex flex-row">
              <Button color="success" onClick={() => setApproveoption(blogID)} className="mx-1"><HiCheckCircle className="inline mr-1 m-auto" />Approve</Button>
              <Button color="failure" onClick={() => setRevokeModal(true)} className="mx-1"><HiXCircle className="inline mr-1 m-auto" />Revoke</Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BlogsDataModal;
