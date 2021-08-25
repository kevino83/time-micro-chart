import React from "react";
import useResize from "../date/useResize";
import {dayInitialLetter, daysReducer, daysInitial} from "./daysUtils";
import "../../styles/index.css";
//import Clock from "../../clock.svg";


// function debounce(callback, wait, immediate = false) {
//     let timeout = null
//     return function() {
//         const callNow = immediate && !timeout
//         const next = () => callback.apply(this, arguments)
//         clearTimeout(timeout)
//         timeout = setTimeout(next, wait)
//         if (callNow) { next() }
//     }
// }

const DaysMicroChart = ({data, color = '#89c0de', filter, setFilter, clear}) => {
    const defaultDays = [0, 0, 0, 0, 0, 0, 0];
    const bar = {height: 20};
    const [days, setDays] = React.useState(defaultDays);
    const max = React.useRef(100);
    const boxRef = React.useRef(null);
    const [height, width] = useResize(boxRef);

    const [daysList, dispatch] = React.useReducer(daysReducer, daysInitial);

    const calcHeight = React.useCallback((val) => {
        if (val !== 0) { return val * bar.height / max.current
        } else { return 0 }
    }, [max.current]);

    const drawDayRect = React.useCallback((val, i, isActive=true) => {
        let num = (i * 2);
        let tWidth = width / (14 - 1);
        let className = "";
        if(!isActive){ className = "disabled" }

        const edit = (i) => {
            if(!isActive) dispatch({type: 'ACTIVATE', id: i})
            else  dispatch({type: 'DEACTIVATE', id: i})
        }

        return <g key={"day"+i} onClick={()=>{edit(i)}} style={{cursor:"pointer"}} className={className}>
            <rect y={-bar.height} x={tWidth * num} width={tWidth} height={bar.height} rx="2"
                  style={{fillOpacity: 0.17, fill: "#999", transform: "scaleY(-1)"}}/>
            <rect y={-bar.height} x={tWidth * num} width={tWidth} height={calcHeight(days[i])} rx="2"
                  style={{fillOpacity: 0.99, fill: color, transform: "scaleY(-1)"}}/>
            <text y="32" x={tWidth * num + tWidth / 2} textAnchor="middle"
                  style={{fontWeight: "bold", fill: "#ababab", fontSize: "0.74em"}}>{dayInitialLetter(i)}</text>
            <title>{days[i]}</title>
        </g>;
    }, [width, days]);



    React.useLayoutEffect(() => {
        let tmpDays = defaultDays;
        if (data && data.length > 0) {
            let tmpData = data.map(element => Date.parse(element.startedAt));
            if (tmpData.length > 0) {
                let i = 0;
                while (i < tmpData.length) {
                    let tmp = new Date(tmpData[i]).getDay();
                    tmpDays[+tmp] = tmpDays[+tmp] + 1;
                    i++
                }
            }
        }
        max.current = tmpDays.reduce((max, n) => n > max ? n : max)
        setDays(tmpDays);
    }, [data]);



    React.useEffect(()=>{
        let filters = daysList.filter((tmp)=> tmp.active === false);
        setFilter({type:"days", value:filters})
    },[daysList]);


    React.useEffect(()=>{
        if(clear){ dispatch({type: 'CLEAR', id:0 }) }
    },[clear]);


    React.useEffect(()=>{
        if(filter.days!==undefined && filter.days.length > 0){
            filter.days.forEach((day)=>{
                dispatch({type: 'DEACTIVATE', id: day.id})
            })
        }
    },[]);


    return <div className="box">
        <div className="clear"/>
        {/*<img src={Clock} alt="clock icon" className="chartIcon"/>*/}
        <div ref={boxRef} className="svgBox">
            <svg width={width} height={height} /**style={{ backgroundColor: "#FFFFFF" }}**/>
                {daysList.map(list => drawDayRect(days[list.id], list.id, list.active) )}
            </svg>
        </div>
        <div className="clear"/>
    </div>;

};

export default DaysMicroChart;
