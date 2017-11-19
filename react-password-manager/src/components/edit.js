import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    editData,
    fetchOne
} from '../actions/index'

class Main extends Component {
    constructor(props) {
        super()
        this.state = {
            password: '',
            username: '',
            URL: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.editData(this.state,this.props.match.params.id)
    }

    render() {
        console.log(this.props.detail, 'render')
        const { URL,username,password } = this.state
        return (
            <div><table>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                username
                            </th>
                            <th>
                                password
                            </th>
                            <th>
                                url
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                {this.props.detail !== undefined ?
                        <tr>
                            <td>{ this.props.detail.id }</td>
                            <td>{ this.props.detail.username }</td>
                            <td>{ this.props.detail.password }</td>
                            <td>{ this.props.detail.URL }</td>
                        </tr>
                         :
                <tr>
                    <td>loading</td>
                </tr>
                }
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
                <label>
                  URL:
                  <input name="URL" type="text" value={URL} onChange={this.handleChange} />
                  <br/>
                  Username:
                  <input name="username" type="text" value={username} onChange={this.handleChange}/>
                  <br/>
                  Password:
                  <input name="password" type="password" value={password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    componentWillMount() {
        // console.log(this.props)
        this.props.fetchOne(this.props.match.params.id)
        console.log(this.props, 'setelah')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editData: (data, id) => dispatch(editData(data, id)),
        fetchOne: (id) => dispatch(fetchOne(id))
    }
}

const maptStateToProps = (state) => {
    return {
        detail : state.detail
    }
}

var ConnectedComponent = connect(
    maptStateToProps, mapDispatchToProps
)(Main)

export default ConnectedComponent