import { Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Singup from "./pages/Login/Singup";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import BookList from "./pages/Dashboard/BookList";
import DashboardIntro from "./pages/Dashboard/DashboardIntro";
import Review from "./pages/Home/Review";
import Book from "./pages/Dashboard/Book";
import MyReview from "./pages/Dashboard/MyReview";
import Payment from "./pages/Payment/Payment";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />

				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<DashboardIntro />} />
					<Route path='/dashboard/book' element={<Book />} />
					<Route path='/dashboard/book-list' element={<BookList />} />
					<Route path='/dashboard/review' element={<MyReview />} />
				</Route>
				<Route path='/booking/:id' element={<Booking />} />
				<Route path='/payment/:id' element={<Payment />} />
				<Route path='/singup' element={<Singup />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
