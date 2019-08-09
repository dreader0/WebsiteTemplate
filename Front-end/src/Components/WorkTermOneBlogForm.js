import React from 'react';

class WorkTermOneBlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.seePosts = this.seePosts.bind(this);
  }

  seePosts = async (e) => {
    let response = await getPostData();
    console.log(response);

    this.setState({ posts: response });
  }

  render() {
    this.seePosts();

    return (
      <div className="tabContent">

        <h3 className="title">
          Work Term One
        </h3>
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


async function getPostData() {
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
