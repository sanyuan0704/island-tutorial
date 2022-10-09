// NoSSR
import React, { useEffect, useState } from 'react';

export default function NoSSR({ children }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? children : null;
}
