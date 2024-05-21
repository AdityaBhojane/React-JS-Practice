import Layout from './Components/Layout'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

const routes = [
  {
    path:'',
    element:<Home/>
  },
  {
    path:'About',
    element:<About/>
  },
  {
    path:'Contact',
    element:<Contact/>
  }
]

export default routes;
// we have to use JSX otherwise it not support 