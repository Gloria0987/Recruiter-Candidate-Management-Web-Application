import React,{Component} from 'react';
import {Modal, Button, Row,Col,Form} from 'react-bootstrap';

export class AddCandidateModal extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            candidate: {}
          };
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('An essay was submitted: ' + this.state.value);
          event.preventDefault();
        }
    render(){
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton className="bg-dark text-white text-center">
                        <Modal.Title id="contained-modal-title-vcenter" >
                             {this.props.candidate.Name}
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <h5 ><b>Work Experience</b></h5>
                        <h6 className="mt-3">Software Developer</h6>
                        <p><b>PesaPrint Limited </b> March 2019-Present</p>
                        <ul>
                            <li>Researching, designing, implementing and managing software programs</li>
                            <li>Testing and evaluating new programs</li>
                            <li>Identifying areas for modification in existing programs and subsequently developing these modifications</li>
                            <li>Writing and implementing efficient code</li>
                        </ul>
                        <form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Recruiter Comment Section</Form.Label>
                            <Form.Control as="textarea" rows={3} value={this.state.value} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>console.log(this.props.candidate)}>
                            Submit
                        </Button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" type="submit" value="Submit">Save</Button> */}
                   <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
    }
}
