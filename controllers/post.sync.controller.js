// getPostIds Sync through http
exports.getPostIdsSync = (req, res) => {
    console.log("in getPostIds req Sync");
    const https = require('https');
    let data = '';
    https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const parsedData = JSON.parse(data)
            const postIds = parsedData.map(post => post.id);
            res.send({postIds: postIds, totalPosts: postIds.length});
        });

    }).on("error", (err) => {
        console.log("in error");
        console.log("Error: " + err.message);
    });
};

// getPostById Sync  through http
exports.getPostByIdSync = (req, res) => {
    console.log("in getPostById req sync");
    const https = require('https');
    let data = '';
    https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const parsed_data = JSON.parse(data)
            const filtered_record = parsed_data.find(post => post.id == req.params.id);
            // const filtered_record = parsed_data.filter(post => post.id == req.params.id);
            res.send(filtered_record);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};

// function using then instead of await but not assigning value to global variable
// function fetchPosts() {
//     var posts;
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((resp) => {
//             console.log("resp.data");
//             posts = resp.data;
//             console.log(posts.length);
//             // return posts;
//         })
//         .then(() => console.log("posts length in 2nd then: " + posts.length))
//     console.log("resp.data at end");
//     console.log(posts);
// }