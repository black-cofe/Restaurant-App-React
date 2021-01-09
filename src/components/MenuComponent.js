/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

// instead of props in RenderMenuItem(props) we just use JS properties as the parameter that are gonna come in as part of the JS object props 
    function RenderMenuItem( {dish} ) {

        return (
            <Card > 
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    // another way of defining functional component
    const Menu = (props) => {
        
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5  m-1">
                    <RenderMenuItem dish= {dish} />
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

            </div>
        );

    }


export default Menu;