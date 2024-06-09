'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@src/app/lib/hooks';
import { AiOutlineHome } from 'react-icons/ai';

const Links = [
  {
    name: 'Home',
    icons: <AiOutlineHome className="w-[26.32px] h-[26.32px] mx-auto" />,
    href: '/ai-assistance',
    childrenRoutes: []
  }
];

const NavBar = () => {
  const pathname = usePathname();

  const user = useAppSelector(state => state.Auth.USER);

  const organizations = useAppSelector(
    state => state.Organization.organizations
  );

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grow flex flex-col items-center space-y-4">
        {Links.map(link => (
          <Link href={link?.href} key={link?.href}>
            <button
              type="button"
              key={link?.name}
              // eslint-disable-next-line sonarjs/no-nested-template-literals
              className={`${pathname === `${link?.href}/` ? 'bg-primary text-[#fff]' : 'text-[#949494]'} ${!user?.isOwner && organizations?.length === 0 && link.name === 'Home' ? 'hidden' : ''} hover:bg-primary hover:text-[#fff] h-[68px] w-[68px] rounded-[10px] text-center`}>
              {link?.icons}
              <p className="text-[13px] mt-2 font-[500] dm">{link.name}</p>
            </button>
          </Link>
        ))}
      </div>
      <div>
        <div className="relative">
          <div className="bg-[#46AB5E] border-2 border-[#fff] rounded-full h-[12px] w-[12px] absolute right-2.5 -top-0.5" />
          {user?.profile_pic ? (
            <Image
              src={user?.profile_pic}
              height={50}
              width={50}
              priority
              alt="User_Image"
              className="h-[50px] w-[50px] rounded-[10px] border border-secondary mx-auto"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className="bg-primary h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-[#fff] font-[700] text-[22px] mx-auto">
              {user?.firstName.charAt(0)}
              {user?.lastName.charAt(0)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
