import { Avatar } from "antd";
import React from "react";

const ChatPage: React.FC = () => {
  return (
    <div>
       <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const messages=[1, 2 , 3, 4]
  return <div>{messages.map((m:any) => <Message/>)}</div>;
};
const Message: React.FC = () => {
  const message= {
    url:'https://via.placeholder.com/3  0',
    author:'Dim',
    text:'Hello friends'
  }
  return <div style={{height:'400px', overflowY:'auto'}}>
    <img src={message.url}/>
    <b>{message.author}</b>
    <br/>
    {message.text}
    <hr/>

  </div>;
};
const AddMessageForm: React.FC = () => {
  return (
    <div>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>Send</button>
      </div>
    </div>
  );
};
export default ChatPage;
