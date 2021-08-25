import React from "react";
//import { Meta } from "@storybook/react/types-6-0";
import HoursMicroChart from "./HoursMicroChart";

export default {
    title: "Components/HoursMicroChart",
    component: HoursMicroChart,
};


const data = [
    {startedAt: '2021-08-19T23:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T22:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T21:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T20:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T23:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T03:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T12:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-08-19T13:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-08-20T23:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-08-21T23:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-08-10T23:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-08-13T15:13:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-19T15:15:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T15:16:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T16:12:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-30T23:11:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T12:15:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T12:12:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-24T13:12:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-26T13:11:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T13:12:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T12:12:01.000Z', desc: "ciao"},
    {startedAt: '2021-07-29T12:13:52.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T13:13:03.000Z', desc: "ciao"},
    {startedAt: '2021-07-21T13:13:43.000Z', desc: "ciao"},
    {startedAt: '2021-07-20T13:13:10.000Z', desc: "ciao"},
    {startedAt: '2021-07-23T13:13:01.000Z', desc: "ciao"},

];


export const BasicChart = () => <div style={{width: "300px"}}>
    <HoursMicroChart data={data} filter={()=>{}} setFilter={()=>{}} clear={()=>{}}/>
</div>;



