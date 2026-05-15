import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const ReviewArea = ({ review, loading }) => {
  return (
    <div className="w-full prose prose-invert max-w-none">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="text-xl font-bold text-[#f5d19b] animate-pulse">
            {review}
          </div>
          <div className="w-12 h-12 border-4 border-[#f5d19b] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="p-2">
          <Markdown 
            rehypePlugins={[rehypeHighlight]}
            components={{
              p: ({node, ...props}) => <p className="mb-4 text-base leading-relaxed text-zinc-400" {...props} />,
              h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-zinc-100 mb-5 tracking-tight" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-zinc-200 mb-4 tracking-tight" {...props} />,
              code: ({node, inline, ...props}) => 
                inline 
                ? <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-100 text-sm font-mono" {...props} />
                : <code className="block bg-zinc-950 p-5 rounded-xl overflow-x-auto my-5 text-sm font-mono border border-zinc-800 text-zinc-300 shadow-inner" {...props} />


            }}
          >
            {review}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default ReviewArea;
