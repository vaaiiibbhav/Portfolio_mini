// import { Icons } from "@/components/icons";
// import { HomeIcon, NotebookIcon } from "lucide-react";

// export const DATA = {
//   name: "Vaibhav Verma",
//   initials: "VV",
//   url: "",
//   location: "New Delhi, India",
//   // locationLink: "https://www.google.com/maps/place/sanfrancisco",
//   description:
// "Web3 Developer - building, learning, and sharing on X.",
//   summary:
// "I’m a Web3-focused Full Stack Developer and entrepreneur, currently building scalable SaaS and decentralized applications. With experience across multiple startups, 10+ hackathon wins, and grants, I love turning ideas into products that bridge Web2 and Web3. Beyond coding, I enjoy experimenting, sharing, and contributing to the developer ecosystem."  ,
// avatarUrl: "/pfp.jpeg",
//   skills: [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Node.js",
//     "Python",
//     "C++",
//     "Solidity",
//     "Rust",
//     "PostgreSQL",
//     "MongoDB",
//     "Docker",
//     "AWS"
//   ],
//   services: [
//     {
//       title: "Web3 Development",
//       description: "Smart contracts, DeFi protocols, NFT platforms, and blockchain integrations. Experience with Solidity, Rust, and multiple chains.",
//       icon: "🔗",
//     },
//     {
//       title: "Full-Stack Development",
//       description: "End-to-end web applications with modern frameworks. React, Next.js, TypeScript, Node.js, and cloud deployment.",
//       icon: "⚡",
//     },
//     {
//       title: "Smart Contract Auditing",
//       description: "Security-focused smart contract reviews and optimizations. Ensuring your contracts are production-ready and secure.",
//       icon: "🔒",
//     },
//     {
//       title: "SaaS Development",
//       description: "Scalable SaaS applications with modern architecture. From MVP to production with performance optimization.",
//       icon: "🚀",
//     },
//   ],
//   availability: {
//     status: "Available",
//     message: "Open to new freelance projects and collaborations",
//   },
//   navbar: [
//     { href: "/", icon: HomeIcon, label: "Home" },
//     { href: "/blog", icon: NotebookIcon, label: "Blog" },
//   ],
//   contact: {
//     email: "2005ajha@gmail.com",
//     // tel: "+123456789",
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "",
//         icon: Icons.github,

//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "",
//         icon: Icons.linkedin,

//         navbar: true,
//       },
//       X: {
//         name: "X",
//         url: "https://x.com/adxtya_jha",
//         icon: Icons.x,

//         navbar: true,
//       },
//       email: {
//         name: "Send Email",
//         url: "#",
//         icon: Icons.email,

//         navbar: false,
//       },
//     },
//   },

//   work: [
//      {
//         company: "Pikme",
//         href: "https://www.playpikme.com/", // add company website if available
//         badges: ["Contract"],
//         location: "Remote, San Francisco", 
//         title: "Full Stack Developer",
//         logoUrl: "https://media.licdn.com/dms/image/v2/D4E16AQFDashwb8wvQA/profile-displaybackgroundimage-shrink_350_1400/B4EZXJDZsJGwAo-/0/1742834867726?e=1764201600&v=beta&t=eIWd9j5D3fyoqKqz2MxID6wyDearKSM3eVZtmYFhjwQ",
//         start: "February 2026", // update with actual start date
//         end: "Present",
//         description:
//           "Working as a Blockchain Developer, contributing to blockchain development and smart contract implementation.",
//       },
//     {
//         company: "Skate Chain",
//         href: "https://www.skatechain.org/", // add company website if available
//         badges: ["Internship"],
//         location: "Remote, Singapore", 
//         title: "Blockchain Developer Intern",
//         logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQHf20XE0q8t7Q/company-logo_200_200/company-logo_200_200/0/1713448328113/range_protocol_logo?e=2147483647&v=beta&t=AXtRHD7wJdchNthoq5bfimGFcvi_g9DkwxEXcdouK0c", // add logo URL if available
//         start: "October 2025", // update with actual start date
//         end: "February 2026",
//         description:
//           "Working as a Blockchain Developer Intern, contributing to blockchain development and smart contract implementation.",
//       },
//     {
      
