import './Stadistic.css'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { api } from './ApiE'
import { getOrders } from '../../Service/Orders';
export default function Stadistic() {
    const chartRef = useRef();
    const products = []
    const amount = []
    api.map((o) => {
        products.push(o.name)
        amount.push(o.amount)
    })

    useEffect(() => {
        try{
            const getOrd = () => {
                const data = getOrders();
                console.log(data)
            } 
    
            getOrd();
        }catch(error){
            console.error(error)
        }
    }, [])

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
