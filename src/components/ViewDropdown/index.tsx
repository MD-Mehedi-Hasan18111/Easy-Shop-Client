'use client';

import { IViewMetadata } from '@interfaces/aiAssistance';
import { SET_CHAT_ID } from '@src/app/lib/features/AI/aiChatSlice';
import {
  SET_ACTIVE_VIEW,
  SET_CHARTS,
  SET_CHART_STATUS,
  SET_COMMENTARY,
  SET_SIDEBAR_MESSAGE_ID
} from '@src/app/lib/features/AI/aiSlice';
import { useAppDispatch, useAppSelector } from '@src/app/lib/hooks';
import React from 'react';

const ViewDropdown = () => {
  const activePod = useAppSelector(state => state.AI.activePod);
  const activeView = useAppSelector(state => state.AI.activeView);
  const dispatch = useAppDispatch();

  const handleChangeView = (view: IViewMetadata) => {
    dispatch(SET_ACTIVE_VIEW(view));
    // reset the chat options
    dispatch(SET_CHAT_ID(null));
    dispatch(SET_SIDEBAR_MESSAGE_ID(''));
    dispatch(SET_COMMENTARY(''));
    dispatch(SET_CHARTS(null));
    dispatch(SET_CHART_STATUS(null));
  };

  return (
    <div>
      {activePod && (
        <div className="md:w-full md:h-[50px] w-[110px] h-[30px] bg-[#FFFFFF] border border-[#D7D7D7] drop-shadow-sm rounded-[8px]">
          <select
            onChange={e => {
              const isExistView = activePod?.views?.find(
                view => view?.key === e.target.value
              );
              if (isExistView) {
                handleChangeView(isExistView);
              }
            }}
            value={activeView?.key}
            className="select md:select-md select-xs bg-[#F4F7FE] w-full lg:rounded-full rounded-[8px] focus:outline-none border-none text-[#718096]">
            {activePod?.views?.map(view => {
              return (
                <option key={view?.key} value={view?.key}>
                  {view?.title}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default ViewDropdown;
