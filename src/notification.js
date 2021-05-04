import { store } from "react-notifications-component";

// css for react notifications:
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

const notificationHandler = () => {
  store.addNotification({
    title: "Hello!",
    message: currentUser.displayName + " has just joined in!",
    type: "info",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
  });
};

onClick = { notificationHandler };
