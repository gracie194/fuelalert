# fuelalert
To build a fuel alert system



# Backend API documentation
1) To View all users
Endpoint: https://fuelalert.my2.net/api/user/s_read_users.php

Implementation: (Copy and paste into your code)
fetch('https://fuelalert.my2.net/api/user/s_read_users.php')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

2) Get any single user
Endpoint: https://fuelalert.my2.net/api/user/s_read_user.php?user_id=2

Implementation: (Copy and paste into your code)
fetch('https://fuelalert.my2.net/api/user/s_read_users.php?user_id=2')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

3) Register a new user
Endpoint: https://fuelalert.my2.net/api/user/s_create_user.php

Implementation: (Copy and paste below into your code)
//Provide these 4 manadatory user data from form

const userdata = {
firstname: 'Felix',
lastname: 'Aka',
email: 'felixaka@gmail.com',
password: 'felix1234',
};

//Set up the fetch configuration to send data
const payload = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(userdata),
};

fetch('https://fuelalert.my2.net/api/user/s_create_user.php', payload)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


4) Email verification 
Endpoint: https://fuelalert.my2.net/api/user/email_verification.php?evc=xxxxxxxxx

Implementation: (Copy and paste into your code)
fetch('https://fuelalert.my2.net/api/user/email_verification.php?evc=xxxxxxx')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

//After registration, a welcome meesgae is sent to your email with the email verification link.
//Go to your email, find the mail and click on the email verification link there
//This will verify the user emil


5) Update and exisiting user
Endpoint: https://fuelalert.my2.net/api/user/s_update_user.php

Implementation: (Copy and paste below into your code)
//Provide mandatory id and any other user data you which to update (firstname,lastname,email,password)
//Use POST, PUT or PATCH method

const userdata = {
id:2,    
firstname: 'Felix',
lastname: 'Aka',
email: 'felixaka@gmail.com',
password: 'felix1234',
};

//Set up the fetch configuration to send data
const payload = {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(userdata),
};

fetch('https://fuelalert.my2.net/api/user/s_update_user.php', payload)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

6) Delete and exisiting user
Endpoint: https://fuelalert.my2.net/api/user/s_delete_user.php

Implementation: (Copy and paste below into your code)
//Provide mandatory id only
//Use DELETE method

const userdata = {
id:2,    
};

//Set up the fetch configuration to send data
const payload = {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(userdata),
};

fetch('https://fuelalert.my2.net/api/user/s_delete_user.php', payload)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))