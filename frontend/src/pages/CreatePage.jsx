import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { Protect } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react'
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	RedirectToSignIn,
	UserButton,
  } from '@clerk/clerk-react'
  const PUBLISHABLE_KEY ="pk_test_ZGlyZWN0LWhhcmUtNDEuY2xlcmsuYWNjb3VudHMuZGV2JA";

  if (!PUBLISHABLE_KEY) {
	throw new Error('Add your Clerk Publishable Key to the .env file')
  }
const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		user:"",
		price: "",
		image: "",
	});
	const toast = useToast();
	const { userId, sessionId, getToken, isLoaded, isSignedIn } = useAuth()
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "",user:"", price: "", image: "" });
	};
	{newProduct.user=userId}
	return (
		
		<Protect
      role="org:admin"
      fallback={<p>Only a member of the Billing department can access this content.</p>}
    >
		
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	
		</Protect>
		
	);
};
export default CreatePage;
