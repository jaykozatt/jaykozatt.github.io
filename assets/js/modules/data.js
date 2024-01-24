// Local project data

export const projects = [
	{ // The Prisoner: Dread or Trust
		id: 1,
		name: "The Prisoner: Dread or Trust",
		projectLink:"https://jaykozatt.itch.io/the-prisoner",
		projectSrc:"https://gitlab.com/jaykozatt/the-prisoner",
		slides: [
			{
				title: "Quick Summary",
				media: `<img src="assets/css/images/cover-img/the-prisoner.png"></img>`,
				text: 
					`<p>
						<b>The Prisoner</b> was conceptualised for the first time in <b>August 2022</b>, for the Brackeys Game Jam.
					</p>
					<p>
						Originally made as an attempt to explore the horror genre, and dip our toes in 3D work. The game was developer by a crew of 3 people, myself included, of whom I served once again as <b>programmer, game designer, overall coordinator, in addition to writer.</b> However, due to the limited availability of the rest of team members, I also assumed the roles of <b> audio designer, and environmental designer.</b>
					</p>
					<p>
						To make this project happen, we had to leverage third-party 3D models and textures, as well as sound effects with minor modifications. And on the code front, I leveraged the <b>DOTween</b> plugin to do our animations, and <b>Inkle Studio's "Ink"</b> (their open-source narrative scripting language) to coordinate the story dialogue with the collection of sound effects orchestrated with <b>FMOD Studio.</b>
					</p>
					<p>
						This game's development was <b>plagued by many unfortunate events and faced many obstacles.</b> However, despite all of that, it still managed to get a good reception in the jam, <b>being rated #335 overall</b> from over 1000 entries.
					</p>`, 
			},
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
					</p>
					<p>
						(If you wish to read more in depth about what was <b>my approach to designing this game,</b> I wrote an <a href="">article</a> on Medium in which I go into much <b>more detail on the topic of emotions, how to evoke them, and combine them</b> in order to produce new more intense experiences. The article uses a more technical language in contrast to these lines that focus more on storytelling angle.)
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
						However, since I couldn’t rely on John to do the modelling, I chose to employ Unity’s <b>ProBuilder</b> package in order to create a couple of rudimentary models to use in-game. And whatever I could make that way (such as the toilet and rocks), I supplemented with third-party models from Unity’s Asset Store.
					</p>
					<p>
						To that end, I had to get myself acquainted with many of the concepts of 3D work. From sample textures, normal maps, all the way into height maps. It was fascinating, but stressful under the tight deadline. Though, it allowed me to craft a scenario where <b>fear and paranoia</b> could truly arise.
					</p>`, 
			},
			{
				title: "6.2 It’s alive, it’s alive, IT’S ALIVE! (And it talks)",
				media: `<img src="assets/css/images/slideshow/the-prisoner/6.2.png"></img>`,
				text: 
					`<p>
						So now that the monster had space to live in (and a player to keep it company), it was now time to grant it its “voice” (in the form of text). But to handle that huge amount of text and all of the interactivity, no shoddy two bit script written in a day would do.
					</p>
					<p>
						Enter <b>“Ink”</b>, Inkle Studio’s very own narrative scripting language.
					</p>
					<p>
						I am no stranger to crafting interpreters in order to parse text for quite diverse applications. So that’s why I can’t help but give a lot of praise to <b>Inkle’s narrative ecosystem.</b> Their scripting language allowed us to lay out <b>narrative loops</b> in the story without much effort, and <b>add variations</b> so that each pass through the loop was different, while maintaining a simple but repeating story structure.
					</p>
					<p>
						<b>It also allowed us to seamlessly integrate computations into the fabric of the story,</b> to keep track of story events in the background (such as the amount of player betrayals), granting us the ability to <b>bake progression itself into the source text,</b> which helped a lot with organisation.
					</p>
					<p>
						But not only that… 
					</p>
					<p>
						Thanks to one of Inkle’s GDC talk, I was made aware of a little tip that allowed us to <b>tag certain lines</b> within the story text, to pass important <b>metadata to other systems.</b> This essentially permitted us to <b>sync audio cues with moments in the story,</b> giving us fine control over the tone and ambience with a high degree of precision.
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
					// `<img src="assets/css/images/cover-img/the-prisoner.png"></img>`,
					`<iframe frameborder="0" src="https://itch.io/embed-upload/9508299?color=000000" allowfullscreen="" width="100%" height="auto"><a href="https://jaykozatt.itch.io/the-prisoner">Play The Prisoner: Dread or Trust on itch.io</a></iframe>`,
				text: 
					`<p>
						But yeah… This was <b>“The Prisoner: Dread or Trust”</b>. 
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
	{ // All Bets Are Off!
		id: 2,
		name: "All Bets Are Off!",
		projectLink:"https://jaykozatt.itch.io/all-bets-are-off",
		projectSrc: "https://gitlab.com/jaykozatt/AllBetsAreOff",
		slides: [
			{
				title: "Quick Summary",
				media: `<img src="assets/css/images/cover-img/all-bets-are-off.png"></img>`,
				text: 
					`<p>
						<b>All Bets Are Off!</b> was first conceptualised in July 2022 for the <i>GMTK Game Jam</i>. 
					</p>
					<p>
						We developed the initial prototype as a <b>team of 3 people</b>, of whom <b>I operated as game designer, programmer, and overall coordinator.</b> 
					</p>
					<p>
						<b>My main contributions</b> to the project were in the realm of the <b>game's core mechanics</b> (the die's circular movement, bounce, entanglement, the player tackle, enemy AI and spawning schedule, among many other more minor features), as well as the <b>UI design, main menu art, and promotional artwork.</b>
					</p>
					<p>
						After the prototype was released for the game jam, I continued development of the game on my own, and assumed all of the other roles except for music composition, which remained in the hands of the original team's composer.
					</p>
					<p>
						<b>All of the game's assets are our original creations,</b> and are custom made for this game, except for the sound effects.
					</p>
					<p>
						<b>There's been discussion with publishing label "Noodlecake" to get their support, and they've manifested their interest in the project,</b> with the caveat that the issue of player retention be solved before we can come to an agreement for <b>publishing in 2024.</b>
					</p>
					<p>
						Therefore, this project still remains a <b>work in progress.</b>
					</p>`, 
			},
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
						<li>We would aim for a <b>small scope</b> that allowed functioning gameplay on <i>day one</i>, so that <i>day two</i> could be dedicated entirely to polish. This was simply to keep in check our inexperience, so that we wouldn't scope for something that could only be done in two days at best; which would surely get us in trouble.</li>
					</ol>
					<p>
						That way, we hoped to produce an entry that <b>stood out from the crowd,</b> especially considering how restrictive the theme already was.
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
						I made use of Unity’s <b>FixedJoint2D</b> component to model the wire that'd connect the player character to the die, since that component allowed me to limit the distance away from the player that the die could go. This effectively mimicked the way in which a rope allows free movement while lax, and opposes away-movement when fully tensed.
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
						With that joint as a base, I decided to <b>apply a constant force with a component in the direction of a circular motion, and another component in the direction of a centrifugal force,</b> so that both components together would result in a motion that pulls the die away, right up to the rope's tension state, and into a circular trajectory aided by the joint. 
					</p>
					<p>
						Additionally, I added some provisions that adjust the relative direction of said force, so that it matches the orientation of the motion, and you get a die-mace that spins smoothly around the player, and is capable of bouncing off of obstructions in one single continuous motion with almost no hard stops, and that feels great to control.
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
						To make the wire able to entangle objects, <b>I made the FixedJoint2D component reciprocal</b>. This simply means that there's both a link from the player to the die, and from the die to the player. So that when an entanglement occurs, I can change to what object each joint is connected to. And this allows me to introduce new linked objects into the middle of the chain. 
					</p>
					<p>
						And this result in a <b>chain of links</b> that connects the die to the object, and the object to the player.
					</p>`, 
			},
			{
				title: "6.4 Smashing the Competition",
				media: `<video autoplay loop muted>
							<source src="assets/css/images/slideshow/all-bets/6.4.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>`,
				text: 
					`<p>
						Finally, I rounded off the whole package by enabling the player to execute an <b>instant tackle</b> towards the entangled object that would <b>obliterate any enemies on its path.</b> And with that, we have completed the implementation of the core capabilities of the player.
					</p>
					<p>
						Finally, I created a simple <b>Follow AI</b> on a <i>pulse timer</i>, to add it to the enemies that would spawn also on a timer; and the core gameplay work was finally done.					
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
						Sadly, our ranking was held back by our weak points in terms of presentation and enjoyment, as one of the most often cited <b>pain points</b> was that people thought that the die getting entangled was a bug, and therefore missed out on the tackle, which is where the most fun is at.					
					</p>`, 
			},
			{
				title: "8 Lessons and Takeaways",
				media: `<img src="assets/css/images/slideshow/all-bets/8.png"></img>`,
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
						In particular, it hurt pretty badly seeing the same kind of <b>feedback repeated over and over</b>. 
					</p>
					<p>
						I didn't really mind getting feedback that pointed out mistakes I made. That kind of feedback is invaluable! However, <b>being unable to do anything about it</b>, due to the restrictions of the event's rating period, was a bit maddening. Since I'm normally quite a proactive guy, being forced to sit tight when an issue has already been clearly defined just hurts my soul.
					</p>
					<p>
						But well... Regardless of that, the <b>experience was invaluable</b>. And it honestly felt like it leveled up my skills exceptionally fast in a very short period of time. So I really cherish this experience overall.
					</p>`, 
			},
			{
				title: "9 Post-GameJam Polishing",
				media: `<img src="assets/css/images/slideshow/all-bets/9.png"></img>`,
				text: 
					`<p>
						After the GTMK game jam, I decided to join a couple other jams and gain some additional experience. I then came back to this project with renewed vigor, and the aim to properly polish this game into a market-worthy product. 
					</p>
					<p>
						First few items on the agenda were: to polish the visual presentation of the game, fix the game-breaking bugs that had appeared during the jam's rating period, add a new "endless mode" (the game's original goal was simply to survive 5 minutes), and expand upon the game's main verb by adding "roulette balls" that give new options to defeat enemies.
					</p>	
					<p>
						Once those were achieved, I made another pause to work other projects, before coming back once again.
					</p>`,
			},
			{
				title: "10.1 Learning from Giants",
				media: `<img src="assets/css/images/slideshow/all-bets/10.1.png"></img>`,
				text:
					`<p>
						After this second hiatus, <b>I brought with me the results of some playtesting sessions.</b> In which it became evident that while the game itself felt fun at its core to the players, it had some severe <b>retention issues.</b> Players enjoyed their sessions, but once they had played a few battles, <b>they felt they had seen whatever the game had to offer.</b> So the first priority was to figure out how to solve this issue.
					</p>
					<p>
						First attempt at solving the issue took me to studying similar games. <b>Devil Daggers</b> provided some good insights, and in particular from it <b>I mimicked their enemy spawning schedule,</b> which granted me the ability to <b>better control the pacing of the game</b> and better ease in new players in the beginning.
					</p>`,
			},
			{
				title: "10.2 More Solutions",
				media: `<video autoplay loop muted>
							<source src="assets/css/images/slideshow/all-bets/10.2.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>`,
				text:
					`<p>
						<b>I also changed the manner in which enemies spawned,</b> by creating an animation for the pillars that made it seem like said pillars deployed the enemies. This allowed me in turn to up the pressure on the player by getting spawn points closer to them. Which contrasts with the previous setup that only allowed them to spawn outside camera view, and resulted in instances that saw players left alone for way too long and forcing them to move around seeking excitement.
					</p>`,
			},
			{
				title: "10.3 New Enemies, New Challenges",
				media: `<video autoplay loop muted>
							<source src="assets/css/images/slideshow/all-bets/10.3.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>`,
				text:
					`<p>
						Additionally, <b>I created a new enemy type</b> that further tests the player's abilities and complement the behaviour of standard enemies. 
					</p>
					<p>
						Its behaviour is fairly simple. While regular enemies mindlessly push towards the player, regardless of context; these new enemies, nicknamed "Spinners" or "Flankers", compute a path towards the player using A* pathfinding to find a way to circle around masses of regular enemies, and hit the player from unexpected angles.
					</p>
					<p>
						However, since they were able to cover large distances on a single push, it became necessary to telegraph their attack somehow to avoid ambushing the player from off-screen. Therefore, I decided to make them take longer to charge an attack, and display a red area to showcase the path they'll follow.
					</p>
					<p>
						And finally, to differentiate them further from regular enemies, I made them immune to taking damage from die hits. But kept them vulnerable to roulette balls, and tackles. Also making them explode on death, which made them into useful projectiles to take out grounds of enemies.
					</p>`,
			},
			{
				title: "11 Publishing Ambitions",
				media: `<img src="assets/css/images/slideshow/all-bets/11.png"></img>`,
				text:
					`<p>
						I also had in mind adding a leaderboard to add a social meta-element to the game, with the hopes to finally address the dreaded retention issue.
					</p>
					<p>
						However, before implementing said leaderboard, <b>I sent a build to publishing label "Noodlecake",</b> with the hopes that it would peak their interest and provide me with some guidance on fixing the issues with the game (as well as provide marketing muscle, of course).
					</p>
					<p>
						<b>The response</b> was that they couldn't take the game under their wing on 2023, but that they had <b>very nearly accepted it.</b> And that I could <b>try submitting it again for consideration in 2024,</b> after I addressed the feedback they gave me (which essentially boiled down to the retention issue).
					</p>
					<p>
						And so, we arrive at the game's current date and state.
					</p>`, 
			},
			{
				title: "12 The Game TODAY",
				media: 
					`<iframe frameborder="0" src="https://itch.io/embed-upload/9499687?color=3f2832" allowfullscreen="" width="100%" height="auto" referrerpolicy=origin><a href="https://jaykozatt.itch.io/all-bets-are-off">Play All Bets Are Off! on itch.io</a></iframe>`,
					// `<iframe frameborder="0" src="https://itch.io/embed-upload/7267775?color=ac313f" allowfullscreen="" width="100%" height="auto" scrolling="no" referrerpolicy=origin><a href="https://jaykozatt.itch.io/all-bets-are-off">Play All Bets Are Off! on itch.io</a></iframe>`,
					// `<iframe frameborder="0" src="game-builds/all-bets/index.html" allowfullscreen="" width="100%" height="auto" scrolling="no" referrerpolicy=origin><a href="https://jaykozatt.itch.io/all-bets-are-off">Play All Bets Are Off! on itch.io</a></iframe>`,

				text: 
					`<p>
						Now that you've gotten to this point, here I present to you a chance to <b>experience the game for yourself</b>, in its current state. 
					</p>`, 
			},
		],
	},
	{ // Gaia's Revenge
		id: 3,
		name: "Gaia's Revenge",
		projectLink: "https://jaykozatt.itch.io/gaias-revenge",
		projectSrc: "https://gitlab.com/jaykozatt/gaias-revenge",
		slides: [
			{
				title: "Quick Summary",
				media: `<img src="assets/css/images/cover-img/gaias-revenge.png"></img>`,
				text: 
					`<p>
						This game prototype was initially conceptualised for the <b>GMTK Game Jam of July 2023.</b>
					</p>
					<p>
						Originally developed in an attempt to develop my skills on a new, different genre from those I had already explored before. This game was made by 2 people, of whom I served once again as <b>programmer and game designer.</b> As well as <b>UI designer</b>, and the <b>pixel artist behind the promotional art.</b>
					</p>
					<p>
						<b>All of the assets are original creations of ours.</b> Except for the current music track, which is being used as background music for the game. From said game assets, <b>I created all of the UI art and layout.</b>
					</p>
					<p>
						But my <b>main contributions</b> pertain to the design of the game, its rules, and the algorithms behind the behaviour of the AI, as well as tile placement validations and side-effects.
					</p>
					<p>
						<b>This game's development is in a very early stage.</b> And therefore, lacks a lot of the polish that'd normally be expected of a finished title. However, we have plans to eventually turn this concept into a proper mobile game.  
					</p>`, 
			},
			{
				title: "1 Inception",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/1.png"></img>`,
				text: 
					`<p>
						The game was born out of <b>2023's GMTK Game Jam,</b> a yearly game development marathon of <b>48 hours</b>. And this year's theme was <b>"Roles Reversed"</b>.
					</p>`, 
			},
			{
				title: "2 The Team",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/2.png"></img>`,
				text: 
					`<p>
						Despite our best efforts, this time around our usual team of 3 people: <b>John, the artist;</b> Ram99, the composer; and myself, <b>Jay Kozatt, the programmer;</b> was incomplete.
					</p>
					<p>
						Ram99 was unavailable at the time since he needed to take some final exams, and therefore he needed to study.
					</p>
					<p>
						And so, in the end, <b>it was only me and John on this occasion.</b> 
					</p>
					<p>
						Though, Ram did come around sporadically to give us some insights here and there, as much as his schedule allowed. But didn't contribute much more than that.
					</p>`, 
			},
			{
				title: "3.1 The Design Challenge",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/3.1.png"></img>`,
				text: 
					`<p>
						<b>"Roles Reversed"</b> was a fairly interesting theme to work around with. It was a tough theme, since it allowed for a broad range of ideas. However, many of those ideas were too simplistic interpretations.
					</p>
					<p>
						And so, one of the first ideas we came up with that held some potential was the concept of <b>"Nature vs. Man", rather than "Man vs. Nature".</b>
					</p>
					<p>
						This initially came in the form of Yggdrasil, the World Tree of Norse myth, <b>reconquering a Planet Earth that had been taken over fully by a planet-wide city,</b> a genuine ecumenopolis constructed by humanity. The idea was to make a real-time strategy game in which you reverse humanity's footprint. 
					</p>
					<p>
						<b>But this initial idea suffered from significant scope issues.</b> It was too big to execute in 48 hours.
					</p>`, 
			},
			{
				title: "3.2 Design On-the-Go!",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/3.2.png"></img>`,
				text: 
					`<p>
						I wanted us to keep exploring ideas for a while longer. However, a personal event cut our session short. And when I came back, we were forced to take whatever we had, and <b>figure out the details on the fly.</b>
					</p>
					<p>
						Just to get something going, I went with a <b>turn-based strategy game, isometric,</b> and the idea that placing tiles would have side-effects to interact with humanity.
					</p>
					<p>
						As hours went by, I started shaping up the rules little by little.
					</p>`,
			},
			{
				title: "3.3 The Game's Rules",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/3.3.png"></img>`,
				text:
					`<p>
						The game would be <b>inspired by Go,</b> the ancestral strategy boardgame of ancient China. The goal would be to <b>cover as much territory as possible</b> with your faction's tiles.
					</p>
					<p>
						There would be <b>7 different kinds of tiles</b> (3 for each faction, and the 1 empty tile), each with varying characteristics, advantages and disadvantages. Nature would have: Forest, Mountain, and River tiles. And humanity would have: Cities, Farms, and Mines.
					</p>
					<ul>
						<li><b>Plains:</b> are neutral ground. They offer no advantages or disadvantages, and make up the bulk of the map at the beginning of the game.</li>
						<li><b>Forests:</b> are meant to be Nature's basic tile. It isn't a particularly powerful tile, but as long as they are in an uninterrupted line, they are impenetrable. If they get flanked by a city, they get eaten and turned into a new city tile, which at the same time can flank another forest and cause a chain reaction devouring entire masses of vegetation. Essentially, they work like a <i>greek phalanx.</i></li>
						<li><b>Mountains:</b> are catastrophic events to adjacent human structures. They demolish all human tiles adjacent to them upon behind placed, turning them into plains, and cannot be devoured like forests. However, humans can build mines around them to fuel their expansion, granting them one extra move each turn, per mine. And can only be placed on empty plains.</li>
						<li><b>Rivers:</b> were meant to also be catastrophic events upon being placed, by granting Nature the ability to place them over plains, or any kind of human tile. Unfortunately, due to time constraints, they were nerfed to simply be impassable, and only able to be placed on empty plains as well. However, much like Mountains, they also allow humans to build farms adjacent to them, granting them an extra move each turn, per farm.</li>
						<li><b>Cities:</b> are the basic human tile. They offer no significant advantages or disadvantages. They simply expand humanities territory and reach. And can only be placed adjacent to another city tile, on an empty plain.</li>
						<li><b>Farms:</b> each grant one extra move per turn for humanity. Can be placed up to 2 tiles away from a city tile, on an empty plain, and only adjacent to a river.</li>
						<li><b>Mines:</b> also grant one extra move per turn for humanity. Can be placed up to 2 tiles away from a city tile, on an empty plain, but need to be adjacent to a mountain.</li>
					</ul>
					<p>
						You might have noticed from reading the description of each tile's abilities, that <b>humanity could potentially grow exponentially</b> and run away with the game. 
					</p>
					<p>
						<b>This is by design.</b> If not careful, a player can easily be overwhelmed by this exponential growth. So, in order to offset this power imbalance, <b>the player starts with a strong advantage</b> by being able to place tiles anywhere on the map, as long as it is empty. 
					</p>
					<p>
						This gives them <b>the capacity to quickly ward off whole sections of the map,</b> essentially containing any further human expansion in that direction. Much in the same way that geography influences the way in which nations and cultures expand in real life.
					</p>`, 
			},
			{
				title: "4.1 Contribution Highlights",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/4.1.png"></img>`,
				text: 
					`<p>
						From a technical standpoint, this game isn't exactly all that complex. At its core, it is simply made up of 3 moving parts, so to speak:
					</p>
					<ul>
						<li>
							<b>The Game Board,</b> which is the core of the game. It reports the current scores, tracks tile placements, and enforces the game's rules on such placements. It validates each tile, and interacts with the AI to communicate which moves are valid and which are not.
						</li>
						<li>
							<b>The Piece Dispensers,</b> that randomly administrate prefabs (pre-made configurations of tiles within a 9x9 grid) to the player, in order to be placed on the map each turn.  
						</li>
						<li>
							<b>And the Enemy AI,</b> which queries the map for valid moves, and always attempts to maximise its score by following the maxim that "more moves = more points each turn". 
						</li>
					</ul>`,
			},
			{
				title: "4.2 The Game Board",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/4.2.png"></img>`,
				text: 
					`<p>
						The meat and bones of this project. It operates by maintaining 3 overlapping tilemaps that provide it with varying amounts of data: 
					</p>
					<ul>
						<li>
							<b>A logic map,</b> that tracks the occupied/unoccupied state of each cell, and is displayed as a visual aid during tile placement on a player's turn; 
						</li>
						<li>
							A so-called <b>"graphic" map,</b> that actually tracks the type of tile occupying each cell, and visually displays the tile graphics; 
						</li>
						<li>
							And a <b>temporary map,</b> whose sole purpose is to highlight the cells that will be affected by a placement, and the validity of said placement.  
						</li>
					</ul>
					<p>
						Besides that, the core of the work happens on the <b>"Validate" and "Submit" functions,</b> that respectively communicate the validity (or invalidity) of a placement, and execute placements along with their side-effects.
					</p>
					<p>
						In addition to that, it reports score changes to the various UI elements whenever a placement occurs.
					</p>`,
			},
			{
				title: "4.3 The Piece Dispensers",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/4.3.png"></img>`,
				text: 
					`<p>
						These are incredibly simple elements, whose job consists of <b>picking a prefab from a list at random.</b> 
					</p>
					<p>
						There isn't that much to explain about it. Except it is <b>assisted by a "Dragable" component attached to each piece,</b> so that the player can hover over the piece, click, and drag it towards its placement position on the board.
					</p>
					<p>
						Besides that, <b>the piece itself queries the board</b> at the cell positions directly under it, to determine whether the tile will be placed or disposed of.
					</p>
					<p>
						I also <b>included a provision</b> for cases in which there doesn't exist an exact match of available space in the board for a piece's specific shape. It would have been terrible and annoying if the game became softlocked, or skipped the player's turn, whenever it was impossible to place all of the tiles include in a piece. 
					</p>
					<p>
						My solution for such case is simply to <b>allow partial placement of a piece:</b> tile placements that are valid are placed, and placements that are invalid are discarded.
					</p>`,
			},
			{
				title: "4.4 The Enemy AI",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/4.4.png"></img>`,
				text: 
					`<p>
						Getting the AI to work properly under the time constraint was actually pretty challenging. <b>My knowledge of graph theory was fairly rusty,</b> and I hadn't had that many chances to put that knowledge to practice over the past recent years. 
					</p>
					<p>
						So this was actually the area in which I struggled the most for this project, and that ultimately resulted in us missing the game jam's deadline by literally seconds.
					</p>
					<p>
						<b>My initial naïve approach</b> to this challenge was to keep a list for each kind of tile that included every valid position in which said tile could be placed.
					</p>
					<p>
						On initialisation of the board, <b>I'd query each adjacent cell to each of the starting city positions</b> in the map, to determine which of those adjacents were valid placements for each of the human tile types. And then query 2 spaces away from the starting positions, to determine if there were any spaces where a mine or a farm could be placed. 
					</p>
					<p>
						From there, <b>I'd update those lists whenever a tile placement occured,</b> by checking the adjacent positions of the new tile in search of spaces where a human tile would a valid placement.
					</p>
					<p>
						Such an approach has presented some odd issues during gameplay, such as the AI sometimes running out of valid moves in its logic, despite a player being able to see valid moves for the AI on the board. Though, this might be simply a bug due to a mistake in implementation. 
					</p>
					<p>
						Regardless, this subsystem still requires some improvements. I have considered the idea of implementing a breadth-first search algorithm to hopefully find valid placements in a more stable manner, but that remains an idea for a future visit of this project.
					</p>`,
			},
			{
				title: "5 The Game Jam Results",
				media: `<img src="assets/css/images/slideshow/gaias-revenge/5.png"></img>`,
				text: 
					`<p>
						As mentioned before, while this project was initially developed for the GMTK Game Jam 2023, <b>we actually missed the deadline by mere seconds.</b>
					</p>
					<p>
						The ending was chaotic. <b>The AI was broken one hour before the deadline,</b> my teammate had set his alarm wrong by mistake and slept in all morning, and I was genuinely ready to give up. There just was no way we would make it in time for the deadline. 
					</p>
					<p>
						Couple minutes remaining, <b>a time extension of an additional hour came.</b> This was my second wind. 
					</p>
					<p>
						With the extra time, I managed to get the AI to a working state (though admittedly a kinda buggy state, but a state that still managed to get the main idea across). <b>Then I rushed to compile a build and upload it to Itch.io.</b>
					</p>
					<p>
						Each passing minute was very stressful. <b>The upload was completed few minutes before the final deadline,</b> and I started fumbling around in a massive rush with Itch's interface to add the project to the jam. Under such pressure, <b>I couldn't find quickly where I needed to click,</b> and waisted precious seconds.
					</p>
					<p>
						When I finally found the place, it was mere seconds remaining. And they required you to fill in a form, that I filled with gibberish trying to skip through all that quickly and correct it later.
					</p>
					<p>
						Though, sadly, once I clicked submit... <b>Submissions had just been closed.</b>
					</p>
					<p>
						Dejected, I submitted the game to the <b>Post-Jam "Jam",</b> a "jam" event especially created for those that missed a jam's deadline. Since I wasn't about to miss the opportunity to at least get some feedback from my peers.
					</p>
					<p>
						<b>Reception was a little mixed, but mostly positive.</b> Some people got it intuitively, but others just did not. The inclusion of a tutorial or explanation would have surely helped, but I was fairly short on time.
					</p>
					<p>
						All in all, <b>the game was ranked #20 on graphics, and #41 overall,</b> from 119 entries. Fairly middle of the pack indeed. But there's the caveat that for this Post-Jam Jam there where entries that had been in development for multiple months, and were being compared to this prototype made over the span of a week. So I'd take this ranking with a grain of salt.
					</p>`,
			},
			{
				title: "6 Lessons and Takeaways",
				media: 
					`<iframe frameborder="0" src="https://itch.io/embed-upload/9499280?color=327345" allowfullscreen="" width="100%" height="auto"><a href="https://jaykozatt.itch.io/gaias-revenge">Play Gaia's Revenge on itch.io</a></iframe>`,
				text: 
					`<p>
						Overall, this was a nice break from my other work and I'm glad that I took part in the event.
					</p>
					<p>
						I reckon in the future this game could hold <b>some nice potential as a mobile game.</b> But that is still a little further away down the road.
					</p>
					<p>
						I'd do nicely to dust off on my graph theory skills, and improve upon the game rules as well as add new challenges. And though I consider this to be a strategy game, some people have called it a puzzle game, and I have to admit there is truth to that assessment.
					</p>
					<p>
						We'll see what the future holds for this game. And with nothing more to address, I'll leave you to the game.
					</p>
					<p>
						<b>Enjoy!</b>
					</p>`,
			}
		]
	},
	{ // The Path
		id: 4,
		name: "The Path",
		projectLink: "https://drive.google.com/file/d/1AhjTwYjiaZjQ97dHpDyuYak7yGtYYL8b/view?usp=sharing",
		projectSrc: "https://gitlab.com/jaykozatt/the-path",
		slides: [
			{
				title: "Quick Summary",
				media: `<img src="assets/css/images/slideshow/the-path/0.png"></img>`,
				text: 
					`<p>
						This was the first project I worked on, as a <b>solo freelancer.</b> I offered my services as a <b>games programmer</b> with a focus on gameplay engineering.
					</p>
					<p> 
						<b>This client requested 3 things</b> on this project: 
					</p>
					<ul>
						<li>
							<b>Replicate the gameplay</b> showcased on a short clip. 
						</li>
						<li>
							Create a system capable of <b>generating random levels endlessly</b> to play through.
						</li>
						<li>
							<b>And integrate Unity Ads,</b> according to his specifications.
						</li>
					</ul>
					<p>
						The client possessed <b>a project with an already established aesthetic and vision,</b> so my work was mostly limited to simply mimicking said aesthetic, and replicating gameplay according to the specifications. However, I still managed to make some artistic choices wherever I was afforded to.
					</p>
					<p>
						<b>The timeline</b> agreed for this project was <b>2 ~ 3 weeks.</b> And I successfully delivered each milestone right on time.
					</p>
					<p>
						And in addition to the work I was paid for, <b>I also provided the app icon</b> that the client ended up using when the game was published, as an freebie.
					</p>`, 
			},
			{
				title: "1 Project Specifications",
				media: 
					`<video autoplay loop muted>
						<source src="assets/css/images/slideshow/the-path/1.mp4" type="video/mp4">
						Your browser does not support the video tag.
					</video>`,
				text: 
					`<p>
						The project was very cut and dry.
					</p>
					<p>
						<b>The client provided the video clip now being playing above,</b> and asked for a proficient freelancer to help him turn that example into a mobile game.
					</p>
					<p>
						Initially, I came bearing many suggestions when I made my bid for the project. But <b>the client had been recently burned by another freelancer,</b> that had just left him hanging and turned unresponsive. So in the beginning, he wasn't too willing to listen. 
					</p>
					<p>
						<b>He only wanted a freelancer to follow his instructions,</b> and deliver what he was asking for. Which was the following:
					</p>
					<ul>
						<li><b>A replica of the gameplay showcased in the video clip.</b> The physics needed to feel good and tight.</li>
						<li><b>A system to generate random levels somehow,</b> so that his players could play endlessly.</li>
						<li><b>Integration of Unity Ads.</b> And the ads needed to be displayed following a fairly specific pattern.</li>
					</ul>
					<p>
						<b>The timeline he offered for these tasks was flexible.</b> But he still demanded expediency, since he still felt fairly skeptic to trust me due to his previous experience with that other freelancer. <b>So we initially agreed to a timeline of 2 weeks. But later got it extended to 3 weeks.</b>
					</p>`, 
			},
			{
				title: "2 The Project before my services",
				media: `<img src="assets/css/images/slideshow/the-path/2.png"></img>`,
				text: 
					`<p>
						<b>The above image may look like a completely blank canvas at first.</b> But if you look closely, you'll see that there are subtle patterns on each side of the screen, on a very light gray tone.
					</p>
					<p>
						Back when I received the project, <b>I realised the client was using a fair amount of third-party assets,</b> and already had some kind of aesthetic already established.
					</p>
					<p>
						<b>It also looked like the client,</b> in his initial attempt to realise his vision himself, <b>had tried to replicate the gameplay in 2D.</b> Or at least had been in the process of figuring out how to do it in 2D. But had given up, and decided to hire a freelancer instead. 
					</p>
					<p>
						<b>The main menu also already existed</b> (though sadly, I didn't keep a picture of it to show here). So I didn't touch that too much. Though, much like this image, <b>it also lacked quite a bit of contrast,</b> by presenting the very same light grays and whites. <b>So my first action was to choose colours</b> that went well with the already pre-existing yellow title (that stuck around from beginning to end).
					</p>
					<p>
						The client would surely adjust it to his liking later, and the whole interface really needed some new colours (any colours at all, at least, haha) anyway. So if that was going to happen regardless, I might as well choose something pleasant for myself in the meantime. 
					</p>
					<p>
						Worst that could happen was that the client disliked them and asked me to change them. Life's too short to worry about that kind of thing.
					</p>`, 
			},
			{
				title: "3.1 The Contraption",
				media: `<img src="assets/css/images/slideshow/the-path/3.1.png"></img>`,
				text: 
					`<p>
						First order of business to <b>get the core gameplay working.</b>
					</p>
					<p>
						Watching the reference video, it seemed to me like the <b>client's initial approach in 2D would probably end up being more work,</b> and the simulation in general would be <b>more inaccurate.</b> 
					</p>
					<p>
						So, considering the simple shapes involved in the contraption, and my prior experience on "The Prisoner: Dread or Trust" (one of my previous titles), <b>I figured that it would be easier and better-looking to simply use Unity's ProBuilder</b> to quickly cobble up a mockup of the contraption. 
					</p>
					<p>
						The frame was simple enough to do. You wouldn't even need ProBuilder for the cubes and rectangular shapes that composed most of the contraption, but <b>creating the end goal section with the indented hole for the ball was definitely easier with ProBuilder.</b>
					</p>
					<p>
						<b>I also didn't get to wonder for too long about how to create the path mesh,</b> since the client came through with a free third-party plugin (called <a href="https://assetstore.unity.com/packages/tools/utilities/b-zier-path-creator-136082">Bézier Path Creator</a>) to help us with that.
					</p>
					<p>
						(<b>The client liked participating actively on the development</b> and offered me a fair amount of assistance along the way, out of his own volition. This compounded with the fact that I liked giving him daily updates. And resulted on a positive feedback loop that served for us to build some mutual trust over time.)
					</p>
					<p>
						<b>The bar was created by overlapping multiple cubes into a compound shape,</b> and its physics where modelled with a series of overlapping box colliders. The resulting surface was close enough to a curve, but a good compromise to avoid any significant performance penalties that might have resulted from using a composite or polygonal collider.
					</p>
					<p>
						And finally, <b>the pulleys and the ropes</b> were modelled with a simple <b>Line Renderer</b> and the same approach with <b>Configurable Joints</b> I had used prior on another of my projects ("All Bets Are Off!").
					</p>`, 
			},
			{
				title: "3.2 Physics and Controls",
				media: `<img src="assets/css/images/slideshow/the-path/3.2.png"></img>`,
				text: 
					`<p>
						<b>In the begining, I struggled a little with the physics,</b> since I didn't have any prior experience with Unity's 3D physics engine. My prior 3D project had used no physics at all. So I found myself for a little while fiddling with the RigidBody component's settings.
					</p>
					<p>
						<b>The problem was that,</b> due to the fast movements of the bar in reaction to the shortening of the pulleys, the ball would start to jitter incontrollably, and sometimes get shot upwards at incredibly speeds like a ragdoll being hit by a giant in Skyrim.
					</p>
					<p>
						This was <b>due to the default "discrete" collision detection setting.</b> Which should have been set to "continuos" instead. (This is pretty basic, I know.)
					</p>
					<p>
						So in my ignorance, <b>I attempted at first to counteract this behaviour by slowing down the bar's movement</b> through the controller script I wrote. But the client wasn't happy with this. And I wasn't either. <b>Gameplay was a snooze fest under that configuration.</b>
					</p>
					<p>
						<b>Took me a little while to figure out the culprit setting,</b> but in the end I found it.
					</p>
					<p>
						Once the physics were behaving correctly, <b>I moved on to creating the controller.</b> If you remember the first image I presented, the client had set up 2 sliders, one to move the bar vertically, and the other to control the tilt. 
					</p>
					<p>
						However, I took the initiative and attempted to imitate fully the way that the bar worked in real life (IRL). <b>I used two vertical sliders,</b> each to control one pulley just like IRL. And I set them up so that slider was divided in 2 regions. <b>At 1/3 of the region the pulley neither retracted nor extended.</b> Above that, the pulley slowly released rope, lowering the bar. And below that (by pulling), the bar was raised. 
					</p>
					<p>
						<b>The client said it was too difficult, but didn't outright reject it.</b> Instead he took the idea, and <b>turned it into an "expert" control scheme</b> (by the end of development, he got really good at using that scheme).
					</p>
					<p>
						<b>Happy with that little victory,</b> I then went on to implement the control scheme the way he had initially suggested.
					</p>`, 
			},
			{
				title: "3.3 Random Generation",
				media: `<img src="assets/css/images/slideshow/the-path/3.3.png"></img>`,
				text: 
					`<p>
						By this point, <b>things started to go more smoothly between me and the client.</b> We were both fairly strong-minded, but a good rapport was starting to build up. He began to trust me to be competent, and I began to trust him to not be unreasonable. Which was a really good change of pace from where we started.
					</p>
					<p>
						<b>The next task was to build a random generation system.</b> Here I held a lot more sway since I did have prior experience creating a system like this one (for an unreleased game), and knew what I was talking about.
					</p>
					<p>
						The way I designed this system was by <b>making "slices" of the path,</b> and staking them one over the other, until a set amount of pieces was used.
					</p>
					<p>
						<b>Each slice would have an entry point and an exit point,</b> represented by a numbered position (from 1 to 4, they were: far-left, left, right, and far-right). Whatever happened between those two points determined the difficulty of said slice or piece.
					</p>
					<p>
						<b>This system allowed me to represent a whole generated level by a simple sequence of numbers.</b> And since every level started at the special position 0 (the middle), and ended at position 0, I didn't even need to save pairs of values to represent each piece. Each number just needed to represent the endpoint, since the startpoint could be inferred from the previous piece. The edge case was the final piece to the goal, which wasn't even required to be saved, since it always ended on 0, and the startpoint could be inferred from previous one.
					</p>
					<p>
						<b>And in order to add a difficulty progression,</b> I made the generator add one extra piece every 10 levels, as well as use new more difficult pieces every 5 levels or so.
					</p>`,
			},
			{
				title: "3.4 Additional Content Creation Tools (for the client)",
				media: `<img src="assets/css/images/slideshow/the-path/3.4.png"></img>`,
				text: 
					`<p>
						In addition to that, <b>I created a folder structure (as well as slice templates)</b> to house each type of slice (sorted by start and endpoints), following a convention that would later <b>allow the client himself to create pieces</b> of his own for the generator to use. 
					</p>
					<p>
						To that end, I included as well a <b>PDF guide</b> (with visual aids and a companion video), <b>that explained the abstract model in simple terms,</b> and illustrated how to properly use the folder structure and the templates to create new challenges for the players.
					</p>
					<p>
						<b>I also created a save system,</b> so that the game would always remember the last level configuration you were trying to beat. A system that would then also help me meet the clients specifications on the final milestone.
					</p>`, 
			},
			{
				title: "3.5 Advertisements",
				media: `<img src="assets/css/images/slideshow/the-path/3.5.png"></img>`,
				text: 
					`<p>
						For his ads, <b>the client requested</b> that they were delivered following a specific pattern: 
					</p>
					<ul>
						<li>Every day, after 2 levels have been played, on the 3rd level <b>a popup would show up</b> asking the player to watch an ad to continue playing.</li>
						<li><b>Once that ad had been seen on that day,</b> no more popups would show up asking the player to watch ads.</li>
						<li>If a level is too difficult, the player will have the option to <b>watch an ad to skip said level.</b></li>
					</ul>
					<p>
						Implementation wasn't anything too difficult, and aided by my earlier save system, <b>I kept a timestamp that would reset every 24 hours,</b> to enable the popup that would show up after 2 levels played on said day.
					</p>
					<p>
						And the skip buttom was a very simple matter as well.
					</p>
					<p>
						<b>The client later on realised</b> that he also didn't want players that had already seen an ad due to a skip action to be prompted by the popup, since they would have already seen an ad that day, and that would be a bad user experience. So he was very apologetic to have the need to change the parameters of my task mid-work. 
					</p>
					<p>
						But as it turns out, <b>I had already anticipated his intent</b> and rigged the system in that exact same manner he now desired. And he was elated at my foresight.
					</p>`, 
			},
			{
				title: "4 Results after my service",
				media: `<video muted loop controls autoplay poster="assets/css/images/slideshow/the-path/4.png">
							<source src="assets/css/images/slideshow/the-path/4.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>`,
				text: 
					`<p>
						All in all, <b>the client was quite satisfied with the results,</b> and left a glowing recommendation to anyone that might hire me in the future. In his words:
					</p>
					<p class="quote">
						<i>"I am delighted to say that Jay has exceeded my expectations in completing my project with excellence. The level of professionalism, attention to detail and dedication was remarkable. I have no hesitation in recommending Jay to anyone looking for a highly skilled and reliable freelancer."</i>
					</p>
					<p>
						After this job, <b>he has gone on to become a repeat customer</b> of mine (with smaller projects due to budget constraints).
					</p>
					<p>
						<b>The game in question,</b> didn't actually achieve any kind of significant success (since self-publishing a game is hard). But <b>was published on the Play Store</b> regardless, and I believe that on <b>Xiaomi's App Store</b> as well.
					</p>
					<p>
						But that wasn't really the end of this story.
					</p>
					<p>
						On a final note, just as he was getting ready to publish on the respective app stores, <b>he showed me the app icon he intended to use,</b> and asked for my opinion on it.
					</p>
					<p>
						I offered him my honest impressions, and <b>provided him an alternative app icon</b> for him to use instead as a suggestion (and a freebie). The two app icons are shown on the image above for comparison.
					</p>
					<p>
						Once again he erupted into emotion, <b>absolutely loving the icon I provided,</b> and solidly cementing our work relationship for the future.
					</p>`, 
			},
		]
	},
	{ // SumMatch
		id: 5,
		name: "SumMatch",
		projectLink: "https://drive.google.com/file/d/1B-QjKWWPdmjxY1e_virGLGAAFQBCGEcC/view?usp=sharing",
		projectSrc: "https://gitlab.com/jaykozatt/summatch",
		slides: [
			{
				title: "Quick Summary",
				media: `<img src="assets/css/images/slideshow/summatch/0.png"></img>`,
				text: 
					`<p>
						On this project I was <b>tasked with building the multiplayer for an existing game.</b> A Sudoku-styled puzzle game in which you must figure out the value of each cell. Simple concept.
					</p>
					<p>
						The caveat was that its code had been generated through AI. Which made the codebase less than ideal for the mission.
					</p>
					<p>
						<b>My role on this project</b> was therefore:
					</p>
					<ul>
						<li>
							<b>To salvage</b> whatever was usable from the generative AI's code, and repurpose it for multiplayer. 
						</li>
						<li>
							<b>Create a lobby system</b> where players could jump into matches as they came, or look for specific players to challenge.
						</li>
						<li>
							<b>Figure out</b> how to best modify existing gameplay to fit a competitive 1v1 multiplayer experience.
						</li>
						<li>
							<b>And integrate Unity Ads</b>, according to specifications.
						</li>
					</ul>
					<p>
						To achieve those tasks, I leveraged Unity's <b>Lobby and Relay</b> technologies, as well as their <b>Netcode for GameObjects</b> library.
					</p>
					<p>
						In addition to that, I was also tasked with <b>creating the app's icon</b>, and the <b>screenshot images</b> to be used within the various App Stores.
					</p>
					<p>
						Being my first multiplayer implementation, what was initially scoped to be a 3 to 4 weeks long project, unflatteringly devolved into a 2 months affair. Not my finest moment.
					</p>`, 
			},
			{
				title: "1 Unforeseen Difficulties: Generative AI",
				media: `<img src="assets/css/images/slideshow/summatch/1.png"></img>`,
				text: 
					`<p>
						While the wonders of <b>AI chat bots never cease to amaze</b> with what they are able to pull off, this project's initial state should serve as <b>a cautionary tale of the dangers of such technology</b> in the hands of the uninitiated.
					</p>
					<p>
						<b>The client reported having used generative AI</b> to output the game's code, by feeding it with the descriptions of what he wanted. And so, the code is exactly what you would typically expect from the current state of AI technology.
					</p>
					<p>
						<b>The code was not re-usable</b> in its initial state for the purpose of multiplayer. The reason being that the implementation <b>wasn't programmed with scalability in mind</b>. It merely achieved the initial goal set by client with no regard for future developments. 
					</p>
					<p>
						So after looking through that, I decided the best course of action was to <b>rebuild the gameplay from scratch</b> for multiplayer, and leave the singleplayer systems untouched in isolation. Considering the simplicity of the game, <b>this was the cheaper solution.</b>
					</p>
					<p>
						But regardless, this still set me back on my propused timeline, since I wasn't expecting to have to rebuild gameplay from scratch to that extent.
					</p>`, 
			},
			{
				title: "2 Challenges",
				media: `<img src="assets/css/images/slideshow/summatch/2.png"></img>`,
				text: 
					`<p>
						You could say that the feature that gave me <b>the most grief</b> was the lobby along with its matchmaking functionality.
					</p>
					<p>
						Though it was not that the concept was difficult to grasp. But rather, the issue was <b>the meticulous nature</b> of needing to cover each of the potential cases of failure that could happen. As is always the case with all things internet.
					</p>
					<p>
						<b>At any point, the application could experience a loss in connectivity.</b> And if it's not equipped to handle it, the most common result would be the application hanging up indefinitely.
					</p>
					<p>
						So what was most challenging for me, was <b>making sure the application could always recover robustly</b> from each of those potential instances. And to do that, I had to fully grasp how Unity's Lobby and Relay systems operated, which took me a while.
					</p>`, 
			},
			{
				title: "3 Networking Architecture",
				media: `<img src="assets/css/images/slideshow/summatch/3.png"></img>`,
				text: 
					`<p>
						One of the most interesting parts of this project for me was figuring out how to set up the gameplay architecture to permit network synchronisation between host and client, using Unity's <b>"Netcode for GameObjects"</b> library.
					</p>
					<p>
						To achieve that, I structured everything into an <b>overall "Game Board" controlled by the server</b>, and responsible for generating the puzzle, distributing it to each player instance, and validating solutions; and <b>"Player Boards" to house each player's instance of the board</b> as well as their progression towards solving the puzzle.
					</p>
					<p>
						By this point, I've naturally adopted an architecturing style fairly similar to the <b>Model-View-Controller architecture</b> that's quite common in software engineering. So the structures mentioned above would represent both the Model and Controller parts of the equation, with my "GUI" or View scripts being separated into their own components.
					</p>
					<p>
						While the parallels might become a little difficult to draw sometimes, <b>one golden rule I always abide by</b> when deciding how to sort my scripts is that GUI scripts (denoted with "GUI" being part of their name or being housed in a GUI folder) handle information display and interfacing with the player's input, while anything else is essentially an internal-logic script that does not interface directly with the player. A sort of frontend and backend, if you will. 
					</p>`, 
			},
			{
				title: "4 Additional Highlights",
				media: `<img src="assets/css/images/slideshow/summatch/4.webp"></img>`,
				text: 
					`<p>
						Another interesting highlight of the project was the inclusion of the <b>Elo rating system</b> into the game.
					</p>
					<p>
						The client gave me lots of freedom to solve problems as I saw fit, and one the challenges I encountered was related to <b>the question of how to pair players of different levels of skill</b>.
					</p>
					<p>
						To solve that, I took a page out of <b>Chess</b> with the Elo rating system.
					</p>
					<p>
						While it doesn't take a genius to implement such a simple system (inventing it might be a different matter), one of the nice benefits it offers is that <b>it ranks players into a bell curve distribution</b>, irrespective of population size. Which allows it to scale nicely with an application's growth.
					</p>`, 
			},
			{
				title: "5 Closing Remarks",
				media: `<video muted loop controls autoplay poster="assets/css/images/slideshow/summatch/5.png">
							<source src="assets/css/images/slideshow/summatch/5.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>`,
				text: 
					`<p>
						<b>To conclude this entry</b>, I've got to say that despite the numerous setbacks I encountered along the way, this was a satisfying project to be involved in.
					</p>
					<p>
						Even if it did burn me out a bit (since I'm not a fan of implementing connectivity features), being able to create an application that robustly recovers from pretty much every connectivity issue you could throw at it, gave me a fair share of satisfaction.
					</p>
					<p>
						<b>It was a difficult task that I didn't love, but the result was satisfaying.</b>
					</p>
					<p>
						The client was also happy with the work I did, despite the delays. And I managed to communicate well whenever an issue arose that would cause a setback on our timeline.
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
