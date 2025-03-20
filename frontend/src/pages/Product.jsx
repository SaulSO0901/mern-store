import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
const Product = () => {
    const { fetchProducts3, products, resetProducts } = useProductStore(); // Add resetProducts
    const { id } = useParams();
  
    useEffect(() => {
      fetchProducts3(id.replace(/:/g, ''));
  
      // Cleanup function to reset products when component unmounts
      return () => {
        resetProducts();
      };
    }, [fetchProducts3, id, resetProducts]);
  
    console.log(id);
    console.log(products);
  
    return (
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            textAlign={"center"}
          >
            Current Products 🚀
          </Text>
  
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {products && products._id && ( // Check if products exists and has an _id
              <ProductCard key={products._id} product={products} />
            )}
          </SimpleGrid>
        </VStack>
      </Container>
    );
  };
  export default Product;