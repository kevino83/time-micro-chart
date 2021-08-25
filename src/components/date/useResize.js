import React,{useState,useCallback,useMemo} from 'react';
//import useDebounce from "ahooks/lib/useDebounce";



// Hook
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    React.useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}



const useResize = (ref) => {

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const dwidth = useDebounce(width, 430 /*{ wait: 430 }*/);
    const dheight = useDebounce(height, 430 /*{ wait: 430 }*/);

    const handleResize = useCallback( () => {
        const compensation = 0;
        const tempWidth = ref.current.clientWidth;
        const tempHeight = ref.current.clientHeight;
        // console.log(tempHeight);
        // console.log(tempWidth);
        if (tempHeight !== null) {  setWidth(tempWidth-compensation ); }
        if (tempWidth !== null) {  setHeight(tempHeight ); }
    },[ref]);

    React.useLayoutEffect(()=>{
        if(ref!==null && ref.current!==null && ref.current!==undefined) {
            handleResize();
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    },[])

    return [dheight,dwidth];
}

export default useResize;
