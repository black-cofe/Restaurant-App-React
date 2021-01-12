/* eslint-disable no-useless-constructor */
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


// instead of props in RenderMenuItem(props) we just use JS properties as the parameter that are gonna come in as part of the JS object props 
    function RenderMenuItem( {dish} ) {

        return (
            <Card >
                <Link to={`/menu/${dish.id}`}> 
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    // another way of defining functional component
    const Menu = (props) => {
        
        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5  m-1">
                    <RenderMenuItem dish= {dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

    }


export default Menu;