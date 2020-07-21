import * as React from 'react';
import { FormikPost } from '../components/FormikPost';
import { Modal, Button, Grid, Divider, Row, Slider, Collapse, Popover, Text } from '@zeit-ui/react';





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
