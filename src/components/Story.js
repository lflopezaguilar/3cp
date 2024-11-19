// Story.js

import React from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
	const scenarios = [
		{
			id: 0,
			text: 'Te encuentras parado frente a una cueva oscura. ¿Qué haces?',
			choices: [
				{ text: 'Entras a la cueva', nextScenario: 1 },
				{ text: 'Te vas de la cueva', nextScenario: 2 }
			]
		},
		{
			id: 1,
			text: 'Como entraste a la cueva, ves dos túneles. Cuál escoges?',
			choices: [
				{ text: 'El de la izquierda', nextScenario: 3 },
				{ text: 'El de la derecha', nextScenario: 4 }
			]
		},
		{
			id: 2,
			text: 'Te vas de la cueva. Aquí termina la aventura.',
			choices: []
		},
		{
			id: 3,
			text: 'Vas a la izquierda y te encuentras una llave! ¿Qué haces?',
			choices: [
				{ text: 'Tomas la llave', nextScenario: 5 },
				{ text: 'Dejas la llave', nextScenario: 6 }
			]
		},
		{
			id: 4,
			text: 'Vas hacia la derecha y el camino termina. ¿Qué haces?',
			choices: [
				{ text: 'Regresar', nextScenario: 1 }
			]
		},
		{
			id: 5,
			text: 'Tomas la llave. Como te mueves hacia adelante, encuentras una puerta cerrada. ¿Qué haces?',
			choices: [
				{ text: 'Usas la llave', nextScenario: 7 }
			]
		},
		{
			id: 6,
			text: 'Dejas la llave y caminas hacia adelante. La aventura termina aquí.',
			choices: []
		},
		{
			id: 7,
			text: 'Abres la puerta con la llave y encuentras el cofre del tesoro! Felicidades! LA aventura termina aquí.',
			choices: []
		}
	];

	const currentScenario = scenarios.find(s => s.id === scenario);

	const handleChoice = (choice) => {
		const nextScenario = choice.nextScenario;
		onChoice(choice);

		if (nextScenario === 7) {
			alert('Felicidades, Encontraste el tesoro! La aventura termina aquí.');
			onGameResult('win');
		} else if (nextScenario === 2 || nextScenario === 6) {
			onGameResult('lose'); 
		}
	};

	return (
		<div className="card mx-auto mt-5" style={{ maxWidth: '500px' }}>
			<div className="card-body">
				<p className="card-text">{currentScenario.text}</p>
				<ul className="list-group">
					{currentScenario.choices.map((choice, index) => (
						<li key={index} className="list-group-item">
							<button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
							{choice.text}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Story;
