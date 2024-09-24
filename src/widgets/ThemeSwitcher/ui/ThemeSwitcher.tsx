import { FC } from "react";

import { Button } from 'shared/ui';
import { classNames } from "shared/lib";
import { useTheme } from 'shared/hooks'
import { ETheme } from 'shared/contexts'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

type TThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<TThemeSwitcherProps> = ({ className }) => {
  const {theme, setTheme} = useTheme()

  const handleTheme= () => {
    setTheme(theme)
  }

  return (
    <Button className={classNames('', {}, [className])} onClick={handleTheme}>
      {theme === ETheme.LIGHT ? <LightIcon/> : <DarkIcon/>}
    </Button>
  );
};
