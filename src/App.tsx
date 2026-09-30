import './App.css'
import Chatbox from './Chatbox'
import Context from './Context'
import Sidebar from './Sidebar'

function App() {
 

  return (
    <Context>
      <div className="app">
        <Sidebar />
        <Chatbox />
      </div>
    </Context>
  );
}

export default App
