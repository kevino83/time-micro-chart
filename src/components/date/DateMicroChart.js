import React from 'react';
import {scaleTime} from 'd3-scale';
//import useResize from "../../useResize";
import "../../styles/index.css";
import useResize from "./useResize";

const DateMicroChart = ({data, color = '#89c0de'}) => {
    const [myData, setMyData] = React.useState([]);
    const [maxDate, setMaxDate] = React.useState(null);
    const [minDate, setMinDate] = React.useState(null);
    const [margin, bar] = [{left: 0, right: 2, bottom: 18}, {bottom: 2, top: 20}];
    const boxRef = React.useRef(null);
    const [height, width] = useResize(boxRef);

    const scale = React.useCallback(
        scaleTime().domain([minDate, maxDate]).range([margin.left, width - margin.right]),
        [minDate, maxDate]
    );

    const dateForLegend = React.useCallback(
        (date) => date.toISOString().replace("Z", "").replace("T", " ").slice(0, -4),
        []
    );

    const stripLine = React.useCallback((value, index/*, scale, height, margin, bar*/) => {
        return <line style={{strokeOpacity: 0.43, stroke: color}} key={index}
                     x1={scale(value) + 2} y1={height - margin.bottom - bar.bottom}
                     x2={scale(value) + 2} y2={height - margin.bottom - bar.top}/>;
    }, [scale, height, margin, bar]);

    React.useMemo(() => {
        setTimeout(()=>{
            if (data && data.length > 0) {
                let tmpData = data.map(element => Date.parse(element.startedAt));
                //console.log(tmpData);
                if (tmpData.length > 0) {
                    setMaxDate(new Date(Math.max.apply(null, tmpData)));
                    setMinDate(new Date(Math.min.apply(null, tmpData)));
                    setMyData(tmpData);
                }
            } else {
                setMyData([])
            }
        }, 500)
    }, [data]);



    return <div className="box">
        <div className="clear"/>
        <div ref={boxRef} style={{height: "100%", width: "calc(100% - 20px)", marginLeft: "20px"}}>
            {myData !== undefined && myData.length > 0 && (
                <svg width={width} height={height}>
                    <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right}
                          y2={height - margin.bottom}/>
                    <g /*style={{filter: "blur(3px)"}}*/>
                        {(minDate !== null && maxDate !== null) && myData.map(function (value, index) {
                            return stripLine(value, index);
                        })}
                    </g>
                    {minDate !== null && (<text x={margin.left} y="33" style={{
                        fill: "#a4a4a4",
                        fontSize: "9px",
                        fontWeight: "bold"
                    }}>{dateForLegend(minDate)}</text>)}
                    {maxDate !== null && (<text x={width} y="33" style={{
                        fill: "#a4a4a4",
                        fontSize: "9px",
                        fontWeight: "bold",
                        textAnchor: "end"
                    }}>{dateForLegend(maxDate)}</text>)}
                </svg>
            )}
        </div>
    </div>;
};

export default DateMicroChart;
