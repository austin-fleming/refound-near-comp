import { toast } from "@services/toast/toast";
import { useEffect, useState } from "react";
import { usePostContracts } from "../hooks/use-post-contracts";

export const DiscoverView = () => {
	const { adapter } = usePostContracts();
	const [posts, setPosts] = useState(undefined);

	useEffect(() => {
		if (!adapter) return;

		adapter.getPosts({}).then((result) =>
			result.match({
				ok: (posts) => setPosts(posts),
				fail: (error) => {
					toast.error(error.message, "no-posts");
				},
			}),
		);
	}, [adapter]);

	return (
		<>
			<section className="max-w-screen-lg mx-auto mt-headerTopHeight p-sitepad">
				<h1 className="text-4xl font-bold">Feed</h1>
			</section>
			<section>
				{!posts && <p>No Data</p>}
				{posts && <p>{JSON.stringify(posts)}</p>}
			</section>
		</>
	);
};
