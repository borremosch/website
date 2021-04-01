import { useEffect } from 'react';

export function Get() {
  useEffect(() => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.mathsapp';
  }, []);

  return <>Redirecting...</>;
}
