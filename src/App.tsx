import React, { Suspense, lazy } from 'react';
import 'antd/dist/antd.min.css';
import './App.scss'


const AppLayout = lazy(() => import('./app/layout'));
function App() {
  return (
   <main className='app-entry'>
     <Suspense fallback={null}>
       <AppLayout />
     </Suspense>
   </main>
  );
}

export default App;
