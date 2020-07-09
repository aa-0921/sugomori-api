require('dotenv').config();
import * as React from 'react';
import { useState } from 'react';
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
  defaultClassNames,
  IPreviewProps,
} from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { Grid, Row, Input, Button } from '@zeit-ui/react';

// const postUrl: string = process.env.REACT_APP_API_URL_POSTS!;

export const DropZone = () => {
  // const [postData, setpostData] = useState('');

  const handleSubmit: IDropzoneProps['onSubmit'] = (Files, allFiles) => {
    console.log('Files: ', Files);
    console.log(
      'Files.map((f) => f.meta',
      Files.map((f) => f.meta),
    );
    allFiles.forEach((f) => f.remove());
    // Files.map((f) => setpostData(f.meta.name));
    // setpostData(Files);
    // console.log('postData: ', postData);
  };

  const postSubmit = async () => {};
  const [content, setContent] = useState('');
  // const fileInput: RefObject<HTMLInputElement> = React.createRef();
  const fileInput = React.createRef<HTMLInputElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  // const handleChangeStatus = ({ meta }, status: any) => {
  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta }, status) => {
    console.log('status-handleChangeStatus: ', status);
    console.log('meta-handleChangeStatus: ', meta);
  };

  const Layout = ({
    input,
    previews,
    submitButton,
    dropzoneProps,
    files,
    extra: { maxFiles },
  }: ILayoutProps) => {
    return (
      <div>
        {previews}

        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

        {files.length > 0 && submitButton}
      </div>
    );
  };
  // const Preview = ({ meta }: IPreviewProps) => {
  //   // const Preview = ({ meta }) => {
  //   const { name, percent, status } = meta;
  //   return (
  //     <span
  //       style={{
  //         alignSelf: 'flex-start',
  //         margin: '10px 3%',
  //         fontFamily: 'Helvetica',
  //       }}
  //     >
  //       {name}, {Math.round(percent)}%, {status}
  //     </span>
  //   );
  // };
  return (
    <Grid.Container gap={-10} justify="center">
      <Row className="justify-content-md-center">
        <form>
          <Dropzone
            // autoUpload={false}
            // getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            LayoutComponent={Layout}
            onSubmit={handleSubmit}
            classNames={{
              inputLabelWithFiles: defaultClassNames.inputLabel,
            }}
            maxFiles={1}
            // PreviewComponent={Preview}
            inputContent="Drop Files"
          />
          <div className="form-group">
            <label className="form-label">コメント</label>
            <Input
              clearable
              placeholder="コメントを入力"
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />

            {/* <Input type="file" name="image" ref={fileInput} accept="image/*" /> */}
            {/* <Button type="success" ghost onClick={postSubmit}>
              Post
            </Button> */}
          </div>
        </form>
      </Row>
    </Grid.Container>
  );
};
