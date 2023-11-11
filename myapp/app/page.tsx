"use client"
import { useState, useEffect } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [maxWidth, setMaxWidth] = useState('80%');

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const handleTextChange = event => {
    setText(event.target.value);
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setMaxWidth('60%');
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setMaxWidth('40%');
      } else {
        setMaxWidth('80%');
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div style={{ maxWidth, margin: '200px auto' }}>
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'2rem',fontFamily:'fantasy',color:'purple',marginBottom:'20px'}}>Word Counter App</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder='Enter Words'
        style={{ width: '100%', resize: 'vertical',border:'1px solid black',borderRadius:'10px',padding:'20px 0px 0px 10px' }}
      />
      <p style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'2rem',fontFamily:'fantasy',color:'blue',marginBottom:'20px'}}>Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
