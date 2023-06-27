import { FC } from "react";

interface ItemProps {
  text: string;
}

const Item: FC<ItemProps> = ({ text }) => {
  return (
    <div className="flex place-items-center justify-center min-w-[48px] w-fit px-5 h-10 border-[1px] border-[#3D4043] rounded-full">
      <p className="text-[14px]">{text}</p>
    </div>
  );
};

export default Item;
