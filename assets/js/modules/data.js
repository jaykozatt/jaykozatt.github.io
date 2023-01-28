// Local project data

export const projects = [
	{
		id: 1,
		name: "The Prisoner: Dread or Trust",
		projectLink:"https://jaykozatt.itch.io/the-prisoner",
		projectSrc:"https://github.com/AN-Studio/Brackeys-Game-Jam-2022",
		slides: [
			{
				title: "1 Inception",
				media: `<img src="assets/css/images/slideshow/the-prisoner/1.jpg"></img>`,
				text: 
					`<p>
						<b>The Prisoner</b> was my third game jam project. It was conceptualised for 2022’s second <i>Brackeys Game Jam</i>, another gamedev marathon, this one spanning over the course of a whole week. In it, participants are expected to fully carry out the designing and prototyping of a single game, following a theme provided by the organising committee. 
					</p>
					<p>
						This event that took place in <b>August 2022</b>, saw the theme <i>“You’re not alone”</i> and a total participation count of 1,077 separate entries into the competition.					
					</p>`, 
			},
			{
				title: "2 The Team",
				media: `<img src="assets/css/images/slideshow/the-prisoner/2.jpg"></img>`,
				text: 
					`<p>
						This time around, I was joined by the same 2 other souls with whom I participated in the GMTK Game Jame, so the roles ended up distributed in this manner: <b>John Bone</b> as the artist; <b>Ram99</b> as the musician; and myself, <b>Jay Kozatt</b>, as the game designer, programmer, storywriter and audio designer.
					</p>
					<p>
						Over the course of this presentation you’ll notice that, compared to what was the case for the GMTK Game Jam, a fair amount of tasks fell upon my shoulders that weren’t within my main roles as programmer and game designer. Though, the reason behind this increasingly lopsided distribution of responsibilities was due to prior commitments from the other members of the team. 					
					</p>`, 
			},
			{
				title: "3 The Goal of the Project",
				media: `<img src="assets/css/images/slideshow/the-prisoner/3.jpg"></img>`,
				text: 
					`<p>
						Coming fresh from our success in the GMTK Game Jam, I was set on creating an assorted collection of games from different genres, and building upon the experiences acquired on the previous event.
					</p>
					<p>
						As such, the main goal of this project was simply to create a kind of game that <b>pushed our boundaries</b> and took us outside of our comfort zones.					
					</p>`, 
			},
			{
				title: "4.1 The Design Challenge",
				media: `<img src="assets/css/images/slideshow/the-prisoner/4.1.jpg"></img>`,
				text: 
					`<p>
						With a theme that so obviously pushed us as designers into the horror genre, this time around I ended up going with the flow of what first came to mind when reading that theme.
					</p>
					<p>
						<b>“You’re not alone”</b> brings to mind thoughts of isolation and companionship. And since, ironically, I’d have to spend most of the event working alone and only getting support right at the end due to my team’s prior commitments, many design choices fell mostly unto my hands.
					</p>
					<p>	
						Quite a fitting setup for that kind of theme now that I think about it. A journey alone, in which I only get to experience the power of companionship right at the end.	
					</p>`, 
			},
			{
				title: "4.2 \“But, hey! That’s just a Theory… A Game Theory!\”",
				media: `<img src="assets/css/images/slideshow/the-prisoner/4.2.jpg"></img>`,
				text: 
					`<p>
						For whatever reason, once I gave myself into the idea of horror, the brainstorming session went pretty smoothly.
					</p>
					<p>
						John nudged me in that direction, and given that on previous days we had just finished playing a Roblox horror game called “The Backrooms” on his recommendation, the idea of horror was fresh on our minds.
					</p>
					<p>
						I decided to go with a bit of an unconventional take on the <b>“prisoner’s dilemma”</b>, that’s one of most famous thought experiments in the field of mathematical game theory, and pitched to my team the idea of being a prisoner forced to play a game of trust and betrayal with another inmate, that just so happens to also be a “monster”.
					</p>`, 
			},
			{
				title: "4.3 The dilemma begins… 2D or 3D?",
				media: `<img src="assets/css/images/slideshow/the-prisoner/4.3.jpg"></img>`,
				text: 
					`<p>
						One of the major obstacles we faced with this theme, and having given ourselves into the horror genre, was regarding the question of <b>presentation</b>.
					</p>
					<p>
						While there have been 2D horror games that are quite effective at evoking dread in its players despite the immersion handicap that is a 3rd person perspective… it just didn’t seem like such perspective would benefit our game’s experience. So I was itching to make something 3D in first person, despite our lack of experience with the format. It just seemed like the most effective <b>perspective</b> to convey the experience we were trying to craft.
					</p>
					<p>
						Unfortunately, John didn’t feel like his 3D modelling skills were up to par, so I had to scrap the idea of 3D, and settle for a simple 2D visual novel format. However, we’d see that later down the road, I just couldn’t be satisfied with how the game was turning out in 2D; so I pushed for the middle ground in the shape of a 3D space, with a 2D monster. 
					</p>
					<p>
						<b>Welcome to the era of 2.5D!</b>
					</p>`, 
			},
			{
				title: "5 The Tools and Implements",
				media: `<img src="assets/css/images/slideshow/the-prisoner/5.jpg"></img>`,
				text: 
					`<p>
						Here there are mostly no surprises. Coming fresh from the previous game jam in which we worked together, it only made sense to keep using many of the same tools, namely: <b>Unity</b> as our game engine, <b>Adobe Illustrator</b> as our illustration software, and <b>FMOD Studio</b> as our sound effects engine.
					</p>
					<p>
						However, over the course of development, I came across a new tool in the form of Inkle’s <b>“Ink”</b>, a narrative scripting language by the developers of renowned “Heaven’s Vault”, which facilitates the task of serving narrative text in a sequential manner, with tools that simplify the task of managing branching paths on a story.
					</p>
					<p>	
						Coupled with <b>Inky</b>, their proprietary text editor specially designed to work with their scripting language, we then had everything we needed to bring this promising idea into life.
					</p>`, 
			},
			{
				title: "6.1 Contribution Highlights: 2.5D Horror",
				media: 
					`<video autoplay loop>
						<source src="assets/css/images/slideshow/the-prisoner/6.1.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>`,
				text: 
					`<p>
						Despite previously having agreed to making a 2D game since John didn’t feel like his 3D modelling skills were up to par, I found that the look and feel of the game wasn’t quite matching up to the vision I had in my mind.
					</p>
					<p>
						There was something about how flat it all seemed, that just made me feel unthreatened by whatever happened on-screen. The 2D perspective was a <b>physical barrier</b> for the players, that separated them from whatever happened on the other side of the screen. And that just wouldn’t cut it.
					</p>
					<p>
						Since I was aiming for more of an <i>atmospheric eeriness</i>, rather than outright spooks in the form of the overused jumpscare, then that meant nothing short of a 3D space would cut it.
					</p>
					<p>	
						However, since I couldn’t rely on John to do the modelling, I chose to employ Unity’s <b>ProBuilder</b> in order to fabricate a couple of rudimentary models to use in-game. Plus, supplementing some of the more complex models (such as the toilet and rocks) with assets from Unity’s Asset Store.
					</p>
					<p>
						To that end, I had to get myself acquainted with many of the concepts of 3D work. From sample textures, normal maps, all the way into height maps. It was fascinating, but stressful under the tight deadline. Though, it allowed me to craft a scenario where <b>fear and paranoia</b> could truly arise.
					</p>`, 
			},
			{
				title: "6.2 It’s alive, it’s alive, IT’S ALIVE! (And it talks)",
				media: `<img src="assets/css/images/slideshow/the-prisoner/6.2.jpg"></img>`,
				text: 
					`<p>
						So now that the monster had space to live in (and a player to keep it company), it was now time to grant it its “voice” (in the form of text). But to handle that huge amount of text and all of the interactivity, no shoddy two bit script written in a day would do.
					</p>
					<p>
						Enter <b>“Ink”</b>, Inkle’s very own narrative scripting language.
					</p>
					<p>
						I am no stranger to crafting interpreters in order to parse text for quite diverse applications. So that’s why I can’t help but give a lot of praise to Inkle’s narrative ecosystem. Their scripting language allowed us to lay out narrative loops in the story without much effort, and add variations so that each pass through the loop was different on the surface, while maintaining a simple but repeating story structure.
					</p>
					<p>
						It also allowed us to seamlessly integrate computations into the fabric of the story, to keep track of story events in the background (such as the amount of player betrayals), granting us the ability to bake progression itself into the source text, which helped a lot with organisation.
					</p>
					<p>
						But not only that… 
					</p>
					<p>
						Thanks to one of Inkle’s GDC talk, I was made aware of a little tip that allowed us to tag certain lines within the story text, to pass important metadata to other systems. This essentially permitted us to sync audio cues with moments in the story, giving us fine control over the tone and ambience with a high degree of precision.
					</p>`, 
			},
			{
				title: "6.3 Animating (with code)",
				media: 
					`<video autoplay loop>
						<source src="assets/css/images/slideshow/the-prisoner/6.3.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>`,
				text: 
					`<p>
						One of the more significant tools I acquired for this project was the insanely useful <b>“DOTween”</b>. 
					</p>
					<p>
						I’m not kidding when I say that almost everything in the game had a snippet of code that featured DOTween. Everything from a fade in/out effect, to the movement of the gates,... even the intro and outro of the game!
					</p>
					<p>
						<b>DOTween</b> is just way too useful for a programmer like me that has a penchant for visuals. And so, in a project where I had to be very self-reliant due to my teammates’ circumstances, DOTween allowed me to do more, with less time and higher precision.					
					</p>`, 
			},
			{
				title: "7 The Outcome",
				media: `<img src="assets/css/images/slideshow/the-prisoner/7.jpg"></img>`,
				text: 
					`<p>
						Sadly, not at all stories have <b>happy endings</b>.
					</p>
					<p>
						This project was plagued by significant bouts of <b>bad luck</b>. Starting with the fact that the team was unable to work at full capacity; it then followed a lengthy <b>service outage</b> of several weeks for my internet service provider, which left me unable to communicate with my team towards the end of the development cycle. And it also affected my ability to acquire assets from the web, and to promote the game during the voting period.
					</p>
					<p>
						Adding to that, all of those obstacles <b>slowed us down</b> enough so that we were unable to do proper testing of the game. Which allowed game-breaking bugs to slip between the cracks, and made it impossible for players to reach any of the endings (there was even another that caused the real monster’s appearance to not display correctly when the story called for it).
						</p>
						<p>
						But even then… EVEN THEN! Despite all the <b>hardship</b>, I was astounded by the reception, for a game that received no promotion and contained game-breaking bugs.
						</p>
						<p>
						The game was <b>ranked #335</b> out of 1077 entries, and praised for its story and <b>innovative</b> take on the “prisoner’s dilemma”.					
					</p>`, 
			},
			{
				title: "8 Lessons and Takeaways",
				media: `<img src="assets/css/images/slideshow/the-prisoner/8.jpg"></img>`,
				text: 
					`<p>
						While the game wasn’t a complete failure (it was even a success in some regards), in retrospect it is quite obvious to me that I took on a great <b>many risks</b> for this entry.
					</p>
					<p>
						Though, as stated initially, that was the fundamental goal of this project. <b>To push our boundaries.</b>
					</p>
					<p>
						It was a <b>risky endeavour</b> from the moment I pitched the horror genre to my team. But it allowed me to grow so much so fast, that if I was asked if I would dare do it again, I’d say yes.
					</p>
					<p>
						I got introduced to 3D, and it has expanded my personal repertoire of tools. It allowed me to <b>experiment with horror</b>, and stretched my creative muscles once again.
					</p>
					<p>
						If anything… I’m quite grateful for the experience, as this fit very well in line with my personal ethos: 
					</p>
					<p>
						<b>Always be bold. Push your boundaries.</b>
					</p>
					<p>
						No matter the end result. Even failures will always just be simple preludes to <b>future success</b>. 					
					</p>`, 
			},
			{
				title: "9 The Game TODAY",
				media: 
					`<img src="assets/css/images/cover-img/the-prisoner.png"></img>`,
				text: 
					`<p>
						So yeah… This was <b>“The Prisoner: Dread or Trust”</b>. 
					</p>
					<p>
						An experimental dive of mine into the realm of horror. A short experience for players, and a test of my personal endurance and determination.
					</p>
					<p>
						The game-breaking bugs have now been fixed, and the story was capped off by introducing both new intro and ending sequences. And a subtle overhaul of the game’s graphics was also done as well, just to give it that tiny bit of extra polish.
					</p>
					<p>
						Nowadays, the game still receives occasional visits and downloads, despite the fact I’m still not promoting it in any way, shape or form. Though I imagine that's probably because itch.io is a store quite sought after for its indie horror titles.
					</p>
					<p>
						Hope you enjoyed this little dive into one of my most challenging projects.					
					</p>`, 
			},
		],
	},
	{
		id: 2,
		name: "All Bets Are Off!",
		projectLink:"https://jaykozatt.itch.io/all-bets-are-off",
		projectSrc: "https://github.com/jaykozatt/AllBetsAreOff",
		slides: [
			{
				title: "1 Inception",
				media: `<img src="assets/css/images/slideshow/all-bets/1.jpg"></img>`,
				text: 
					`<p>
						<b>All Bets Are Off!</b> was born out of the <i>GMTK Game Jam</i>, a yearly gamedev marathon in which participants fully carry out the process of <i>designing</i> and <i>prototyping</i> a single game, while sticking to an overarching theme provided by the organisers. And all of that under the span of <i>48 hours</i>.  
					</p>
					<p>
						The event that took place on <b>July 2022</b> saw the theme <i>“Roll of the Dice”</i>. Which also happened to be our first game jam ever, with the simple aim to challenge ourselves to make a completely self-contained product <b>under the 48-hours deadline</b> (feat which we had never accomplished before).
					</p>`, 
			},
			{
				title: "2 The Team",
				media: `<img src="assets/css/images/slideshow/all-bets/2.jpg"></img>`,
				text: 
					`<p>
						The project in question was initially carried out by a 3-man team, namely: <b>John Bone</b> as the artist; <b>Ram99</b> as the musician and audio designer; and myself, <b>Jay Kozatt</b>, as the overall programmer and game designer. Though afterwards, when the project got revisited, in addition to my previous roles, I took over the roles of artist and sound designer, with support from Ram99 still as the musician.
					</p>`, 
			},
			{
				title: "3 The Goal of the Project",
				media: `<img src="assets/css/images/slideshow/all-bets/3.jpg"></img>`,
				text: 
					`<p>
						As stated before, our initial goal was simply to deliver a <b>minimum viable product</b> (MVP) under the tight constraint of a 48-hours development cycle, despite our lack of experience with the event format. Which we managed to 
						achieve rather successfully, and with high overall praise during the event.
					</p>`, 
			},
			{
				title: "4.1 The Design Challenge",
				media: `<img src="assets/css/images/slideshow/all-bets/4.1.jpg"></img>`,
				text: 
					`<p>
						Besides the theme itself, there were 2 additional constraints I imposed upon ourselves after the theme was revealed, and those were the following:
					</p>
					<ol>	
						<li>We would <b>avoid randomness</b> as a mechanic. This was as a response to how heavily the theme geared everyone towards that kind of mechanic.</li> 
						<li>We would aim for a <b>scope</b> that allowed functioning gameplay on <i>day one</i>, so that <i>day two</i> could be dedicated entirely to polish. This was simply to keep in check our inexperience, so that we wouldn't scope for something that could only be done in two days at best; which would surely get us in trouble.</li>
					</ol>
					<p>
						That way, we hoped to produce an entry that <b>stood out</b> from the crowd, especially considering how restrictive the theme already was.
					</p>
					`, 
			},
			{
				title: "4.2 Our First Ideas",
				media: `<img src="assets/css/images/slideshow/all-bets/4.2.jpg"></img>`,
				text: 
					`<p>
						We spent our first 3 hours debating ideas, until we found something that sounded promising. Some of the ideas we initially had, attempted to play around with the meaning of “rolling” and “dicing”.
					</p>
					<p>
						Ram99 pitched us a platformer with die-controlled random effects such as anti-gravity and such, but we concluded the idea was more of a supporting mechanic, rather than a core one.
					</p>
					<p>	
						I myself got stuck for a while thinking about a victorian-era serial killer (like Jack The Ripper) that rolls around akin to Sonic The Hedgehog, slicing and dicing enemies all over the place. Though I ultimately dismissed 
						that idea too, since it would deal with severe scope-creep issues, such as the ones that are already well documented for Sonic-like games.
					</p>
					<p>	
						So we kept searching…
					</p>`, 
			},
			{
				title: "4.3 We’ve got a Winner!",
				media: `<img src="assets/css/images/slideshow/all-bets/4.3.jpg"></img>`,
				text: 
					`<p>
						As I began to think and stretch the meaning of “rolling” quite liberally, which is defined as “(to) move or cause to move in a particular direction by turning over and over on an axis”, I started to approach more and more to the concept of “spinning” and “wrapping”, instead of “rolling” (Yes, I know I stretched the meaning a whole lot. Don’t question it. What matters is that it turned out fun). 
					</p>
					<p>	
						I began to play around with a pair of broken headphones I had laying around on my desk, spinning them over my head like some crazy cowboy. And then it dawned on me: “Let’s have the die roll around objects, tangling them up with a wire!”. The idea was tricky to explain, so I drew a couple of sketches, prepared a pitch, and submitted it to my team. And since they both seemed to like it, we quickly began to lay things out.
					</p>
					<p>	
						My first thought was to make the level structure into a kind of “gauntlet”. But once John got me his first sketches about his concept for an arena, I started to realise that he was right, and that the right direction to take the game into was a “battle arena”.					
					</p>`, 
			},
			{
				title: "5 The Tools and Implements",
				media: `<img src="assets/css/images/slideshow/all-bets/5.jpg"></img>`,
				text: 
					`<p>
						Prior to the event, we all had previously worked with each other on preceding projects. So by this point, we all had conventions established that pretty much didn’t require any discussion. 
					</p>
					<p>
						John and I had the most prior work together, so the choices of <b>Unity</b> as the <i>game engine</i> and <b>Adobe Illustrator</b> as the <i>illustration software</i> were already set in stone due to our familiarity with the tools, and the synergies we already had established. 
					</p>
					<p>
						The issue was Ram99, as our recent newcoming old friend. Since our prior work together had been under a different leadership, and a different Sound Lead, that pushed for Wwise as his audio middleware of choice. But now that he wasn’t around, we would have to make-do with something that fit us better. So in order to make it easier on all of us, I suggested using <b>FMOD</b> as an <i>audio middleware</i> substitute (since it was a friendlier tool to my personal know-how as a programmer), and he agreed.					
					</p>`, 
			},
			{
				title: "6.1 Contribution Highlights",
				media: `<img src="assets/css/images/slideshow/all-bets/6.1.jpg"></img>`,
				text: 
					`<p>
						Getting the core mechanic feeling right was my main priority during the event. The <b>spinning</b> of the die, and the feedback from <b>collisions</b>, as well as the <b>wrapping</b> around targets, were the things that would make or break the experience. 
					</p>
					<p>
						I made use of Unity’s <b>FixedJoint2D</b> component to model the wire that'd connect the player character to the die, since that component allowed me to limit the distance away from the PC that the die could go. Meaning that I could set up the upper limit to, say… 5 units, and the die would be able to move within that radius away from the player.
					</p>`, 
			},
			{
				title: "6.2 Make it Spin!",
				media: 
					`<video autoplay loop>
						<source src="assets/css/images/slideshow/all-bets/6.2.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>`,
				text: 
					`<p>
						With that joint as a base, I applied a <b>constant force</b> with a vector component parallel to the circular motion, and vector component pushing away from the player, so that both components together would result in a motion that pulls the die away, right up to the upper limit set, and into a circular trajectory aided by the joint. 
					</p>
					<p>
						Add to that some provisions that adjust the <b>relative direction</b> of the force according to the direction of motion, and you get a die-mace that spins smoothly around the player, and is capable of bouncing off of obstructions in one single continuous motion with almost no hard stops, and that feels great to control.
					</p>`, 
			},
			{
				title: "6.3 A Tangly Mess",
				media: 
					`<video autoplay loop>
						<source src="assets/css/images/slideshow/all-bets/6.3.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>`,
				text: 
					`<p>
						To make the wire able to entangle objects, I made the FixedJoint2D component <b>reciprocal</b>. Meaning that just as there’s a joint that connects the die to the player, there is also a joint that reciprocates that connection from the player to the die. So that when an entanglement occurs, I can change to what object each joint is connected to. And this allows me to introduce said object into the middle of the chain. 
					</p>
					<p>
						And this result in a <b>chain of links</b> that connects the die to the object, and the object to the player.
					</p>`, 
			},
			{
				title: "6.4 Smashing the Competition",
				media: `<img src="assets/css/images/slideshow/all-bets/6.4.jpg"></img>`,
				text: 
					`<p>
						Finally, I rounded off the whole package by enabling the player to execute an <b>instant tackle</b> towards the entangled object that would obliterate any enemies in its path. And with that, we have completed the implementation of the core capabilities of the player.
					</p>
					<p>
						So to top it all off, I created a simple <b>Follow AI</b> on a <i>pulse timer</i>, to add it to the enemies that would spawn also on a timer; and the core gameplay work was finally done.					
					</p>`, 
			},
			{
				title: "7 Game Jam Results",
				media: `<img src="assets/css/images/slideshow/all-bets/7.jpg"></img>`,
				text: 
					`<p>
						The game was a small success at the event. Many people praised it for its creativity and originality, especially within a sea of randomisation and repetitive dice mechanics. So much so, that our project was <b>ranked #742</b> out of over 6100 other competing titles, in terms of <i>creativity</i>; and <b>ranked #850 overall</b>, from aggregating all the criterias of <i>creativity</i>, <i>enjoyment</i> and <i>presentation</i>.
					</p>
					<p>
						Sadly, our ranking was held back by our weak points in terms of presentation and enjoyment, as one of the most often cited <b>pain points</b> was that people thought that the die getting entangled was a bug, and therefore missed out on the tackle, which was where the most fun was at.					
					</p>`, 
			},
			{
				title: "8 Lessons and Takeaways",
				media: `<img src="assets/css/images/slideshow/all-bets/8.jpg"></img>`,
				text: 
					`<p>
						The main lesson I got out of this project was regarding the importance of <b>good intuitive UI</b>, to help bridge the gap in knowledge between a new player and an experienced player as fast as possible.
					</p>
					<p>
						No matter how fun your game is, if the people playing it can’t <b>figure out</b> how to enjoy themselves with it, in a timely manner, then you’ll definitely lose them to the next experience that comes their way. And that is a lesson I’ve taken close to heart as I’ve attempted to improve on this game afterwards.
					</p>
					<p>
						I wasn’t experienced enough in <b>UX/UI</b> when we went into this event, and it showed. 
					</p>
					<p>
						In particular, it hurt pretty badly seeing the same kind of <b>feedback repeated over and over</b>. It didn't really bother me getting feedback that pointed out mistakes I made. That kind of feedback is invaluable!
					</p>
					<p>
						Rather, it was <b>being unable to do anything about it</b>, due to the restrictions of the event's rating period, that hurt me the most. Since I'm quite a proactive guy, being forced to sit tight when an issue has already been clearly defined just hurts my soul.
					</p>
					<p>
						But well... Regardless of that, the <b>experience was invaluable</b>. And it honestly felt like it leveled up my skills exceptionally fast in a very short period of time. So I really cherish this experience overall.
					</p>`, 
			},
			{
				title: "9 The Game TODAY",
				media: 
					`<iframe frameborder="0" src="https://itch.io/embed-upload/7191780?color=ac313f" allowfullscreen="" width="100%" height="auto" scrolling="no" referrerpolicy=origin><a href="https://jaykozatt.itch.io/all-bets-are-off">Play All Bets Are Off! on itch.io</a></iframe>`,

				text: 
					`<p>
						So here I present to you a chance to experience the game <b>for yourself</b>, in its current state. 
					</p>
					<p>
						A small set of new additions and adjustments have been made over time, as well as some UI improvements that hope to have fixed those issues regarding lack of knowledge about the controls. 
					</p>
					<p>
						The starting arena configuration has also been made <i>gentler</i>, so as to grant new players some breathing room to get acquainted with the controls before the enemies storm in. As this was an issue that I observed came up quite frequently during <b>playtesting sessions</b> by <i>new</i>, and <i>very casual</i> players.
					</p>
					<p>
						Regardless, I leave it to you to draw your own conclusions. And may you have <b>a good time</b> with it.					
					</p>`, 
			},
		],
	},
	{
		id: 3,
		name: "Rogue Assembly",
		projectLink: "https://drive.google.com/file/d/1-xBybK2vGnGGrcAiZskuFoJIYc-Cl_Ye/view?usp=sharing",
		projectSrc: "",
		slides: [
			{
				title: "",
				media: `<img src=""></img>`,
				text: 
					`<p>
						
					</p>`, 
			},
			{
				title: "",
				media: `<img src=""></img>`,
				text: 
					`<p>
						
					</p>`, 
			},
			{
				title: "",
				media: `<img src=""></img>`,
				text: 
					`<p>
						
					</p>`, 
			},
		]
		
		// slides: {
		// 	title: [
		// 		'1. Inception',
		// 		'2. The Team',
		// 		"3.1. The Design Challenge",
		// 	],
		// 	media: [
		// 		`assets/css/images/cover-img/rogue-assembly.jpg`,
		// 		`assets/css/images/slideshow/rogue-assembly/1.jpg`,
		// 		`assets/css/images/slideshow/rogue-assembly/2.jpg`,
		// 	],
		// 	descriptions: [
		// 		"<p>This game remains currently UNRELEASED because it didn't make it to the deadline of the "+
		// 		"Wowie Game Jam 2022. Also... SORRYYYYY! (T-T) This section is under construction...</p>",

		// 		"<p>SORRYYYYY! (T-T) This section is under construction...</p>",

		// 		"<p>SORRYYYYY! (T-T) This section is under construction...</p>",
		// 	],
		// },
	},
];
