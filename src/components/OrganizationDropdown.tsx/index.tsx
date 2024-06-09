import { icHistory } from '@constants/icons';
import { IOrganization } from '@interfaces/integration';
import { useAppSelector } from '@src/app/lib/hooks';
import Image from 'next/image';
import React from 'react';

interface IComponentProps {
  SelectOrganization: (organization: IOrganization) => void;
  onOpenHistory: () => void;
}

const OrganizationDropdown: React.FC<IComponentProps> = ({
  SelectOrganization,
  onOpenHistory
}) => {
  const organizationList = useAppSelector(
    state => state.Organization.organizations
  );

  const selectedOrgService = useAppSelector(
    state => state.Organization.selectedOrg
  );

  return (
    <div className="md:w-full w-[160px] md:h-[50px] h-[30px] bg-[#FFFFFF] border border-[#D7D7D7] drop-shadow-sm lg:rounded-full rounded-[8px] mb-2 flex items-center space-x-2 pr-3">
      <select
        onChange={e => {
          const selectedOrg = organizationList?.find(
            org => org?.serviceId === e.target.value
          );
          if (selectedOrg) {
            SelectOrganization(selectedOrg);
          }
        }}
        value={selectedOrgService?.serviceId}
        className="select md:select-md select-xs bg-[#F4F7FE] w-full lg:rounded-full rounded-[8px] focus:outline-none border-none text-[#718096]">
        {organizationList?.map(org => {
          return (
            <option key={org?.organizationId} value={org?.serviceId}>
              {org?.organization_name}
            </option>
          );
        })}
      </select>
      <button
        type="button"
        onClick={onOpenHistory}
        className="flex flex-col justify-center items-center md:w-auto w-[24px]">
        <Image
          src={icHistory}
          alt="history"
          height={18}
          width={18}
          className="w-[18px] h-[18px]"
        />
        <p className="text-[#718096] text-[10px] font-[600] mt-0.5 md:block hidden">
          History
        </p>
      </button>
    </div>
  );
};

export default OrganizationDropdown;
