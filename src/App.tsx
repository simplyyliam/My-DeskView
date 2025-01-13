

import { BrowserRouter as  Routers, Routes, Route} from "react-router-dom";

import { LockScreen } from "./Pages/LockScreen";
import { SignIn } from "./Pages/Signin";
import { Desktop } from "./Pages/Desktop";


export default function App () {
    
    return (
        <Routers>
            <Routes>
                <Route path="/" element={<LockScreen/>}/>
                <Route path="/Signin" element={<SignIn/>}/>
                <Route path="/Desktop" element={<Desktop/>}/>
            </Routes>
        </Routers>
    )
}