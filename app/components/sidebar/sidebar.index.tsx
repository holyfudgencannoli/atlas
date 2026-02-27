import { Button, NavLink } from 'react-bootstrap';
import '../../app.css'
import styles from './sidebar.module.css'
import { useState } from 'react';
import { useAuth } from '~/hooks/auth-context';
import { useNavigate } from 'react-router';

export default function Sidebar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const { logout, sessionId } = useAuth();
  const navigate = useNavigate();

  return (
    <aside id={styles["sidebar-main"]}>
      <div id={styles["sidebar-content"]}>
        <a href="/" id={styles["logo"]}>
        <Button className={styles.sidebarBtn} onClick={() => navigate(-1)}>
          Go Back
        </Button>
          <h1> Atlas</h1>        
        </a>
        <Button className={styles.sidebarBtn} onClick={() => setProjectsOpen(!projectsOpen)}>
          Projects
        </Button>
        {projectsOpen && (
          <>
            <NavLink className={styles.navLink} href="/app/projects/new">Plan New Project</NavLink>
            <NavLink className={styles.navLink} href="/app/projects/manage">Manage Current Projects</NavLink>
            <NavLink className={styles.navLink} href="/app/projects/">View Project History</NavLink>
          </>
        )}
        
        <Button className={styles.sidebarBtn} onClick={() => setMembersOpen(!membersOpen)}>
          Members
        </Button>
        {membersOpen && (
          <>
            <NavLink className={styles.navLink} href="/">Members</NavLink>
          </>
        )}
        <Button className={styles.sidebarBtn} onClick={() => setAccountOpen(!accountOpen)}>
          Account
        </Button>
        {accountOpen && (
          <>
            <NavLink className={styles.navLink} href="/">Account</NavLink>
            <Button className={styles.navLink} onClick={(e) => {
              e.preventDefault();
              logout(sessionId)
            }}>
              Logout
            </Button>
          </>
        )}
        <Button className={styles.sidebarBtn} onClick={() => setSupportOpen(!supportOpen)}>
          Support
        </Button>
        {supportOpen && (
          <>
            <NavLink className={styles.navLink} href="/pricing">Support</NavLink>
          </>
        )}
      </div>
    </aside>
  );
}