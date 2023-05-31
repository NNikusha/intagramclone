import React from "react";
import "./Sugesstions.css";
import SuggestLine from "../SuggestLine/SuggestLine";
import UserSuggest from "../UserSuggest/UserSuggest";

const Sugesstions = () => {
  return (
    <div className="suggestions">
      <UserSuggest />
      <div className="suggestions__title">
        <div>Suggestions for you</div>
        <div className="see_all">See All</div>
      </div>
      <SuggestLine />
      <SuggestLine />
      <SuggestLine />
      <SuggestLine />
      <SuggestLine />
      <SuggestLine />
    </div>
  );
};

export default Sugesstions;
