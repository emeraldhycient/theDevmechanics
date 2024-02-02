import { useEffect, useState } from "react";

export const WindowSize = () => {

    const [width, setWidth] = useState<number>(0);

    const getWindowWidth = () => {
        setWidth(window?.innerWidth)
    }

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            getWindowWidth();
            window.addEventListener("resize", getWindowWidth);
        }

        return () => {
            window.removeEventListener('resize', getWindowWidth);
            isSubscribed = false;
        }
    }, [width]);

    return width;

}

export const calculateWidth = (width: number, desktopBreakPoint: number, tabletBreakPoint: number, mobileBreakPoint: number) => {
    let newWidth: number;
    if (width >= 900) {
        newWidth = desktopBreakPoint;
    }
    else if (width >= 768) {
        newWidth = tabletBreakPoint;
    }
    else {
        newWidth = mobileBreakPoint;
    }

    return newWidth;
}