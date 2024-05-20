import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  // const routes = [
  //   {
  //     path:"/",
  //     element:<Layout/>,
  //     children:[
  //       {
          
  //         path:'',
  //         element:<Home/>
  //       },
  //       {
  //         path:'Contact',
  //         element:<Contact/>
  //       }
  //     ]
  //   }
  // ]

  const routes = [
        {
          
          path:'',
          element:<Home/>
        },
        {
          path:'Contact',
          element:<Contact/>
        },
        {
          path:'About',
          element:<About/>
        }
      ]
  
  

  return (
    <Router>
      <Layout/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;




// using EXTERNAL ROUTING Component

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import routes from './routes';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {routes.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </Router>
//   );
// }

// export default App; 