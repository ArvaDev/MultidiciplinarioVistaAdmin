import './Stadistic.css';
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import GetStatics from '../../Service/Statics';

export default function Stadistic() {
    const chartRef = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getStatics = async () => {
            try { 
                const data = await GetStatics();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getStatics();
    }, []);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.map(o => o.name),
                datasets: [{
                    label: 'Productos',
                    data: data.map(o => o.amount),
                }]
            },
        });
        return () => myChart.destroy();
    }, [data]);

    return (
        <div className='StadisticClass'>
            <div className='Header'>Tus productos</div>
            <div className='content'>
                <div className='DataCont'>
                    <p>Productos vendidos</p>
                    <canvas ref={chartRef} />
                </div>
                <div className='DataCont'>
                    <p>Ingresos</p>
                    {data.map((o) => (
                        <div className='info' key={o.name}><p>{o.name}</p><p>${o.total * o.amount}</p></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
