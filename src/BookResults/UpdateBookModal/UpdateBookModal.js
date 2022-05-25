import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

export default class UpdateBookModal extends Component {
    constructor(props){
        super(props)
        this.state ={
            isShow: false
        }
    }

    handelShow =() =>{
        this.setState({isShow: !this.state.isShow})
    }

     handleSubmit = (e) =>{
        let updateBook = {
            title: e.target.updateTitle.value || this.props.displayedBook.title,
            description: e.target.updateDes.value || this.props.displayedBook.description,
            _id: this.props.displayedBook._id,
            __v: this.props.displayedBook.__v
        }
        console.log(updateBook);
        this.props.updateBook(updateBook);
    }
  render() {
    return (
        <>
        <Button onClick={this.handelShow}>
            Update
        </Button>
        <Modal show={this.state.isShow} onHide={this.handelShow}>
            <Form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="m-4" controlId='updateTitle'>
                    <Form.Label>Book title</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Group className="m-4" controlId='updateDes'>
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handelShow}>Close</Button>
                <Button type='submit'>Update book</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
  }
}
