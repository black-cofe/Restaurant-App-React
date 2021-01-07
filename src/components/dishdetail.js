import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';  

class DishDetail extends Component {


    renderDish(dish) {
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

    renderComments(play) {

        if (play!=null) {

            let data = play.comments.map((user) => {
                
                return (
                    <ul key={user.id} className="list-unstyled ">
                        <li> {user.comment} </li> <br />
                        <li> {"-- " + user.author + " " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(user.date)))} </li> <br />
                    </ul>
                )
            });
            return data;
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {

        const comment = this.renderComments(this.props.play);

       return (
            <div className = "container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.play)}
                    </div>
                    <div className="col-12 col-md-5 m-1 text-left">
                        <h4>Comments</h4>
                        {comment}   
                    </div>
                </div>    
            </div>
       )
        
    };
};

export default DishDetail;