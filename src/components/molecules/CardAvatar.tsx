import React from "react";
import CardAvatarImage from "../atoms/CardAvatarImage";
import avatar from "@/assets/avatar.png";
import country from "@/assets/country.png";
import CountryImage from "../atoms/CountryImage";

const CardAvatar = () => {
  return (
    <div className="relative">
      <CardAvatarImage src={avatar} />
      <CountryImage src={country} />
    </div>
  );
};

export default CardAvatar;
