import styled from 'styled-components'
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

interface StyleModalProps {
  width: number
  theme: string
};

export const Container = styled.div`
  position: fixed;
  z-index: 1050;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  overflow: auto;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledModalOverlay = styled.div``

export const StyledModal = styled.div<StyleModalProps>`
  position: relative;
  margin: 5rem auto;
  background-color: ${(props: StyleModalProps) => props.theme};
  border-radius: 0.25rem;
  width: ${(props: StyleModalProps) => props.width}rem;
  z-index: 3;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  ${typography.size.large}
  ${typography.weight.normal}
  color: ${colors.textGray};
`;

export const CloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 0 1.5rem 1.5rem;
  ${typography.size.small};
  color: ${colors.textGray};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
`;