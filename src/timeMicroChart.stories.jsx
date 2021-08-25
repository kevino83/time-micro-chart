import React from "react";
import moment from "moment";
//import DateMicroChart from "./components/date/DateMicroChart";
//import DaysMicroChart from "./components/days/DaysMicroChart";
//import HoursMicroChart from "./components/hours/HoursMicroChart";
import {DateMicroChart, DaysMicroChart, HoursMicroChart} from "./index";
export default {
    title: "Components/TimeMicroChart",
    component: TimeMicroChart,
};


const data = [
    {startedAt: '2021-08-19T23:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T23:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T23:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T23:13:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-19T23:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T23:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T23:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-30T23:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T23:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T23:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-24T23:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T23:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T23:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T23:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T23:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T23:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T23:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T23:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T23:13:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T23:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T23:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T03:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T03:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T03:13:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-19T12:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T13:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T22:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-30T21:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T15:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T16:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-24T16:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T13:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T21:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T20:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T20:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T20:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T21:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T22:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T13:13:01.000Z', desc: "ciao"},
];


const TimeMicroChart = ({data, filter, setFilter}) => {
    const [toClear,setToClear] = React.useState(false);
    //set filter
    const addFilter = (tmp) =>{
        if (tmp.type === "hours") {
            setFilter({...filter, hours: tmp.value});
        } else if (tmp.type === "days") {
            setFilter({...filter, days: tmp.value});
        }
    }
    //clear filter
    const clearFilter = () =>{
        setFilter({ hours:[], days:[] });
        setToClear(true)
        return ()=>{ setToClear(false) }
    }
    //reset when fired
    React.useEffect(()=>{
        if(toClear===true){ setToClear(false) }
    },[toClear])

    return <div style={{width: "100%"}}>
        <div style={{float: "right", backgroundColor:"#f3f3f3",
                    padding:"2px 10px", borderRadius:"4px",
                    cursor:"pointer",color:"#999", fontSize: "14px"}}
             onClick={()=>clearFilter()}>
            reset
        </div>
        <div style={{width: "70%", float: "left"}}>
            <DaysMicroChart data={data} filter={filter} setFilter={addFilter} clear={toClear}/>
        </div>
        <HoursMicroChart data={data} filter={filter} setFilter={addFilter} clear={toClear}/>
        <DateMicroChart data={data} />
        <br/>
    </div>;
}


export const BasicChart = () => {
    const [filteredData, setFilteredData] = React.useState(data);
    const [filter, setFilter] = React.useState({hours: [], days: []});
    React.useEffect(() => {
        applyFilters(data, filter, setFilteredData);
    }, [filter, data]);

    return <div style={{width: "270px", fontFamily:'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco","Segoe UI","Helvetica Neue",Helvetica,'}}>
        <TimeMicroChart data={filteredData} filter={filter} setFilter={setFilter}/>
        <br/>
        <div style={{paddingLeft:"20px", marginTop:"20px", color:"#888"}}>
            {filteredData.map((value, index)=> {
                return <div key={index}>{new Date(value.startedAt).toUTCString()}</div>;
            })}
        </div>
    </div>;
}

const applyFilters = (data,filter,setData) => {
    if(data!==null && data!==undefined ){
        let myData = data;
        if(filter.days!==undefined && filter.days.length>0){
            filter.days.forEach((d)=>{
                myData = myData.filter((el)=>{
                    const day = moment(el.startedAt).day();
                    if(day!==d.id){ return el }
                });
            });
        }
        if(filter.hours!==undefined && filter.hours.length>0){
            filter.hours.forEach((d)=>{
                myData = myData.filter((el)=>{
                    const hour = moment(el.startedAt).hour();
                    if(hour!==d.id){ return el }
                });
            });
        }
        setData(myData);
    }
}


