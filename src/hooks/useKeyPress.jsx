import { useEffect } from 'react';

const useKeyPress = (key, callback) => {
  const handlePress = e => {
    if (e.key === key) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handlePress);

    return () => {
      document.removeEventListener('click', handlePress);
    }
  });
}

export default useKeyPress;
