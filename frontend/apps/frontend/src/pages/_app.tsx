import "@styles/globals.css";
import "@styles/overrides.css";
import "@celo/react-celo/lib/styles.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Layout } from "@modules/common/components/layout";
import { UIProvider } from "@modules/common/hooks/ui-context";
import { CeloProvider } from "@modules/common/hooks/celo-context";
import { AuthProvider } from "@modules/account/hooks/auth-context";
import { AccountProvider } from "@modules/account/hooks/use-account";
import { NearProvider } from "@modules/common/hooks/near-context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NearProvider>
			<CeloProvider>
				<AuthProvider>
					<AccountProvider>
						<UIProvider>
							<Layout>
								<Component {...pageProps} />
							</Layout>
							<Toaster position="bottom-center" />
						</UIProvider>
					</AccountProvider>
				</AuthProvider>
			</CeloProvider>
		</NearProvider>
	);
}

export default MyApp;