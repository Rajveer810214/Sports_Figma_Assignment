"use client";
import { useEffect } from "react"; // Import useEffect for side effects
import Image from "next/image";
import resume from "../../public/Maskgroup.png";
import sport1 from "../../public/sports1.jpeg";
import { useTheme } from "next-themes"; // Import useTheme from next-themes
import sport2 from "../../public/sports2.jpeg";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import SportLight from "./sportLight";
import sport3 from "../../public/sport3.jpg";

export default function Sports() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log("Current Theme:", theme);
    const storedTheme = localStorage.getItem("theme");
    console.log("Stored Theme:", storedTheme);
    if (storedTheme && storedTheme === "dark") {
      // if (storedTheme === "dark") {
      setTheme("theme");
      // } else {
      //   setTheme("dark");
      // }
    }
  }, []); // Run this effect only once on initial render

  const handleThemeChange = (newTheme: string) => {
    console.log("New Theme:", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
};


  const cardClass =
    theme === "dark"
      ? "max-w-full bg-white rounded-lg shadow dark:bg-gray-800  ml-3"
      : "max-w-full bg-white  rounded-lg shadow light:bg-gray-800  ml-3";
  const PlayerName =
    theme === "dark" ? "dark:text-white mb-2" : "light:text-black mb-2";
  const PlayerDetail =
    theme === "dark"
      ? "flex flex-col sm:flex-row bg-gray-900 items-center" // Use bg-gray-900 for dark mode
      : "flex flex-col sm:flex-row bg-slate-50 items-center"; // Use bg-white for light mode

  return (
    <>
      <div style={{ float: "right", marginRight: "33px" }}>
        {theme === "dark" ? (
          <BsSun
            size={25}
            onClick={() => handleThemeChange("light")}
            cursor="pointer"
          />
        ) : (
          <FiMoon
            size={25}
            onClick={() => handleThemeChange("dark")}
            cursor="pointer"
          />
        )}
      </div>
      <h1
        className="ml-22 bold-text"
        style={{
          marginLeft: "7%",
          marginTop: "70px",
          fontSize: "20px",
          borderBottom: "2px solid #738FFF",
          width: "63px",
          fontWeight: "bold",
        }}
      >
        Sports
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mt-3">
        <div className={cardClass} style={{ width: "237px", height: "511px" }}>
          <div className=" flex flex-col justify-center h-full">
            {" "}
            {/* Add this div for centering */}
            {/* <a href="#"> */}
            <Image
              className="mx-auto mt-2" // Center the image horizontally
              src={resume}
              alt=""
              width={217}
              height={382.31}
              style={{
                width: "217px",
                height: "377.31px",
                top: "-1145px",
                left: "-2009px",
                // transform: "scale(1.2)", // Adjust the scale value as needed (1.2 is an example)
              }}
            />
            {/* </a> */}
            <div className="p-5">
              <p className={PlayerName}>Sacramento River Cats</p>

              <div
                className={PlayerDetail}
                style={{
                  width: "178px",
                  height: "54px",
                  // borderRadius: "2px",
                  // justifyContent:'center',
                  fontSize: "12px",
                }}
              >
                <div className="events ml-3">
                  <p style={{ color: "gray" }}>Total Events</p>
                  <p>48 Events</p>
                </div>
                <div className="sport ml-4">
                  <p style={{ color: "gray" }}>Sport</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cardClass} style={{ width: "237px", height: "511px" }}>
          <div className=" flex flex-col justify-center h-full">
            {" "}
            {/* Add this div for centering */}
            <Image
              className="mx-auto  mt-2" // Center the image horizontally
              src={sport1}
              alt=""
              width={217}
              height={385.31}
              style={{
                width: "217px",
                height: "385.31px",
                top: "-1145px",
                left: "-2009px",
              }}
            />
            <div className="p-5">
              <p className={PlayerName}>Sacramento River Cats</p>

              <div
                className={PlayerDetail}
                style={{
                  width: "178px",
                  height: "54px",
                  // borderRadius: "2px",
                  fontSize: "12px",
                }}
              >
                <div className="events ml-3">
                  <p style={{ color: "gray" }}>Total Events</p>
                  <p>48 Events</p>
                </div>
                <div className="sport ml-4">
                  <p style={{ color: "gray" }}>Sport</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cardClass} style={{ width: "237px", height: "511px" }}>
          <div className=" flex flex-col justify-center h-full">
            {" "}
            {/* Add this div for centering */}
            <Image
              className=" mx-auto mt-2" // Center the image horizontally
              src={sport2}
              alt=""
              width={217}
              height={385.31}
              style={{
                width: "217px",
                height: "385.31px",
                top: "-1145px",
                left: "-2009px",
              }}
            />
            <div className="p-5">
              <p className={PlayerName}>Sacramento River Cats</p>

              <div
                className={PlayerDetail}
                style={{
                  width: "178px",
                  height: "54px",
                  // borderRadius: "2px",
                  fontSize: "12px",
                }}
              >
                <div className="events ml-3">
                  <p style={{ color: "gray" }}>Total Events</p>
                  <p>48 Events</p>
                </div>
                <div className="sport ml-4">
                  <p style={{ color: "gray" }}>Sport</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cardClass} style={{ width: "237px", height: "511px" }}>
          <div className=" flex flex-col justify-center h-full">
            {" "}
            {/* Add this div for centering */}
            <Image
              className=" mx-auto mt-2" // Center the image horizontally
              src={sport1}
              alt=""
              width={217}
              height={385.31}
              style={{
                width: "217px",
                height: "385.31px",
                top: "-1145px",
                left: "-2009px",
              }}
            />
            <div className="p-5">
              <p className={PlayerName}>Sacramento River Cats</p>

              <div
                className={PlayerDetail}
                style={{
                  width: "178px",
                  height: "54px",
                  // borderRadius: "2px",
                  fontSize: "12px",
                }}
              >
                <div className="events ml-3">
                  <p style={{ color: "gray" }}>Total Events</p>
                  <p>48 Events</p>
                </div>
                <div className="sport ml-4">
                  <p style={{ color: "gray" }}>Sport</p>
                  <p>Baseball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cardClass} style={{ width: "237px", height: "511px" }}>
          <div className=" flex flex-col h-full">
            {" "}
            {/* Add this div for centering */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute", // Added position relative to center absolutely positioned content
                height: "100px",
                marginLeft: "177px",
                marginTop: "-26px",
                // Set height to define centering area
              }}
            >
              <p
                style={{
                  padding: "4px",
                  textAlign: "center",
                  background: "black",
                  width: "50px",
                  // position: "absolute",
                  color: "white",
                }}
              >
                Ad
              </p>
            </div>
            <Image
              className=" mx-auto mt-2" // Center the image horizontally
              src={sport3}
              alt=""
              width={217}
              height={200.31}
              style={{
                width: "217px",
                height: "200.31px",
                top: "-1199px",
                left: "-2009px",
              }}
            />
            <div className="p-5">
              <p
                className={PlayerName}
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Advertisement title{" "}
              </p>

              {/* <div
                className={PlayerDetail}
                style={{
                  width: "178px",
                  height: "54px",
                  // borderRadius: "2px",
                  fontSize: "12px",
                }}
              > */}
              <div
                className="ml-3"
                style={{
                  color: "gray",
                  // marginTop: "20px",
                  fontSize: "14px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {/* <p>48 Events</p> */}
              </div>
              {/* <div className="sport ml-4">
                  <p style={{ color: "gray" }}>Sport</p>
                  <p>Baseball</p>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <button
        className="flex flex-col sm:flex-row justify-center text-white  mt-10 m-auto  h-10"
        style={{
          background: "#738FFF",
          alignItems: "center",
          color: "white",
          width: "91px",
        }}
      >
        See More
      </button>
      <SportLight theme={theme} />
    </>
  );
}
