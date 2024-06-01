let userId=new URL(location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value => value.json())
.then(user=>{
    let ul=document.createElement('ul');
    let id=document.createElement('li');
    let name=document.createElement('li');
    let username=document.createElement('li');
    let email=document.createElement('li');
    let street=document.createElement('li');
    let suite=document.createElement('li');
    let city=document.createElement('li');
    let zipcode=document.createElement('li');
    let geoLat=document.createElement('li');
    let geoLng=document.createElement('li');
    let phone=document.createElement('li');
    let website=document.createElement('li');
    let companyName=document.createElement('li');
    let companyCatchPhrase=document.createElement('li');
    let companyBs=document.createElement('li');
    ul.innerHTML=`<b>Details about ${user.name}:<b> `;
    id.innerText=`Id: ${user.id}`;
    name.innerText=`Name: ${user.name}`;
    username.innerText=`Username: ${user.username}`;
    email.innerText=`Email: ${user.email}`;
    street.innerText=`Street: ${user.address.street}`;
    suite.innerText=`Suite: ${user.address.suite}`;
    city.innerText=`City: ${user.address.city}`;
    zipcode.innerText=`Zipcode: ${user.address.zipcode}`;
    geoLat.innerText=`Latitude: ${user.address.geo.lat}`;
    geoLng.innerText=`Longitude: ${user.address.geo.lng}`;
    phone.innerText=`Phone: ${user.phone}`;
    website.innerText=`Website: ${user.website}`;
    companyName.innerText=`Company name: ${user.company.name}`;
    companyCatchPhrase.innerText=`Catch phrase: ${user.company.catchPhrase}`;
    companyBs.innerText=`Bs: ${user.company.bs}`;
    ul.append(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs);

    let postButton=document.createElement('button');
    postButton.classList.add('postButton');
    postButton.innerText='Post of current user';
    let userPostsContainer = document.createElement('div');
    userPostsContainer.classList.add('display');
        postButton.addEventListener('click', () => {
            userPostsContainer.classList.toggle('display');
            if(!userPostsContainer.classList.contains('display')){
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                            for (const post of posts) {
                                let divPost = document.createElement('div');
                                divPost.innerHTML = `<p><b>Title:</b> ${post.title}</p>`;
                                let postDetailsButton = document.createElement('button');
                                postDetailsButton.classList.add('postDetailsButton');
                                postDetailsButton.innerText = 'More info about post';
                                postDetailsButton.addEventListener('click', () => {
                                    location.href = `post-details.html?id=${post.id}`;
                                })
                                divPost.appendChild(postDetailsButton);
                                divPost.classList.add('divPost');
                                userPostsContainer.appendChild(divPost);
                            }
                            userPostsContainer.classList.add('userPostsContainer');
                            document.body.appendChild(userPostsContainer);
                    })
            }else{
                userPostsContainer.innerText='';
            }
        })
    let block=document.createElement('div');
        block.classList.add('block');
        block.appendChild(ul);

    let container=document.createElement('div');
    container.classList.add('container');
    container.appendChild(block);
    document.body.append(container, postButton);
})