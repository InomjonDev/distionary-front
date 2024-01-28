import { useGetUserByIdQuery } from "@/store/api/user.api";
import "./UserView.css";

function UserView({ userId }) {
	const { data, isLoading } = useGetUserByIdQuery(userId);
	return (
		<div className="user-img">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<img src={data?.innerData.image[0]} className="user-img__img" />
					<p className="user-img__username">{data?.innerData.username}</p>
				</>
			)}
		</div>
	);
}
export default UserView;
