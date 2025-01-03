import styles from './popup.module.scss';

export type TPopupDirection =
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';

export const mapDirectionClass: Record<TPopupDirection, string> = {
    'top left': styles.topLeft,
    'top right': styles.topRight,
    'bottom left': styles.bottomLeft,
    'bottom right': styles.bottomRight,
};

export const mapDirectionBorderClass: Record<TPopupDirection, string> = {
    'top left': styles.topLeftBorder,
    'top right': styles.topRightBorder,
    'bottom left': styles.bottomLeftBorder,
    'bottom right': styles.bottomRightBorder,
};
