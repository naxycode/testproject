import React from 'react';

function Module() {

	function formatName(user) {
	  return user.firstName + ' ' + user.lastName;
	}

	const user = {
	  firstName: 'Тестирование',
	  lastName: 'React',
	};

	const element = <h1>Hello, {formatName(user)}!</h1>;


  return (
    <div className="module text-center">
    	{element}
    	<strong>4*25={4*25}</strong>
		<h3>Module 21</h3>
		<p>Разобрался как резать вёрстку на блоки и подрубать свои стили</p>
    </div>
  );
}

export default Module;


