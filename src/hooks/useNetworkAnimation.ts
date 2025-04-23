
import { useRef } from 'react';

export const useNetworkAnimation = () => {
  return useRef<HTMLDivElement>(null);
};
