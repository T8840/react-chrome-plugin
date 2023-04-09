import React, { useState, useEffect, useCallback } from 'react';

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const toggleTimer = useCallback(() => {
    console.log('click start');
    setIsRunning((prevRunning) => !prevRunning);
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning) {
      console.log('click start is running');
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } 
    // else if (time > 0) {

    //     if (typeof chrome !== 'undefined' && chrome.storage) {
    //     chrome.storage.sync.get('timerHistory', ({ timerHistory }) => {
    //       const newHistory = timerHistory ? [...timerHistory, time] : [time];
    //       chrome.storage.sync.set({ timerHistory: newHistory }, () => {
    //         console.log('Saved timerHistory:', newHistory);
    //       });
    //     });
    //   }
    if (!isRunning && time > 0) {
      const timerHistoryItem = { time: time };
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage({ type: 'TIMER_STOPPED', payload: timerHistoryItem });
      }

      setTime(0);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div>
      <h2>Time: {time} seconds</h2>
      <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
