import { Link } from "react-router-dom"

import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/withRedux">TodoList with Redux</Link>
          <Link to="/withRTQuery">TodoList With RTK Query</Link>
        </nav>
    )
}