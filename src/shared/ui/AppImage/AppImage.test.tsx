import { screen } from '@testing-library/react';
import { AppImage } from './AppImage';
import { componentRender } from '@/shared/lib/test';

// Заглушка для изображения, чтобы эмулировать успешную и неудачную загрузку
const mockImageLoad = () => {
    Object.defineProperty(global.Image.prototype, 'src', {
        set() {
            setTimeout(() => {
                if (this.onload) {
                    this.onload(); // Триггер успешной загрузки
                }
            }, 100);
        },
    });
};

const mockImageError = () => {
    Object.defineProperty(global.Image.prototype, 'src', {
        set() {
            setTimeout(() => {
                if (this.onerror) {
                    this.onerror(new Error('Image load error')); // Триггер ошибки загрузки
                }
            }, 100);
        },
    });
};

describe('AppImage', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('показывает загрузочный фолбэк, пока изображение загружается', () => {
        mockImageLoad();
        componentRender(
            <AppImage
                src="valid-image.jpg"
                fallbackLoading={<div data-testid="loading">Загрузка...</div>}
            />,
        );

        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    test('показывает фолбэк ошибки, если изображение не загрузилось', async () => {
        mockImageError();
        componentRender(
            <AppImage
                src="invalid-image.jpg"
                // eslint-disable-next-line i18next/no-literal-string
                fallbackError={<div data-testid="error">Ошибка загрузки</div>}
            />,
        );

        const errorElement = await screen.findByTestId('error');
        expect(errorElement).toBeInTheDocument();
    });

    test('отображает изображение после успешной загрузки', async () => {
        mockImageLoad();
        componentRender(<AppImage src="valid-image.jpg" alt="Valid image" />);

        const image = await screen.findByAltText('Valid image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'valid-image.jpg');
    });
});
