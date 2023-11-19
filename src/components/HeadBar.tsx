import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { headbar, setRoute } from "../features/headbar/HeadBarSlice";
import { useLocation } from "react-router";
import { useEffect } from "react";

const HeadBar = () => {
    const dispatch = useAppDispatch();
    const route = useAppSelector(headbar);
    const location = useLocation();
    useEffect(() => {
        dispatch(setRoute(location.pathname))
    }, [])

    return (
        <>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand href="/">Penjualan Baju</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className={route === "/" ? "active" : ""}
                                href="/"
                            >
                                Home
                            </Nav.Link>
                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    href="/kaos"
                                    className={route === "/kaos" ? "active" : ""}
                                >
                                    Baju
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/kemeja"
                                    className={route === "/kemeja" ? "active" : ""}
                                >
                                    Kemeja
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/celana"
                                    className={route === "/celana" ? "active" : ""}
                                >
                                    Celana
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link
                                className={route === "/data" ? "active" : ""}
                                href="/data"
                            >
                                Data Penjualan
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeadBar;
