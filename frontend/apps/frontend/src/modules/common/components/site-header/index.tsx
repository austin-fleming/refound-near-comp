import { useAccount } from "@modules/account/hooks/use-account";
import { cloin } from "@utils/styling/cloin";
import { Sidebar } from "../sidebar";
import NextLink from "next/link";

export const SiteHeader = () => {
	const { login, logout, status, profile } = useAccount();

	return (
		<header className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between border-b-2 border-solid h-headerTopHeight border-primary z-[5000] bg-white">
			<NextLink href="/">
					<div>
						<img style={{display:"inline-block",marginBottom:"10px"}} src="./favicon-32x32.png" width="32"></img>
						<h1
							className="font-normal leading-none text-[2em]"
							style={{ display: "inline-block", marginLeft: "10px" }}
						>
							{" "}
							refound
						</h1>
					</div>
				</NextLink>

			<div className="flex flex-row items-center">
				<div></div>
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
