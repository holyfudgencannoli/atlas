import { useState } from "react";
import { Button, Form, InputGroup, NavLink } from "react-bootstrap";
import '../../app.css'
import styles from './login.module.css'
import { useAuth } from "~/hooks/auth-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{ login } = useAuth();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.preventDefault();
    
    await login(email, password);

  };

  return (
    <div id={styles['loginPageMain']}>
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      <div id={styles['loginContainer']}>
        <Form id={styles['loginForm']}>
          <InputGroup className={styles.inputGroup}>
            <Form.Label htmlFor="email" className={styles.loginFormLabel}>Email</Form.Label>
            <Form.Control 
              className={styles.loginFormControl}
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label htmlFor="password" className={styles.loginFormLabel}>Password</Form.Label>
            <Form.Control 
              className={styles.loginFormControl}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink className={styles.createAccountLink} href="/create-account">Don't have an account? Create one here.</NavLink>
            <Button className={styles.loginBtn} onClick={(e) => onSubmit(e)}>Submit</Button>
          </InputGroup>
        </Form>
      </div>

    </div>
  );
}