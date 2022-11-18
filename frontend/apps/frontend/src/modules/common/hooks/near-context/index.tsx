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

	const requestSignIn = async () => {
		await wallet.requestSignIn("refound.testnet", "Refound");
	};

	const context = {
		near,
		wallet,
		requestSignIn,
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
