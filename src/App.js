import React from 'react';
import './App.css';
import background from './image/background/3STLancamentoFanoramaHerobannerHome.jpg'
import Profile from './Components/Profile';

function App() {
	return (
		<main className='App'>
			<header className="header">
				<img
					alt='Background'
					src={background} />
			</header>

				<body
					className='Content'>
					<Profile />
					{/* <h1>Sirlene Aráujo</h1> */}
					<p>
						
						Quer ser consultora Mary kay? <br />
							{/* Te explico tudo. <br />
							Chame aí!! */}
						</p>

					<div>
						<a
							target='blank'
							href={`https://cutt.ly/wyO2Xxu`}
							type='button'
						>
								Faça seu cadastro
							</a>
					</div>
				</body>
		</main>
	);
}

export default App;
