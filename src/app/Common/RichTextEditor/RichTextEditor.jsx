import React from 'react';
import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ( { editorValue, setEditorValue }) => {
    const formats = [
      'font','size',
      'bold','italic','underline','strike',
      'color','background',
      'script',
      'header','blockquote','code-block',
      'indent','list',
      'direction','align',
      'link','image','video','formula',
    ]
  return (
    <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={setEditorValue}
        // formats={formats}
    />
  );
};

export default RichTextEditor;