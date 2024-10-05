import React, { useState } from 'react';
import { Button, Modal, Label, Textarea } from "flowbite-react";
import { HiOutlineExclamationCircle, HiCheck, HiX } from "react-icons/hi";


const DeletePage = ({ baseURL, openModal, setOpenModal, handleDeleteOption, isBlogs, deletion, setdeletion }) => {
  // const [deletionReason, setDeletionReason] = useState('');

  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          {isBlogs ? (
                        <>
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <div className="max-w-md">
                         <div className="mb-2 block">
                         <Label htmlFor="comment" value="Reason" />
                         </div>
                         <Textarea id="comment" value={deletion} onChange={(event) => setdeletion(event.target.value)} placeholder="Reason for Deletion" required rows={4} />
                        </div>
                        <h3 className={`mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 ${deletion.length === 0 && 'hidden'}`}>
                          Are you sure you want to delete this Data?
                        </h3>
                        <div className={`flex justify-center gap-4 ${deletion.length === 0 && 'hidden'}`}>
                        <Button color="failure" onClick={handleDeleteOption}>
                         <HiCheck className="inline-block mr-1 m-auto" /> Yes, I'm sure
                        </Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                         <HiX className="inline-block mr-1 m-auto" /> No, cancel
                        </Button>
                        </div>
                        </>
          ) : (
            <>
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Data?
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="failure" onClick={handleDeleteOption}>
             <HiCheck className="inline-block mr-1 m-auto" /> Yes, I'm sure
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
             <HiX className="inline-block mr-1 m-auto" /> No, cancel
            </Button>
            </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeletePage;
