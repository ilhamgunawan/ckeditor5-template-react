import "./App.css";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

function App() {
  const configuration = {
    toolbar: {
      items: [
        "heading", 
        "bold", 
        "italic", 
        '|', 
        "numberedList", 
        "bulletedList", 
        "blockQuote", 
        "imageUpload", 
        "link", 
        "mediaEmbed", 
        "imageResize", 
        "imageStyle:side", 
        "indent", 
        "outdent", 
        "insertTable", 
        "tableColumn", 
        "tableRow", 
        "mergeTableCells",
        "MathType", 
        "ChemType", 
        '|',
        "undo", 
        "redo", 
      ]
    },
    image: {
      toolbar: [
        "imageResize", 
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
    language: 'en'
  };
  const [output, setOutput] = useState("");

  // useEffect(() => {
  //   const config = Editor.builtinPlugins.map( plugin => plugin.pluginName );
  //   console.log("ckeditor configs: ", config);
  // }, []);

  // useEffect(() => {
  //   console.log("output: ", output);
  // }, [output]);

  return (
    <div className="App">
      <div
        className="ck-container"
        style={{
          width: "100%"
        }}
      >
        <h2>Editor</h2>
        <CKEditor
          editor={Editor}
          data={output}
          config={configuration}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log( 'Editor is ready to use!', editor );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log( { event, editor, data } );
            setOutput(data);
          }}
          onBlur={(event, editor) => {
            // const data = editor.getData();
            // console.log( 'Blur.', editor );
          }}
          onFocus={(event, editor) => {
            // const data = editor.getData();
            // console.log( 'Focus.', editor );
          }}
        />
      </div>
      <div className="ck-output">
        <h2>Output</h2>
        <CKEditor
          editor={Editor}
          data={output}
          disabled={true}
          // config={configuration}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log( 'Editor is ready to use!', editor );
          }}
          onChange={(event, editor) => {
            // const data = editor.getData();
            // console.log( { event, editor, data } );
          }}
          onBlur={(event, editor) => {
            // const data = editor.getData();
            // console.log( 'Blur.', editor );
          }}
          onFocus={(event, editor) => {
            // const data = editor.getData();
            // console.log( 'Focus.', editor );
          }}
        />
      </div>
    </div>
  );
}

export default App;
