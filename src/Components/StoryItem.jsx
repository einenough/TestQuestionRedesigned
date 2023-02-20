import React from "react";
import styled from "styled-components";

const StoryItem = ({
  setStoriesVisible,
  storiesVisible,
  item,
  openWindow,
  setOpenWindow,
}) => {
  return (
    <div
      className={`stories ${storiesVisible === item.id && "open"}`}
      onClick={() => setStoriesVisible(item.id)}
    >
      <button className="together">
        <p className="footer_btn">{item.name}</p>
        <BorderBtn color={item.indicator} />
      </button>
      {storiesVisible === item.id && (
        <div
          className="content_story"
          onClick={() => setOpenWindow(openWindow(true))}
        >
          <h1 className="h_story">{item.title}</h1>
          <p className="p_story">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default StoryItem;
