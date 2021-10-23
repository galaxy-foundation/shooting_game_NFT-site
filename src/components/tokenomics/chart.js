import React from 'react';
import Chart from 'react-google-charts';
import {useState,useEffect} from 'react'
import {PetSwapRouterContract, PetSwapFactoryContract, PetWorldCoin, WBNBAddress, PetSwapPair} from "../../contract"
import {ethers} from "ethers";

function SupplyChart(props){
    const {title,percent,text} = props;
   console.log(title,percent,text)
    return(
        <div className = "text-center swap-chat-card">
            <div className = "chart-card">
                <div className="x-font2-bold" >Token Distribution</div>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[['Pac Man', 'Percentage'], [title, percent], ['Others', 100-percent]]}
                    options={{
                        is3D: true,
                        legend: 'none',
                        pieSliceText: 'label',
                        pieStartAngle: 10,
                        backgroundColor: "transparent",
                        tooltip: { trigger: 'none' },
                        slices: {
                        0: { color: '#2092bb' },
                        1: { color: '#f16843' },
                        },
                    }}
                    rootProps={{ 'data-testid': '6' }}
                    stlye = {{margin:"auto"}}
                />
                </div>
            <div className = "mt-4 ">
                {text}
            </div>
        </div>
    )
}

export default SupplyChart;