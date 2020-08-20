import * as React from 'react';
import { FormikPost } from '../components/FormikPost';
import { Modal } from '@zeit-ui/react';

export const PostModal = (props: any) => {

  return (
    <Modal width="35rem" open={props.postModalOpen} onClose={props.postModalCloseHandler}>
      <Modal.Content>
        <FormikPost
          postModalCloseHandler={props.postModalCloseHandler}
          setFilterPosts={props.setFilterPosts}
          filterPosts={props.filterPosts}
          setNowLoading={props.setNowLoading}
          nowLoading={props.nowLoading}
          currentUserId={props.currentUserId}
        />
      </Modal.Content>
      <Modal.Action
        passive onClick={() => props.setPostModalOpen(false)}
        className="bg-gray-100"
      >
        <div>
          Cancel
                  </div>
      </Modal.Action>
    </Modal>
  );
};
