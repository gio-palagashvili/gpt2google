import Image from "next/image";
import { FC } from "react";
import { MdFeedback } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

interface MainHeaderProps {
  text: string;
  company: string;
  link: string;
  title: string;
}

const MainHeader: FC<MainHeaderProps> = ({ text, company, link, title }) => {
  return (
    <>
      <div className="w-[65%] p-3 flex flex-col gap-2">
        <p className="text-xs text-[#9BA0A5]">About 576,000,000 results</p>
        <div className="info_div mt-2 text-[20px]">
          <p>{text}</p>
          <div className="flex mt-5 gap-4 place-items-center">
            <div className="bg-white flex place-items-center justify-center rounded-full h-7 w-7">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                width={26}
                height={26}
                className="self-center rounded-full cursor-pointer hover:underline"
                alt="logo"
              />
            </div>
            <div className="">
              <h1 className="text-[14px] cursor-pointer hover:underline">
                {company}
              </h1>
              <h1 className="text-[12px] text-[#9BA0A5] cursor-pointer hover:underline">
                {link}
              </h1>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-[20px] text-[#93B3F2] cursor-pointer hover:underline">
              {title}
            </h1>
            <div className="w-full flex place-items-center mt-4 gap-2">
              <div
                className={`w-[80%] h-[0.01rem] bg-[#9BA0A5] opacity-50 mb-2 mr-3`}
              >
                &nbsp;
              </div>
              <div className="flex gap-1 text-[12px] whitespace-nowrap cursor-pointer hover:underline">
                <BsFillQuestionCircleFill color="#9BA0A5" size={15} />
                <p className="text-[#9BA0A5] w-full">About featured snippets</p>
              </div>
              <p className="text-[#9BA0A5] text-xs">•</p>
              <div className="flex gap-1 text-xs cursor-pointer hover:underline">
                <MdFeedback color="#9BA0A5" size={15} />
                <p className="text-[#9BA0A5]">feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
