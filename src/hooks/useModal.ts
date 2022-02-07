import { useContext } from 'react';
import ModalContext from '../components/Modal/ModalContext';

const useModal = () => useContext(ModalContext);

export default useModal;
