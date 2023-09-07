import Button from "./Components/Button";
import Description from "./Components/Description";
import Headers from "./Components/Headers";
import './App.css';

export default function App() {
  return (
    <div className="app-wrap">
      <Headers />
      <Description />
      <Button />
    </div>
  );
}
