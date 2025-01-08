import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../mocks/userData.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
	return (
		<>
			<p>Завдання 1. Профіль соціальної мережі</p>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<p>Завдання 2. Список друзів</p>
			<FriendList friends={friends} />
			<p>Завдання 3. Історія транзакцій</p>
			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
