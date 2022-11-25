import HeroImage from "../../../../../public/assets/printing-machine-etching.jpg";
import NextImage from "next/image";
import type { NextPage } from "next";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import NextLink from "next/link";
// import { useRefoundContracts } from "@modules/common/hooks/celo-context";

import Typewriter from "typewriter-effect";
export const HomeView: NextPage = () => {
	const [posts, setPosts] = useState<any>();
	//const { getAllImagePosts } = useRefoundContracts();

	// useEffect(() => {
	// 	if (!posts) {
	// 		loadImages();
	// 	}
	// }, [posts]);

	// const loadImages = async () => {
	// 	(await getAllImagePosts()).match({
	// 		ok: (posts:any) => {
	// 			setPosts(posts);
	// 		},
	// 		fail: (err:any) => {
	// 			console.error(err);
	// 			toast.error("Could not load images.");
	// 		},
	// 	});
	// };

	return (
		<div>
			<section className="relative w-full h-[110vh] pt-headerTopHeight">
				<div className="relative w-full h-full max-w-screen-2xl p-contentPadding">
					<div className="relative z-[10] text-stone-800 flex flex-col h-full justify-between pb-[10vh]">
						<h1 className="text-[10vw] max-w-[80%] leading-[10vw] font-bold text-stone-800">
							<span className="text-[8vw] font-normal italic">the</span>{" "}
							<span className="accentColor">Platform</span>
							<br />
							<span className="text-[8vw] font-normal italic">for verified</span>{" "}
							<span className="accentColor">Journalism</span>
							{/* Own the Stories You Share with the World */}
						</h1>

						<p className="relative text-xl">
							Empowered and Protected on the Blockchain
						</p>

						<div className="flex flex-row gap-4">
							<NextLink href="/sign-in">
								<a className="btn btn-lg" style={{ borderRadius: "15px" }}>
									Sign Up
								</a>
							</NextLink>
							<NextLink href="/learn-more">
								<a
									className="btn btn-lg btn-outline"
									style={{ borderRadius: "15px" }}
								>
									Learn More
								</a>
							</NextLink>
						</div>
					</div>

					<figure className="absolute top-0 bottom-0 right-0 w-[100%] z-0">
						<NextImage src={HeroImage} layout="fill" objectFit="cover" />
						<span className="relative block w-full h-full bg-gradient-to-l from-background/80 to-background" />
					</figure>
				</div>
			</section>
			<Grid
				container
				justifyContent="center"
				sm={8}
				style={{ margin: "0 auto", padding: "5%", paddingTop: "2%", paddingBottom: "1%" }}
			>
				<Typewriter
					options={{
						strings: ["	Mint with Proof of Verification."],
						autoStart: true,
						loop: true,
					}}
				/>
			</Grid>
			<Grid container>
				<Grid item md={4}></Grid>
				<Grid item sm={12} md={4} style={{ margin: "0 2%" }}>
					<p style={{ display: "inline-block", marginRight: "20px" }}>Powered by</p>
					<img
						style={{ display: "inline-block", marginRight: "20px" }}
						src="https://drive.google.com/uc?export=view&id=1iwOakeo6AmeeOfrKqPd1zZDYTMaZyEwb"
						width="100"
					></img>
					<img
						style={{ display: "inline-block", marginRight: "20px" }}
						width="100"
						src="https://drive.google.com/uc?export=view&id=1TeZcAM43aiZS6NoaVMd0WSorbs1h7fPf"
					></img>
					<img
						style={{ display: "inline-block", marginRight: "20px" }}
						width="50"
						src="https://drive.google.com/uc?export=view&id=1oPSpKyLZg_BY-i7EK6_WKF7xipPfxhTa"
					></img>
					<img
						style={{ display: "inline-block" }}
						width="60"
						src="https://drive.google.com/uc?export=view&id=14rxatVrOXGELTgKniBFuTN2bd1zS9ESe"
					></img>
				</Grid>
				<Grid item md={4}></Grid>
			</Grid>
			<Grid
				container
				justifyContent="center"
				style={{ margin: "0 auto", padding: "5%", paddingTop: "2%" }}
			>
				<Grid item sm={8}>
					<p style={{ textAlign: "center", lineHeight: "1.8em" }}>
						Refound’s mission is part of the Regenerative Finance (ReFi) movement,
						specifically to leverage blockchain technology to help journalists and
						photographers directly sell their content to the public and news media at
						higher margins and with greater financial control, helping regenerate their
						economic cycle. Our decentralized application provides journalists a
						platform to share their content, monetize it, and maintain anonymity and
						safety by using a wallet sign-in.
					</p>
				</Grid>
			</Grid>

			<h1
				style={{ fontSize: "2.5em", textAlign: "center" }}
				className="font-bold accentColor"
			>
				Who Are We Building For?
			</h1>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={3} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h7"
								component="div"
								className="accentColor"
							>
								Citizen and Freelance Journalists
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our publishing platform allows journalists and photographers to
								share first person, creative content from the frontlines swiftly,
								raise awareness, and sell directly to businesses.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1qvtNV6z1nc691q6TtcrigRJEaJgdqbKk"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={3} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h7"
								component="div"
								className="accentColor"
							>
								NGOs / Government Bodies / Eye Witnesses
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Eye Witnesses, NGOs, and Government Bodies can verify content,
								helping build trust between journalists and the public.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1knCpYtRgvBPHwqnzKblOy8HIEId2W1Hj"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={3} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h7"
								component="div"
								className="accentColor"
							>
								The Media/Publications
							</Typography>
							<Typography variant="body2" color="text.secondary">
								A platform to curate and purchase licenses for direct, and verified
								frontline content.{" "}
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1Q-QSNh34BV2FJCwr7CQ02NjJX8azIZr3"
						/>
					</Card>
				</Grid>

				<Grid item sm={12} md={3} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h7"
								component="div"
								className="accentColor"
							>
								News Consumers
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Consumers of our platform can curate their News feed and directly
								support Journalists.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1VzrmUYwKsGU4OnjwP8F31WA7yTFlI2xt"
						/>
					</Card>
				</Grid>
			</Grid>

			<h1
				style={{ fontSize: "2.5em", textAlign: "center" }}
				className="font-bold accentColor"
			>
				Use Cases
			</h1>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={4} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h6"
								component="div"
								className="accentColor"
							>
								Verified Journalism
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our smart contracts allow a multisig wallet sign-in by a local NGO,
								a local governing body, and up to 2 eye witnesses to authenticate
								the veracity (verification) of the photo or article content.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1XJ24N-F8HTjkij4ZVUxziJ4ve64vt0Wj"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={4} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h6"
								component="div"
								className="accentColor"
							>
								War Crimes Documentation
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our tools may also apply to war crimes providing a protocol for
								documentation and verification of events.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1x8MHoz7C0hGxrBEnsQLWWbyT9mm27BOE"
						/>
					</Card>
				</Grid>

				<Grid item sm={12} md={4} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h6"
								component="div"
								className="accentColor"
							>
								Media Licensing Management
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Our smart contracts give journalists the ability to create and
								manage multiple licenses with their NFTS and buyers the ability to
								purchase multiple use licenses for an NFT.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "50px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1dEYRKrCB1haGKzLyvrmaaNCtVQjyun4h"
						/>
					</Card>
				</Grid>
			</Grid>

			<h1
				style={{ fontSize: "2.5em", textAlign: "center" }}
				className="font-bold accentColor"
			>
				Features
			</h1>

			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 400 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Simplified Publishing
							</Typography>
							<Typography variant="body2" color="text.secondary">
								We allow Journalists to swiftly create and sell NFTs of their
								content directly to news rooms, the media, and the public.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1452x4aUtPiezOASIrOLfCIrxs0nwkewx"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 400 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Proof of Witness
							</Typography>
							<Typography variant="body2" color="text.secondary">
								When an NFT is created, it has to pass through our smart contract
								and it requires Third Party Verification in order for it to be
								validated as true and confirmed for minting. Allows a multisig
								wallet sign-in to allow a local NGO, a local governing body, and up
								to 2 eye witnesses to authenticate the veracity (verification) of
								the photo or article content.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1Psj6Q25XRCsAEkURGdUFnksLfvplj7k_"
						/>
					</Card>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Revenue Sharing
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Journalists can share revenue from their photos and articles with
								those impacted by conflict. The smart contract will split the
								royalties between the journalist and the NGO or to the person
								photographed.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1tBO3Cr40zeSoBiP-mUcqD2HyH1wmE_l5"
						/>
					</Card>
				</Grid>

				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Easy one click on-boarding on NEAR using Keypom
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Only NEAR allows the creation of programmable keys, which they call
								“keypoms.” These keys allow users to start using our dApp right away
								without needing to create an account.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1rvQ7EwQOgB_g0M_6NcS7frLD6iTq5Gv0"
						/>
					</Card>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								In app camera capability
							</Typography>
							<Typography variant="body2" color="text.secondary">
								to capture live photos for NFTs. This helps store the meta data of
								time and place directly on the blockchain on IPFS and helping
								viewers and newsrooms know that the image is not altered or
								doctored.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto", marginTop: "5%" }}
							image="https://drive.google.com/uc?export=view&id=1if2YgQXUDxuwbaPwRkQYLRY1qXZ8W8JZ"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Automated Licensing
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Licenses are stored on chain and our smart contracts allow NFT
								minters to purchase multiple licenses for different uses.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1bEspbn-09HkoZX8TknAFgY5o5eXgXhIl"
						/>
					</Card>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Immutable and Decentralized
							</Typography>
							<Typography variant="body2" color="text.secondary">
								The immutability of the blockchain allows the journalists to post
								content that is wrapped in utility NFTs and reducing the risk of
								censorship and later modification of their original works, since the
								blockchain will always have a record of the original photograph or
								article when it was uploaded by the journalist.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1AIa2MzZwM9aVZxAKL_C1srYwK4jR2VXv"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Publicly Visible Chain of Approvals
							</Typography>
							<Typography variant="body2" color="text.secondary">
								On chain data is public and transparent, displaying the verifying
								parties that were involved in verification.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1lyMWSBpnWRq90lHuH-XK_V440TN1QIMv"
						/>
					</Card>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 300 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								className="accentColor"
							>
								Cryptocurrency Benefits
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Ease of payment to journalists and their local sources, fixers, and
								contacts in war zones and conflict zones via stable coin using a an
								easy setup crypto wallet on Near. Cryptocurrency provides a transfer
								of value that is much faster than banks, and much cheaper even in
								cases of international transfers. Account transactions are publicly
								auditable and secure, and easily accessible with a smartphone.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1TeZcAM43aiZS6NoaVMd0WSorbs1h7fPf"
						/>
					</Card>
				</Grid>
			</Grid>

			{/* <Grid container justifyContent="left" sm={10} style={{ margin: "0 auto" }}>
				<h1
					className="font-bold"
					style={{ fontSize: "2em", padding: "2%", color: "#01A0B0" }}
				>
					Highlights
				</h1>
			</Grid>

			<Grid container justifyContent="center" sm={12} style={{ margin: "0 auto" }}>
				{posts &&
					posts.slice(0, 5).map((post: any) => (
						<>
							<Grid item xs={6} md={2} style={{ padding: "1%" }}>
								<a href="/posts/" {...post.postId} className="hover:animate-pulse">
									<PhotographCard key={post.postId} photoData={post} />
								</a>
							</Grid>
						</>
					))}
			</Grid> */}

			<Grid container justifyContent="center" sm={12} style={{ margin: "0 auto" }}>
				<h1
					className="font-bold accentColor"
					style={{
						fontSize: "3em",
						padding: "2%",
						textAlign: "center",
					}}
				>
					Mint the art of journalism back to life and start publishing.
				</h1>
			</Grid>
			<Grid
				container
				justifyContent="center"
				sm={8}
				style={{ margin: "0 auto", marginBottom: "5%" }}
			>
				<NextLink href="/sign-in">
					<a
						className="btn btn-lg backgroundColorAccent"
						style={{ borderRadius: "15px" }}
					>
						Sign Up
					</a>
				</NextLink>
			</Grid>
		</div>
	);
};
