'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  increment?: boolean;
  onClick: (increment: boolean) => void;
};

type StatDivProps = {
  title: string;
  number?: number;
  cardio?: boolean;
};

export const StatDiv = ({ title, number, cardio }: StatDivProps) => {
  const [divValue, setDivValue] = useState<number>(number || 0);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const handleValueChange = (increment: boolean) => {
    if (increment) {
      if (divValue === 7) return;
      setDivValue((prev) => prev + 1);
    } else {
      if (divValue === 0) return;
      setDivValue((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-[190px]  min-w-[150px] flex flex-col text-md font-semibold justify-between items-center w-[45%] max-w-[200px] border border-gray-200 rounded-lg shadow-xl">
      <div className="text-center min-h-[60px] flex justify-center items-center rounded-t-lg bg-[#292727] text-white w-full">
        {title}
      </div>
      <motion.div
        key={divValue}
        animate={{
          scale: [1, 1.2, 1],
          transition: { duration: 0.2 },
        }}
        className={clsx('text-[38px] my-3  font-bold', {
          'text-green-500':
            (divValue > 2 && !cardio) || (cardio && divValue > 1),
          'text-orange-400':
            (divValue <= 2 && !cardio) || (cardio && divValue === 1),
          'text-red-400': divValue == 0,
        })}
      >
        {divValue}
      </motion.div>
      <div className="flex justify-center items-center h-[45px] rounded-b-lg gap-3 bg-[#292727] w-full">
        <IncrementDecrementButton onClick={handleValueChange} />
        <IncrementDecrementButton
          onClick={handleValueChange}
          increment={false}
        />
      </div>
    </div>
  );
};

export default function IncrementDecrementButton({
  increment = true,
  onClick,
}: ButtonProps) {
  let value: '+' | '-';
  if (increment) {
    value = '+';
  } else {
    value = '-';
  }

  return (
    <button
      onClick={() => {
        onClick(increment);
      }}
      className="flex outline-2 border-sky-400 text-sky-600 border-black justify-center items-center text-black text-lg bg-gray-200 rounded-full  p-2 w-8 h-8 hover:scale-105"
    >
      {value}
    </button>
  );
}
