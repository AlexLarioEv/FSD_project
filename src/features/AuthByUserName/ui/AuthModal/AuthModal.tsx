import { FC } from "react";

import { classNames } from "@/shared/lib";
import { Modal } from "@/shared/ui/Modal";

import {AuthForm} from '../AuthForm'

type TAuthModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const AuthModal: FC<TAuthModalProps> = ({ className, isOpen, onClose }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
            <AuthForm/>
        </Modal>
    );
};