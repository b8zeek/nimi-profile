import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface ExternalLinkProps {
  color?: string;
  underlined?: boolean;
}

const StyledLink = styled.a<ExternalLinkProps>(
  ({ color, underlined }) => `
  cursor: pointer;
  color: ${color ? color : '#C0BAF6'};
  font-weight: 500;
  text-decoration: ${underlined ? 'underline' : 'none'};
  :focus,
  :hover {
    outline: none;
    text-decoration: ${underlined ? 'underline' : 'none'};
  }
 
  :active {
    text-decoration: none;
  }
`
);

/**
 * Outbound link that handles firing google analytics events
 */
export function ExternalLink({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  color,
  underlined,
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
  href: string;
  color?: string;
  underlined?: boolean;
}) {
  return <StyledLink underlined={underlined} target={target} rel={rel} href={href} color={color} {...rest} />;
}
