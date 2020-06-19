import React from 'react';
import './App.scss';
import TaskContextProvider from './contexts/TaskContext';
import TaskSection from './components/TaskSection/TaskSection';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  return (
    <TaskContextProvider>  
        <AppHeader />
        <TaskSection />
    </TaskContextProvider>
  );
}

export default App;
