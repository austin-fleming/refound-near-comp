import { useUI } from "@modules/common/hooks/ui-context";
import HeroImage from "../../../../../public/assets/printing-machine-etching.jpg";
import NextImage from "next/image";
import type { NextPage } from "next";
import {Grid, Card, CardContent, Typography, CardMedia, Button} from "@mui/material";
import {useEffect, useState} from "react";
import { toast } from "@services/toast/toast";
import { styles } from "@celo/react-celo/lib/modals";
// import { useRefoundContracts } from "@modules/common/hooks/celo-context";

export const HomeView : NextPage = () => {
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
						{/* Toward A Freer
							<br />
							Journalism */}
						<span className="text-[8vw] font-normal italic">the</span> <span className="accentColor">Platform</span>
						<br />
						<span className="text-[8vw] font-normal italic">for the</span>  <span className="accentColor">Frontline</span>
						{/* Own the Stories You Share with the World */}
					</h1>

					<p className="relative text-xl">Empowered and Protected on the Blockchain</p>

					<div className="flex flex-row gap-4">
						<a href="/sign-in" className="btn btn-lg">
							Sign Up
						</a>
						<a href="/learn-more" className="btn btn-lg btn-outline">
						Learn More
						</a>
					</div>
				</div>

				<figure className="absolute top-0 bottom-0 right-0 w-[100%] z-0">
					<NextImage src={HeroImage} layout="fill" objectFit="cover"/>
					<span className="relative block w-full h-full bg-gradient-to-l from-background/80 to-background" />
				</figure>
			</div>
		</section>
		<Grid
				container
				justifyContent="center"
				sm={8}
				style={{ margin: "0 auto", padding: "5%", paddingTop: "2%", paddingBottom:"1%" }}
			>
				<h1 style={{ fontSize: "3em", textAlign:"center" }} className="accentColor font-bold">
					Mint the art of journalism back to life.
				</h1>
				
			</Grid>
			<Grid container>
				<Grid item md={4}></Grid>
				<Grid item sm={12} md={4} style={{margin:"0 2%"}}>
						<p style={{display: "inline-block", marginRight: "20px"}}>Powered by</p>
						<img style={{display: "inline-block", marginRight: "20px" }} src="https://drive.google.com/uc?export=view&id=1iwOakeo6AmeeOfrKqPd1zZDYTMaZyEwb" width="100"></img>
						<img style={{display: "inline-block", marginRight: "20px"}}  width="100" src="https://drive.google.com/uc?export=view&id=1TeZcAM43aiZS6NoaVMd0WSorbs1h7fPf"></img>
						<img style={{display: "inline-block", marginRight: "20px"}} width="50" src="https://drive.google.com/uc?export=view&id=1oPSpKyLZg_BY-i7EK6_WKF7xipPfxhTa"></img>
						<img style={{display: "inline-block"}} width="60" src="https://drive.google.com/uc?export=view&id=14rxatVrOXGELTgKniBFuTN2bd1zS9ESe"></img>
				</Grid>
				<Grid item md={4}></Grid>
			</Grid>
			<Grid container
				justifyContent="center"
				style={{ margin: "0 auto", padding: "5%", paddingTop: "2%" }}>
				<Grid item sm={8}>
					<p style={{textAlign:"center", lineHeight:"1.8em"}}>
						Refound’s mission is part of the Regenerative Finance (ReFi) movement,
						specifically to leverage blockchain technology to help the community of conflict
						zone journalists and photographers to directly sell their content to the public
						and news media at higher margins and with greater financial control, helping
						regenerate their economic cycle. Our decentralized application provides
						journalists a platform to share their content, monetize it, and maintain
						anonymity and safety by using a wallet sign-in.
					</p>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" className="accentColor">
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
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								NFT Smart Contracts
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Journalists benefit from the utility of the NFT smart contracts,
								publishing their work as an NFT, allowing journalists greater
								control of their intellectual property and greater revenue
								visibility. NFTs on Refound are used for their utility to direct
								content monetization, licensing, royalties, and ownership.
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
					<Card sx={{ maxWidth: 600, height: 300 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
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
					<Card sx={{ maxWidth: 600, height: 300 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
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
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 450 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								Decentralized Content Moderation
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Community governance is utilized for content moderation which
								promotes credibility in a decentralized manner. Centralized
								platforms try to moderate content with a one size fits all approach
								banning users and deleting posts that only a small subsection of
								users find offensive. However, Refound allows users to adjust
								content filters so that they don&apos;t see some content rather than
								removing it for everyone. Refound allows users to downvote content
								they view as being misinformation making it less likely to be shown
								to others. There is also an option to flag content which is then
								reviewed by community moderators to make a mulit-signatory decision
								as to its viability on the platform.
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
					<Card sx={{ maxWidth: 600, height: 450 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" className="accentColor" >
								Support for journalists: Funding pools and bonus payments
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Funding pools and bonus payments: Funding pools allow the community
								to direct tokens to commission topics they want journalists to
								photograph and write about and for journalists to raise funds for
								initiatives they want to report on. Refound also offers the ability
								for users to support journalists in areas affected by war and
								conflict by sending them a bonus payment when viewing their content.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1za8Aqy87MRCFO-9C-zQ6TNm09kru4TyM"
						/>
					</Card>
				</Grid>
			
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
			<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								Beneficiary Wallet
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Having a beneficiary wallet where proceeds can go to a chosen
								beneficiary or family member in case of journalist going MIA or
								their demise.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto"}}
							image="https://drive.google.com/uc?export=view&id=1MkX4U53XFu2fLpmKFS_452dv9kLPuLfb"
						/>
					</Card>
				</Grid>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								Wallet Based Subscriptions Feature
							</Typography>
							<Typography variant="body2" color="text.secondary">
								The Refound subscriptions feature allows viewers to subscribe to any
								Refound journalist with their wallets and receive email
								notifications when new content is posted. For journalists, web3
								subscriptions establish the link to a wallet-based community that
								can support the journalist as they create more content.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }}
							image="https://drive.google.com/uc?export=view&id=1tBO3Cr40zeSoBiP-mUcqD2HyH1wmE_l5"
						/>
					</Card>
				</Grid>
			</Grid>
			<Grid container justifyContent="center" sm={8} style={{ margin: "0 auto" }}>
				<Grid item sm={12} md={6} style={{ padding: "3%" }}>
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								An on-chain SOS alert feature
							</Typography>
							<Typography variant="body2" color="text.secondary">
								which allows journalists in a geographically focused conflict zone
								to communicate with each other and send verified alerts of any
								escalating danger or risk in the area they are in, with alerts
								posting on a decentralized ledger(To be developed in next phase).
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
					<Card sx={{ maxWidth: 600, height: 350 }}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div"  className="accentColor">
								Identity solutions
							</Typography>
							<Typography variant="body2" color="text.secondary">
								With blockchain technology, information about identity is linked to
								a wallet, and journalists can choose to remain anonymous if needed.
								Individuals can also curate their own profiles and control the level
								of data and identity. Refound offers the ability for journalists to
								verify their profiles with press ID card or journalism credentials
								if they choose to as well.
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							style={{ maxWidth: "150px", margin: "0 auto" }} 
							image="https://drive.google.com/uc?export=view&id=1eyBawxYwVsArDp80Qwd0k4u5KdNqCmbk"
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
				<a href="/sign-in" className="btn btn-lg backgroundColorAccent">
							Sign Up
						</a>
			</Grid>
			
	</div>
	);
}