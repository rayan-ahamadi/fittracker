'use client';
import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './ReportPage.css';
import { AiFillEdit } from 'react-icons/ai';
import CalorieIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';

const EditIcon = AiFillEdit as unknown as React.FC;

interface ChartData {
  data: number[];
  title: string;
  color: string;
  xAxis: {
    data: string[]; // changement ici
    label: string;
    scaleType: 'band' | 'linear' | 'time';
  };
}

const Page = () => {
  const color = '#ffc20e';
  const [dataS1, setDataS1] = useState<ChartData | null>(null);
  const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false);

  const getDataForS1 = async () => {
    const temp = [
      { date: 'Thu Sep 28 2025', value: 2000 },
      { date: 'Wed Sep 27 2025', value: 2500 },
      { date: 'Tue Sep 26 2025', value: 2700 },
      { date: 'Mon Sep 25 2025', value: 3000 },
      { date: 'Sun Sep 24 2025', value: 2000 },
      { date: 'Sat Sep 23 2025', value: 2300 },
      { date: 'Fri Sep 22 2025', value: 2500 },
      { date: 'Thu Sep 21 2025', value: 2700 },
    ];

    const dataForLineChart = temp.map((item) => item.value);
    const dataForXAxis = temp.map((item) =>
      new Date(item.date).toISOString().split('T')[0]
    ); // format: "2023-09-28"

    setDataS1({
      data: dataForLineChart,
      title: '1 Day Calorie Intake',
      color: color,
      xAxis: {
        data: dataForXAxis,
        label: 'Last 8 Days',
        scaleType: 'band', 
      },
    });
  };

  useEffect(() => {
    getDataForS1();
  }, []);

  const ChartSection = () =>
    dataS1 ? (
      <LineChart
        xAxis={[
          {
            id: 'Day',
            data: dataS1.xAxis.data,
            scaleType: dataS1.xAxis.scaleType,
            label: dataS1.xAxis.label,
            valueFormatter: (value) => value, // ici les dates sont déjà des strings
          },
        ]}
        series={[
          {
            data: dataS1.data,
            label: dataS1.title,
            color: dataS1.color,
          },
        ]}
        height={300}
      />
    ) : null;

  return (
    <div className="reportpage">
      {dataS1 && (
        <>
          <div className="s1"><ChartSection /></div>
          <div className="s2"><ChartSection /></div>
          <div className="s3"><ChartSection /></div>
          <div className="s4"><ChartSection /></div>
        </>
      )}

      <button className="editbutton" onClick={() => setShowCalorieIntakePopup(true)}>
        <EditIcon />
      </button>

      {showCalorieIntakePopup && (
        <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />
      )}
    </div>
  );
};

export default Page;
