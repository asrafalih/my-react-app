import React from "react";

interface IProps {
  username: string;
}

interface IState {
  userData: any;
}

export default class RestApiExample extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  async componentDidMount() {
    const { username } = this.props;
    const githubUrl = `https://api.github.com/users/${username}`;
    const response = await fetch(githubUrl);
    const userData = await response.json();
    console.log(userData);
    this.setState({ userData });
  }
  render() {
    const { userData } = this.state;
    return (
      <>
        {userData && userData.login && (
          <div style={{ padding: "10px" }}>
            <img src={userData.avatar_url} width={100} alt={userData.login} />
            <br />
            <b>User ID:</b> {userData.login} <br />
            <b>User Name:</b> {userData.name} <br />
            <b>Company Name:</b> {userData.company} <br />
            <b>Location:</b> {userData.location} <br />
            <b>Bio:</b> {userData.bio}
            <br />
            <b>Public Repos:</b> {userData.public_repos} <br />
            <b>Followers:</b> {userData.followers} <br />
            <b>Following:</b> {userData.following} <br />
            <b>Twitter ID:</b> {userData.twitter_username} <br />
            <b>URL:</b> <a href={userData.html_url}>{userData.html_url}</a>{" "}
            <br />
          </div>
        )}
        {userData && userData.message && (
          <span style={{ color: "red", fontWeight: "bold" }}>
            Invalid username: {this.props.username}
          </span>
        )}
      </>
    );
  }
}
