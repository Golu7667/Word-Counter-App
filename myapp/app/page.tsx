"use client"
import { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const countWords = () => {
    // Split the text by spaces and count the non-empty elements
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea value={text} onChange={handleTextChange} rows="8" cols="50" />
      <p>Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
