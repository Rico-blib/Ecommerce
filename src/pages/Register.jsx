import React, { Component } from "react";

export default class Register extends Component {
  state = {
    first: "",
    last: "",
    username: "",
    pass: "",
    confirm: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%] ">
          <text className="text-2xl">Register</text>
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="first name"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              value={this.state.first}
              onChange={this.handleChange}
              name="first"
            />

            <input
              type="text"
              placeholder="last name"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3"
              value={this.state.last}
              onChange={this.handleChange}
              name="last"
            />
          </div>

          <div className="flex mt-3">
            <input
              type="text"
              placeholder="username"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              value={this.state.pass}
              onChange={this.handleChange}
              name="pass"
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3"
              value={this.state.confirm}
              onChange={this.handleChange}
              name="confirm"
              required
            />
          </div>
          <input
            type="button"
            value="Register"
            className="btn mt-7 hover:scale-[1.02]"
          />
        </div>
      </div>
    );
  }
}
