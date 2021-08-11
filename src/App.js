import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widget/Widgets";
function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}

      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
