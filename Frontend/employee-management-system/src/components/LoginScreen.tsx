import { FunctionComponent } from "react";
import styles from "./LoginScreen.module.css";

const LoginScreen: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.maskGroup}>
        <section className={styles.dashboardLogin}>
          <h1 className={styles.employeeManagementSystem}>
            Employee Management System
          </h1>
          <div className={styles.employeeMgmtSysFrame}>
            <div className={styles.usernamePasswordFrame}>
              <div className={styles.loginButton}>
                <button type="button" className={styles.loginBtn}>LOGIN</button>
                <div className={styles.forgotPassword}>Forgot password?</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginScreen;
