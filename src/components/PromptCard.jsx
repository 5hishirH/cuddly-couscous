"use client";

import Image from "next/image";
import { useState } from "react";

const PromptCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <div className="avatar">
        <div className="w-8 rounded-full">
          <Image
            src={post.creator.image}
            height={32}
            width={32}
            alt="profic pic"
          />
        </div>
      </div>

      <div>
        <h3>{post.creator.username}</h3>
        <h4>{post.creator.email}</h4>
      </div>
      <div onClick={handleCopy} className="cursor-pointer">
        <Image
          src={
            copied === post.prompt
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
          }
          height={16}
          width={16}
          alt="icon"
        />
      </div>
      <p>{post.prompt}</p>
      <h4>{post.tag}</h4>
    </div>
  );
};

export default PromptCard;
