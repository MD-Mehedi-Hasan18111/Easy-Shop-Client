'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoCloudOfflineOutline } from 'react-icons/io5';

const InternetStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof window !== 'undefined' ? navigator.onLine : true
  );
  const [isOpenModal, setIsOpenModal] = useState<boolean>(!isOnline);

  const onCloseModal = () => {
    if (isOnline) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(true);
      setIsOpenModal(true);
    };

    const handleOfflineStatus = () => {
      setIsOnline(false);
      setIsOpenModal(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('online', handleOnlineStatus);
      window.addEventListener('offline', handleOfflineStatus);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnlineStatus);
        window.removeEventListener('offline', handleOfflineStatus);
      }
    };
  }, []);

  return (
    <dialog
      id="my_modal_10"
      className="modal"
      onClose={onCloseModal}
      open={isOpenModal}>
      <button
        type="button"
        onClick={onCloseModal}
        className="modal-overlay bg-[#000] opacity-50 fixed inset-0"
      />
      <div className="modal-box w-8/12 max-w-2xl bg-[#fff]">
        {isOnline && (
          <button
            type="button"
            onClick={onCloseModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 md:text-[18px] text-[14px]">
            ✕
          </button>
        )}
        <div>
          {isOnline ? (
            <div className="flex flex-col items-center justify-center space-y-3">
              <AiOutlineGlobal className="md:text-[50px] text-[30px] text-[#27ae60]" />
              <h3 className="dm font-[600] md:text-[30px] text-[20px] text-[#27ae60]">
                You are back online!
              </h3>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3">
              <IoCloudOfflineOutline className="md:text-[50px] text-[30px] text-[#e74c3c]" />
              <h3 className="dm font-[600] md:text-[30px] text-[20px] text-[#e74c3c]">
                You are offline now!
              </h3>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default InternetStatus;
