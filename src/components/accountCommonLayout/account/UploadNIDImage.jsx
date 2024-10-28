import Image from "next/image";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import toast from "react-hot-toast"; // Ensure you have this library installed

const UploadNIDImage = ({ profileImageUrl, setProfileImageUrl }) => {
  const [isUploading, setIsUploading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Call your API to upload the image
      const res = await fetch("https://s3.codexweaver.com/public/api/upload", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json(); // Assuming your API returns some data
  
      // Update image URL if necessary
      setProfileImageUrl(data.path); // Adjust based on your API response

      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to upload profile image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <div className=" max-w-[450px] relative h-[150px] border border-[0000003d]  rounded">
        {isUploading ? (
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        ) : (
          <Image
            className="w-full h-full  rounded object-cover"
            width={250}
            height={250}
            src={profileImageUrl}
            alt="NID for profile image"
          />
        )}
        <label className="bg-white absolute z-30 border-2 p-1 border-gray-200 rounded-full bottom-1 right-2 cursor-pointer">
          <AiFillEdit size={15} />
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
};

export default UploadNIDImage;
