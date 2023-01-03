import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import TableComponent from "./components/table/TableComponent";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <TableComponent />
    </div>
  );
}

export default App;
