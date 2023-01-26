const axios = require("axios");

// getPostIds Async
exports.getPostIdsAsync = (req, res) => {
    console.log("in getPostIds Async req");
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
            const postIds = resp.data.map(post => post.id);
            res.send({postIds: postIds, totalPosts: postIds.length});
        });
};

// getPostById Async request without class

// exports.getPostByIdAsync = async (req, res) => {
//   console.log("in getPostById req Async");
//   // check global variable have posts data loaded or not if yes then simply filter otherwise call http request and then filter
//   //  ideally for first time API wil be called and then data should be there in variable.
//     posts = posts? posts : await fetchPosts();
//     let filtered_record = posts.find(post => post.id == req.params.id);
//     res.send(filtered_record);
// };

// getPostById Async through class constructor and static variable

exports.getPostByIdAsync = async (req, res) => {
    console.log("in getPostById req Async");
    // post = new Post()   // used static variable and function, so object not initialized
    let filteredRecord = Post.filterPosts(await Post.posts, req.params.id)
    res.send(filteredRecord);
};

class Post{
    static posts;
    // await can not be used in static, that's we can not use static for initialize posts value.
    // static { this.posts = fetchPosts(); }
    constructor() {
        console.log("in costruc.")
        // await can not be used in constructor, that's we can not use initialize posts value here.
    }
    // this method declared as static because we do not need to make object to call this method.
    static filterPosts(posts, id) {
        return posts.find(post => post.id == id);
    }
}

// this value initializes at class compilation level.
Post.posts = fetchPosts();

async function fetchPosts() {
    const webPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return webPosts.data
}

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