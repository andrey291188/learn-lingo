import { ReactNode } from 'react'
import { StyledPopUpContainer } from './PopUp.styled';

interface PopUpType {
    children: ReactNode;
  }

export default function PopUp({children}: PopUpType) {
  return (
    <StyledPopUpContainer>
      {children}
    </StyledPopUpContainer>
  )
}
