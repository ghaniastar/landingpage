import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Track loading progress

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true before fetch
    setProgress(0); // Reset progress before each request

    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
      setProgress(100); // Set progress to 100 on successful completion
    } catch (error) {
      console.error('Error fetching quote:', error);
      setProgress(0); // Reset progress on error
    } finally {
      setIsLoading(false); // Ensure loading state is reset even in case of errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress} // Dynamically update progress
        onLoaderFinished={() => setProgress(0)} // Reset progress after completion
        height={10} // Adjust height for visibility (optional)
        // Other LoadingBar props (optional, customize styling)
      />
      {quote ? (
        <>
          <p>"{quote.dateModified}"</p> <p>"{quote.content}"</p>
          <p>- {quote.author} -</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default QuoteDisplay;
