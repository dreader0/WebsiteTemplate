import React from 'react';

class WorkTermOneBlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.seePosts = this.seePosts.bind(this);
    //this.changeSort = this.changeSort.bind(this);
  }

  /*changeSort = async (e) => {
    console.log(e.target.value);
    await this.setState({sortBy: e.target.value});
  }*/

  componentDidMount() {
    this.seePosts();
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
          Work Term One
        </h3>

        {/*}
        <select onChange={this.changeSort}>
          <option value="ASC">
            Oldest to Newest
          </option>
          <option value="DESC">
            Newest to Oldest
          </option>
        </select>
      */}
            {
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

  await (async () => {
    const rawResponse = await fetch('/api/v1/getPosts', {
      method: 'get',
      headers: {
        'Accept': 'WorkTermOneBlogFormlication/json',
        'Content-Type': 'WorkTermOneBlogFormlication/json'
      }
    });
    data = await rawResponse.json();
  })();

    return data;
}


export default WorkTermOneBlogForm;
