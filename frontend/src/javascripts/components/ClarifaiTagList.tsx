import * as React from 'react';
import { useState, useEffect } from 'react';
import { Tag } from '@zeit-ui/react';

import { ClarifaiTag } from '../components/ClarifaiTag';

export const ClarifaiTagList = (props: any) => {

  return (
    <React.Fragment>
      <div className="clarifaiTagList flex justify-center">
        {props.clarifaiTags.map((tag: any, index: number) => (
          <div key={index} className="list mx-1">
            <ClarifaiTag
              tag={tag}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
