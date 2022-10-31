import styled from 'styled-components';

export const Section = styled.section<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '38px 36px')};
  background: #ffffff;
  box-shadow: 0px 8px 35px #e9e0ff;
  border-radius: 25px;
  width: 100%;
  margin-bottom: 40px;
`;

export const StyledNftyUniversalDMWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
