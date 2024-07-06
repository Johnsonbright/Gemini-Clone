import React, { useContext } from "react";
import "./Main.css";
import user from "../../assets/user.jpg";
import compass from "../../assets/compass.png";
import bulb from "../../assets/bulb.jpg";
import message from "../../assets/message.png";
import code from "../../assets/code.jpg";
import gallery from "../../assets/gallery.jpg";
import mic from "../../assets/mic.jpg";
import send from "../../assets/send.jpg";
import gemini from "../../assets/gemini.png";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={user} alt="user" className="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={compass} alt="compass" className="compass" />
              </div>
              <div className="card">
                <p>Brainstorm team bondign activities for our work retreat</p>
                <img src={bulb} alt="bulb" className="bulb" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={message} alt="message" className="message" />
              </div>
              <div className="card">
                <p>Suggest beautiful to see on an upcoming road trip</p>
                <img src={code} alt="code" className="code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={user} style={{width:'40px'}} alt="code" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={gemini} alt="gemini" />
              {loading?
               <div className="loader">
              <hr />
              <hr />
              <hr />
              </div>
             : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={gallery} alt="gallery" />
              <img src={mic} alt="mic" />
             {input? <img
                onClick={() => onSent()}
                src={send}
                alt="send"
                style={{ width: "3rem" }}
              />: null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate Info, including about people, so
            double-check its responses. Your privacy & Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
