import { getItem } from "@/helpers/storage";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
	const user = getItem("user");
	return user ? <Outlet /> : <Navigate to={"/sign"} replace />;
}
export default Auth;
