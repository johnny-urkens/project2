import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './components/Form/Form'
import Layout from './layout';
import ArticlesList from './components/ArticlesList'
import {useState} from 'react';
import Info from './components/Info'
import ArticleDetail from './components/Articles/ArticleDetail';

function App() {
  const [currentId, setCurrentId]=useState(0);
  return (
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" element={<ArticlesList/>}/>
      
        <Route path="/create" element={<Form currentId={currentId} setCurrentId={setCurrentId}/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/create/:id" element={<Form currentId={currentId}/>}/>
        <Route exact path="/Articles/:id" element={<ArticleDetail/>} />
        
        
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;