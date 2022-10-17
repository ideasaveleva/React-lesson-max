import { Select } from "./components/Select";

const options = [
  { name: "Ducati", description: "Red", id: 1 },
  { name: "Suzuki", description: "Blue", id: 2 },
  { name: "Kawasaki", description: "Green", id: 3 },
  { name: "Honda", description: "Black", id: 4 },
  { name: "Ktm", description: "Orange", id: 5 },
  { name: "Kayo", description: "", id: 6 },
];

function App() {
  return <Select options={options} />;
}

export default App;
