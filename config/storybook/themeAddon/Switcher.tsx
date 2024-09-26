import { FC } from "react";

import  './Switcher.scss';

type TSwitcherProps = {
  checked?: boolean;
  onChange: (event: boolean) => void;
};

export const Switcher: FC<TSwitcherProps> = ({checked,onChange}) => {
  
  return (
    <label className="switch">
      <input onChange={(e)=> onChange(e.target.checked)} checked={checked} type="checkbox"/>
      <span className="slider round"/>
    </label>
  )
} 
