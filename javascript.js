var quotes = [
	'Be yourself, everyone else is already taken. - Oscar Wilde',
	'Two things are infinite: the universe and human stupidity, and I\'m not sure about the universe. - Albert Einstein',
	'To learn something, to master something, anything, is as sweet as first love. - Geoffrey Wolff',
	'...you can hate a place with all your heart and soul and still be homesick for it. - Joseph Mitchell',
	'There are lots of ways of being miserable, but there\'s only one way of being comfortable, and that is to stop running round after happiness. If you make up your mind not to be happy there\'s no reason why you shouldn\'t have a fairly good time. - Edith Wharton',
	'You only live once, but if you do it right, once is enough. - Mae West',
	'In three words I can sum up everything I\'ve learned about life: it goes on. - Robert Frost',
	'No one can make you feel inferior without your consent. - Eleanor Roosevelt',
	'A friend is someone who knows all about you and still loves you. - Elbert Hubbard',
	'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid. - Jane Austen',
	'If you don\'t stand for something you will fall for anything. - Gordon A. Eadie',
	'The man who does not read has no advantage over the man who cannot read. - Mark Twain',
	'For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson',
	'We don\'t see things as they are, we see them as we are. - Ana&iumls Nin',
	'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default. - J.K. Rowling',
	'If you only read the books that everyone else is reading, you can only think what everyone else is thinking. - Haruki Murakami',
	'If I had a flower for every time I thought of you... I could walk through my garden forever. - Alfred Tennyson',
	'What a slut time is. She screws everybody. - John Green',
	'But better to get hurt by the truth than comforted with a lie. - Khaled Hosseini',
	'I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! - Jane Austen',
	'You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it. - Harper Lee',
	'It\'s so hard to forget pain, but it\'s even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace. - Chuck Palahniuk',
	'Happiness in intelligent people is the rarest thing I know. - Ernest Hemingway',
	'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. - Albert Camus',
	'The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi',
	'Everyone thinks of changing the world, but no one thinks of changing himself. - Leo Tolstoy',
	'You don\'t have to burn books to destroy a culture. Just get people to stop reading them. - Ray Bradbury',
	'Death ends a life, not a relationship. - Mitch Albom',
	'Most people are other people. Their thoughts are someone else\'s opinions, their lives a mimicry, their passions a quotation. - Oscar Wilde',
	'First they ignore you, then they ridicule you, then they fight you, and then you win. - Mahatma Gandhi',
	'Facts do not cease to exist because they are ignored. - Aldous Huxley',
	'Here’s to books, the cheapest vacation you can buy. - Charlaine Harris',
	'Isn\'t it nice to think that tomorrow is a new day with no mistakes in it yet? - L.M. Montgomery',
	'I took a deep breath and listened to the old brag of my heart: I am, I am, I am. - Sylvia Plath',
	'Be empty of worrying. Think of who created thought! Why do you stay in prison, when the door is so wide open? - Jalaluddin Rumi',
	'It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle',
	'Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth. - Fyodor Dostoyevsky',
	'One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn\'t exist... Without imperfection, neither you nor I would exist. - Stephen Hawking',
	'People aren\'t either wicked or noble. They\'re like chef\'s salads, with good things and bad things chopped and mixed together in a vinaigrette of confusion and conflict. - Lemony Snicket',
	'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff. - Carl Sagan',
	'You cannot protect yourself from sadness without protecting yourself from happiness. - Jonathan Safran Foer',
	'I wonder how many people I\'ve looked at all my life and never seen. - John Steinbeck',
	'We\'re all going to die, all of us, what a circus! That alone should make us love each other but it doesn\'t. We are terrorized and flattened by trivialities, we are eaten up by nothing. - Charles Bukowski',
	'Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing ever happened. - Winston S. Churchill',
	'There is nothing either good or bad, but thinking makes it so. - William Shakespeare',
	'Never let your sense of morals prevent you from doing what is right. - Isaac Asimov',
	'Nobody realizes that some people expend tremendous energy merely to be normal. - Albert Camus',
	'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
	'I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow, but through it all I still know quite certainly that just to be alive is a grand thing. - Agatha Christie',
	'None of us really changes over time. We only become more fully what we are. - Anne Rice',
	'What and how much had I lost by trying to do only what was expected of me instead of what I myself had wished to do? - Ralph Ellison',
	'Money can\'t buy happiness, but it can make you awfully comfortable while you\'re being miserable. - Clare Booth Luce',
	'I know of a cure for everything: salt water... in one way or the other. Sweat, or tears, or the salt sea. - Karen Blixen',
	'It was not the feeling of completeness I so needed, but the feeling of not being empty. - Jonathan Safran Foer',
	'The best portion of a good man\'s life&#58 his little, nameless unremembered acts of kindness and love. - William Wordsworth',
	'Dawn is the time when nothing breathes, the hour of silence. Everything is transfixed, only the light moves. - Leonora Carrington',
	'There is a sacredness in tears....They are the messengers of overwhelming grief, of deep contrition and of unspeakable love. - Washington Irving',
	'Remain true to yourself, child. If you know your own heart, you will always have one friend who does not lie. - Marion Zimmer Bradley',
	'No thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire. - L. Frank Baum',
	'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky. - Rabindranath Tagore'
]

function getQuote() {
	var num = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote').innerHTML = quotes[num];
}

window.onload = getQuote;

function tweet() {
	window.open('https://twitter.com/intent/tweet?hashtags=freecodecamp&text='+document.getElementById('quote').innerHTML);
}