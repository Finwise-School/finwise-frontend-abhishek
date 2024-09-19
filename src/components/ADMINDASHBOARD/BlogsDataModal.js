import { Button, Modal } from "flowbite-react";

const BlogsDataModal = ({ setOpenModal, setApproveoption, item_id, item_title, item_content, item_date, item_approved }) => {
  return (
    <Modal show={true} size="7xl" onClose={() => setOpenModal()}>
      <Modal.Header>
        {item_title}
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p dangerouslySetInnerHTML={{ __html: item_content }} />
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Write Date: {item_date}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Button color={!item_approved ? "success" : "failure"} onClick={() => setApproveoption(item_id)} className="mx-1">
            {!item_approved ? "Approve" : "Revoke"}
          </Button>
          <Button color="gray" onClick={() => setOpenModal()} className="mx-1">
            Decline
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogsDataModal;