//         company: "Pikme",
//         href: "https://pikme.app", // replace with actual if you have
//         badges: ["Internship"],
//         location: "Remote, San Francisco",
//         title: "Full Stack Developer",
//         logoUrl: "https://media.licdn.com/dms/image/v2/D4E16AQFDashwb8wvQA/profile-displaybackgroundimage-shrink_350_1400/B4EZXJDZsJGwAo-/0/1742834867726?e=1764201600&v=beta&t=eIWd9j5D3fyoqKqz2MxID6wyDearKSM3eVZtmYFhjwQ",
//         start: "July 2025",
//         end: "October 2025",
//         description:
//           "Engineered single-player and multiplayer versions of Pikme from the ground up, serving 500+ active users. Boosted site performance by 40% through caching strategies, lazy loading, and frontend optimizations. Managed end-to-end deployment on AWS, including EC2, S3, and server configuration for 99.9% uptime."
//       },
      
//       {
//         company: "Stealth Startup",
//         badges: ["Freelance"],
//         href: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Stealth-logo.svg/2048px-Stealth-logo.svg.png", // can add later if public
//         location: "Remote, Boston",
//         title: "Full Stack Blockchain Developer",
//         logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQGUKsfjHB8RNQ/company-logo_100_100/company-logo_100_100/0/1735368022724/stealth_startup_51_logo?e=1761177600&v=beta&t=k9F16_cP8yiR9nW2677K8B6xW1CkS_VM3PhRbUN-yCQ", // placeholder, update if you have logo
//         start: "August 2025",
//         end: "October 2025",
//         description:
//           "Developed and deployed DAO governance smart contracts handling $50K+ in TVL with 100% test coverage and security audits. Built complete frontend interface with 95%+ user satisfaction and integrated smart contracts with both frontend and backend for seamless Web3 UX."
//       },      
//       {
//         company: "Euclid Protocol",
//         href: "https://www.euclidprotocol.io/", // add if there's a public link
//         badges: ["Internship"],
//         location: "Remote, Dubai",
//         title: "Full Stack Developer",
//         logoUrl: "https://pbs.twimg.com/profile_images/1787780246256726016/yaY-XoKg_400x400.jpg",
//         start: "May 2025",
//         end: "July 2025",
//         description:
//           "Developed EuclidAI reducing operational costs by 30% and processing 10K+ transactions. Designed and implemented EuclidMail, enabling 1K+ users to send crypto via email with 99.5% success rate. Collaborated with cross-functional teams to update EuclidSwap, increasing trading volume by 200%."
//       },
      
