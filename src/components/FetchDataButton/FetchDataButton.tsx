
import React, { useState } from 'react';
import Button from '@mui/material/Button';

export type OnDataReceivedCallback<T = any> = (
  data: T | null,
  error: Error | null
) => void;

interface Parameters<T>{
  text: string,
  endpoint: string,
  onDataReceived: OnDataReceivedCallback<T>,
}

/**
 * A Button which when clicked, will make a request to the specified endpoint, and then call the passed in callback after this request completes.
 */
export const FetchDataButton = <T,>({ text = 'Click me!', endpoint, onDataReceived }: Parameters<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      onDataReceived(data, null);
    } catch (error) {
      onDataReceived(null, error instanceof Error ? error : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="success"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : text}
    </Button>
  );
};

export default FetchDataButton;
