import { useEffect, useRef } from "react";


export const useDmi = ref => {
    const dmi = useRef({ width: 0, height: 0 });

    useEffect(() => {
        const dmis = dmi.current
        dmis.width = ref.current.offsetWidth;
        dmis.height = ref.current.offsetHeight;

    }, []);

    return dmi.current;
}