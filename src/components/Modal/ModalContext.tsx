import { createContext, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProviderProps {
  children: ReactNode;
}

export interface IModalContext {
  showModal: (args: ReactNode) => void;
  hideModal: () => void;
  hideAllModals: () => void;
}

const ModalContext = createContext<IModalContext | null>(null);

const push = (item: any) => (array: any) => [...array, item];
const pop = (array: any) => array.slice(0, array.length - 1);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<any[]>([]);

  const hideAllModals = () => {
    setModal([]);
  };

  const hideModal = () => {
    setModal(pop);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
    if (e.keyCode === 27) {
      hideModal();
    }
  };

  const showModal = (modal: ReactNode) => {
    setModal(push(modal));
  };

  useEffect(() => {
    if (modal.length > 0) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.classList.add('no-scroll');
    } else {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.classList.remove('no-scroll');
    }
  }, [modal]);

  const CurrentModal = modal[modal.length - 1];

  const modalContextValue: IModalContext = {
    showModal,
    hideModal,
    hideAllModals,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
      {!!modal.length && createPortal(<CurrentModal />, document.body)}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;
