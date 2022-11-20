import type { Nullable } from "@repo/common/utils/helper-types";
import { toast } from "@services/toast/toast";
import type { ConnectConfig, Near } from "near-api-js";
import { keyStores } from "near-api-js";
import { connect, WalletConnection } from "near-api-js";
import type { NearConfig } from "near-api-js/lib/near";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { createContext, useCallback, useContext, useState } from "react";

const NEAR_CONFIG: ConnectConfig = {
	networkId: "testnet",
	// keyStore: new keyStores.BrowserLocalStorageKeyStore(),
	nodeUrl: "https://rpc.testnet.near.org",
	walletUrl: "https://wallet.testnet.near.org",
	helperUrl: "https://helper.testnet.near.org",
	// explorerUrl: "https://explorer.testnet.near.org",
};

type State = {
	near: Nullable<Near>;
	wallet: Nullable<WalletConnection>;
	isLoggedIn: boolean;
	requestSignIn: () => Promise<void>;
	signOut: () => void;
};

const initialState: State = {
	near: undefined,
	wallet: undefined,
	isLoggedIn: false,
	requestSignIn: async () => {},
	signOut: () => {},
};

const NearContext = createContext<State>(initialState);

export const useNear = () => useContext(NearContext);

export const NearProvider = ({ children }: { children: ReactNode }) => {
	const [near, setNear] = useState<State["near"]>(initialState.near);
	const [wallet, setWallet] = useState<State["wallet"]>(initialState.wallet);
	const [isLoggedIn, setIsLoggedIn] = useState<State["isLoggedIn"]>(initialState.isLoggedIn);

	const initNear = useCallback(async () => {
		if (!window) {
			console.warn("Tried to init Near connection in non-browser environment.");
			return;
		}

		const nearConnection = await connect({
			...NEAR_CONFIG,
			keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		});

		if (!nearConnection) {
			toast.error("Cannot connect to Near", "near-connection");
			return;
		}

		const walletConnection = new WalletConnection(nearConnection, null);

		if (!walletConnection) {
			toast.error("Cannot connect to Near wallet", "near-wallet");
			return;
		}

		setNear(nearConnection);
		setWallet(walletConnection);
	}, []);

	const requestSignIn = async () => wallet?.requestSignIn("refound.testnet", "Refound");

	const signOut = () => {
		console.log("signing out");
		console.log(wallet);
		console.log(near?.account);
		wallet?.signOut();
		console.log(wallet);
		console.log(near?.account);
	};

	useEffect(() => {
		setIsLoggedIn(Boolean(wallet?.isSignedIn()));
	}, [wallet, near]);

	useEffect(() => {
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

	return <NearContext.Provider value={value}>{children}</NearContext.Provider>;
};
