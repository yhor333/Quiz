import './App.css';
import Layout from './hoc/Layout';
import Quize from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/quiz-creator' element={<QuizCreator />}/>
        <Route path='/quiz/:id' element={<Quize />}/>
        <Route path='/' element={<QuizList />}/>
      </Routes>
    </Layout>
  );
}

export default App;
