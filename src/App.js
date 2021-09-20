import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import APOD from "./APOD"

function App(){
  return (
    <div className="Spacestagram">
      <div className="Content container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-xs-12">
            <div className="typewriter">
              <h1>Spacestagram</h1>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 nasa">
            <APOD></APOD>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
