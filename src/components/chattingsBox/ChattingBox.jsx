"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PiChatTeardropDots } from "react-icons/pi";
import { IoClose, IoCloseSharp } from "react-icons/io5";
import { MdSend, MdOutlineInsertEmoticon } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Pusher from "pusher-js";
import moment from "moment";
import { IoMdClose } from "react-icons/io";
import {
  useLoadMessageQuery,
  useSeneMessageMutation,
} from "@/redux/api/chattingApi";
import { liveChatToggle } from "@/redux/features/chatsSlice";
import Cookies from "js-cookie";
import { authKey } from "@/constants/authKey";
import { uploadImage } from "@/helpers/uploadImage/uploadImage";
const ChattingBox = () => {
  const { data: massageData, refetch } = useLoadMessageQuery(5);
  const [seneMessage, { isLoading }] = useSeneMessageMutation();
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);
  const { liveChatStatus } = useSelector((stats) => stats.liveChat);
  const accessToken = Cookies.get(authKey);
  const chatContainerRef = useRef(null); // Ref for chat container

  const handleSend = async () => {
    try {
      let photoName = "";
      if (file) {
        photoName = await uploadImage({
          file: file,
        });
      }
      console.log(photoName);
      if (!newMessage && !file) return;
      const formData = new FormData();
      formData.append("messages", newMessage);
      if (photoName) {
        formData.append("image_name", photoName);
      }
      const res = await seneMessage(formData).unwrap();
      console.log(res);
      if (res?.status) {
        setNewMessage("");
        setFile("");
        refetch();
      }
    } catch (error) {
      console.log(error);
      console.error("Error sending message:", error);
    }
  };
  const [activeProto, setActivePhoto] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const pusher = new Pusher("19760358ec8fb354db0e", {
      cluster: "ap1",
      authEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const channel = pusher.subscribe("notification-channel");

    channel.bind("SendNotification", (data) => {
      console.log(data, "Notification data");
      refetch();
    });

    return () => {
      pusher.unbind_all();
      pusher.disconnect();
    };
  }, [refetch, accessToken]);

  // Scroll to bottom when messages update
  // Scroll to bottom when messages update or when chat box is opened
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [massageData, liveChatStatus, file]); // Add liveChatStatus to ensure scrolling when opening chat box

  const filteredData = massageData?.data?.messages?.filter(
    (item) => item?.user_type !== 0
  );
  const adminInf = filteredData?.[0];

  return (
    <>
      <div className="sm:pt-3  fixed  bottom-0  md:bottom-0  2k:bottom-16  sm:right-3 z-[500]">
        {liveChatStatus ? (
          <div className="flex flex-col h-[90vh] sm:h-[500px] mx-auto min-w-[300px]  w-full sm:w-[400px] overflow-hidden  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
            {/* Chat Header */}
            <div className=" ">
              <div className=" bg-primary-base text-white p-2 md:p-4 rounded-t-lg relative ">
                <div className=" pb-2 flex justify-center items-center">
                  <div className=" bg-[#96929273]  flex  items-center cursor-pointer gap-1 px-5 text-white py-1 rounded-[14px]">
                    <PiChatTeardropDots className=" text-sm md:text-[18px]" />
                    <p className="text-white text-sm md:text-base">Chat</p>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(liveChatToggle())}
                  className="text-xl font-medium absolute right-4 top-4 hover:bg-[#96929273] rounded p-2 cursor-pointer duration-200"
                >
                  <IoClose />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full">
                    <Image
                      width={50}
                      height={50}
                      src={`https://i.ibb.co.com/VjG8wKf/ceo.webp`}
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="text-sm font-medium"> Mybet27</p>
                    <p className="text-xs">Customer Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-4 space-y-2 overflow-y-auto  relative chattingScrollbar bg-light-muted  w-full"
            >
              {massageData?.data?.messages?.length ? (
                massageData?.data?.messages?.map((msg, index) => (
                  <div key={index}>
                    <p className="text-[10px] text-center font-medium uppercase">
                      {moment(msg?.create_at).format("ddd [At] hh:mm A")}
                    </p>
                    <div
                      key={msg?.id}
                      className={`flex ${
                        msg?.added_by != 1 ? "justify-end" : "justify-start"
                      }  `}
                    >
                      <div
                        className={`max-w-xs px-3 py-[6px] rounded-lg ${
                          msg?.sender === "User"
                            ? "bg-white text-black-base text-black"
                            : "bg-white text-black-base text-black"
                        } overflow-hidden`}
                      >
                        {msg?.name !== "User" && (
                          <p className="text-xs font-semibold capitalize">
                            {msg.name}
                          </p>
                        )}
                        <div>
                          {msg.image_name && (
                            <div className="h-24 w-24 rounded mt-1">
                              <Image
                                onClick={() =>
                                  setActivePhoto(
                                    process.env.NEXT_PUBLIC_IMAGE_URL +
                                      "/images/" +
                                      msg.image_name
                                  )
                                }
                                className=" h-24 w-24 rounded"
                                width={100}
                                height={100}
                                src={
                                  process.env.NEXT_PUBLIC_IMAGE_URL +
                                  "/images/" +
                                  msg.image_name
                                }
                                alt="file"
                              />
                            </div>
                          )}
                          {msg.messages && (
                            <p className="words-breaks w-full">
                              {" "}
                              {msg.messages}{" "}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center min-h-[200px] flex justify-center items-center  text-black-base text-xs">
                  No messages yet.
                </div>
              )}

              {file && (
                <div className=" absolute bg-white rounded w-[120px] h-[120px] ">
                  <div className=" relative  z-50 w-full h-full mx-auto flex justify-center items-center">
                    <Image
                      className="w-[100px] h-[100px] mx-auto text-center rounded object-cover"
                      width={120}
                      height={120}
                      src={URL.createObjectURL(file)}
                      alt="image"
                    />
                    <IoMdClose
                      onClick={() => setFile(null)}
                      className="text-[16px] absolute -top-3 bg-white rounded-full right-0 cursor-pointer  text-red-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-2 border-t border-gray-200 bg-white text-black-base">
              <div className="flex items-center">
                <textarea
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevents newline in input
                      handleSend(); // Trigger the send function
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 p-2 text-sm placeholder:text-sm rounded-lg text-black-base outline-none"
                />

                <button
                  onClick={handleSend}
                  className="ml-2 bg-black text-black-base px-4 py-3 rounded-lg"
                >
                  <MdSend className="text-[14px]" />
                </button>
              </div>
              <div className="flex items-center gap-3 py-2">
                <button>
                  <MdOutlineInsertEmoticon className="text-[16px] text-black opacity-65" />
                </button>
                <button>
                  <label>
                    <IoMdAttach className="text-[16px] opacity-65 cursor-pointer" />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => dispatch(liveChatToggle())}
            className=" bg-black inline-block group duration-300  cursor-pointer bg-light-base  mb-6 mr-5 p-3 rounded-full text-white"
          >
            <div className="flex items-center gap-1">
              <IoChatbubbleEllipsesOutline className="text-[30px]" />
              <p className="text-[16px] group-hover:block hidden duration-300 font-medium">
                Live Chat
              </p>
            </div>
          </div>
        )}
      </div>
      {/* modal  */}
      {activeProto && (
        <div
          className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm  z-[500]"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-center items-center h-screen w-full">
            <div className=" bg-white relative  w-[95%] h-[90vh] md:w-[600px] md:h-[55vh] p-4 flex justify-center  items-center rounded-xl">
              <Image
                width={400}
                height={600}
                className=" object-contain w-full h-full rounded-xl"
                src={activeProto}
                alt="image"
              />
              <span
                onClick={() => setActivePhoto("")}
                className="text-red-500 justify-end text-2xl  bg-white rounded-full  absolute -top-2 -right-2 cursor-pointer"
              >
                <IoCloseSharp />
              </span>
            </div>
          </div>
        </div>
      )}
      ,
    </>
  );
};

export default ChattingBox;
