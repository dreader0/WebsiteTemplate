import React from 'react';

class WorkTermOneBlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      sortBy: "ASC"
    };

    this.seePosts = this.seePosts.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  async componentDidMount() {
    let response = await getPostData(this.state.sortBy);
    console.log(response);
    await this.setState({ posts: response });
  }

  changeSort = async (e) => {
    console.log(e.target.value);
    await this.setState({sortBy: e.target.value});
    await this.seePosts();
  }

  seePosts = async (e) => {
    let response = await getPostData(this.state.sortBy);
    console.log(response);
    this.setState({ posts: response });
  }

  render() {
    return (
      <div className="tabContent">
        <h3 className="title">
          Jr. Systems Developer
        </h3>
        <p className="placement">
          The Co-operators
        </p>

        <select onChange={this.changeSort}>
          <option value="ASC">
            Oldest to Newest
          </option>
          <option value="DESC">
            Newest to Oldest
          </option>
        </select>

            { this.state.posts.length > 0 &&
                this.state.posts.map((item, i) => 
                  <div className="PostDiv" key={i}>
                    <h3 className="postTitle" >{item.post_title}</h3>
                    <p>Added: {item.posted_date}</p>
                    <p className="PostDiv">{item.post_description}</p>
                  </div>
                )
            }
            
    </div>
    );
  }
}


async function getPostData(order) {
  let data = {};
  let mySettings = [];
  mySettings.order = order;
  mySettings.timeframe = "";
  console.log(mySettings);

  await (async () => {
    const rawResponse = await fetch('/api/v1/getPosts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mySettings)
    });
    data = await rawResponse.json();
  })();

    return data;
}


export default WorkTermOneBlogForm;
