import { nanoid } from 'nanoid';
import { ReactNode, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from '../context';
import { Toast } from '../Toast';
import { StyledToastContainer } from '../Toast/styled';

export interface IToast {
  id: string;
  content: ReactNode;
}

export function ToastProvider(props: { children: ReactNode }) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const open = (content: ReactNode) => setToasts((currentToasts) => [...currentToasts, { id: nanoid(), content }]);

  const close = (id) => setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));

  const contextValue = useMemo(() => ({ open, close }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <StyledToastContainer>
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </StyledToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  );
}
