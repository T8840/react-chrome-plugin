import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import Timer from '../../containers/Timer/Timer'; // 导入Timer组件
import './Popup.css';

// const Popup = () => {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
//         </p>
//         <Timer /> {/* 在此处使用Timer组件 */}
//         <Button type="primary">Click me</Button>
//         <button onClick={() => chrome.tabs.create({ url: 'dashboard.html' })}>
//           Dashboard
//         </button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!
//         </a>
//       </header>
//     </div>
//   );
// };


const Popup = () => {
  return (
    <div className="App h-[5000px] bg-red-200"> 
      <header className="App-header px-6 py-8 bg-blue-500 text-white">
        <img src={logo} className="App-logo h-12 mb-4" alt="logo" />
        <p className="text-lg mb-4">
          Edit <code className="font-mono bg-blue-400 px-1">src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <Timer /> {/* 在此处使用Timer组件 */}
        <button
          onClick={() => chrome.tabs.create({ url: 'dashboard.html' })}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 text-white font-bold mt-4 rounded"
        >
          Dashboard
        </button>
        <a
          className="App-link text-blue-300 hover:text-blue-200 mt-4 inline-block"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
