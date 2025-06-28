import React from 'react';
import { GetStarted } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';

const GetStartedPage = () => {
  const userId = localStorage.getItem('userId') || questConfig.USER_ID;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <GetStarted
          questId={questConfig.GET_STARTED_QUESTID}
          uniqueUserId={userId}
          accent={questConfig.PRIMARY_COLOR}
          autoHide={false}
        >
          <GetStarted.Header />
          <GetStarted.Progress />
          <GetStarted.Content />
          <GetStarted.Footer />
        </GetStarted>
      </div>
    </div>
  );
};

export default GetStartedPage;