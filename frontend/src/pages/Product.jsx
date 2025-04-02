import { useEffect, useState } from "react";

import { useProductStore } from "../store/product";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { GiGuitarBassHead } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
const Product = () => {
  const { fetchProducts3, products, resetProducts } = useProductStore(); // Add resetProducts
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

const handleThumbnailClick = (index) => {
  setSelectedImageIndex(index);
};


  const [desc, setDesc] = useState(true);

  const [spec, setSpec] = useState(false);

  const [rev, setRev] = useState(false);

  const handleDesc = () => {
    setDesc(true);
    setSpec(false);
    setRev(false);
  };

  const handleSpec = () => {
    setDesc(false);
    setSpec(true);
    setRev(false);
  };

  const handleRev = () => {
    setDesc(false);
    setSpec(false);
    setRev(true);
  };
  useEffect(() => {
    fetchProducts3(id.replace(/:/g, ""));

    return () => {
      resetProducts();
    };
  }, [fetchProducts3, id, resetProducts]);

  console.log(id);
  console.log(products);

  return (
    <div>
      <div className="flex-col max-w-[1400px] w-full mx-auto md:px-4 ">
        <div className="flex w-full h-full border-b-[.7px] border-b-C7C5C1 ">
          <div className="flex-col  min-[1px]:hidden md:flex w-full h-full   ">
            <p className="w-full min-[1px]:hidden md:flex text-sm font-extralight text-[#555454]">
              {`Products/${products.category}`}
            </p>
            <h2 className="min-[1px]:hidden md:flex  mt-4 py-4 text-4xl font-bold text-[#362D2D]">
              {products.name}
            </h2>
            <p className=" min-[1px]:hidden md:flex text-sm font-light text-[#362D2D]">
              {products?.feature?.[0] || "Default text if missing"}
            </p>

            <div className="flex mt-1 items-center">
              <IoIosStar color="#ff9d00" />
              <IoIosStar color="#ff9d00" />
              <IoIosStar color="#ff9d00" />
              <IoIosStar color="#ff9d00" />
              <IoIosStar color="#ff9d00" />
              <p className="text-[#362D2D] underline ml-1">10 review{"'"}s</p>
              <a
                href="#review"
                className="mx-1 px-1 text-sm border-r-[2px] border-l-[2px] "
              >
                Write your review
              </a>
              <p className="text-sm font-medium">{products.brand}</p>
            </div>
          </div>
          <div className="hidden md:flex w-fit justify-end items-center">
            <img
              src={products?.image?.[0]}
              className=" w-[137px] h-[61px]  "
              alt="brand"
            ></img>
          </div>
          {/*img section*/}
        </div>
        <div className="lg:flex  my-4">
          <div className="hidden xl:flex max-w-[60px] w-full   select-none">
            <div className="flex-col">
            {products.image?.map((imgSrc, index) => (
      <div
        key={index}
        className={
          selectedImageIndex === index
            ? "my-2 ring-[#C7C5C1] ring-2 cursor-pointer"
            : "my-2 cursor-pointer"
        }
      >
        <img
          onClick={() => handleThumbnailClick(index)}
          src={imgSrc}
          className="w-[60px] h-[60px] px-2"
          alt={`product-${index}`}
        />
      </div>
    ))}
            </div>
          </div>
          {/*************************************************************************/}
          <div className="flex-col max-w-[750px] min-w-[300px] w-full mx-auto min-[0px]:max-h-[750px] lg:h-[750px] h-full   ">
        
          {products.image && products.image.length > 0 && (
      <img
        src={products.image[selectedImageIndex]}
         className="max-w-[651px] max-h-[750px] w-full h-full xl:px-16 mx-auto"
        alt="main-product"
      />
    )}
            {/*************************************************************************/}
            <div className="hidden md:flex xl:hidden  w-full justify-center items-center   select-none">
              <div onClick={""} className="mx-3 my-4">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2 "
                  alt="frontz"
                ></img>
              </div>

              <div onClick={""} className="mx-3 my-4  ">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2 "
                  alt="frontside"
                ></img>
              </div>

              <div onClick={""} className="mx-3 my-4 ">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2 "
                  alt="head"
                ></img>
              </div>

              <div onClick={""} className="mx-3 my-4 ">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2 "
                  alt="fret"
                ></img>
              </div>

              <div onClick={""} className="mx-3 my-4">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2 "
                  alt="backz"
                ></img>
              </div>

              <div onClick={""} className="mx-3 my-4 ">
                <img
                  src={products.image}
                  className=" w-[60px] h-[60px] px-2"
                  alt="back"
                ></img>
              </div>
            </div>
          </div>
          {/**********************************************************************************************************************************/}
          <div className="flex-col lg:max-w-[560px] min-w-[292px] xl:w-full  md:w-full  h-full  xl:ml-16 md:mt-[94px] px-4">
            <div className="flex-col  min-[1px]:flex md:hidden w-full h-full    ">
              <p className="w-full flex text-sm font-extralight text-[#555454]">
                Guitars/Electric Guitars/ESP James Hetfield
              </p>
              <h2 className="flex  mt-4 py-4 text-2xl font-bold text-[#362D2D]">
                ESP James Hetfield Signature Vulture - Black Satin
              </h2>
              <p className=" flex text-sm font-light text-[#362D2D]">
                Solidbody Electric Guitar with Mahogany Body, Mahogany Neck,
                Ebony Fingerboard, and 2 Active Humbucking Pickups - Black Satin
              </p>

              <div className="flex mt-1 items-center">
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <p className="text-[#362D2D] underline ml-1">1 review</p>
                <p className="mx-1 px-1 text-sm border-r-[2px] border-l-[2px] ">
                  Write your review
                </p>
                <p className="text-sm font-medium">Item ID: EVULTUREBLKS</p>
              </div>
            </div>

            <div className="w-full mt-8  border-b-[.7px] border-b-C7C5C1">
              <p className=" text-4xl font-bold text-[#ED2C2C]">{`${products.price}$`}</p>
            </div>

            <div className="w-full mt-4   border-b-[.7px] border-b-C7C5C1 ">
              <p className="text-[#ED2C2C] font-medium">Special Financing.</p>
              <p className="text-[#362D2D] font-medium">
                As low as ${(products.price / 36).toFixed(2)}/month with 36
                month financing*
              </p>
              <p className="text-[#0072BA] font-medium underline cursor-pointer">
                See all payment options
              </p>
            </div>

            <div className="flex w-full mt-4 font-medium border-b-[.7px] border-b-C7C5C1">
              <p className=" text-[#362D2D] ">
                OR we have a second hand model for just
              </p>
              <p className="mx-1 text-[#ED2C2C]">
                ${(products.price * 0.9).toFixed(2)}
              </p>
              !
              <p className="lg:hidden xl:flex mx-1 text-[#0072BA] cursor-pointer">
                Learn more.
              </p>
            </div>

            <div className="flex  w-full mt-4 pb-4 border-b-[.7px] border-b-C7C5C">
              <div className="flex-col w-full  justify-center items-center text-center cursor-pointer">
                <GiGuitarBassHead
                  className="mx-auto"
                  size={30}
                ></GiGuitarBassHead>
                <p className="mx-auto md:text-xs font-medium">
                  37 point
                  <br />
                  Inspection
                </p>
              </div>
              <div className="flex-col w-full justify-center items-center  text-center  cursor-pointer">
                <FaTruck className="mx-auto" size={30}></FaTruck>
                <p className="md:text-xs font-medium ">
                  Fast <br />
                  Shipping
                </p>
              </div>
              <div className="flex-col w-full justify-center items-center  text-center  cursor-pointer">
                <BiSupport className="mx-auto" size={30}></BiSupport>
                <p className="mx-1 md:text-xs font-medium ">
                  Free <br /> Support
                </p>
              </div>
              <div className="flex-col  w-full justify-center items-center  text-center  cursor-pointer">
                <GoShieldCheck className="mx-auto" size={30}></GoShieldCheck>
                <p className="mx-1 md:text-xs font-medium ">
                  3-year <br /> Warranty
                </p>
              </div>
            </div>

            <div className="flex-col mt-4 border-b-[.7px] border-b-C7C5C select-none">
              <p className="text-[#3A782B]">In Stock!</p>
              <button className="bg-[#428631] mt-4 py-4 px-28 text-white font-medium hover:bg-[#346827]">
                Add to Cart
              </button>

              <div className="flex-col my-2 ">
                <button className="flex p-2 items-center text-[#0072BA] text-sm border-[.7px] border-[#0072BA] hover:text-[#376f92]  hover:border-[#376f92]  ">
                  <FaHeart className="mx-1"></FaHeart>Add to Wish List
                </button>
              </div>
            </div>

            <div className="flex mt-6  border-b-[.7px] border-b-C7C5C select-none">
              <div className="">
                <img
                  src={products.image}
                  className="w-[80px] h-[80px] rounded-full "
                  alt="support"
                ></img>
              </div>

              <div className="flex-col mx-4">
                <p className="text-xl text-[#362D2D] font-medium">
                  ASK AN EXPERT
                </p>
                <p className=" text-sm">
                  Our expertly trained Sales Engineers are ready to help!
                </p>
                <p className="text-xl text-[#0072BA] font-medium cursor-pointer">
                  (800) 224-4701
                </p>
                <p className="mb-4 text-[#0072BA]  underline cursor-pointer">
                  What is a Sales Engineer?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*************************************************************************/}
      <div className="flex-col max-w-[1400px] mx-auto mt-5  text-center items-center justify-center ">
        <h2 className=" text-5xl font-medium w-fit mx-auto">
          Top New Musical Instruments & Gear
        </h2>

        <div className="lg:flex  lg:max-w-[1370px] md:max-w-[738px] max-[638px]:max-w-[395px] w-full justify-center mt-4 mx-auto lg:px-4 sm:grid sm:grid-cols-3   md:grid md:grid-cols-3 max-[638px]:grid max-[638px]:grid-cols-2  ">
          <Link
            to="/product"
            className="flex-col max-w-[245px] w-full justify-center items-center"
          >
            <div className="  h-7 w-7 md:mx-4 rounded-full bg-blue-900">
              <p className="p-1 text-white text-xs">1</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">
                Shure SM57 Cardioid Dynamic
              </p>
            </div>
          </Link>

          <Link
            to="/product"
            className="flex-col max-w-[245px] w-full justify-center items-center"
          >
            <div className=" h-7 w-7  md:mx-4 rounded-full bg-blue-900  ">
              <p className="p-1 text-white text-xs">2</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs ">
                Behringer UB-Xa 16-voice Bi-timbral Polyphonic Analog
                Synthesizer
              </p>
            </div>
          </Link>

          <Link
            to="/product"
            className="flex-col max-w-[245px] w-full justify-center items-center"
          >
            <div className=" h-7 w-7  md:mx-4  rounded-full bg-blue-900 ">
              <p className="p-1 text-white text-xs">3</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">
                Supro 1614RT Amulet 1 x 12-inch 15-watt Tube Combo Amp
              </p>
            </div>
          </Link>

          <Link
            to="/product"
            className="flex-col max-w-[195px] md:max-w-[245px] w-full justify-center items-center"
          >
            <div className="  h-7 w-7  md:mx-4 rounded-full bg-blue-900 ">
              <p className="p-1 text-white text-xs">4</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">Audio-Technica AT2035</p>
            </div>
          </Link>

          <Link
            to="/product"
            className="flex-col  max-w-[195px] md:max-w-[245px] w-full justify-center items-center"
          >
            <div className=" h-7 w-7  md:mx-4 rounded-full bg-blue-900  ">
              <p className="p-1 text-white text-xs">5</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">Boss Katana head MkII</p>
            </div>
          </Link>

          <Link
            to="/product"
            className="flex-col  max-w-[195px] md:max-w-[245px] w-full  justify-center items-center"
          >
            <div className=" rounded-full bg-blue-900 h-7 w-7  md:mx-4 ">
              <p className=" p-1 text-white text-xs">6</p>
            </div>
            <div className="flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center">
              <img src={products.image} className="w-[120px] h-[120px] "></img>
            </div>
            <div>
              <p className="text-xs text-[#362D2D]">
                Gibson Kirk Hammett {"Greeny"} Les Paul Standard Electric Guitar
                - Greeny Burst
              </p>
            </div>
          </Link>

          <Link
            to="/store"
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
            to="/store"
            className="md:flex-col md:col-start-2 sm:flex-col sm:col-start-2  max-[638px]:col-start-1 max-[638px]:col-end-3   mx-auto w-[160px] lg:hidden "
          >
            <p className="text-[#0072BA] font-bold">SEE ALL</p>
            <div className="flex w-full justify-center">
              <FaArrowRight
                color="C7C5C1"
                size={30}
                className=""
              ></FaArrowRight>
            </div>
          </Link>
        </div>
      </div>
      <div id="desc" className="flex-col w-full mx-auto  mt-5">
        <div className="flex sticky w-full h-10 top-0 mx-1 min-[375px]:mx-0   justify-center items-center bg-white border-[1px] border-C7C5C md:z-10 -z-10">
          <a
            onClick={handleDesc}
            href="#desc"
            className={
              desc
                ? "flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]"
                : "flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  "
            }
          >
            <p className="text-[#0072BA] font-medium">Description</p>
          </a>
          <a
            onClick={handleSpec}
            href="#specs"
            className={
              spec
                ? "flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]"
                : "flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  "
            }
          >
            <p className=" text-[#0072BA] font-medium">Specs</p>
          </a>
          <a
            onClick={handleRev}
            href="#review"
            className={
              rev
                ? "flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]"
                : "flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  "
            }
          >
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <div className="px-1 text-[#0072BA] font-medium">Reviews</div>
          </a>
        </div>

        <div
          onMouseEnter={handleDesc}
          className="hidden md:flex flex-col max-w-[1400px] w-full mx-auto mt-6 md:px-4 lg:px-0"
        >
          <div className="flex w-full justify-center mx-auto ">
            <h2 className=" text-4xl font-medium text-[#362D2D]">
              High-performance James Hetfield Signature
            </h2>
          </div>

          <div className="flex  w-full mt-14 py-4 border-b-[.7px] border-b-C7C5C1  ">
            <div className="max-w-[700px] w-full">
              <p className=" justify-start font-medium text-xl text-[#362D2D]">
                ESP and James Hetfield join forces once again to bring you his
                latest vision, a unique V design called the Vulture.
                <br />
                <br />
                His newest signature model features the EMG Het Set, set-neck
                construction, and an ebony fingerboard with custom inlay.
              </p>
            </div>
            <div className=" max-w-[700px] w-full h-full  my-auto">
              <img
                src={products.image}
                className="max-w-[700px] w-full"
                alt="laid"
              ></img>
            </div>
          </div>

          <div className="flex max-h-[650px] h-full mt-14 items-center border-b-[.7px] border-b-C7C5C1">
            <div className="max-w-[650px] max-h-[650px] h-full w-full">
              <img src={products.image} className="h-[650px]" alt="head"></img>
            </div>

            <div className="flex-col max-w-[750px]  w-full  justify-start">
              <h2 className="text-4xl font-medium">ESP Vulture Features:</h2>
              <div className="flex">
                <ul className="max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]">
                  <li>
                    <p>
                      James Hetfield signature guitar with aggressive V-shaped
                      body
                    </p>
                  </li>
                  <li>
                    <p>
                      Mahogany body and neck deliver loads of warmth and
                      resonance
                    </p>
                  </li>
                  <li>
                    <p>
                      Sleek, fast-playing ebony fretboard with eye-grabbing
                      custom inlay
                    </p>
                  </li>
                </ul>

                <ul className="max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]">
                  <li>
                    <p>Set-neck construction ensures maximum sustain</p>
                  </li>
                  <li>
                    <p>
                      Active EMG JH Het Set of humbucking pickups ensures
                      maximum output and clarity
                    </p>
                  </li>
                  <li>
                    <p>Rock-solid TonePros Tune-o-matic bridge and tailpiece</p>
                  </li>
                </ul>

                <ul className="max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]">
                  <li>
                    <p>
                      Comfortable Thin {"U"} neck profile with 22 extra-jumbo
                      frets
                    </p>
                  </li>
                  <li>
                    <p>Locking Gotoh machine heads keep you in tune</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex mt-14 py-4 items-center border-b-[.7px] border-b-C7C5C1">
            <div className="max-w-[750px] w-full text-[#362D2D]">
              <h2 className=" text-4xl font-medium">
                Eye-catching, high-performance features
              </h2>
              <p className="mt-4 justify-start font-medium text-lg">
                he Vulture James Hetfield signature electric guitar boasts a lot
                of eye-catching, high performance features. Its set-neck
                construction ensures maximum sustain.
                <br />
                <br />
                Gotoh locking tuners make string changes a breeze while keeping
                your tuning stable. A TonePros locking Tune-o-matic bridge and
                tailpiece lock the guitar’s hardware down to its body, giving
                you optimal string vibration transfer to your {"guitar's"} body.
                Beyond that, the Vulture’s sleek ebony fretboard displays{" "}
                {"James's"} custom inlay on the 12th fret.
              </p>
            </div>
            <img
              src={products.image}
              className="max-w-[500px] max-h-[700px] w-full  h-full mx-auto"
              alt="front"
            ></img>
          </div>
        </div>
        {/*Mobile version*/}
        <div
          onMouseEnter={handleDesc}
          className="md:hidden min-[0px]:flex-col mt-4 "
        >
          <div className=" w-full justify-center mx-auto ">
            <div className="flex-col">
              <div className=" max-w-[700px] w-full h-full  my-auto">
                <img
                  src={products.image}
                  className="max-w-[700px] w-full"
                  alt="laid"
                ></img>
              </div>
              <h2 className="p-4 text-3xl font-medium text-[#362D2D]">
                High-performance James Hetfield Signature
              </h2>
            </div>

            <div className="flex-col  w-full  p-4 border-b-[.7px] border-b-C7C5C1 ">
              <div className="max-w-[700px] w-full">
                <p className=" justify-start font-medium text-[#362D2D] ">
                  ESP and James Hetfield join forces once again to bring you his
                  latest vision, a unique V design called the Vulture. His
                  newest signature model features the EMG Het Set, set-neck
                  construction, and an ebony fingerboard with custom inlay.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-col  h-full mt-14 items-center border-b-[.7px] border-b-C7C5C1">
            <div className="max-w-[650px] max-h-[650px] h-full w-full">
              <img src={products.image} className="h-[650px]" alt="head"></img>
            </div>

            <div className="flex-col max-w-[750px] mt-10 mb-4 w-full  justify-start px-2">
              <h2 className="text-3xl font-medium">ESP Vulture Features:</h2>
              <div className="flex-col px-4 mt-4">
                <ul className=" w-full mx-2 list-disc font-medium text-[#362D2D]">
                  <li>
                    <p>
                      James Hetfield signature guitar with aggressive V-shaped
                      body
                    </p>
                  </li>
                  <li>
                    <p>
                      Mahogany body and neck deliver loads of warmth and
                      resonance
                    </p>
                  </li>
                  <li>
                    <p>
                      Sleek, fast-playing ebony fretboard with eye-grabbing
                      custom inlay
                    </p>
                  </li>
                  <li>
                    <p>Set-neck construction ensures maximum sustain</p>
                  </li>
                  <li>
                    <p>
                      Active EMG JH Het Set of humbucking pickups ensures
                      maximum output and clarity
                    </p>
                  </li>
                  <li>
                    <p>Rock-solid TonePros Tune-o-matic bridge and tailpiece</p>
                  </li>
                  <li>
                    <p>
                      Comfortable Thin {"U"} neck profile with 22 extra-jumbo
                      frets
                    </p>
                  </li>
                  <li>
                    <p>Locking Gotoh machine heads keep you in tune</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col p-4 items-center border-b-[.7px] border-b-C7C5C1">
            <div className="max-w-[750px] w-full">
              <img
                src={products.image}
                className="max-w-[500px] max-h-[700px] w-full  h-full mx-auto text-[#362D2D]"
                alt="front"
              ></img>
              <h2 className=" text-3xl font-medium">
                Eye-catching, high-performance features
              </h2>
              <p className="mt-4 justify-start font-medium ">
                he Vulture James Hetfield signature electric guitar boasts a lot
                of eye-catching, high performance features. Its set-neck
                construction ensures maximum sustain.
                <br />
                <br />
                Gotoh locking tuners make string changes a breeze while keeping
                your tuning stable. A TonePros locking Tune-o-matic bridge and
                tailpiece lock the guitar’s hardware down to its body, giving
                you optimal string vibration transfer to your {"guitar's"} body.
                Beyond that, the Vulture’s sleek ebony fretboard displays{" "}
                {"James's"} custom inlay on the 12th fret.
              </p>
            </div>
          </div>
        </div>
        {/*Specs Section*/}
        <div onMouseEnter={handleSpec} id="specs" className="flex-col w-full ">
          <div className="max-w-[1400px] mx-auto py-4  border-b-[.7px] border-b-C7C5C1">
            <h2 className=" py-5 text-4xl font-medium text-[#362D2D]">
              Tech Specs
            </h2>
          </div>

          <table className=" max-w-[1400px] w-full mx-auto text-[#362D2D]">
            {/********************************************************************************/}
            <tr className="flex   h-10 my-4 ">
              <td className="w-full ">
                <h2 className=" text-2xl font-bold">GENERAL</h2>
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium max-[425px]:text-sm">
                Number of strings
              </td>
              <td className="max-w-[1200px] w-full  ">6</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium max-[425px]:text-sm">
                Left-/Right-handed
              </td>
              <td className="max-w-[1200px] w-full 2">Right-handed</td>
            </tr>
            {/********************************************************************************/}
            <tr className="flex h-10 my-4">
              <td className="w-full  ">
                <h2 className=" text-2xl font-bold">BODY</h2>
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Body Type</td>
              <td className="max-w-[1200px] w-full  ">Solidbody</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Body Shape</td>
              <td className="max-w-[1200px] w-full 2">
                James Hetfield Vulture
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium max-[425px]:text-sm">
                Number of strings
              </td>
              <td className="max-w-[1200px] w-full  ">6</td>
            </tr>
            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Body Material</td>
              <td className="max-w-[1200px] w-full  ">Mahogany</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium"> Body Finish</td>
              <td className="max-w-[1200px] w-full  ">Satin</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Color</td>
              <td className="max-w-[1200px] w-full  ">Black</td>
            </tr>
            {/********************************************************************************/}
            <tr className="flex h-10 my-4">
              <td className="w-full  ">
                <h2 className=" text-2xl font-bold">NECK</h2>
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Neck Material</td>
              <td className="max-w-[1200px] w-full  ">1-piece Mahogany</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Neck Shape</td>
              <td className="max-w-[1200px] w-full 2">Thin U</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Neck Joint</td>
              <td className="max-w-[1200px] w-full  ">Set Nec</td>
            </tr>
            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Radius</td>
              <td className="max-w-[1200px] w-full  ">12”</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] text-sm md:text-base font-medium">
                Fingerboard Material
              </td>
              <td className="max-w-[1200px] w-full  ">Ebony</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Fingerboard Inlay</td>
              <td className="max-w-[1200px] w-full  ">
                Pearl Dots with Vulture Design
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Number of Frets</td>
              <td className="max-w-[1200px] w-full 2">22, Extra Jumbo</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Scale Length</td>
              <td className="max-w-[1200px] w-full  ">24.75</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Nut Width</td>
              <td className="max-w-[1200px] w-full  ">{"1.653'"}</td>
            </tr>
            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Nut Material</td>
              <td className="max-w-[1200px] w-full  ">Bone</td>
            </tr>
            {/********************************************************************************/}
            <tr className="flex   h-10 my-4 ">
              <td className="w-full ">
                <h2 className=" text-2xl font-bold">ELECTRONICS</h2>
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Neck Pickup</td>
              <td className="max-w-[1200px] w-full  ">EMG JH Humbucker</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Bridge Pickup</td>
              <td className="max-w-[1200px] w-full 2">EMG JH Humbucker</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Controls</td>
              <td className="max-w-[1200px] w-full  ">2 x volume</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Switching</td>
              <td className="max-w-[1200px] w-full 2">
                3-way toggle pickup switch
              </td>
            </tr>

            {/********************************************************************************/}
            <tr className="flex   h-10 my-4 ">
              <td className="w-full ">
                <h2 className=" text-2xl font-bold">MISCELLANEOUS</h2>
              </td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">Strings</td>
              <td className="max-w-[1200px] w-full  ">Elixir Nanoweb, 10s</td>
            </tr>

            <tr className="flex  h-10 bg-[#f2f1f0]">
              <td className="w-[199px] font-medium">Case/Gig Bag</td>
              <td className="max-w-[1200px] w-full 2">Hardshell Case</td>
            </tr>

            <tr className="flex h-10 bg-[#f2f1f01e]">
              <td className="w-[199px] font-medium">
                Manufacturer Part Number:
              </td>
              <td className="max-w-[1200px] w-full  ">EVULTUREBLKS</td>
            </tr>
          </table>
        </div>
        {/*Review Section*/}
        <div
          onMouseEnter={handleRev}
          id="review"
          className="max-w-[1400px] w-full mx-auto mt-20  "
        >
          <h2 className="w-full  mx-auto py-10 text-center lg:text-start text-4xl  font-medium  text-[#362D2D]">
            Customers reviews
          </h2>
          <div className="lg:flex max-[1px]:flex-col ">
            <div className="flex-col  border-t-[1px] border-t-C7C5C1">
              <div className="flex items-center justify-center lg:justify-normal ">
                <IoIosStar size={20} color="#ff9d00" />
                <IoIosStar size={20} color="#ff9d00" />
                <IoIosStar size={20} color="#ff9d00" />
                <IoIosStar size={20} color="#ff9d00" />
                <IoIosStar size={20} color="#ff9d00" />
                <p className=" px-1 text-lg font-medium text-[#362D2D]">
                  5.0 out of 5
                </p>
              </div>
              <div className="flex-col w-fit mx-auto ">
                <div className="flex  justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
                  <p className="px-2">5</p>
                  <div className="h-2 px-28 mx-2  bg-[#ff9d00] rounded-xl"></div>
                  <p className="w-full px-2 text-center">100%</p>
                </div>
                <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
                  <p className="px-2">4</p>
                  <div className="h-2 px-28 mx-2  bg-[#f2f1f0] rounded-xl"></div>
                  <p className="w-full  px-2 text-center">0%</p>
                </div>
                <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
                  <p className="px-2">3</p>
                  <div className="h-2 px-28 mx-2 bg-[#f2f1f0]  rounded-xl"></div>
                  <p className="w-full  px-2 text-center">0%</p>
                </div>
                <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
                  <p className="px-2">2</p>
                  <div className="h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl"></div>
                  <p className="w-full  px-2 text-center">0%</p>
                </div>
                <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
                  <p className="px-2">1</p>
                  <div className="h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl"></div>
                  <p className="w-full  px-2 text-center">0%</p>
                </div>
              </div>
              <div className="flex w-full mt-4 justify-center lg:justify-normal border-t-[1px] border-t-C7C5C1 ">
                <button className=" p-4 px-6 mt-4  rounded text-xl font-bold text-white  bg-[#0072ba] hover:bg-[#0062a1] ">
                  Write your review
                </button>
              </div>
            </div>
            <div className="flex-col h-fit mt-4 lg:mt-0 lg:ml-10 pt-7 pb-4 px-4 lg:px-0 border-t-[1px] border-t-C7C5C1  border-b-[1px] border-b-C7C5C1">
              <div className="flex ">
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
                <IoIosStar color="#ff9d00" />
              </div>
              <h2 className="text-medium font-semibold text-[#362D2D]">
                Amazing guitar
              </h2>
              <p className="font-medium text-[#362D2D]">
                The ESP VULTURE is an amazing guitar. {"It's"} light weight, has
                a smooth satin finish and sounds brutal! You can feel how solid
                the craftsmanship is.
              </p>
              <p className="text-[#C7C5C1]">
                by Sourtwater Customer on February 13, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
