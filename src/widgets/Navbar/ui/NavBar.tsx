import { FC } from "react"

import { classNames} from 'shared/lib'

import styles from './NavBar.module.scss'

type TNavBarProps = {
    className?: string
}

export const NavBar: FC<TNavBarProps> = ({className}) => {


    return (
        <div className={classNames(styles.navbar, {}, [className])}>
        </div>
    );
}