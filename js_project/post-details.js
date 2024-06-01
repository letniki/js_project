let postId=new URL(location.href).searchParams.get('id');
let postDetailsContainer=document.createElement('div');

let h1UserId=document.createElement('h1');
let h2PostId=document.createElement('h2');
let h3PostTitle=document.createElement('h3');
let h3PostBody=document.createElement('h3');
let block=document.createElement('div');
async function commentsOfPostCreator() {
    let post=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(value => value.json())

            h1UserId.innerText = `UserID: ${post.userId}`;
            h2PostId.innerText = `Post ID: ${post.id}`;
            h3PostTitle.innerText = `Post Title: ${post.title}`;
            h3PostBody.innerText = `Post Body: ${post.body}`;

            postDetailsContainer.append(h1UserId, h2PostId, h3PostTitle, h3PostBody);
            postDetailsContainer.classList.add('wrapper');

            block.classList.add('block');
            block.appendChild(postDetailsContainer)
            document.body.appendChild(block);

   let comments= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())

            let commentsContainer = document.createElement('div');
            commentsContainer.classList.add('wrapContainer');
            for (const comment of comments) {

                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<p><b>Comment Name: ${comment.name}</b></p>
                                <p><b>Comment Body:</b> ${comment.body}</p>
                                <p><b>Comment ID:</b> ${comment.id}</p>
                                <p><b>Email:</b> ${comment.email}</p>
                                <p><b>Post ID:</b> ${comment.postId}</p>`;
                commentsContainer.appendChild(commentDiv);
            }
            document.body.appendChild(commentsContainer);
}
commentsOfPostCreator();