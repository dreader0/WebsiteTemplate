import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


initializeDatabase();
ReactDOM.render(<App />, document.getElementById('root'));



async function initializeDatabase() {
        let response = await setupPostsTable();
        console.log(response);

}


async function setupPostsTable() {

    let data = {};

    await (async () => {
        const rawResponse = await fetch('/api/v1/createPostTable', {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        data = await rawResponse.json();
      })();

    return data;
}