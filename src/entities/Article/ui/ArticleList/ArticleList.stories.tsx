import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './ArticleList';
import {
    EArticleBlockType,
    EArticleType,
    EArticleView,
    TArticle,
} from '../../model/types/ArticleSchema';

const aricle = {
    id: '1',
    title: 'Что новогsdasdasdassssssssо в sssssJS зsssssssа 202sssss2 гsssssssод?',
    subtitle:
        'Что новогsdasdasdassssssssо в sssssJS зsssssssа 202sssss2 гsssssssод?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    type: [EArticleType.ECONOMICS, EArticleType.IT, EArticleType.SCIENCE],
    blocks: [
        {
            id: '1',
            type: EArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
} as TArticle;

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,

    args: {
        articles: [aricle, aricle, aricle],
        view: EArticleView.SMALL,
    },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const Big: Story = {
    args: {
        view: EArticleView.BIG,
    },
};

export const SmallLoader: Story = {
    args: {
        isLoading: true,
    },
};

export const BigLoader: Story = {
    args: {
        view: EArticleView.BIG,
        isLoading: true,
    },
};
