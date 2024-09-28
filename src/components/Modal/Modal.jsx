
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const [mounted, setMounted] = useState(false); // Track if the component has mounted
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // Set the mounted state to true after the component mounts

    const modal = modalRef.current;
    if (modal) {
      modal.showModal = () => {
        modal.style.display = "block";
      };
      modal.close = () => {
        modal.style.display = "none";
      };

      if (modal.style.display !== "block") {
        modal.showModal();
      }
    }

    return () => {
      if (modal) modal.close();
    };
  }, []);

  // Close modal on hide
  function onHide() {
    router.back();
  }

  if (!mounted) return null; // Prevents portal from rendering during SSR

  return createPortal(
    <div
      ref={modalRef}
      // onClick={onHide}
      className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-[500]"
      role="dialog"
      aria-modal="true"
    >
    
      <div className="flex justify-center items-center h-screen w-full">{children}</div>
    </div>,
    document.getElementById("modal-root-content") // Ensure the portal target exists
  );
};

export default Modal;

