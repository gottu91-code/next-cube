import Container from "/components/container"
import Logo from "./logo"
import Nav from "/components/nav"
import styles from '/styles/header.module.css'

export default function Headers() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}