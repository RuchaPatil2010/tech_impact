// App.js 

import { useState } from 'react';
import React from 'react';

import Calendar from 'react-calendar';
import "./Calender.css";
// import './App.css';

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

function Calendar_week () {
    
}

export {Calender, Calendar_week};