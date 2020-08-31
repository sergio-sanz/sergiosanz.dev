import React, { useState, useEffect } from 'react';

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;

    const scrollListener = () => {
      setReadingProgress((window.pageYOffset / totalHeight) * 100);
    }

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    }
  });

  return <div className="reading-progress" style={{ width: `${readingProgress}%` }}></div>
}

export default ReadingProgress;
