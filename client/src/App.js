
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import { AddProduct } from "./components/AddProduct.js";



function App() {

  return (
    <Router>
        <div className="container">


         <div className="text-center p-5">   
            <h2>Product Managment System</h2>
         </div>

          <div className="columns">
              <div className="column is-half is-offset-one-quarter">         
              
                 <Switch>
                    <Route exact path="/add" > 
                      <AddProduct/>
                    </Route>
                </Switch>
            
              </div>
          </div>

        
        </div>
    </Router>
          
  );
}

export default App;
