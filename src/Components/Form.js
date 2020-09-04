
import React, { Component } from 'react';


class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            breed: '',
            birthday: '',
            gender: 'select',
            spayed: 'select',
            weight: 'select',
            userInfo: {}

        }
    }
    //pass userInfo from Form component to App component through state lift up

    handlerNameChange = (event) => {
        this.setState({
            name: event.target.value
        }

        )
    }
    handlerBreedChange = (event) => {
        this.setState({
            breed: event.target.value
        }
        )
    };
    handlerBirthdayChange = (event) => {
        this.setState({
            birthday: event.target.value
        })
    };
    handlerGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handlerSpayedChange = (event) => {
        this.setState({
            spayed: event.target.value,
        })
    }
    handlerWeightChange = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
    formvalidation() {
        return true
    }

    handleSubmit = (event) => {
        //alert(` username:${this.state.usename},password:******`)
        event.preventDefault();
        //Form Checking
        //    let isFormValid = this.formvalidation()

        let userInfo = {
            name: this.state.name,
            breed: this.state.breed,
            birthday: this.state.birthday,
            gender: this.state.gender,
            spayed: this.state.spayed,
            weight: this.state.weight
        }
        this.props.state.handleSubmit(userInfo)
        console.log("user info" + userInfo)
        // isFormValid && this.setState({showUsers:true})
        // isFormValid && this.setState({ userInfo: userInfo })
    }

    render() {
        return (
            <React.Fragment>
                <form className="signup" onSubmit={this.state.handleSubmit}>
                    <div className='forms'>
                        <p className="title"> yay ,we love dogs!!</p>
                        <p className="title"> give us the basics about your pup</p>

                        <div className="name">
                            <div>
                                <label>Name</label>
                            </div>
                            <div >
                                <input className='text' type="text" value={this.state.name}
                                    onChange={this.handlerNameChange} />
                            </div>
                        </div>
                        <div>
                            <label> Breed </label>
                        </div>
                        <div className='brd'>
                            <input className='text' type='text' value={this.state.breed}
                                onChange={this.handlerBreedChange} />
                        </div>

                        <div className="BD">
                            <div>
                                <label> Birthday</label>
                            </div>
                            <div >
                                <input name="birthday" className='text' type="text" value={this.state.birthday}
                                    onChange={this.handlerBirthdayChange} />
                            </div>
                        </div>
                        <div className="gender">
                            <div> <label className="text">select gender</label></div>
                            <select id="selectbtn" onChange={this.handlerGenderChange} value={this.state.gender}>
                                <option value="select"> select</option>
                                <option value="female"> female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <div >
                            </div>
                        </div>

                        <div className="spayed">
                            <div> <label className="text">spayed or Neutered</label></div>
                            <select id="selectbtn" onChange={this.handlerSpayedChange} value={this.state.spayed}>
                                <option value="select">select</option>
                                <option value="yes"> yes</option>
                                <option value="no">no</option>
                            </select>
                            <div >
                            </div>
                        </div>

                        <div className="Weight">
                            <div> <label className="text">select weight</label></div>
                            <select id="selectbtn" onChange={this.handlerWeightChange} value={this.state.weight}>
                                <option value="select"> select</option>
                                <option value="female"> 0.25lbs</option>
                                <option value="male">25-50lbs</option>
                                <option value="other">50-100lbs</option>
                                <option value="other">100+lbs</option>

                            </select>
                            <div >
                            </div>
                        </div>
                         <div className="buttons">
                         <div className="backbtn">
                            <button className='subbtn' type="submit">back</button>
                        </div>
                        <div className="nextbtn">
                            <button className='subbtn' type="submit"> next</button>
                        </div>

                        
                    </div>
                    </div>
                </form>
                {/* {this.state.showUsers && <User formData={this.state.userInfo} />} */}
            </React.Fragment>
        );
    }
}

export default UserForm;