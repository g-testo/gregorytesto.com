import React from 'react';
import axios from 'axios';

export class GithubComp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        repoData: [],
        commits: []
      };
    }

  componentDidMount() {
    axios.get('https://api.github.com/users/g-testo/repos')
      .then(res => {
        const repoData = res.data
        this.setState({ repoData });
    });

    axios.get('https://api.github.com/repos/g-testo/' + this.props.repoName + '/commits')
      .then(res => {
        const commits = res.data
        this.setState({ commits });
    });
  }


  render() {
    return (
      <div className="githubContainer right">
        <h2>{this.state.commits.length}</h2>
        <h3>{this.state.repoData.length}</h3>
        <h3>GitHub Modal Summary</h3>
      </div>
    )
  };
};

export default GithubComp;
