import { getItem } from "@/helpers/storage";

import { useGetUserByIdQuery } from "@/store/api/user.api";

import "./Profile.css";

function Profile() {
	const { _id: userId } = getItem("user");
	const { data, isLoading } = useGetUserByIdQuery(userId);

	console.log(data?.innerData);
	return (
		<div className="profile">
			<div className="profile__wrapper">
				<div className="profile__img">
					<img src={data?.innerData?.image[0]} alt="" />
				</div>
				<div className="profile__details">
					<div className="profile__details-item profile__username">
						{data?.innerData?.username}
					</div>
					<div className="profile__details-item profile__name">
						{data?.innerData?.name}
					</div>
					<div className="profile__details-item profile__email">
						{data?.innerData?.email}
					</div>
					<div className="profile__details-item profile__createdAt">
						{data?.innerData?.createdAt
							? new Date(data.innerData.createdAt).toLocaleString()
							: "Not Available"}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
