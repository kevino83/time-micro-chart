import React from "react";
//import { Meta } from "@storybook/react/types-6-0";
import DaysMicroChart from "./DaysMicroChart";

export default {
    title: "Components/DaysMicroChart",
    component: DaysMicroChart,
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

];


export const BasicChart = () => <div style={{width: "300px"}}>
    <DaysMicroChart data={data} filter={()=>{}} setFilter={()=>{}} clear={()=>{}}/>
</div>;



