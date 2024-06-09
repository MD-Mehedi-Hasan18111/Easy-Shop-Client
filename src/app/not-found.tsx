'use client';

import { useRouter } from 'next/navigation';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="md:w-[600px] h-screen text-center mx-auto md:pt-[200px] pt-[150px]  text-white">
      <HiOutlineEmojiSad className="md:text-[150px] text-[100px] mx-auto" />
      <h2 className="Dm mt-[20px] md:text-[24px] text-[18px]">
        Page Not Found
      </h2>
      <p className="Dm md:text-[18px] text-[16px] mt-3">
        The page you are looking for doesn't exist or an other error occurred.
      </p>
      <button
        onClick={() => router.back()}
        type="button"
        className="btn btn-neutral mt-4 text-[#fff]">
        Go Back
      </button>
    </div>
  );
}
