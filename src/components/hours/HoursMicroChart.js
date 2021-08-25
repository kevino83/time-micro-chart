import React from "react";
import useResize from "../date/useResize";
import {hoursInitial, hoursReducer, hoursLegend} from "./hoursUtils";
import "../../styles/index.css";
//import Calendar from "../../calendar.svg";


const HoursMicroChart = ({data, color = '#89c0de', filter, setFilter, clear}) => {
    const defaultHours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const bar = {height: 20};
    const [hours, setHours] = React.useState(defaultHours);
    const max = React.useRef(100);
    const boxRef = React.useRef(null);
    const [height, width] = useResize(boxRef);

    const [hoursList, dispatch] = React.useReducer(hoursReducer, hoursInitial);

    const calcHeight = React.useCallback((val) => {
        if (val !== 0) { return val * bar.height / max.current
        } else { return 0 }
    }, [max.current]);

    const drawDayRect = React.useCallback((val, i, isActive=true) => {
        let num = (i * 2);
        let tWidth = width / (48 - 1);
        let textAnchor = "start";
        let textDiff = 0;
        if (i === 23) {
            textAnchor = "end";
            textDiff = tWidth;
        }

        let className = "";
        if(!isActive){ className = "disabled" }
        const edit = (i) => {
            if(!isActive){ dispatch({type: 'ACTIVATE', id: i})
            } else { dispatch({type: 'DEACTIVATE', id: i}) }
        }

        return <g key={"hours"+i} onClick={()=>{edit(i)}} style={{cursor:"pointer"}} className={className}>
            <rect y={-bar.height} x={tWidth * num} width={tWidth} height={bar.height} rx="2"
                  style={{fillOpacity: 0.17, fill: "#999", transform: "scaleY(-1)"}}/>
            <rect y={-bar.height} x={tWidth * num} width={tWidth} height={calcHeight(hours[i])} rx="2"
                  style={{fillOpacity: 0.99, fill: color, transform: "scaleY(-1)"}}/>
            <text y="32" x={tWidth * num + textDiff} textAnchor={textAnchor}
                  style={{fontWeight: "bold", fill: "#ababab", fontSize: "0.74em"}}>{hoursLegend(i)}</text>
            <title>{hours[i]}</title>
        </g>;
    }, [width, hours]);



    //prendo i dati
    React.useLayoutEffect(() => {
        let tmpHours = defaultHours;
        if (data && data.length > 0) {
            let tmpData = data.map(element => Date.parse(element.startedAt));
            if (tmpData.length > 0) {
                let i = 0;
                while (i < tmpData.length) {
                    let tmp = new Date(tmpData[i]).getHours();
                    tmpHours[+tmp] = tmpHours[+tmp] + 1;
                    i++
                }
            }
        }
        max.current = tmpHours.reduce((max, n) => n > max ? n : max)
        setHours(tmpHours);
    }, [data]);


    React.useEffect(()=>{
        let filters = hoursList.filter((tmp)=> tmp.active === false);
        setFilter({type:"hours", value:filters})
    },[hoursList]);



    React.useEffect(()=>{
        if(clear){ dispatch({type: 'CLEAR', id:0 }) }
    },[clear]);


    React.useEffect(()=>{
        if(filter.hours!==undefined && filter.hours.length > 0){
            filter.hours.forEach((h)=>{
                dispatch({type: 'DEACTIVATE', id: h.id})
            })
        }
    },[]);


    return <div className="box">
        <div className="clear"/>
        {/*<img src={Calendar} alt="clock icon" className="chartIcon"/>*/}
        <div ref={boxRef} className="svgBox">
            <svg width={width} height={height} /**style={{ backgroundColor: "#FFFFFF" }}**/>
                {/*{hours.map(function (value, index) {*/}
                {/*    return drawDayRect(value, index);*/}
                {/*})}*/}
                {hoursList.map(list => drawDayRect(hours[list.id], list.id, list.active) )}
            </svg>
        </div>
        <div className="clear"/>
    </div>;
};

export default HoursMicroChart;
