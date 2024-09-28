"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Partners() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // The multiplier controls the speed of scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="py-3">
      <div className="bg-primary-base my-2 p-2 sm:p-4 rounded">
        <h1 className="text-[12px] sm:text-[14px] font-medium uppercase">
          Partners
        </h1>
        <div className="pt-2">
          <div className="flex gap-4">
            <div className="bg-primary-muted rounded overflow-hidden w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/desktop/contact/cc5abc2ba71b21799c724780870acaa5.png"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-base my-2 p-2  md:p-4 rounded">
        <div
          className="pt-2 flex gap-3 footerPartner overflow-x-auto overflow-y-hidden cursor-grab max-w-[100%] "
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          // style={{ scrollbarWidth: "thin" }} // optional to show scrollbar
        >
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/4480edf0fc39952897fce4a2e48558cd.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/ff9c10c2236f3f482fd9bbd560d580cb.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/c512792146982ffb59a64d8529c6c362.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/638b07db2ad34152148e96cbfe0778ee.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="bg-primary-muted rounded overflow-hidden w-[100px] sm:w-[150px] h-[100px] sm:h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
