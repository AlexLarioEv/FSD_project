import { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

// import 'app/styles/index.scss'

type TProps = {
    children: ReactNode;
    element?: HTMLElement;
};

export const Portal: FC<TProps> = ({ children, element = document.body }) => {
    return createPortal(children, element);
};
