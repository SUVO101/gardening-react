// Noti.js
import { Store } from 'react-notifications-component';
import React from 'react';
import Notification from '../components/Notification';

const Noti = () => {
  const notification = (title,description,type) => {
    Store.addNotification({
      title: "Wonderful!",
      message: "This is a notification message",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  };

  return (
    <div>
      <button onClick={notification}>Click me for notification</button>
      <button onClick={()=>Notification("abc","desc","danger")}>Click me for notification</button>
    </div>
  );
};

export default Noti;
