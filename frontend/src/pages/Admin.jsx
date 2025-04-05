import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useAuth } from "@clerk/clerk-react";
import ProtectedRoute from "../components/ProtectedRoute";

const Admin = () => {
  const [featureCount, setFeatureCount] = useState(2);
  const [imgCount, setImgCount] = useState(2);
  const [fieldNames, setFieldNames] = useState([]);
  const [newFieldName, setNewFieldName] = useState("");
  const toast = useToast();
  const { userId } = useAuth();
  const { createProduct } = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    user: "",
    price: "",
    image: "",
    brand: "",
    category: "",
    quantity: "",
    color: "",
    feature: [],
    features1: "",
    fsImg1: "",
    features2: "",
    fsImg2: "",
    features3: "",
    fsImg3: "",
    features4: "",
    fsImg4: "",
    features5: "",
    fsImg5: "",
    properties: {},
  });

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
      removeField(...fieldNames);
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({
      name: "",
      user: "",
      price: "",
      image: "",
      brand: "",
      quantity: "",
      color: "",
      category: "",
      feature: [],
      features1: "",
      fsImg1: "",
      features2: "",
      fsImg2: "",
      features3: "",
      fsImg3: "",
      features4: "",
      fsImg4: "",
      features5: "",
      fsImg5: "",
      properties: {},
    });
  };

  {
    newProduct.user = userId;
  }
  const addImg = () => {
    setImgCount(imgCount + 1);
    if (imgCount == 5) setImgCount(imgCount + 0);
  };
  const removeImg = () => {
    if (imgCount > 0) {
      setImgCount(imgCount - 1);
      const updatedImg = newProduct.image.slice(0, -1);
      setNewProduct({ ...newProduct, image: updatedImg });
    }
  };
  const addFeature = () => {
    setFeatureCount(featureCount + 1);
  };
  const removeFeature = () => {
    if (featureCount > 0) {
      setFeatureCount(featureCount - 1);
      const updatedFeatures = newProduct.feature.slice(0, -1);
      setNewProduct({ ...newProduct, feature: updatedFeatures });
    }
  };
  const handleInputChange = (fieldName, value) => {
    setNewProduct((prev) => ({
      ...prev,
      properties: {
        ...prev.properties,
        [fieldName]: value,
      },
    }));
  };

  const addField = () => {
    setFieldNames((prev) => [...prev, newFieldName]);
    setNewProduct((prev) => ({
      ...prev,
      properties: {
        ...prev.properties,
        [newFieldName]: "",
      },
    }));
    setNewFieldName("");
  };

  const removeField = (fieldName) => {
    setFieldNames((prev) => prev.filter((name) => name !== fieldName));

    setNewProduct((prev) => {
      const newProperties = { ...prev.properties };
      delete newProperties[fieldName];
      return {
        ...prev,
        properties: newProperties,
      };
    });
  };

  return (
    <ProtectedRoute>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create New Product
          </Heading>

          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <div>
                {Array.from({ length: imgCount }).map((_, index) => (
                  <Input
                    className=" mb-4"
                    key={index}
                    placeholder={`Img ${index + 1}URL`}
                    value={newProduct.image ? newProduct.image[index] : ""}
                    onChange={(e) => {
                      const updatedImg = [...(newProduct.image || [])];
                      updatedImg[index] = e.target.value;
                      setNewProduct({
                        ...newProduct,
                        image: updatedImg,
                      });
                    }}
                  />
                ))}
                <button onClick={addImg}>Add Feature</button>
                <button onClick={removeImg}>Remove Feature</button>
              </div>
              <Input
                placeholder="Brand"
                name="brand"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
              />
               <Input
                placeholder="Quantity"
                name="quantity"
                value={newProduct.quantity}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, quantity: e.target.value })
                }
              />
               <Input
                placeholder="Color"
                name="color"
                value={newProduct.color}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, color: e.target.value })
                }
              />
              <Input
                placeholder="Product Category"
                name="category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
              <div>
                {Array.from({ length: featureCount }).map((_, index) => (
                  <Input
                    className=" mb-4"
                    key={index}
                    placeholder={`Feature ${index + 1}`}
                    value={newProduct.feature ? newProduct.feature[index] : ""}
                    onChange={(e) => {
                      const updatedFeatures = [...(newProduct.feature || [])];
                      updatedFeatures[index] = e.target.value;
                      setNewProduct({
                        ...newProduct,
                        feature: updatedFeatures,
                      });
                    }}
                  />
                ))}
                <button onClick={addFeature}>Add Feature</button>
                <button onClick={removeFeature}>Remove Feature</button>
              </div>
              <Input
                placeholder="Features 1"
                name="features1"
                value={newProduct.features1}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, features1: e.target.value })
                }
              />
              <Input
                placeholder="Features 1 Image"
                name="fsImg1"
                value={newProduct.fsImg1}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, fsImg1: e.target.value })
                }
              />
              <Input
                placeholder="Features 2"
                name="features2"
                value={newProduct.features2}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, features2: e.target.value })
                }
              />
              <Input
                placeholder="Features 2 Image"
                name="fsImg2"
                value={newProduct.fsImg2}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, fsImg2: e.target.value })
                }
              />
              <Input
                placeholder="Features 3"
                name="features3"
                value={newProduct.features3}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, features3: e.target.value })
                }
              />
              <Input
                placeholder="Features 3 Image"
                name="fsImg3"
                value={newProduct.fsImg3}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, fsImg3: e.target.value })
                }
              />
              <Input
                placeholder="Features 4"
                name="features4"
                value={newProduct.features4}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, features4: e.target.value })
                }
              />
              <Input
                placeholder="Features 4 Image"
                name="fsImg4"
                value={newProduct.fsImg4}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, fsImg4: e.target.value })
                }
              />
              <Input
                placeholder="Features 5"
                name="features5"
                value={newProduct.features5}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, features5: e.target.value })
                }
              />
              <Input
                placeholder="Features 5 Image"
                name="fsImg5"
                value={newProduct.fsImg5}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, fsImg5: e.target.value })
                }
              />

              {fieldNames.map((fieldName) => (
                <div key={fieldName} className="form-field">
                  <label>
                    {fieldName}:
                    <input
                      type="text"
                      value={newProduct.properties[fieldName] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldName, e.target.value)
                      }
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => removeField(fieldName)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Add new field */}
              <div className="add-field">
                <input
                  type="text"
                  value={newFieldName}
                  onChange={(e) => setNewFieldName(e.target.value)}
                  placeholder="New field name"
                />
                <button type="button" onClick={addField} className="add-btn">
                  Add Field
                </button>
              </div>
              <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </ProtectedRoute>
  );
};
export default Admin;
