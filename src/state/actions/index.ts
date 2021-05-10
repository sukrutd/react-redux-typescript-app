import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
	type: ActionType.search_repositories;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.search_repositories_success;
	payload: string[];
}

interface SearchRepositoriesErrorAction {
	type: ActionType.search_repositories_error;
	payload: string;
}

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;