//       {
//         company: "Solana Superteam",
//         href: "https://superteam.fun",
//         badges: ["Community Member & Builder"],
//         location: "Remote, India",
//         title: "Community Member & Builder",
//         logoUrl: "https://pbs.twimg.com/profile_images/1679100194028392448/4_3L1nRh_400x400.jpg", // placeholder, update if you have the logo
//         start: "March 2025",
//         end: "Present",
//         description:
//           "Active member of Solana Superteam contributing to the ecosystem through projects, hackathons, and developer initiatives. Awarded grants for building on Solana and collaborated with the community to ship impactful Web3 products."
//       },      
//       {
//         company: "Aiphi AI",
//         href: "https://aiphi.ai/", // add company site if you want
//         badges: ["Internship"],
//         location: "Bengaluru, Karnataka, India · Hybrid",
//         title: "Full Stack AI Engineer",
//         logoUrl: "https://aiphi.ai/wp-content/uploads/2024/01/1080P-Full-HD-2.png",
//         start: "February 2025",
//         end: "April 2025",
//         description:
//           "Worked as a Full Stack AI Engineer intern, contributing to AI-driven product development and end-to-end application features, combining backend systems with AI model integration."
//       },      
//   ],
//   education: [
//     {
//       school: "Manipal University Jaipur",
//       href: "https://jaipur.manipal.edu/",
//       degree: "Bachelor of Technology in Computer Science and Engineering",
//       logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png",
//       start: "2023",
//       end: "2027",
//     },
//   ],
//   pprojects: [
//     {
//       title: "Aura Protocol",
//       href: "https://auraprotocol.vercel.app/",
//       dates: "2025",
//       active: true,
//       description:
//         "Fast. Efficient. Revolutionary. Experience the future of blockchain with Aura - where speed meets innovation. Powered by Avalanche. A decentralized DeFi protocol offering cutting-edge financial solutions with unmatched security and efficiency.",
//       technologies: [
//         "Next.js",
//         "TypeScript",
//         "Solidity",
//         "Avalanche",
//         "Web3",
//         "DeFi",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://auraprotocol.vercel.app/",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "/aura.png",
//       video: "",
//     },
//     {
//       title: "SnapChain",
//       href: "https://snapchain.vercel.app",
//       dates: "2025",
//       active: true,
//       description:
//         "Developed an AI-powered drag-and-drop platform to simplify Rust smart contract creation. Features Scratch-like interface, AI-assisted generation, and pre-made templates. Used by 200+ developers, reducing contract development time by 70%.",
//       technologies: ["Next.js", "TypeScript", "MongoDB", "Rust", "Google Gemini API"],
//       links: [
//         {
//           type: "Website",
//           href: "https://snapchain.vercel.app",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/snap.png", // Add screenshot: "/snapchain.png" (place in /public folder) or use external URL
//       video: "", // Optional: Add demo video URL
//     },
//     {
//       title: "ForkYouDaddy",
//       href: "https://forkyoudaddy.vercel.app",
//       dates: "2025",
//       active: true,
//       description:
//         "Web3 application for creating, remixing, and licensing creative IP with 100+ registered works and $5K+ in licensing revenue. Creators register original works onchain, others fork with attribution, and licenses define usage and monetization.",
//       technologies: ["Next.js", "TypeScript", "Solidity", "Web3"],
//       links: [
//         {
//           type: "Website",
//           href: "https://forkyoudaddy.vercel.app",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       // image: "/fork.png",
//       image: "/fork.png", 
//       video: "", // Add screenshot: "/forkyoudaddy.png" (place in /public folder) or use external URL
//     },
//     {
//       title: "MEMEFI",
//       href: "https://memefi-platform.vercel.app",
//       dates: "2025",
//       active: true,
//       description:
//         "Launched MEMEFI – a gamified meme staking platform with 50+ active users and $1K+ in staked value. Users upload memes, stake them, and earn rewards based on engagement. Integrated wallet abstraction achieving 90%+ user retention.",
//       technologies: [
//         "Next.js",
//         "Tailwind CSS",
//         "Solidity (BNB Chain)",
//         "Node.js",
//         "MongoDB",
//         "IPFS",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://memefi-platform.vercel.app",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/image.png", // Add screenshot: "/memefi.png" (place in /public folder) or use external URL
//       video: "", // Optional: Add demo video URL
//     },
//     {
//       title: "Capsulr",
//       href: "https://t-ime-capsule-monad.vercel.app",
//       dates: "2025",
//       active: true,
//       description:
//         "Decentralized time capsule application on Monad testnet with 50+ stored memories and 99%+ data integrity. Users store and retrieve memories on-chain with timestamp verification and privacy controls.",
//       technologies: ["Next.js", "TypeScript", "Solidity", "Monad Blockchain"],
//       links: [
//         {
//           type: "Website",
//           href: "https://t-ime-capsule-monad.vercel.app",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/capsulr.png", // Add screenshot: "/capsulr.png" (place in /public folder) or use external URL
//       video: "", // Optional: Add demo video URL
//     },
//     {
//       title: "OnlyNerds",
//       href: "https://onlynerds-rose.vercel.app/",
//       dates: "2025",
//       active: true,
//       description:
//         "🎓 Fork courses. 🤖 Learn with AI agents. 🧬 Earn dynamic skill NFTs. Say goodbye to scammy LMSs and corporate BS. Only Nerds is for builders, creators, and autodidacts who learn by doing. The first decentralized learning platform where you can learn, create, fork courses, and earn NFTs.",
//       technologies: [
//         "Next.js",
//         "TypeScript",
//         "Solidity",
//         "Web3",
//         "AI Agents",
//         "NFTs",
//         "IPFS",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://onlynerds-rose.vercel.app/",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "/onlynerds.png", // Add screenshot: "/onlynerds.png" (place in /public folder) or use external URL
//       video: "", // Optional: Add demo video URL
//     },
    
