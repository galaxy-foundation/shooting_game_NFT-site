import React from 'react';
import Footer from '../layout/footer';
import distributeTile from '../../assets/img/defi/stockTile.png';
import Chart from "react-google-charts";

function Bottom(){
    return(
        <div className = "x-defi-bottom">
            <div className = "text-center pt-5">
                <img src = {distributeTile} alt = "distribute tile" width = "250px"/>
            </div>
            <div className = "text-center">
                <Chart
                    width={'100%'}
                    height={'500px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Token Distribution', 'percent'],
                        ['Petswap Liquidity', 50],
                        ['AirDrop', 2],
                        ['Staking1', 3],
                        ['Staking2', 15],
                        ['Software cap', 30],
                    ]}
                    options={{
                        backgroundColor: 'transparent',
                        // Just add this option
                        pieStartAngle: 10,
                        is3D: true,
                        legend: {textStyle: {color: 'white'}}
                        
                    }}
                    rootProps={{ 'data-testid': '4' }}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Bottom;