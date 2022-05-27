import { Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singup from "./pages/Login/Singup";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/booking/:id' element={<Booking />} />
				<Route path='/singup' element={<Singup />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
