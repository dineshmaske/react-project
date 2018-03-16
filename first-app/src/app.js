console.log('hiii');

var template = <p id='id'> This is my first template . changing the template</p>;


var user = {
    name:'Dinesh Maske',
    age: 27,
    location : 'Pune India'
};

var template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template ,appRoot);

var appRoot1 = document.getElementById('app1');

ReactDOM.render(template2, appRoot1);