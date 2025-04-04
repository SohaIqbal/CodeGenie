import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeReviewPage from "./components/CodeReviewPage/CodeReviewPage";
import MainLandingPage from "./components/MainLandingPage/MainLandingPage";
import LoginPage from "./components/LoginPage/LoginPage";

import SignUpPage from "./components/SignupPage/SignUpPage";

function App(){
    return(

        <Router>
            <Routes>
                <Route path="/" element={<MainLandingPage />} />
                <Route path="/code-review" element={<CodeReviewPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                
              



            </Routes>


        </Router>



    )
}

export default App;