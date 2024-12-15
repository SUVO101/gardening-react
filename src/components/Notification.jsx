// Noti.js
import { Store } from 'react-notifications-component';

const Notification = (title = "Wonderful!", description = "This is a notification message", type = "success") => {
  Store.addNotification({
    title: title,
    message: description,
    type: type,
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

export default Notification;
