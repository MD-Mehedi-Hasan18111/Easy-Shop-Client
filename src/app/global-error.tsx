'use client';

import React, { useEffect } from 'react';
import { HiOutlineEmojiSad } from 'react-icons/hi';

interface IErrorFallBack {
  error: Error;
  resetErrorBoundary?: () => void;
}

// const ErrorFallback: FC<IErrorFallBack> = ({ error }) =>

export default function Error({ error, resetErrorBoundary }: IErrorFallBack) {
  useEffect(() => {
    // Log error details when the component mounts
  }, [error]);

  return (
    <div className="md:w-[600px] h-screen text-center mx-auto md:pt-[200px] pt-[150px]  text-white">
      <HiOutlineEmojiSad className="md:text-[150px] text-[100px] mx-auto" />
      <h2 className="Dm mt-[20px] md:text-[24px] text-[18px]">{error.name}</h2>
      <p className="Dm md:text-[18px] text-[16px] mt-3">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        type="button"
        className="btn btn-neutral mt-4  text-[#fff]">
        Go Back
      </button>
    </div>
  );
}
