import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="flex  items-center justify-center h-[80px] w-full hidden md:flex  px-10 -my-2 mx-auto   text-[#000] select-none">
				
		<header className="w-[100%] mx-10">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
				<Link className="w-[100%] mx-10" to={"/"}>Product Store 🛒</Link>
				<Link className="w-[100%] mx-10" to={"/MyProducts"}>My Products🛒</Link>
				
					
					
		
	<Link className="w-[100%] mx-10"  to={"/create"}>
						<Button>
							<PlusSquareIcon/>
						</Button>
					</Link>
					<Button className="mx-10" onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
	</div>
		);
};
export default Navbar;
