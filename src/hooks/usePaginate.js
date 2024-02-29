import { useState } from 'react';
import { USERS } from '../constants/users';

export const usePaginate = () => {
	const [pages, setPages] = useState({
		page: 1,
		itemsPerPage: 2
	});

	const { paginatedUsers, totalPages } = paginateUsers(
		USERS,
		pages.page,
		pages.itemsPerPage
	);

	const isFirstPage = pages.page === 1;
	const isLastPage = pages.page === totalPages;

	const changeItemsPerPage = event => {
		setPages({ itemsPerPage: Number(event.target.value), page: 1 });
	};

	const nextPage = () => {
		setPages({ ...pages, page: pages.page + 1 });
	};

	const prevPage = () => {
		setPages({ ...pages, page: pages.page - 1 });
	};

	return {
		paginatedUsers,
		changeItemsPerPage,
		isFirstPage,
		isLastPage,
		itemsPerPage: pages.itemsPerPage,
		page: pages.page,
		nextPage,
		prevPage,
		totalPages
	};
};

const paginateUsers = (users, page, itemsPerPage) => {
	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	const paginatedUsers = users.slice(start, end);
	const totalPages = Math.ceil(users.length / itemsPerPage);

	return { paginatedUsers, totalPages };
};
