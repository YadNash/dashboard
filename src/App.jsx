import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import AddWidgetPopup from './components/AddWidgetPopup';
import ChartComponent from './components/ChartComponent'; 

function App() {
  const [widgets, setWidgets] = useState({
    bar: [],
    line: [],
    doughnut: [], 
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddWidget = (widget) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widget.type]: [...prevWidgets[widget.type], widget],
    }));
  };

  const chartData = [
    { label: 'Red', value: 300 },
    { label: 'Blue', value: 50 },
    { label: 'Yellow', value: 100 },
    { label: 'Green', value: 150 },
    { label: 'Purple', value: 200 },
    { label: 'Orange', value: 250 },
  ];

  return (
    <>
      <Navbar />

      <Layout />

      </>
  );
}

export default App;