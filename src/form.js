import React from 'react'
import './form.css'
import Select from 'react-select'
const District = [
    { value: 'Madurai', label: 'Madurai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' }
]
const Block = [
    { value: 'Andimadam', label: 'Andimadam' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' }
]
const Panchayat = [
    { value: 'Alagapuram', label: 'Alagapuram' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' }
]
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            name: '',
            groupname: '',
            groupaddress: ''
        }
        this.submitFunc = this.submitFunc.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submitFunc = () => {
        if (this.state.phone === '' || this.state.name === '' || this.state.groupname === '' || this.state.groupaddress === '') {
            alert("EMPTY FIELDS IN FORM")
        }
    }
    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                <div style={{ clear: "both", padding: "2%" }}>
                    <h4 style={{ float: "left" }}>Basic Details</h4>
                    <h4 style={{ position: "fixed", left: "51%" }}>Location</h4>
                </div>
                <form className="form">
                    <div className='splitScreen'>
                        <div className='leftPane'>
                            <div className="lefthalf">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number</label>
                                    <input name="phone" onChange={this.handleChange} value={this.state.phone} type="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+91 9600621275"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Enterprise Group Name</label>
                                    <input name="groupname" onChange={this.handleChange} value={this.state.groupname} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                            </div>
                            <div className="righthalf">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input name="name" onChange={this.handleChange} value={this.state.name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <label>Enterprise Group Address</label>
                                <textarea name="groupaddress" onChange={this.handleChange} value={this.state.groupaddress} class="form-control" aria-label="With textarea" rows='5' cols='20'></textarea>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='rightPane'>
                            <div className="lefthalf">
                                <label>Disrtict</label><br></br>
                                <Select options={District} defaultInputValue="Madurai"></Select>
                                <label>Panchayat</label><br></br>
                                <Select options={Panchayat} defaultInputValue="Alagapuram"></Select>
                            </div>
                            <div className="righthalf">
                                <label>Block</label><br></br>
                                <Select options={Block} defaultInputValue="Andimadam"></Select>
                            </div>
                        </div>
                    </div>
                </form>
                <footer className="footer">
                    <hr className="foot"></hr>
                    <span className="updates"><i class="bi bi-check-circle-fill"></i>All updates saved as drafts</span>
                    <div className="buttons">
                        <button type="button" class="btn btn-outline-secondary" onClick={this.submitFunc}>Previous</button>
                        <button type="button" class="btn btn-success" onClick={this.submitFunc}>Next</button>
                    </div>
                </footer>
            </div>
        )
    }
}
export default MyForm