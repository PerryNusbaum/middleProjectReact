
import { useContext } from "react";
import { DollarContext } from "./App";

const CurenncyBoard = () => {
    let contextObject=useContext(DollarContext);
    return (
        <input type="button" value="החלף סוג מטבע" onClick={contextObject.changeCurrencyInSite} />
      );
}
 
export default CurenncyBoard;
