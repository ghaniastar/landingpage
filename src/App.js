import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import NewTask from './components/NewTask';
import LoadingBar from './components/LoadingBar';
import Axios from './components/Axios';
import Price from './components/Price';
import Product from './components/Product';
import ProductCard from './components/ProductCard';
import Button from './components/Button';
// import { Button } from 'bootstrap';
// import TaskList from './components/TaskList';




function App() {
  return (
    
    <div className="text-center">
      {/* <NewTask/> */}
      {/* <TodoList/> */}
      <Button/>
   <ProductCard/>

      <LoadingBar/>
     
     {/* <TaskList/> */}


      {/* <div className='container'>
        <div className='row'>
          <div className='col-3'>
      <Style icon="icon1" title="Web development" description="try to best in web"/>
          </div>
          <div className='col-3'>
      <Style icon="img2" title="Graphics Designing" description="try to best in graphic"/> 
            </div> <div className='col-3'>
      <Style icon="icon1" title="Software Project Management" description="try to best in project management"/>           
            </div>
        </div>
      </div> */}
  <Axios/>
    </div>
  );
}

export default App;
