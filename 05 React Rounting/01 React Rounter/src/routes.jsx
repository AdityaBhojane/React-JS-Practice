import Layout from './Components/Layout'
import Home from './Components/Home';
import Contact from './Components/Contact';

const routes = [
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'Contact',
        element:<Contact/>
      }
    ]
  }
]

export default routes;
// we have to use JSX otherwise it not support 