//   ],
//   hackathons: [
//     {
//       title: "Hack Western 5",
//       dates: "November 23rd - 25th, 2018",
//       location: "London, Ontario",
//       description:
//         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 14th - 16th, 2018",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mobile application which delivers university campus wide events in real time to all students.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "FirstNet Public Safety Hackathon",
//       dates: "March 23rd - 24th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
//       icon: "public",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
//       links: [],
//     },
//     {
//       title: "DeveloperWeek Hackathon",
//       dates: "February 3rd - 4th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
//       links: [
//         {
//           title: "Github",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/cryptotrends/cryptotrends",
//         },
//       ],
//     },
//     {
//       title: "HackDavis",
//       dates: "January 20th - 21st, 2018",
//       location: "Davis, California",
//       description:
//         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
//       win: "Best Data Hack",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/my6footprint",
//         },
//         {
//           title: "ML",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/my6footprint-machine-learning",
//         },
//         {
//           title: "iOS",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/CarbonWallet",
//         },
//         {
//           title: "Server",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/wallet6-server",
//         },
//       ],
//     },
//     {
//       title: "ETH Waterloo",
//       dates: "October 13th - 15th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
//       links: [
//         {
//           title: "Organization",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ethdocnet",
//         },
//       ],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 15th - 17th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a virtual reality application allowing users to see themselves in third person.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Streamer Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/htn2017",
//         },
//         {
//           title: "Client Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/RTSPClient",
//         },
//       ],
//     },
//     {
//       title: "Hack The 6ix",
//       dates: "August 26th - 27th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ShareShip/ShareShip",
//         },
//         {
//           title: "Site",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://share-ship.herokuapp.com/",
//         },
//       ],
//     },
//     {
//       title: "Stupid Hack Toronto",
//       dates: "July 23rd, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/nsagirlfriend/nsagirlfriend",
//         },
//       ],
//     },
//     {
//       title: "Global AI Hackathon - Toronto",
//       dates: "June 23rd - 25th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/TinySamosas/",
//         },
//       ],
//     },
//     {
//       title: "McGill AI for Social Innovation Hackathon",
//       dates: "June 17th - 18th, 2017",
//       location: "Montreal, Quebec",
//       description:
//         "Developed realtime facial microexpression analyzer using AI",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//       links: [],
//     },
//     {
//       title: "Open Source Circular Economy Days Hackathon",
//       dates: "June 10th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/genecis",
//         },
//       ],
//     },
//     {
//       title: "Make School's Student App Competition 2017",
//       dates: "May 19th - 21st, 2017",
//       location: "International",
//       description: "Improved PocketDoc and submitted to online competition",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//       win: "Top 10 Finalist | Honourable Mention",
//       links: [
//         {
//           title: "Medium Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//         },
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "HackMining",
//       dates: "May 12th - 14th, 2017",
//       location: "Toronto, Ontario",
//       description: "Developed neural network to optimize a mining process",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//       links: [],
//     },
//     {
//       title: "Waterloo Equithon",
//       dates: "May 5th - 7th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "SpaceApps Waterloo",
//       dates: "April 28th - 30th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/earthwatch",
//         },
//       ],
//     },
//     {
//       title: "MHacks 9",
//       dates: "March 24th - 26th, 2017",
//       location: "Ann Arbor, Michigan",
//       description:
//         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/threejs-planes",
//         },
//       ],
//     },
//     {
//       title: "StartHacks I",
//       dates: "March 4th - 5th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
//       win: "1st Place Winner",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-ionic",
//         },
//         {
//           title: "Source (Server)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-rails",
//         },
//       ],
//     },
//     {
//       title: "QHacks II",
//       dates: "February 3rd - 5th, 2017",
//       location: "Kingston, Ontario",
//       description:
//         "Developed a mobile game which enables city-wide manhunt with random lobbies",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/human-huntr-react-native",
//         },
//         {
//           title: "Source (API)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/human-huntr-rails",
//         },
//       ],
//     },
//     {
//       title: "Terrible Hacks V",
//       dates: "November 26th, 2016",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mock of Windows 11 with interesting notifications and functionality",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//         },
//       ],
//     },
//     {
//       title: "Portal Hackathon",
//       dates: "October 29, 2016",
//       location: "Kingston, Ontario",
//       description:
//         "Developed an internal widget for uploading assignments using Waterloo's portal app",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/UWPortalSDK/crowmark",
//         },
//       ],
//     },
//   ],
// } as const;
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaibhav Verma",
  initials: "VV",
  url: "https://github.com/vaibhav-verma", // Update with your personal site if applicable
  location: "Bhopal, India",

  description:
    "Third-year B.Tech Computer Science student with hands-on expertise in Full-Stack Development (MERN) and Machine Learning.",

  summary:
    "Delivered production-ready projects including a feature-rich fitness tracker (FitPal), brain tumor detection system using PyTorch and BRATS dataset (NeuroVision), OSINT-based facial identification, and equipment parameter analytics. Proficient in React.js, Node.js, Express, MongoDB, Python, REST APIs, Git, and modern tooling.",

  avatarUrl: "/pfp.jpg",

  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PyTorch",
    "TensorFlow",
    "HTML5",
    "CSS3",
    "Git",
  ],

  services: [
    {
      title: "Full-Stack Development",
      description:
        "Building production-ready web applications using the MERN stack (MongoDB, Express, React, Node.js) and modern UI tools.",
      icon: "⚡",
    },
    {
      title: "Machine Learning",
      description:
        "Developing deep learning models for image processing and data analysis using PyTorch, TensorFlow, and Python.",
      icon: "🧠",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React.js, Tailwind CSS, and GSAP.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Designing robust server-side logic and RESTful APIs using Node.js, Express, and MongoDB Atlas.",
      icon: "🛠",
    },
  ],

  availability: {
    status: "Available",
    message: "Open to internships and software engineering opportunities",
  },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "vaibhav.23bce11700@vitbhopal.ac.in",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaibhav-verma", 
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vaibhav-verma", 
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vaibhav.23bce11700@vitbhopal.ac.in",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // Work experience intentionally hidden until real internship/work entries are available.
  ],

  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vitbhopal.ac.in",
      degree: "B. Tech in computer science engineering",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/250px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Aster Public School",
      href: "#",
      degree: "CBSE Boards 12th (PCM)",
      logoUrl: "",
      start: "2022",
      end: "2023",
    },
  ],

  pprojects: [
    {
      title: "FitPal- Fitness Tracker",
      href: "#",
      dates: "11 2024",
      active: true,
      description:
        "Developed Fitpal- track nutrition, calculate BMI, suggest exercises based on goals, and visualize progress via graphs. Features a responsive UI and integrated backend services.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaaiiibbhav/Fitpal2026",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://fitpal2026-frontend-59gy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fitpal.png",
      video: "",
    },

    {
      title: "Secure-OSINT-FaceID",
      href: "https://github.com/vaibhav-verma/Secure-OSINT-FaceID",
      dates: "2026",
      active: true,
      description:
        "OSINT-driven facial identification system developed under the EPICS framework. Integrates Computer Vision with Open-Source Intelligence to identify individuals and automatically trigger web-scraping for unrecognized faces, with dedicated modules for consent management and audit logging.",
      technologies: [
        "Python",
        "MediaPipe",
        "OpenCV",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "Selenium",
        "BeautifulSoup",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaibhav-verma/Secure-OSINT-FaceID",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "NeuroVision- Brain Tumor Detection",
      href: "#",
      dates: "04 2025",
      active: true,
      description:
        "Developed a machine learning model to process .nifty MRI scans and detect brain tumors using the official BRATS dataset. Implemented preprocessing pipeline with NiBabel, NumPy, and OpenCV.",
      technologies: ["Python", "PyTorch", "TensorFlow", "NiBabel", "NumPy", "OpenCV"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaibhav-verma/NeuroVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thumbnailgo.png",
      video: "",
    },

    {
      title: "Equipment Parameter Insights",
      href: "https://github.com/vaibhav-verma/Equipment-Parameter-Insights",
      dates: "11 2025",
      active: true,
      description:
        "A powerful hybrid application (Web + Desktop) for analyzing, visualizing, and reporting chemical equipment data. Features automated reporting and interactive data charts.",
      technologies: [
        "Django+DRF",
        "React+Chart.js",
        "Pandas",
        "PyQt5",
        "ReportLab",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaibhav-verma/Equipment-Parameter-Insights",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/myportfolio.png",
      video: "",
    },
  ],
} as const;
