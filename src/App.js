import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
