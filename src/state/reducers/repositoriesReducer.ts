import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState = {
	loading: false,
	error: null,
	data: []
};

const reducer = (
	state: RepositoriesState = initialState,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		case ActionType.search_repositories:
			return { loading: true, error: null, data: [] };

		case ActionType.search_repositories_success:
			return { loading: false, error: null, data: action.payload };

		case ActionType.search_repositories_error:
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};

export default reducer;
