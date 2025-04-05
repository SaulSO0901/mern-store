import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product";

const ProductsGallery = () => {
    const { fetchProducts, products } = useProductStore();

useEffect(() => {
  fetchProducts(); 
}, [fetchProducts]);
let acc=1;
console.log(products);


const productList = Array.isArray(products) ? products.slice(0, 5) : [];
  return (

      <div className="lg:flex  lg:max-w-[1370px] md:max-w-[738px] max-[638px]:max-w-[395px] w-full justify-center mt-4 mx-auto lg:px-4 sm:grid sm:grid-cols-3   md:grid md:grid-cols-3 max-[638px]:grid max-[638px]:grid-cols-2  ">
        {productList.map((product) => (
          <Link
          key={product._id}
            to={`/:${product._id}`}
            className="flex-col max-w-[245px] w-full justify-center items-center"
          >
            <div className="h-7 w-7 md:mx-4 rounded-full bg-blue-900">
              <p className="p-1 text-white text-xs">{acc++}</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={product.image} alt={product.name} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">
                {product.name}
              </p>
            </div>
          </Link>
        ))}

        <Link
          to="/"
          className="lg:flex max-w-[245px]  w-full items-center justify-center md:hidden max-[425px]:hidden max-[767px]:hidden "
        >
          <div className="flex-col  max-w-[135px] w-full h-[135px] items-center text-center justify-center rounded-full border-[.1px] border-gray-400  hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 ">
            <p className="text-[#0072BA] font-bold mt-10">SEE ALL</p>
            <div className="flex w-full justify-center">
              <FaArrowRight
                color="C7C5C1"
                size={30}
                className=""
              ></FaArrowRight>
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="md:flex-col md:col-start-2 sm:flex-col sm:col-start-2  max-[638px]:col-start-1 max-[638px]:col-end-3   mx-auto w-[160px] lg:hidden "
        >
          <p className="text-[#0072BA] font-bold">SEE ALL</p>
          <div className="flex w-full justify-center">
            <FaArrowRight color="C7C5C1" size={30} className=""></FaArrowRight>
          </div>
        </Link>
      </div>
  
  );
};

export default ProductsGallery;
