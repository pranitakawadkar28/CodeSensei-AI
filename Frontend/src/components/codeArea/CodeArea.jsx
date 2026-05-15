import React, { useRef } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const CodeArea = ({ code, setcode }) => {
  const editorRef = useRef(null);

  return (
    <div 
      ref={editorRef} 
      className="h-full w-full overflow-auto custom-scrollbar bg-[#1e1e1e] rounded-xl"
    >
      <Editor
        autoFocus
        placeholder="Paste your code here..."
        value={code}
        onValueChange={(value) => setcode(value)}
        highlight={(code) =>
          prism.highlight(code, prism.languages.javascript, "javascript")
        }
        padding={20}
        className="min-h-full font-mono text-base outline-none text-gray-300"
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
        }}
      />
    </div>
  );
};

export default CodeArea;
