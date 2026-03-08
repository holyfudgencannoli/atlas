import { NavLink } from "react-bootstrap";
import '../../app.css'
import styles from './login.module.css'

export default function LoginPage() {

  return (
    <div id={styles['loginPageMain']}>
      <h1>Login Page</h1>
      <p>This product is currently under construction. Check back later for updates.</p>
      <NavLink href="/">Go back to Home</NavLink> 
    </div>
  );
}