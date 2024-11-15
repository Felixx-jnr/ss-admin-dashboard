import "./App.css";
import Card from "./components/Card";
import CustomerList from "./components/CustomerList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className=" flex bg-[#F8F9FF]">
      <div>
        <SideBar />
      </div>
      <CustomerList />
      <div>Main</div>
    </main>
  );
}

export default App;
