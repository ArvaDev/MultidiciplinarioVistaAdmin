import './Stadistic.css'
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { api } from './ApiE'
import GetStatics from '../../Service/Statics';


export default function Stadistic() {
    const chartRef = useRef();
    const products = []
    const [data, setData] = useState([]);
    const amount = []
    api.map((o) => {
        products.push(o.name)
        amount.push(o.amount)
    })



    useEffect(() => {
        const getStatics = async () => {
            try { 
                const data = await GetStatics();
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
        getStatics();
    }, []);
   

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: products,
                datasets: [{
                    label: 'Productos ',
                    data: amount
                }]
            },
        });
        return () => myChart.destroy();
    }, []);
    return (
        <div className='StadisticClass'>
            <div className='Header'></div>
            <div className='content'>
                <div className='DataCont'>
                    <p>Productos vendidos</p>
                    <canvas ref={chartRef} />
                </div>
                <div className='DataCont'>
                    <p>Ingresos</p>
                </div>
            </div>
        </div>
    );
}
