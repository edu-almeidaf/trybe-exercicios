import React from "react";
import Image from "./Image";

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User Avatar" />
      </div>
    );
  }
}

export default UserProfile;