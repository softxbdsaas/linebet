import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div>
      <div className="bg-primary-base my-2 p-4 rounded">
        <h1 className="text-[12px]  sm:text-[14px] font-medium uppercase">
          Partners
        </h1>
        <div className="pt-2">
          <div className="flex gap-4">
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/desktop/contact/cc5abc2ba71b21799c724780870acaa5.png"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-base my-2 p-4 rounded">
        <div className="pt-2">
          <div className="flex gap-4">
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/4480edf0fc39952897fce4a2e48558cd.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/ff9c10c2236f3f482fd9bbd560d580cb.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px]  object-contain"
              />
            </div>
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/c512792146982ffb59a64d8529c6c362.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/638b07db2ad34152148e96cbfe0778ee.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
            <div className="bg-primary-muted rounded overflow-hidden w-[120px] h-[120px] flex justify-center items-center">
              <Image
                width={120}
                height={120}
                src="https://v3.traincdn.com/genfiles/cms/189-650/desktop/media_asset/a9433224f4a850f1847ddabf596bbd3f.svg"
                alt="partner"
                className="rounded w-[80px] h-[80px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
