import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';  


function RenderDish({dish}) {

        if (dish!=null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>                
            )            
        }
        else {
            return(
                <div></div>
            )
        }
    }

function RenderComments({comments}) {


    let data = comments.map((user) => {
        
        return (
            <ul key={user.id} className="list-unstyled ">
                <li> {user.comment} </li> <br />
                <li> {"-- " + user.author + " " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(user.date)))} </li> <br />
            </ul>
        )
    });

    return data;
     
    }


    const DishDetail = (props) => {
    
        if (props.dish != null) {

            return (

                <div className = "container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1 text-left">
                        <h4>Comments</h4>
                        <RenderComments comments = {props.dish.comments} />   
                    </div>
                </div>    
            </div>
    
            );
        }

        else {
            return (
                <div></div>
            );
        }
    
    } 
        


export default DishDetail;