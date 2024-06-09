'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch, useAppSelector } from '@src/app/lib/hooks';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { SET_OPEN_HISTORY } from '@src/app/lib/features/AI/aiSlice';
import { IOrganization } from '@interfaces/integration/index.js';
import { SET_SELECT_ORGANIZATION } from '@src/app/lib/features/organizationSlice';
import ViewDropdown from '@components/ViewDropdown';
import OrganizationDropdown from './OrganizationDropdown.tsx';

const MobileTopbar = ({ onOpenDrawer }: { onOpenDrawer: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAppSelector(state => state.Auth.USER);
  const dispatch = useAppDispatch();

  const handleSelectOrganization = (organization: IOrganization) => {
    dispatch(SET_SELECT_ORGANIZATION(organization));
  };

  return (
    <div className="w-full pt-[12px] px-2.5 flex items-center justify-between">
      <button onClick={onOpenDrawer} type="button">
        <IoMenuOutline className="text-[24px] text-[#000]" />
      </button>

      {pathname === '/ai-assistance/' && (
        <div className="flex items-center space-x-4">
          <ViewDropdown />
          <div className="-mb-2">
            <OrganizationDropdown
              SelectOrganization={handleSelectOrganization}
              onOpenHistory={() => dispatch(SET_OPEN_HISTORY(true))}
            />
          </div>
        </div>
      )}

      <div className="relative cursor-pointer">
        <div className="bg-[#46AB5E] border-2 border-[#fff] rounded-full h-[10px] w-[10px] absolute -right-0.5 -top-0.5" />
        {user?.profile_pic ? (
          <Image
            src={user?.profile_pic}
            height={32}
            width={32}
            priority
            alt="User_Image"
            className="h-[32px] w-[32px] rounded-[5px] border border-blue-400 mx-auto"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="bg-primary h-[32px] w-[32px] rounded-[5px] flex items-center justify-center text-[#fff] font-[700] text-[14px] mx-auto">
            {user?.firstName.charAt(0)}
            {user?.lastName.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTopbar;
