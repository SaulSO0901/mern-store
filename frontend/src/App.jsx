import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import MyProducts from "./pages/MyProducts";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { SignIn } from "@clerk/clerk-react";
import Product from "./pages/Product";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='/MyProducts' element={<MyProducts/>} />
				<Route path='/create' element={<CreatePage />} />
				<Route path='/:id' element={<Product/>} />
			<Route path="/login" element={SignIn}></Route>
			</Routes>
		</Box>
	);
}

export default App;
