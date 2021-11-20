import { SelectColor } from "./components/SelectColor";
import { SelectPackage } from "./components/SelectPackage";
import { SelectPower } from "./components/SelectPower";
import { SelectWarpDrive } from "./components/SelectWarpDrive";
import { PriceCalculator } from "./components/PriceCalculator";

function App() {
  return (
    <div className="content-container">
      <div className="app-container">
        <h1 className="page-title">Spaceship configurator</h1>
        <div className="configurator-container">
          <div className="parts-container">
            <SelectColor />
            <SelectPower />
            <SelectWarpDrive />
            <SelectPackage />
          </div>
          <PriceCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
