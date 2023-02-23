import React from "react";

import BoardData from "../../data/BoardData";
import feedData from '../../data/feedData';

import TopicIcon from '@mui/icons-material/Topic';
import BoardsIcon from '@mui/icons-material/DashboardCustomize';
import FavouriteIcon from '@mui/icons-material/StarOutlined';

import "./FeedFilter.css";

const FeedFilter = ( { selectedOption, setSelectedOption }) => {
  return (

    <div className="feedFilter">
        <div className="tabs">
          <div className="tabInfo">
            <h4>Feeds</h4>
            <TopicIcon />
          </div>
          <div className = "Tabs">
            {
              feedData.map( (option, index) => {
                return (
                  <div 
                    className = {selectedOption.name === option.name ? "feedOption isActive" : "feedOption"}
                    onClick = {() => setSelectedOption({ type : "feed", ...option})}
                    key={index}
                  >
                    <option.icon />
                    <h5>{option.name}</h5>
                  </div>
                )
              })

            }
          </div>
        </div>

      <div className = "hl"></div>

      <div className = "tabs">
        <div className = "tabInfo">
          <h4>Boards</h4>
          <BoardsIcon />
        </div>

        <div className="Tabs">
          {
            BoardData.map((board, index) => {
              return (
                <div
                  className ={selectedOption.name === board.name ? "boardOption isActive" : "boardOption"}
                  onClick = {() => setSelectedOption({ type : "board", ...board})}
                  key={index}
                >
                  <div className="left">
                    { <board.icon /> }
                    <h5> { board.name} </h5>
                  </div>
                  {board.followed && <FavouriteIcon />}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default FeedFilter;
