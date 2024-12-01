import { screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { componentRender } from '@/shared/lib/test';

const mockImageLoad = () => {
    Object.defineProperty(global.Image.prototype, 'src', {
        set() {
            setTimeout(() => {
                if (this.onload) {
                    this.onload();
                }
            }, 100);
        },
    });
};

describe('Avatar', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('отображает Skeleton при загрузке изображения', () => {
        mockImageLoad();
        componentRender(<Avatar src="valid-image.jpg" />);

        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    test('отображает изображение после успешной загрузки', async () => {
        mockImageLoad();
        componentRender(<Avatar src="valid-image.jpg" alt="Avatar" />);

        const image = await screen.findByAltText('Avatar');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'valid-image.jpg');
    });

    test('применяет переданный размер к стилю аватара', async () => {
        const size = 50;
        componentRender(<Avatar src="valid-image.jpg" size={size} />);

        const image = await screen.findByTestId('avatar');
        expect(image).toHaveStyle({ width: `${size}px`, height: `${size}px` });
    });

    test('применяет переданный className', async () => {
        const customClass = 'custom-class';
        componentRender(
            <Avatar src="valid-image.jpg" className={customClass} />,
        );

        const image = await screen.findByTestId('avatar');
        expect(image).toHaveClass(customClass);
    });
});
