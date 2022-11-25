import { toast } from "@services/toast/toast";
import type { Nullable } from "@utils/helper-types";
import { useEffect, useState } from "react";
import type { Post } from "../domain/post.entity";
import { usePostContracts } from "../hooks/use-post-contracts";
import NextLink from "next/link";
import { LoadingPage } from "@modules/common/components/loading-page";
import { PostCard } from "../components/post-card";

export const DiscoverView = () => {
	const { adapter } = usePostContracts();
	const [posts, setPosts] = useState<Nullable<Post[]>>(undefined);

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
			<section className="flex flex-col w-full px-contentPadding max-w-screen-lg mx-auto min-h-[101vh]">
				<div className="grid grid-cols-1 gap-4 py-24 md:grid-cols-3">
					{posts ? (
						posts.map((post) => <PostCard key={post.id} post={post} />)
					) : (
						<LoadingPage />
					)}
				</div>
			</section>

			<section className="max-w-screen-lg mx-auto mt-headerTopHeight p-sitepad">
				<h1 className="text-4xl font-bold">Feed</h1>
			</section>
			<section className="flex flex-col p-sitepad gap-sitepad">
				{posts ? (
					posts.map((post) => (
						<article className="relative" key={post.id}>
							{post.isVerified && (
								<span className="rounded-full badge">NGO Verified</span>
							)}
							<img src={post.imageLink} />
							<pre>{JSON.stringify(post, null, "\t")}</pre>
							<button
								onClick={() => {
									if (!adapter) return;

									adapter.verifyPost({ id: post.id, verified: true });
								}}
							>
								Verify
							</button>

							<NextLink href={`/post/${post.id}`}>
								<a className="absolute top-0 right-0 w-full h-full">
									<span className="sr-only">Go to Article</span>
								</a>
							</NextLink>
						</article>
					))
				) : (
					<p>No Posts</p>
				)}
			</section>
		</>
	);
};
