/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';  
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import CommentForm from './CommentForm';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
// const isNumber = (val) => !isNaN(Number(val));

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      
    handleSubmit(values) {

        console.log('Current State is: ' + JSON.stringify(values)); 
        alert('Current State is: ' + JSON.stringify(values));
    }


    render() {
        return (

            <Button outline color="primary" onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"> </span>  Submit Comment
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>                        
                            <Row className="form-group">              
                                <Label htmlFor="ratings" md={10}> Rating </Label>
                                <Col md={10}>
                                    <Control.select model=".contactType" id= "ratings"name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">

                                <Label htmlFor="firstname" md={10}>Your Name</Label>                              
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={10}> Comment </Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary" onClick={this.toggleModal}>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>    
                    </ModalBody>
            </Modal>
            </Button>
        );
    }

}

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


    const data = comments.map((user) => {
        
        return (
            <ul key={user.id} className="list-unstyled ">
                <li> {user.comment} </li> <br />
                <li> {"-- " + user.author + " " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(user.date)))} </li> 
            </ul>
        )
    });

    return (
        
        <div className="text-left">
            <h4> Comments </h4>
            {data}
            <CommentForm />
        </div>
    );
 
}


const DishDetail = (props) => {

    if (props.dish != null) {

        return (

            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
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