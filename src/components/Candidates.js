import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCandidateModal} from "./AddCandidateModal";
export class Candidates extends Component {
    constructor(props){
        super(props);
        this.state={deps:[],addModalShow:false, currentRow:{}}
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        this.setState({
            deps:[
           
            {"Id":1,"Name":"Gloria Kambua","YearsOfExperience":3,"JobTittle":"Front End Developer"},
            {"Id":2,"Name":"Sammy Wambua","YearsOfExperience":2,"JobTittle":"DevOps"},
            {"Id":3,"Name":"Isaac","YearsOfExperience":1,"JobTittle":"Software Engineer Intern"},
        ]
        })
    }
    render(){
        const{deps}= this.state;
        let addModalClose=()=> this.setState({addModalShow:false})
        return(
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Years Of Experience</th>
                    <th>JobTittle</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key={dep.Id}>
                        <td>{dep.Id}</td>
                        <td>{dep.Name}</td>
                        <td>{dep.YearsOfExperience}</td>
                        <td>{dep.JobTittle}</td>
                        <td><ButtonToolbar>
                            <Button  variant="primary" onClick={()=>{this.setState({addModalShow:true}); this.setState({currentRow: dep});}}> Check resume</Button>
                           
                        </ButtonToolbar></td>
                        </tr>)}
                </tbody>
            </Table>
            <AddCandidateModal show={this.state.addModalShow} onHide={addModalClose} candidate={this.state.currentRow}/>
            </div>
        )
    }
}