import React, { Component } from 'react'
import {Form, Button, Modal} from 'react-bootstrap'

export default class BookFormModal extends Component {
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
        this.props.onCreate({
            title: e.target.formBookTitle.value,
            description: e.target.formBookDes.value
        })
    }

    render() {
    return (
        <>
        <Button onClick={this.handelShow}>
            Add a book!
        </Button>
        <Modal show={this.state.isShow} onHide={this.handelShow}>
            <Form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Enter the book title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="m-4" controlId='formBookTitle'>
                    <Form.Label>Book title</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Group className="m-4" controlId='formBookDes'>
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handelShow}>Close</Button>
                <Button type='submit'>Add book</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
    }
}
