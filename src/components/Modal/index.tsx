import React from 'react';
import {
  Actions,
  Backdrop,
  CloseButton,
  Container,
  Content,
  StyledModal,
  Title,
  StyledModalHeader,
} from './styled';
import { Close } from '../Icons';
import { useModal } from '../../hooks';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  theme: string;
  width: number;
}

function Modal({ children, title, theme = '#fff', width = 32 }: ModalProps) {
  const context = useModal();

  return (
    <Container>
      <Backdrop onClick={context?.hideModal} />
      <StyledModal width={width} theme={theme}>
        <StyledModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={context?.hideModal}>
            <Close color="#333" />
          </CloseButton>
        </StyledModalHeader>
        <Content>{children}</Content>
      </StyledModal>
    </Container>
  );
}

Modal.Actions = Actions;

export default Modal;
