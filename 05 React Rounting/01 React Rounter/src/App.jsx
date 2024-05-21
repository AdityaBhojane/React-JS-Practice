// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Components/Layout'
// import Home from './Components/Home';
// import Contact from './Components/Contact';
// import About from './Components/About';
// import { Children } from 'react';


// function App() {


//   const routes = [
//         {

//           path:'',
//           element:<Home/>
//         },
//         {
//           path:'Contact',
//           element:<Contact/>
//         },
//         {
//           path:'About',
//           element:<About/>
//         }
//       ]
  
  

//   return (
//     <Router>
//       <Layout/>
//       <Routes>
//         {routes.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </Router>
//   );
// }

// export default App;











// using EXTERNAL ROUTING Component

// import React from 'react';
// import Layout from './Components/Layout'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import routes from './routes';

// function App() {
//   return (
//     <Router>
//       <Layout/>
//       <Routes>
//         {routes.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </Router>
//   );
// }

// export default App; 











import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);



// ANOTHER METHOD

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;



