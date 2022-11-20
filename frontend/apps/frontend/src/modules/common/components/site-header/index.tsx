import { useAccount } from "@modules/account/hooks/use-account";
import { useNear } from "@modules/common/hooks/near-context";
import { cloin } from "@utils/styling/cloin";
import { Sidebar } from "../sidebar";

export const SiteHeader = () => {
	const { login, logout, status, profile } = useAccount();
	const { requestSignIn, signOut, isLoggedIn, wallet, near } = useNear();

	console.log({ requestSignIn, signOut, isLoggedIn, wallet, near });

	return (
		<header className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between border-b-2 border-solid h-headerTopHeight border-primary z-[5000] bg-white">
			<h1 className="text-xl font-bold">Refound</h1>

			<div className="flex flex-row items-center">
				<div></div>
				<button
					type="button"
					className="btn"
					onClick={() => {
						if (isLoggedIn) {
							signOut();
							return;
						}

						requestSignIn();
					}}
				>
					{isLoggedIn ? "Near Disconnect" : "Near Connect"}
				</button>
				<button
					type="button"
					className={cloin("btn", status === "CONNECTING" && "loading")}
					onClick={() => {
						if (status === "CONNECTED") {
							logout();
							return;
						}

						login();
					}}
				>
					{status === "DISCONNECTED" ? "Sign In" : "Sign Out"}
				</button>
				<Sidebar />
			</div>
		</header>
	);
};
