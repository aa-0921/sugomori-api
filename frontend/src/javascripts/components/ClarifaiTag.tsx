import * as React from 'react';
import { Tag } from '@zeit-ui/react';


export const ClarifaiTag = (props: any) => {
  return (
    <React.Fragment>
      <Tag type="secondary">{props.tag}</Tag>
    </React.Fragment>
  );
};
