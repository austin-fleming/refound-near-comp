import { cloin } from "@utils/styling/cloin";
import { Sidebar } from "../sidebar";
import NextLink from "next/link";
import { useNear } from "@modules/account/hooks/use-near";
import { useAccount } from "@modules/account/hooks/use-account";
// import { useAccount } from "@modules/account/hooks/use-auth";

export const SiteHeader = () => {
	// const account = useAccount();

	const { isSignedIn, signOut, id, role } = useAccount();

	return (
		<header className="fixed top-0 left-0 right-0 flex flex-row px-sitepad items-center justify-between border-b-2 border-solid h-headerTopHeight border-primary z-[5000] bg-white">
			<NextLink href="/">
				<a className="flex flex-row justify-center">
					<img className="block" src="/favicon-32x32.png" width="32"></img>
					<h1
						className="font-normal leading-none text-[2em]"
						style={{ display: "inline-block", marginLeft: "10px" }}
					>
						refound
					</h1>
				</a>
			</NextLink>

			<div className="flex flex-row items-center">
				{/* <button
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
				</button> */}

				{isSignedIn ? (
					<>
						<button
							type="button"
							className="btn"
							onClick={() => {
								signOut();
							}}
						>
							Sign Out
						</button>
					</>
				) : (
					<a className="btn" href="/sign-in">
						Sign In
					</a>
				)}

				{/* {account.status === "connected" && (
					<>
						<button
							type="button"
							className="btn"
							onClick={() => {
								account.signOut();
							}}
						>
							Sign Out
						</button>

						<span>
							{account.id} || {account.role}
						</span>
					</>
				)}

				{account.status === "ready" && (
					<a className="btn" href="/sign-in">
						Sign In
					</a>
				)}

				{account.status === "no_wallet" && (
					<span className="btn btn-disabled">No Wallet Detected</span>
				)} */}

				{/* <button
					type="button"
					className="btn"
					onClick={() => {
						if (status === "connected") {
							signOut();
							return;
						}

						signIn();
					}}
				>
					{isLoggedIn ? "Near Sign Out" : "Near Sign In"}
				</button> */}

				{/* <Sidebar /> */}
			</div>
		</header>
	);
};
