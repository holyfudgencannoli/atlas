import { Button, Form } from "react-bootstrap";
import styles from "./create-account.module.css";
import { useState } from "react";
import { useAuth } from "~/hooks/auth-context";

export default function CreateAccountPage({ data }: { data: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => { 
      e.preventDefault();
      if (email.length === 0 || password.length === 0) {
        alert("Please fill in all fields");
        return;
      }
      
      try {
        const res = await fetch("http://localhost:8787/api/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error("Failed to create account");
        }
        const data = await res.json();
        console.log("Account created successfully:", data);
      } catch (error) {
        console.error("Error creating account:", error);
      }
    };

  return (
    <div id={styles['create-account-page-main']}>
      <Form id={styles['create-account-form']}>
        <h1>{data.data.lol}</h1>
        <h1>{data.data.ttyl}</h1>
        <Form.Group
          className={styles["create-account-form-group"]}
          controlId="formGroupEmail"
        >
          <Form.Label 
            className={styles["create-account-form-label"]}
            htmlFor="formGroupEmail"
          >
            Email address
          </Form.Label>
          <Form.Control 
            className={styles["create-account-form-control"]}
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </Form.Group>
        <Form.Group 
          className={styles["create-account-form-group"]}
          controlId="formGroupPassword"
        >
          <Form.Label 
            htmlFor="formGroupPassword"
            className={styles["create-account-form-label"]}
          >
            Password
          </Form.Label>
          <Form.Control 
            className={styles["create-account-form-control"]}
            placeholder="Password" 
            autoComplete="new-password"
            isValid={password.length >= 8}
            isInvalid={password.length > 0 && password.length < 8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className={styles["create-account-btn"]} onClick={(e) => onSubmit(e)}>
          Create Account
        </Button>
      </Form>
    </div>
  );
}
