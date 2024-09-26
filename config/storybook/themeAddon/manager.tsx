// import { useEffect, useRef, useState } from 'react'; 
// import {Switcher} from './Switcher'
// import { FORCE_RE_RENDER } from '@storybook/core-events'; 
// import { useGlobals } from '@storybook/api'; 
// import { addons } from '@storybook/addons'; 

// import './styles.css'; 
 
// export const ThemeSwitchToolbar = () => { 
//   const [globals, updateGlobals] = useGlobals(); 
//   const themeIsRead = useRef(false); 
//   const [isDark, setDark] = useState(false); 
 
//   const handleDark = (newIsDark: boolean) => { 
//     setDark(newIsDark); 
//     updateTheme(newIsDark); 
//   }; 
 
//   const updateTheme = (dark: boolean) => { 
//     updateGlobals({ 
//       theme: dark, 
//     }); 
 
//     // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh 
//     addons.getChannel().emit(FORCE_RE_RENDER); 
//   }; 
 
//   //storybook не сразу после рендера пробрасывает в сторонние тулбары значение текущей темы, 
//   //здесь правильно выставим значение чекбоксов исходя из сохраненнной темы 
//   useEffect(() => { 
//     if (globals.theme && !themeIsRead.current) { 
//       setDark(globals.theme); 
//       themeIsRead.current = true; 
//     } 
//   }, [globals.theme]); 
 
//   return ( 
//     <div className="wb-storybook-switch"> 
//       <Switcher 
//         onChange={handleDark} 
//         checked={isDark} 
//       /> 
//     </div> 
//   ); 
// };