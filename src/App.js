import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center p-4">Hi 👋</h1>
      <Cards></Cards>
      <a href="https://github.com/arghya20">
        <div className="w-full md:w-1/3 lg:w-1/6 mx-auto justify-center pt-9 pb-28 cursor-pointer">
          <span className="bg-yellow-400 hover:bg-yellow-500   flex justify-evenly text-2xl  p-2 rounded-lg font-bold outline transition-all">
            Arghya Ghosh
            <img
              className="w-[30px]"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
              alt=""
            />
          </span>
        </div>
      </a>
    </div>
  );
}

export default App;
