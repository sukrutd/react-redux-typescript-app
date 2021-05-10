import React, { useState } from 'react';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();
	const { data, error, loading } = useSelector((state) => state.repositories);

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		searchRepositories(term);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(event) => setTerm(event.target.value)} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error &&
				!loading &&
				data.map((name, index) => <div key={`${name}-${index}`}>{name}</div>)}
		</>
	);
};

export default RepositoriesList;
