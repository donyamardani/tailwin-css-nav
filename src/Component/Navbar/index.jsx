import React, { useState } from "react";
import tomato from "/public/images.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import Modal from "../Modal";



export default function Navbar() {
    const [MobileMenu, setMobileMenu] = useState(false);
      const [showModal, setShowModal] = useState(false);
      
  const handleModal = ()=> {
    setShowModal(false)
  }
  return (
    <>
    <nav className="flex w-full items-center bg-slate-300 drop-shadow-md">
      <div className="w-full flex justify-between items-center  px-12 py-4">
       
        <div className="flex gap-1 items-center">
          <img src={tomato} alt="" className="w-7 h-7 " />
          <h1 className="text-2xl font-semibold tracking-widest ">tomato</h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-12">
            <li className="text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg">
              Home
            </li>
            <li className="text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg">
              User
            </li>
            <li className="text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg">
              login/register
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex bg-slate-200 rounded-2xl px-3 py-2 hover:bg-white hover:rounded-md duration-200">
            <label htmlFor="" className="flex  rounded-b-2xl gap-1 items-center  text-slate-700">
                <div className="hover:text-slate-800 cursor-pointer duration-200"><FaSearch size={18} /></div>
                <input type="text" placeholder="search..." className="outline-none border-none bg-transparent pl-2 placeholder:text-lg"/>
            </label>
           
        </div>
        <div className="flex lg:hidden items-center">
          <IoMenu size={30} onClick={()=>setMobileMenu(true)}/>
        </div>
         
      </div>
      {/* mobile menu */}
      {MobileMenu && (
        <div className={` ${MobileMenu ? 'right-0':'-right-[301px]'} duration-300 z-50 fixed top-0  min-h-screen w-[310px] bg-slate-700/25 backdrop-blur-lg`}>
            <div className="fixed top-2 right-2 p-2 duration-300 text-slate-700 hover:text-slate-950 cursor-pointer rounded-full text-lg hover:bg-slate-300">
                <IoCloseSharp size={30} onClick={()=>setMobileMenu(false)}/>
            </div>
          <div className=" mt-20 flex flex-col  gap-5">
            
          <ul className=" items-center justify-center gap-12">
            <li className="flex w-full px-5 py-2  mt-3 rounded-xl items-center duration-300 justify-between text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg hover:bg-slate-300">
              Home <MdHome size={30}/>
            </li>
            <li className="w-full flex px-5 py-2 mt-3  rounded-xl items-center duration-300 hover:bg-slate-300 justify-between text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg">
              User <FaUser size={30}/>
            </li>
            <li className="w-full flex px-5 py-2  mt-3 rounded-xl items-center duration-300 hover:bg-slate-300 justify-between text-slate-700 hover:text-slate-950 cursor-pointer font-medium text-lg" onClick={()=>{setShowModal(true); setMobileNav(false)}}>
              login/register <LuLogIn size={30}/>
            </li>
          </ul>
          </div>
        </div>
      )}
    </nav>
     {showModal&& <Modal handleModal={handleModal} />}
     </>
  );
}
