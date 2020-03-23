import React from 'react';

import ProfileImage from 'components/profileImage';
import ProfileBio from 'components/bio';
import ProfileHeader from 'components/headers';
import RepoInformations from 'components/repoInformations';

import 'styles/screens/resumeGUI.css';

const ResumeGUI: React.FC = () => {
  return (
    <div>
      <div className="user">
        <ProfileImage />
        <ProfileBio />
      </div>
      <ProfileHeader />
      <RepoInformations />

    </div>
  );
};

export default ResumeGUI;
