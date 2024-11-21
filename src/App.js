import "./App.css";
import Card from "./components/Card";
import CustomerList from "./components/CustomerList";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";
import Revenue from "./components/Revenue";
import Customer from "./components/Customer";
import CustomerMap from "./components/CustomerMap";

function App() {
  return (
    <main className="flex bg-[#F8F9FF] pb-[61px]">
      <div>
        <SideBar />
      </div>
      <div className="max-w-[1169px] overflow-hidden ">
        <TopBar />
        <div className="pl-4 pr-9 w-full">
          <Card />
          <div className=" grid grid-cols-1 mid:grid-cols-2 gap-[13px] mt-[31px]">
            <Revenue />
            <Customer />
          </div>
          <div className="mt-[31px] flex items-center max-mid:flex-col max-mid:gap-6 w-full  ">
            <CustomerMap />
            <CustomerList />
          </div>
          <Menu />
        </div>
      </div>
    </main>
  );
}

export default App;
