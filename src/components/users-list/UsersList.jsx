import { usePaginate } from '../../hooks/usePaginate';

const UsersList = () => {
	const {
		paginatedUsers,
		changeItemsPerPage,
		isFirstPage,
		isLastPage,
		itemsPerPage,
		page,
		nextPage,
		prevPage,
		totalPages
	} = usePaginate();

	return (
		<>
			{paginatedUsers.map(user => (
				<div key={user.userId}>
					<img src={user.profileImage} alt={user.name + ' profile image.'} />
					<span>{user.name}</span>
				</div>
			))}

			<select value={itemsPerPage} onChange={changeItemsPerPage}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
			</select>
			<button disabled={isFirstPage} onClick={prevPage}>
				Prev
			</button>
			<span>
				Página {page} de {totalPages}
			</span>
			<button disabled={isLastPage} onClick={nextPage}>
				Next
			</button>
		</>
	);
};

export default UsersList;
