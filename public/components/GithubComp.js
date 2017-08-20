import React from 'react';
import axios from 'axios';

export class GithubComp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        repoData: [],
        totalCommits: 0,
        readMe: {}
      };
    }

  componentDidMount() {
    axios.get('https://api.github.com/users/g-testo/repos')
      .then(res => {
        const repoData = res.data
        this.setState({ repoData });
    });

    axios.get('https://api.github.com/repos/g-testo/' + this.props.repoName + '/stats/contributors')
      .then(res => {
        var totalCommits = 0
        for(var i=0; i<res.data.length; i++){
          totalCommits += res.data[i].total
        }
        this.setState({ totalCommits });
    });

    axios.get('https://api.github.com/repos/g-testo/' + this.props.repoName + '/readme')
      .then(res => {
        const readMe = res.data
        this.setState({ readMe });
    });
  }

  render() {
    return (
      <ul className="githubContainer right">
        <li>Total Number of Commits: {this.state.totalCommits}</li>
        <li><a target="_blank" href={this.state.readMe.html_url}>Link to Read Me</a></li>
      </ul>
    )
  };
};

export default GithubComp;
