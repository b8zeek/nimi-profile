import { PropsWithChildren, useEffect, useState } from 'react';

import { ReactComponent as CheckmarkSvg } from '../../toast/assets/svg/checkmark.svg';
import { StyledToast, StyledToastIconWrapper, ToastInnerWrapper } from './styled';

export type ToastProps = PropsWithChildren<{
  close: () => void;
}>;

export function Toast({ close, children }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(true);
      close();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <StyledToast isVisible={isVisible}>
      <ToastInnerWrapper>
        <StyledToastIconWrapper>
          <CheckmarkSvg fill="#fff" width={20} />
        </StyledToastIconWrapper>
        {children}
      </ToastInnerWrapper>
    </StyledToast>
  );
}
