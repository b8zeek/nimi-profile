import { createContext } from 'react';

export interface ToastContext {
  open: (content: React.ReactNode) => void;
  close: (id: string) => void;
}

export const ToastContext = createContext({} as ToastContext);
