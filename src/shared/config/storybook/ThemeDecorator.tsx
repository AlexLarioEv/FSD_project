import { StoryFn } from '@storybook/react/'
import { ETheme } from 'shared/contexts'
import { classNames } from 'shared/lib'

import './ThemeDecorator.scss'

export const ThemeDecorator = (theme: ETheme) => function ThemeDecoratorComponent(StoreComponent : StoryFn){
  return <div className={classNames('app', {}, [theme])}> <StoreComponent/></div>
}
