"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import EmailSendForm from "./EmailSendForm";
import Swal from "sweetalert2";

const OnClickRegisterModal = ({ userinfo }) => {
  const handleCopy = () => {
    // Combine user information into a single string
    const userInfoText = `Username: ${userinfo.userName}\nPassword: ${userinfo.password}`;

    // Use Clipboard API to copy text
    navigator.clipboard
      .writeText(userInfoText)
      .then(() => {
        // Show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "Copied!",
          text: `Username  and  password has been copied.`,
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((err) => {
        // Handle error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to copy user information!",
          confirmButtonColor: "#d33",
        });
        console.error("Error copying text: ", err);
      });
  };

  //  copy file

  const handleSaveToFile = () => {
    // Combine user information into a single string
    const userInfoText = `Username: ${userinfo.userName}\nPassword: ${userinfo.password}`;

    // Generate a dynamic file name using the username and timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Format the timestamp
    const fileName = `mybet27_${userinfo.userName}_${timestamp}.txt`;

    // Create a Blob object with the user info text
    const blob = new Blob([userInfoText], { type: "text/plain" });

    // Generate a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName; // Dynamic file name

    // Trigger the download
    link.click();

    // Clean up the object URL
    URL.revokeObjectURL(link.href);
  };

  const handleTextToImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set the canvas size based on the text size and length
    const text =
      "Username: " +
      userinfo?.userName +
      "\n" +
      "Password: " +
      userinfo?.password;
    const font = "50px Arial";
    ctx.font = font;

    // Set canvas width and height dynamically based on text length
    const width = ctx.measureText(text).width;
    canvas.width = width + 20; // Adding some padding
    canvas.height = 50; // Fixed height or adjust according to your needs

    // Set the background color of the image (optional)
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text properties
    ctx.fillStyle = "#000"; // Text color
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    // Draw the text on the canvas
    ctx.fillText(text, 10, 10);

    // Convert the canvas content to a data URL (image)
    const dataUrl = canvas.toDataURL("image/png");

    // Create a link to download the image
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${userinfo?.userName}.png`; // Specify the file name for the image
    link.click();
  };

  return (
    <div className=" max-w-[850px] md:min-w-[560px] ">
      <div>
        <h1 className=" text-xl sm:text-2xl md:text-3xl  capitalize font-medium text-center md:font-semibold pb-5">
          Thanks for the registration!
        </h1>

        <div className=" py-2  space-y-2">
          <div className="flex justify-between w-full gap-3">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 bg-light-muted items-center px-3 rounded">
              <h1 className="font-normal border-r   border-light-base">
                Username:{" "}
                <span className="font-semibold pl-1">{userinfo?.userName}</span>{" "}
              </h1>
              <h1 className="font-normal">
                Password:{" "}
                <span className="font-semibold pl-1">{userinfo?.password}</span>{" "}
              </h1>
            </div>
            <button className="bg-light-base text-white p-3 rounded">
              <MdOutlineContentCopy
                onClick={() => handleCopy()}
                className="text-base md:text-xl "
              />
            </button>
          </div>
          <h1 className="text-base md:text-lg font-medium md:font-semibold py-2 text-center ">
            Do not forget to save your username and password!
          </h1>
          <div>
            <div>
              <div className=" grid grid-cols-1  md:grid-cols-2  gap-4 py-2">
                {" "}
                <button
                  onClick={handleSaveToFile}
                  className="w-full text-white bg-light-base text-xs md:text-sm px-3 py-2 rounded uppercase"
                >
                  Save to file
                </button>{" "}
                <button
                  onClick={handleTextToImage}
                  className=" w-full text-white bg-light-base text-xs md:text-sm px-3 py-2 rounded uppercase"
                >
                  Save to Pucture
                </button>{" "}
              </div>
            </div>
          </div>
          <EmailSendForm userinfo={userinfo} />
          <div className=" border-t-[2px] border-light-base w-full pt-7">
            <div className="space-y-2">
              <h1 className="text-lg md:text-2xl font-semibold text-center">
                {" "}
                {`You"re just n one step away from bonus`}
              </h1>
              <p className="text-xs md:text-sm text-black-base text-center ">
                Get up 13539 BDT on your first deposit
              </p>
              <Link
                href={"/office/recharge"}
                className="text-sm text-center rounded py-1 font-medium bg-button-base px-3 max-w-[200px] mx-auto block text-white uppercase "
              >
                Make a deposit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnClickRegisterModal;
