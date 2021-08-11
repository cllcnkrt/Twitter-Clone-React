import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed'
function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed/>
      {/* widgets */}
    </div>
  );
}

export default App;
