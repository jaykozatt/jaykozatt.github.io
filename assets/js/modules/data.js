// Local review data

export const reviews = [
	{
		id: 1,
		img: 'images/test.png',
		projectLink:"https://jaykozatt.itch.io/the-prisoner",
		projectSrc:"https://github.com/AN-Studio/Brackeys-Game-Jam-2022",
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. D',
		slides: {
			proyectTitle: [
				'1. Inception',
				'2. The Team',
				"3.1. The Design Challenge",
				"3.2. Our First Ideas",
			],
			thumbImg: [
				'assets/css/images/cover-img/the-prisoner.png',
				'assets/css/images/slideshow/the-prisioner-1.1.png',
				'assets/css/images/slideshow/the-prisioner-1.2.png',
				'assets/css/images/slideshow/the-prisioner-1.3.png',
			],
			descriptions: [
				"SORRYYYYY! (T-T) This section is under construction...",
				"SORRYYYYY! (T-T) This section is under construction...",
				"SORRYYYYY! (T-T) This section is under construction...",
				"SORRYYYYY! (T-T) This section is under construction...",
			],
		},
	},
	{
		id: 2,
		img: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png',
		projectLink:"https://jaykozatt.itch.io/all-bets-are-off",
		projectSrc: "https://github.com/jaykozatt/AllBetsAreOff",
		text: 'All Bets Are Off! is a deathmatch arena in which you slice and dice poker chip stacks by means of entangling them with a chain mace in the shape of a die, giving a new meaning to the phrase "rolling dice".',
		slides: {
			proyectTitle: [
				'1. Inception',
				'2. The Team',
				"3.1. The Design Challenge",
				"3.2. Our First Ideas",
				"3.3. We've got a Winner!",
				'4. Introducing our tools',
				'5.1. Our Workflow Plan',
				"5.2. Our Workflow's Results",
				'6. The Game Jam Results',
				'7. Lessons and Takeaways',
				'8. The Game TODAY'
			],
			thumbImg: [
				'assets/css/images/cover-img/all-bets-are-off.png',
				'assets/css/images/slideshow/my-triad.png',
				'assets/css/images/slideshow/roll-of-the-dice.png',
				'assets/css/images/slideshow/all-bets-3.jpg',
				'assets/css/images/slideshow/all-bets-4.jpg',
				'assets/css/images/slideshow/our-tools.png',
				'assets/css/images/slideshow/workflow-plan.png',
				'assets/css/images/slideshow/all-bets-are-off-2.1.png',
				'assets/css/images/slideshow/all-bets-are-off-2.2.png',
				'assets/css/images/slideshow/all-bets-are-off-2.3.png',
				'assets/css/images/slideshow/all-bets-today.png',
			],
			descriptions: [
				"All Bets Are Off! came to be as a result of 2022's yearly game development marathon " +
				"\"GMTK Game Jam\", which had \"Roll of the Dice\" as that year's theme.\n\n"+
				"Each year, many events like this one are carried out, and teams from all over the world " +
				"come together into a single online event to flex their game development muscles. "+
				"This game jam would be a 3-day long affair, with a week long voting period afterwards.",
				
				"The project in question was developed by a 3-man team, namely: John Bone as the artist, " +
				"Ram99 as the musician and audio designer, and myself as the overall programmer and game " +
				"designer. Also, it bears mentioning that by this point, we'd gotten familiar enough " + 
				"with each other's work as to trust each one's judgement calls on each " +
				"of our realms of expertise. However, as I was mentoring John Bone (a 14yo teen) at the " +
				"time, I also took part on a fair chunk of the art design decisions.",

				"This game jam's theme was tricky. We wanted to avoid making a game that would "+
				"blend with the crowd, since such a theme as \"Roll of the Dice\" unintendedly " +
				"pushed a lot of teams into creating RNG or die-related games to such an extent "+
				"that by the time the rating week was over, many players had gotten sick of dice. "+
				"And one hilarious side effect of that, was that games allowed players to vent "+
				"their frustration by destroying dice became oddly popular.",

				"So, to achieve that goal, we attempted playing with the meaning of each word, especially with 'Dice' at first. We read "+
				"many different dictionary definitions for the word, and I came up with an idea of a Victorian-era "+
				"serial killer that would roll around all over the place, like 'Sonic the Hedgehog', "+
				"slicing and dicing foes. But quickly realised that this idea would outgrow our scope " +
				"real fast, due to the size of the levels that would be required. So it was discarded.",

				"Then, I began to think more liberally about what it means 'to roll', and chose to "+
				"interpret it as a wrapping motion by 'rolling around an object'. I picked up a pair "+
				"of broken headphones I had laying around on my desk, and began to swing them over "+
				"my head like a cowboy. Pair it with a thin wire that allows dicing foes, and the "+
				"idea for the game was born.",

				"Now that we had our core gameplay concept, it was time to get to work. John and I were already "+
				"familiar with Unity and Adobe Illustrator from previous projects, so the choice was obvious "+
				"for us. However, while we both had worked with Ram99 previously on another project, "+
				"at that time there had been a dedicated sound designer who favoured "+
				"working with Wwise. But since this time around I would have to handle the sound middleware myself, "+
				"FMOD Studio became my choice, as it is more programmer-friendly. ",

				"As the event was a 3-day affair, and it was our first game jam ever, we were hard-pressed "+
				"to quickly integrate with each other in a timely manner. So we decided we would aim "+
				"to have an operational build and the overall look of the game done by the first day, so that "+
				"Ram was able to come on the 2nd day to compose his piece, and we still had enough time "+
				"left to figure out how to get the right sound mixing afterwards, as well as to polish the game"+
				"by the 3rd day.",

				"In the end, things didn't turn out quite as expected. Much of the 1st day was spent for me "+
				"guiding John's designs and making sure the game's visual hierarchy was just right. So, the "+
				"schedule was thrown out of sync, and the programming work had fallen behind. The result was "+
				"'crunch' on the 3rd day. I had to go sleepless so we could meet the deadline, and had Ram "+
				"help me out with the sound design which initially I intended to do myself.",

				"But the end-result was quite successful in my own opinion. We managed to rank #850 out of over 6100 "+
				"other game entries. Our game's creativity was especially praised on several occasions, which neatly "+
				"translated to our score in that category, that ranked us #742 in that regard. The issues, "+
				"however, that were commonly cited were: a lack of understanding of the game's controls, and a "+
				"small amount of recurring bugs. Issues that would be addressed at a later date.",

				"The core pain point I struggled with at the time was \"visual communication\". The game was "+
				"fun in its own right, but failed to communicate properly its mechanics to the player. "+
				"Which resulted in subpar experiences and confusion. "+
				"And while the aim was intuitive gameplay without tutorials. The result was anything but.",

				"Just 3 months later, and with 2 more projects under my belt, I decided to revisit this game "+
				"with my newfound experience, and expand upon what had made this game so beloved. I revamped "+
				"its interface, arranged enemies differently to give new players more breathing room, "+
				"added a new game mechanic (the roulette balls), a new endless mode for whomever "+
				"may want to see how long they can survive, and lastly... gave a new coat of paint to "+
				"many of the game's graphics. The game... has rightfully turned into my crown jewel, so to speak. "+
				"And it makes me very proud."
			],
		},
	},
	{
		id: 3,
		img: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png',
		projectLink: "https://drive.google.com/file/d/1-xBybK2vGnGGrcAiZskuFoJIYc-Cl_Ye/view?usp=sharing",
		projectSrc: "",
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugitsed vel tempore ea, qui maxime accusantium deleniti consectetur iustoveniam hic, voluptates quasi iure quos porro laborum, inventoreprovident?',
		slides: {
			proyectTitle: [
				'1. Inception',
				'2. The Team',
				"3.1. The Design Challenge",
			],
			thumbImg: [
				'assets/css/images/cover-img/rogue-assembly.png',
				'assets/css/images/slideshow/rogue-assembly-1.png',
				'assets/css/images/slideshow/rogue-assembly-2.png',
			],
			descriptions: [
				"This game remains currently UNRELEASED because it didn't make it to the deadline of the "+
				"Wowie Game Jam 2022. Also... SORRYYYYY! (T-T) This section is under construction...",
				"SORRYYYYY! (T-T) This section is under construction...",
				"SORRYYYYY! (T-T) This section is under construction...",
			],
		},
	},
];
