import React, { Suspense, lazy } from 'react';
import 'antd/dist/antd.min.css';


const AppLayout = lazy(() => import('./app/layout'));
function App() {
  return (
   <main style={{padding: '0 82px 0 82px'}}>
     <Suspense fallback={null}>
       <AppLayout />
     </Suspense>
   </main>
  );
}

export default App;
