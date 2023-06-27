"use client";
import MainHeader from "@/components/MainHeader";
import Vl from "@/components/ui/Vl";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import Item from "@/components/Item";

export default function Home() {
  const [query, setQuery] = useState<string>("sql");
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const donwHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    handleSubmit();
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("/api/send", {
        query: query,
      })
      .then((res) => {
        setData(res.data.content);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <nav className="w-full h-28 flex place-items-center flex-col px-5 pt-2">
        <div className="h-[80%] ml-2 w-full flex">
          <div className="w-[60%] flex gap-10 h-ful">
            <Image
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
              width={95}
              height={95}
              className="self-center"
              alt="logo"
            />
            <div className="w-[90%] relative flex flex-col mt-5">
              <div className="relative w-[95%]">
                <input
                  type="text"
                  disabled={loading}
                  onChange={(e) => changeHandler(e)}
                  className="bg-[#303134] h-[3.2rem] rounded-full p-4 py-5 w-full focus:outline-none"
                  value={query}
                  onKeyDown={(e) => {
                    donwHandler(e);
                  }}
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 right-5 flex place-items-center gap-3">
                  <RiCloseFill size={23} color="#9BA0A5" />
                  <div className="h-full w-[0.01rem] bg-[#9BA0A5]">&nbsp;</div>
                  <button>
                    <AiOutlineSearch
                      size={23}
                      color="#93B3F2"
                      className="cursor-pointer"
                    />
                  </button>
                </div>
              </div>
              <div className="w-full mt-3 flex gap-1">
                <Item text="Images" />
                <Item text="Videos" />
                <Item text="News" />
                <Item text="Examples" />
                <Item text="course" />
                <Item text="learn" />
                <Item text="commands" />
                <Item text="course" />
                <Item text="sql" />
              </div>
            </div>
          </div>
          <div className="flex place-items-center justify-end w-[40%]">
            <button className="bg-[#9BB9F4] text-[#202124] py-[10px] px-5 rounded-md font-normal text-sm">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      <div className="mt-10">
        <Vl />
      </div>
      <div className="w-[75%] m-auto flex flex-col">
        <MainHeader
          company="Microsoft"
          text={
            loading || !data
              ? "SQL (Structured Query Language) is a programming language designed for managing and manipulating relational databases."
              : data
          }
          link="https://learn.microsoft.com &gt; en-us &gt; sql-server-ver16"
          title="Microsoft Sequialize server documentation page 12..."
        />
      </div>
      <div className="w-[75%] m-auto flex flex-col">
        <div className="w-[65%] px-3 flex flex-col py-2">
          <div className="flex mt-5 gap-4 place-items-center">
            <div className="bg-white flex place-items-center justify-center rounded-full h-7 w-7">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                width={26}
                height={26}
                className="self-center rounded-full"
                alt="logo"
              />
            </div>
            <div className="">
              <h1 className="text-[14px]">Microsoft</h1>
              <h1 className="text-[12px] text-[#9BA0A5]">
                https://learn.microsoft.com &gt; en-us &gt; sql-server-ver16
              </h1>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-[20px] text-[#93B3F2]">
              How to do that in sql
            </h1>
            <p className="text-[14px] text-[#BEC1C5]">
              <span className="text-[#9BA0A5]">Mar 3, 2023 — </span>
              Fastest-Acting: Leaks Liquid Aluminum Stop Leak · Best for Hot
              Engines: K-Seal ST5501 Pour & Go Leak Repair · Best Powder:
              AlumAseal...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
