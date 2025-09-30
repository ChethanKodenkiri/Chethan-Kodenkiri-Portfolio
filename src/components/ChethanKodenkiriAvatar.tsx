import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import chethanImg from '../assets/chethankodenkiri.jpg';

const ChethanKodenkiriAvatar: React.FC = () => {
  return (
    <Avatar>
      <AvatarImage src={chethanImg} alt="Chethan Kodenkiri" />
      <AvatarFallback>CK</AvatarFallback>
    </Avatar>
  );
};

export default ChethanKodenkiriAvatar;
