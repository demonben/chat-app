import { AuthContext } from "context/AuthContex";
import { useContext } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const authContex = useContext(AuthContext);
  const { logout, authUser } = authContex;

  return (
    <div>
      <div className={styles.Navbar}>
        <h3>Chat</h3>
        <div className={styles.UserIcon}>
          {authUser.displayName.substring(0, 1)}
        </div>
        <button className={styles.LogOutButton} onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
