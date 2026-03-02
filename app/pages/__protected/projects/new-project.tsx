import { Form } from "react-bootstrap";
import ProtectedRoute from "~/hooks/protected-route";
import styles from "./new-project.module.css";
import { useState } from "react";

export default function NewProjectPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manager, setManager] = useState("");
  const [team, setTeam] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch("http://10.0.0.45/api/v1/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          manager,
          team,
          startDate,
          deadline,
        }),
        credentials: "include"
      });
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }


  return (
    // <ProtectedRoute>
      <div id={styles["new-project-main"]}>
        <h1>New Project</h1>
        <p>This is the New Project page. Here you can create a new project.</p>
        <Form>
          <Form.Group id={styles["projectName"]} controlId="projectName">
            <Form.Label className={styles.formLabel}>Project Name</Form.Label>
            <Form.Control className={styles.formInput} type="text"  />
          </Form.Group>
          <Form.Group id={styles["projectDescription"]} controlId="projectDescription">
            <Form.Label className={styles.formLabel}>Project Description</Form.Label>
            <Form.Control className={styles.formInput} as="textarea" rows={3}  />
          </Form.Group>
          <Form.Group id={styles["projectManager"]} controlId="projectManager">
            <Form.Label className={styles.formLabel}>Project Manager</Form.Label>
            <Form.Control className={styles.formInput} type="text"  />
          </Form.Group>
          <Form.Group id={styles["projectTeam"]} controlId="projectTeam"> 
            <Form.Label className={styles.formLabel}>Project Team</Form.Label>  
            <Form.Control className={styles.formInput} type="text"  />
          </Form.Group>
          <Form.Group id={styles["projectStartDate"]} controlId="projectStartDate">
            <Form.Label className={styles.formLabel}>Project Start Date</Form.Label>
            <Form.Control className={styles.formInput} type="date" />
          </Form.Group>
          <Form.Group id={styles["projectDeadline"]} controlId="projectDeadline">
            <Form.Label className={styles.formLabel}>Project Deadline</Form.Label>
            <Form.Control className={styles.formInput} type="date" />
          </Form.Group>
          <button className={styles.submitButton} type="submit">Create Project</button>
        </Form>
      </div>
    // </ProtectedRoute>
  );
}
