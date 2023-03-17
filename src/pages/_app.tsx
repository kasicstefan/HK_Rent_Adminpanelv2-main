import styles from '../styles/quickwin.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Adminpanelhome} from "@/adminpanel/sites/adminpanelhome";
import {Adminproductpage} from "@/adminpanel/sites/adminproductpage";
import {Adminuserpage} from "@/adminpanel/sites/adminuserpage";
import {element} from "prop-types";

function App() {
    return (
    <>
        <Adminpanelhome></Adminpanelhome>
    </>
    );

      /*<BrowserRouter>
          <Routes>
              <Route index element={<Adminpanelhome />} />
              <Route path="machines" element={<Adminproductpage />}/>
              <Route path="users" element={<Adminuserpage />}/>
          </Routes>
      </BrowserRouter>
      */




  /*
 <BrowserRouter>
        <Routes>
            <Route index element={<Adminpanelhome />} />
            <Route path="machines" element={<Adminproductpage />}/>
            <Route path="users" element={<Adminuserpage />}/>
        </Routes>
      </BrowserRouter>
 */


}
export default App;