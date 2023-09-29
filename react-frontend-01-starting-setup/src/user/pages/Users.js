import React from "react";

import UsersList from "./components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Max Schwarz",
			image: "https://as1.ftcdn.net/v2/jpg/04/73/96/04/1000_F_473960418_aHunedMIacJS6kOtRGugjEAUEiC35NlV.jpg",
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
