import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

type TAnimationContextPayload = {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<TAnimationContextPayload>({});

const getDynamicAnimationLibs = () => {
    return Promise.all([
        import('@react-spring/web'), 
        import('@use-gesture/react')
    ])
}

// Применять только с флагом isLoaded
export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<TAnimationContextPayload>;
};

export const AnimationProvider:FC<PropsWithChildren> = ({children}) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        getDynamicAnimationLibs().then(([Spring, Gesture]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        });
    },[]);

    const value = useMemo(()=> ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }),[isLoaded])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}