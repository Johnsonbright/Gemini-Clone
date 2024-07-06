import React, { useState, useContext } from "react";
import "./Sidebar.css";
import menu from "../../assets/menu.png";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";
import history from "../../assets/history.png";
import setting from "../../assets/setting.png";
import question from "../../assets/question.png";
import { Context } from "../../Context/Context";

export const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

const loadPrompt = async (prompt) => {
  setRecentPrompt(prompt)
  await onSent(prompt)
}

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={menu}
          alt="menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={plus} alt="plus" className="plus" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={message} alt="" className="message" />
                  <p>{item.slice(0,15)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={question} alt="question" className="question" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={history} alt="history" className="history" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={setting} alt="setting" className="setting" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
