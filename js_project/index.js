let usersBlock=document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users=>{
    console.log(users);
    for (const user of users) {
        let userContainer=document.createElement('div');
        let h3=document.createElement('h3');
        h3.innerText=`Id: ${user.id} Name: ${user.name}`;
        let button=document.createElement('button');
        button.innerText='more info about user';
        button.onclick=function(){
            location.href=`user-details.html?id=${user.id}`;
        }
        userContainer.append(h3, button);
        usersBlock.appendChild(userContainer);
        document.body.appendChild(usersBlock);
        

        usersBlock.classList.add('usersBlock');
        userContainer.classList.add('userContainer');
    }
})