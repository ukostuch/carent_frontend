import { useMemo } from "react";
import { useRouter } from "next/router";
import styles from "./UserHeaderFrame.module.css";

const UserHeaderFrame = ({
  myUsername,
  userHeaderFrameRight,
  userHeaderFrameWidth,
  userHeaderFrameHeight,
  userLogoTop,
  userLogoRight,
  loggedInTop,
  loggedInRight,
  myUsernameTop,
  myUsernameLeft,
  myUsernameFontFamily,
  myUsernameWidth,
  myUsernameHeight,
  myUsernameRight,
}) => {
  const router = useRouter();

  const loginHeaderFrameStyle = useMemo(() => {
    return {
      right: userHeaderFrameRight,
      width: userHeaderFrameWidth,
      height: userHeaderFrameHeight,
    };
  }, [userHeaderFrameRight, userHeaderFrameWidth, userHeaderFrameHeight]);

  const userLogoStyle = useMemo(() => {
    return {
      top: userLogoTop,
      right: userLogoRight,
    };
  }, [userLogoTop, userLogoRight]);

  const loggedInStyle = useMemo(() => {
    return {
      top: loggedInTop,
      right: loggedInRight,
    };
  }, [loggedInTop, loggedInRight]);

  const myUsernameStyle = useMemo(() => {
    return {
      top: myUsernameTop,
      left: myUsernameLeft,
      fontFamily: myUsernameFontFamily,
      width: myUsernameWidth,
      height: myUsernameHeight,
      right: myUsernameRight,
    };
  }, [
    myUsernameTop,
    myUsernameLeft,
    myUsernameFontFamily,
    myUsernameWidth,
    myUsernameHeight,
    myUsernameRight,
  ]);

  const handleUserLogoClick = () => {
    router.push({
      pathname: "/User1",
      query: { myUsername },
    });
  };

  return (
    <div className={styles.loginHeaderFrame} style={loginHeaderFrameStyle}>
      <button
        className={styles.userLogo}
        style={userLogoStyle}
        onClick={handleUserLogoClick}
      />
      <b className={styles.loggedIn} style={loggedInStyle}>
        Logged in
      </b>
      <div className={styles.myUsername} style={myUsernameStyle}>
        {myUsername}
      </div>
    </div>
  );
};

export default UserHeaderFrame;