import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
  
export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav>
                    <Nav.Link to='/' as = {Link}>Активные заказы</Nav.Link>
                    <Nav.Link to='/clients' as = {Link}>Клиенты</Nav.Link>
                    <Nav.Link to='/tools' as = {Link}>Инструменты</Nav.Link>
                    <Nav.Link to='/rigs' as = {Link}>Rigs</Nav.Link>
                    <Nav.Link to='/consumables' as = {Link}>Consumables</Nav.Link>
                    <Nav.Link to='/maintain' as = {Link}>Обслуживание</Nav.Link>
                    <Nav.Link to='/discounts' as = {Link}>Discounts</Nav.Link>
                    <Nav.Link to='/inventory' as = {Link}>Inventory</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}