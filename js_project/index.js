let usersBlock=document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users=>{

    for (const user of users) {
        let userContainer=document.createElement('div');
        let h3UserId=document.createElement('h3');
        h3UserId.innerText=`Id: ${user.id}`;
        let h3UserName=document.createElement('h3');
        h3UserName.innerText=`Name: ${user.name}`;
        let button=document.createElement('button');
        button.innerText='more info about user';
        button.onclick=function(){
            location.href=`user-details.html?id=${user.id}`;
        }
        userContainer.append(h3UserId, h3UserName, button);
        usersBlock.appendChild(userContainer);
        document.body.appendChild(usersBlock);

        usersBlock.classList.add('usersBlock');
        userContainer.classList.add('userContainer');
    }
})