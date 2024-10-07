import { FC, Suspense } from "react";

import { Loader } from "@/shared/ui";
import { Modal } from "@/shared/ui/Modal";
import { classNames } from "@/shared/lib";

import {LazyAuthForm} from '../AuthForm'

type TAuthModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const AuthModal: FC<TAuthModalProps> = ({ className, isOpen, onClose }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader/>}>
                <LazyAuthForm onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};