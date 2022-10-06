import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./TeacherComponent/Profile";
import AddUser from "./TeacherComponent/AddUser";
import EditUser from "./TeacherComponent/EditUser";
import Management from "./Management";
import StudProfile from "./StudentComponent/StudProfile";
import AddStudent from "./StudentComponent/AddStudent";
import EditStudent from "./StudentComponent/EditStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Management />} />
          <Route path="/profile/teacher" element={<Profile />} />
          <Route path="/create/teacher" element={<AddUser />} />
          <Route path="/create/teacher/:id" element={<EditUser />} />
          <Route path="/profile/student" element={<StudProfile />} />
          <Route path="/create/student" element={<AddStudent />} />
          <Route path="/create/student/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
