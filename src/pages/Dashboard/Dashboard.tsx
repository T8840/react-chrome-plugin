import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [timerHistory, setTimerHistory] = useState<number[]>([]);

  // useEffect(() => {
  //   if (typeof chrome !== 'undefined' && chrome.storage) {
  //     chrome.storage.local.get('timerHistory', ({ timerHistory }) => {
  //       console.log('timerHistory from storage:', timerHistory);

  //       setTimerHistory(timerHistory || []);
  //     });
  //   }
  // }, []);
  useEffect(() => {
    const handleMessage = (message) => {
      if (message.type === 'TIMER_STOPPED') {
        setTimerHistory((prevHistory) => [...prevHistory, message.payload]);
      }
    };

    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.onMessage.addListener(handleMessage);
    }

    return () => {
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.onMessage.removeListener(handleMessage);
      }
    };
  }, []);


  return (
    <div className="container">
      <h1>Dashboard</h1>
      <ul>
        {timerHistory.map((time, index) => (
          <li key={index}>{time} seconds</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;