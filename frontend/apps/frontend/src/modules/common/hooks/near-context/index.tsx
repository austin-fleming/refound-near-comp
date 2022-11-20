// Packages //
import React, { useState, useEffect, useContext, createContext } from "react";
import { keyStores, connect, WalletConnection } from "near-api-js";
import type { ReactNode } from "react";

// @ts-ignore -- TODO: need to add type definitions for this https://blog.logrocket.com/how-to-use-react-context-typescript/
const NearContext = createContext<any | undefined>(undefined);

function NearProvider({ children }: { children: ReactNode }) {
	const [near, setNear] = useState<any>(undefined);
	const [wallet, setWallet] = useState<any>(undefined);

	useEffect(() => {
		async function initNear() {
			const config = {
				networkId: "testnet",
				keyStore: new keyStores.BrowserLocalStorageKeyStore(),
				nodeUrl: "https://rpc.testnet.near.org",
				walletUrl: "https://wallet.testnet.near.org",
				helperUrl: "https://helper.testnet.near.org",
				explorerUrl: "https://explorer.testnet.near.org",
			};
			const nearConnection = await connect(config);
			const walletConnection = new WalletConnection(nearConnection, null);
			setNear(nearConnection);
			setWallet(walletConnection);
		}
		initNear();
	}, []);
	/**
	 * https://docs.near.org/tools/near-api-js/quick-reference
	 * Wrap functions for easy access
	 */

	// TODO --  change smart-contract address connection into separate file
	const requestSignIn = async () => {
		await wallet.requestSignIn("refound.testnet", "Refound");
	};

	const signOut = async () => {
		await wallet.signOut();
	};

	const checkSignedIn = async () => {
		const signedIn = await wallet.isSignedIn();
		console.log(signedIn);
		return signedIn;
	};

	const context = {
		near,
		wallet,
		requestSignIn,
		signOut,
		checkSignedIn,
	};

	return (
		<>
			<NearContext.Provider value={context}>{children}</NearContext.Provider>
		</>
	);
}

function useNear() {
	const context = useContext(NearContext);
	if (context === undefined) {
		throw new Error("useOrbis must be used within a OrbisProvider");
	}
	return context;
}

export { NearProvider, useNear };
