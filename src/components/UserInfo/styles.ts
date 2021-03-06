import styled, { css } from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;

  background-color: var(--gray);

`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    display: block;
    font-size: 13px
  } 

  > span {
    font-size: 13px;
    color: var(--gray);
  } 
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child){
    margin-left: 7px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;
 
  &:hover {
    opacity: 1;
  }
`;

export const MicIcon = styled(Mic)`
  ${iconCSS};  
`;

export const HeardphoneIcon = styled(Headset)`
  ${iconCSS};
`;

export const SettingsIcon = styled(Settings)`
  ${iconCSS};
`;
