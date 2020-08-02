import * as React from 'react';
import { useState, useEffect } from 'react';
import { Tag } from '@zeit-ui/react';
import { ClarifaiApp } from '../api/ClarifaiApp'
import { ClarifaiTag } from '../components/ClarifaiTag';

export const ClarifaiTagList = (props: any) => {
  // clarifaiTags関連
  const [clarifaiTags, setClarifaiTags] = useState([])
  // const testId = 54
  // const clarifaiUrl = 'https://sugomori-app.s3-ap-northeast-1.amazonaws.com/picpost_id_56_post_image.jpg'
  const clarifaiUrl = `https://sugomori-app.s3-ap-northeast-1.amazonaws.com/picpost_id_${props.clickedPost.id}_post_image.jpg`

  useEffect(() => {
    ClarifaiApp(clarifaiUrl).then((res) => {
      setClarifaiTags(res.slice(0, 10).map((el: any) => `${el.name.toUpperCase()} `))
    })
  }, [])
  return (
    <React.Fragment>
      <div className="flex justify-center">
        {clarifaiTags.map((tag: any, index: number) => (
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
