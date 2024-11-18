import "./App.css";
import Card from "./components/Card";
import CustomerList from "./components/CustomerList";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";

function App() {
  return (
    <main className="flex bg-[#F8F9FF] ">
      <div>
        <SideBar />
      </div>
      <div className="w-screen overflow-hidden ">
        <TopBar />
        <div className="pl-4 pr-9 w-full">
          <Menu />
        </div>
      </div>
    </main>
  );
}

export default App;
