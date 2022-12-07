import { Outlet } from "react-router-dom";

function Title() {
    return ( 
        <div>
            <h1>Title</h1>
            <Outlet/>
        </div>
     );
}

export default Title;