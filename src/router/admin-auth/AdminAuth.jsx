import { getItem } from "@/helpers/storage";
import { useGetUserByIdQuery } from "@/store/api/user.api";
import { Navigate, Outlet } from "react-router-dom";

function AdminAuth() {
	const { _id } = getItem("user");
	const { data } = useGetUserByIdQuery(_id);

	return data?.innerData?.isAdmin === "true" ? (
		<Outlet />
	) : (
		<Navigate to={"/"} replace />
	);
}

export default AdminAuth;
