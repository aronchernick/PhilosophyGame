// Philosophy Game - Question Database
// Each question is an applied scenario from a branch of philosophy.
// Branches: ethics, logic, political, metaphysics, epistemology, aesthetics

const QUESTIONS = [
  // ===== ETHICS =====
  {
    id: "eth1",
    branch: "ethics",
    text: "A runaway trolley is heading toward five people. You can pull a lever to divert it onto a side track where it will hit one person instead. Do you pull the lever?",
    context: "The Trolley Problem — a classic ethical dilemma about action vs. inaction.",
    likeText: "Pull the lever",
    dislikeText: "Don't touch it"
  },
  {
    id: "eth2",
    branch: "ethics",
    text: "You're walking past a shallow pond and see a child drowning. Saving the child will ruin your $500 designer shoes. Should you save the child?",
    context: "Peter Singer's Drowning Child — challenges our sense of moral obligation.",
    likeText: "Save the child",
    dislikeText: "The shoes matter too"
  },
  {
    id: "eth3",
    branch: "ethics",
    text: "A doctor has five patients dying from organ failure. A healthy visitor walks in. Should the doctor harvest the visitor's organs to save the five?",
    context: "Transplant Problem — tests whether the ends justify the means.",
    likeText: "Save the five",
    dislikeText: "Never sacrifice the one"
  },
  {
    id: "eth4",
    branch: "ethics",
    text: "You discover your best friend has been cheating on their partner. Your friend begs you to keep quiet. Their partner is also your close friend. Do you tell them?",
    context: "Loyalty vs. Honesty — when personal bonds clash with moral duty.",
    likeText: "Tell the truth",
    dislikeText: "Keep the secret"
  },
  {
    id: "eth5",
    branch: "ethics",
    text: "You can steal a loaf of bread to feed your starving family, or follow the law and let them go hungry tonight. What do you do?",
    context: "Jean Valjean's Dilemma — necessity vs. legality.",
    likeText: "Steal the bread",
    dislikeText: "Respect the law"
  },
  {
    id: "eth6",
    branch: "ethics",
    text: "A company offers you a dream job, but you find out they use child labor overseas. Do you still take the job?",
    context: "Complicity in Injustice — are you responsible for a system you didn't create?",
    likeText: "Take the job",
    dislikeText: "Walk away"
  },
  {
    id: "eth7",
    branch: "ethics",
    text: "You're a soldier ordered to bomb a building. Intelligence says enemy combatants are inside, but there may also be civilians. Do you follow the order?",
    context: "Doctrine of Double Effect — when harm is a foreseen but unintended side-effect.",
    likeText: "Follow orders",
    dislikeText: "Refuse to bomb"
  },
  {
    id: "eth8",
    branch: "ethics",
    text: "You promise a dying friend you'll scatter their ashes at sea, but their family wants a traditional burial. Do you honor your promise?",
    context: "Promises to the Dead — do commitments survive beyond life?",
    likeText: "Keep my promise",
    dislikeText: "Respect the family"
  },
  {
    id: "eth9",
    branch: "ethics",
    text: "An AI can predict with 95% accuracy who will commit a crime. Should we use it to arrest people before they act?",
    context: "Pre-crime Ethics — punishment before wrongdoing.",
    likeText: "Prevention saves lives",
    dislikeText: "That's not justice"
  },
  {
    id: "eth10",
    branch: "ethics",
    text: "You find a wallet with $1,000 cash and an ID. Returning it is easy but no one saw you find it. Do you return it?",
    context: "Ring of Gyges — would you be moral if no one was watching?",
    likeText: "Return it",
    dislikeText: "Keep it"
  },

  // ===== LOGIC =====
  {
    id: "log1",
    branch: "logic",
    text: "\"All cats are animals. Some animals are friendly. Therefore, some cats are friendly.\" Does this argument hold up?",
    context: "Syllogistic Reasoning — testing if conclusions truly follow from premises.",
    likeText: "Seems valid",
    dislikeText: "That's a fallacy"
  },
  {
    id: "log2",
    branch: "logic",
    text: "A barber shaves everyone in town who doesn't shave themselves. Does the barber shave himself?",
    context: "Russell's Paradox — a self-referential puzzle that broke set theory.",
    likeText: "Yes, he shaves himself",
    dislikeText: "It's a paradox"
  },
  {
    id: "log3",
    branch: "logic",
    text: "\"I always lie.\" If this statement is true, then the speaker is lying, so it's false. But if it's false, the speaker sometimes tells the truth. Is this statement meaningful?",
    context: "The Liar's Paradox — when language breaks its own rules.",
    likeText: "It's meaningful",
    dislikeText: "It's nonsense"
  },
  {
    id: "log4",
    branch: "logic",
    text: "If it rains, the ground is wet. The ground is wet. Can you conclude it rained?",
    context: "Affirming the Consequent — one of the sneakiest logical fallacies.",
    likeText: "Yes, it rained",
    dislikeText: "Not necessarily"
  },
  {
    id: "log5",
    branch: "logic",
    text: "A heap of sand loses one grain at a time. At what point does it stop being a heap? Is there a precise number?",
    context: "The Sorites Paradox — vagueness in language and logic.",
    likeText: "There's a cutoff",
    dislikeText: "It's all vague"
  },
  {
    id: "log6",
    branch: "logic",
    text: "\"No true Scotsman would do such a thing!\" When someone keeps redefining their claim to avoid counterexamples, is that a fair move?",
    context: "No True Scotsman Fallacy — shifting the goalposts to protect a claim.",
    likeText: "It can be valid",
    dislikeText: "That's cheating"
  },
  {
    id: "log7",
    branch: "logic",
    text: "Two people are arrested. If one betrays the other, they go free while the other gets 10 years. If both stay silent, each gets 1 year. If both betray, each gets 5 years. What should you do?",
    context: "Prisoner's Dilemma — when individual logic conflicts with collective good.",
    likeText: "Stay silent",
    dislikeText: "Betray"
  },
  {
    id: "log8",
    branch: "logic",
    text: "Achilles gives a tortoise a head start in a race. By the time Achilles reaches where the tortoise was, it has moved ahead. This repeats infinitely. Can Achilles ever overtake the tortoise?",
    context: "Zeno's Paradox — infinite steps in finite time.",
    likeText: "Yes, obviously",
    dislikeText: "The math says no"
  },
  {
    id: "log9",
    branch: "logic",
    text: "\"Millions of people believe in astrology, so there must be something to it.\" Is popular belief evidence of truth?",
    context: "Argumentum ad Populum — appeal to the crowd.",
    likeText: "Popularity counts",
    dislikeText: "Numbers prove nothing"
  },
  {
    id: "log10",
    branch: "logic",
    text: "Ship of Theseus: if you replace every plank of a ship one at a time, is it still the same ship? What if you reassemble the old planks into a second ship?",
    context: "Identity through change — when does something stop being itself?",
    likeText: "Still the same ship",
    dislikeText: "It's a new ship"
  },

  // ===== POLITICAL PHILOSOPHY =====
  {
    id: "pol1",
    branch: "political",
    text: "Imagine you're designing society from scratch, but you don't know if you'll be rich or poor, healthy or sick. Would you choose a society with maximum freedom or maximum equality?",
    context: "Rawls' Veil of Ignorance — designing justice without self-interest.",
    likeText: "Maximum equality",
    dislikeText: "Maximum freedom"
  },
  {
    id: "pol2",
    branch: "political",
    text: "A government wants to ban hate speech to protect minorities. But free speech advocates say this is a slippery slope. Should hate speech be banned?",
    context: "The Paradox of Tolerance — must a tolerant society tolerate intolerance?",
    likeText: "Ban hate speech",
    dislikeText: "Protect all speech"
  },
  {
    id: "pol3",
    branch: "political",
    text: "A billionaire earns their fortune legally through innovation. Should the government tax them heavily to fund public services, or is that theft?",
    context: "Nozick vs. Rawls — entitlement theory meets distributive justice.",
    likeText: "Tax them heavily",
    dislikeText: "It's their money"
  },
  {
    id: "pol4",
    branch: "political",
    text: "Citizens must choose: give up some privacy for security (surveillance cameras everywhere), or keep total privacy and accept higher crime rates. What do you choose?",
    context: "Security vs. Liberty — the eternal political trade-off.",
    likeText: "Security first",
    dislikeText: "Privacy always"
  },
  {
    id: "pol5",
    branch: "political",
    text: "A small island nation is sinking due to climate change caused mostly by large industrial nations. Should those nations be forced to take in the island's refugees?",
    context: "Climate Justice — responsibility for harm you didn't individually cause.",
    likeText: "They owe them refuge",
    dislikeText: "No nation should be forced"
  },
  {
    id: "pol6",
    branch: "political",
    text: "Voting should be mandatory — everyone must participate in democracy. Do you agree?",
    context: "Compulsory Voting — duty to participate vs. freedom to abstain.",
    likeText: "Make it mandatory",
    dislikeText: "Freedom to abstain"
  },
  {
    id: "pol7",
    branch: "political",
    text: "An AI system could make perfectly rational policy decisions free from corruption and bias. Should we let it govern?",
    context: "Technocracy — rule by expertise vs. rule by the people.",
    likeText: "Let the AI govern",
    dislikeText: "Humans must decide"
  },
  {
    id: "pol8",
    branch: "political",
    text: "A country has a history of systemic oppression against a group. Should the current generation pay reparations even though they personally didn't commit the injustice?",
    context: "Intergenerational Justice — inheriting responsibility for past wrongs.",
    likeText: "Yes, pay reparations",
    dislikeText: "Not their burden"
  },
  {
    id: "pol9",
    branch: "political",
    text: "Civil disobedience: if a law is unjust, is it morally right to break it — even if you accept the punishment?",
    context: "Thoreau & MLK — the duty to resist unjust laws.",
    likeText: "Break unjust laws",
    dislikeText: "Change laws legally"
  },
  {
    id: "pol10",
    branch: "political",
    text: "Borders are imaginary lines. Should people be free to live and work anywhere in the world, or do nations have the right to control immigration?",
    context: "Open Borders Debate — national sovereignty vs. human freedom.",
    likeText: "Open all borders",
    dislikeText: "Nations decide"
  },

  // ===== METAPHYSICS =====
  {
    id: "met1",
    branch: "metaphysics",
    text: "If scientists created a perfect atom-by-atom copy of you — same memories, same personality — would that copy be \"you\"?",
    context: "Personal Identity — what makes you, you?",
    likeText: "Yes, that's me",
    dislikeText: "No, I'm unique"
  },
  {
    id: "met2",
    branch: "metaphysics",
    text: "Do you have free will, or is every decision you make just the result of brain chemistry and physics that was set in motion at the Big Bang?",
    context: "Determinism vs. Free Will — the ultimate question of control.",
    likeText: "I have free will",
    dislikeText: "It's all determined"
  },
  {
    id: "met3",
    branch: "metaphysics",
    text: "A teleporter scans your body, destroys it, and recreates you perfectly at the destination. Is the person who arrives still you, or did you just die?",
    context: "Teleportation Paradox — continuity of consciousness.",
    likeText: "Still me",
    dislikeText: "I died"
  },
  {
    id: "met4",
    branch: "metaphysics",
    text: "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
    context: "Observer-Dependent Reality — does perception create reality?",
    likeText: "Yes, obviously",
    dislikeText: "No observer, no sound"
  },
  {
    id: "met5",
    branch: "metaphysics",
    text: "What if we're all living in a simulation right now? Would it matter? Would your life be less meaningful?",
    context: "Simulation Hypothesis — does the nature of reality affect its value?",
    likeText: "Doesn't matter",
    dislikeText: "It changes everything"
  },
  {
    id: "met6",
    branch: "metaphysics",
    text: "Time: does it actually flow, or is every moment — past, present, future — equally real, and we just experience them one at a time?",
    context: "Block Universe Theory — is time an illusion?",
    likeText: "Time flows",
    dislikeText: "All moments exist"
  },
  {
    id: "met7",
    branch: "metaphysics",
    text: "Could a color you see as \"red\" look completely different to someone else, but they also call it \"red\"? Is there any way to know?",
    context: "Inverted Qualia — the privacy of subjective experience.",
    likeText: "We see the same thing",
    dislikeText: "We'll never know"
  },
  {
    id: "met8",
    branch: "metaphysics",
    text: "Numbers, mathematical truths, geometric shapes — do they exist independently of human minds, or did we invent them?",
    context: "Mathematical Platonism — are abstract objects real?",
    likeText: "They exist independently",
    dislikeText: "We invented them"
  },
  {
    id: "met9",
    branch: "metaphysics",
    text: "If the universe has a cause, what caused that cause? Can there be an infinite chain of causes, or must there be a first uncaused cause?",
    context: "Cosmological Argument — the question of ultimate origins.",
    likeText: "There's a first cause",
    dislikeText: "Infinite chain is fine"
  },
  {
    id: "met10",
    branch: "metaphysics",
    text: "You go to sleep and wake up tomorrow. Are you the same person, or did \"you\" from yesterday cease to exist and a new consciousness just inherited their memories?",
    context: "Personal Identity Over Time — the continuity problem.",
    likeText: "Same person",
    dislikeText: "New me every day"
  },

  // ===== EPISTEMOLOGY =====
  {
    id: "epi1",
    branch: "epistemology",
    text: "You're a brain in a vat being fed electrical signals that perfectly simulate reality. You can't tell the difference. Can you really \"know\" anything?",
    context: "Brain in a Vat — the limits of knowledge and certainty.",
    likeText: "I can still know things",
    dislikeText: "True knowledge is impossible"
  },
  {
    id: "epi2",
    branch: "epistemology",
    text: "A clock stopped at 12:00 exactly 12 hours ago. You glance at it at exactly noon and believe it's 12:00. You're right — but is that knowledge?",
    context: "Gettier Problem — when justified true belief isn't enough.",
    likeText: "That counts as knowledge",
    dislikeText: "Lucky guesses don't count"
  },
  {
    id: "epi3",
    branch: "epistemology",
    text: "Science has been wrong before — the Earth was \"flat,\" bloodletting was \"medicine.\" Can we ever be certain our current science is right?",
    context: "Scientific Anti-Realism — should we trust our best theories?",
    likeText: "Science is reliable",
    dislikeText: "Always be skeptical"
  },
  {
    id: "epi4",
    branch: "epistemology",
    text: "Your gut feeling tells you not to trust someone, but you have zero evidence against them. Should you act on intuition or only on evidence?",
    context: "Rationalism vs. Intuition — the role of non-rational knowing.",
    likeText: "Trust my gut",
    dislikeText: "Only evidence matters"
  },
  {
    id: "epi5",
    branch: "epistemology",
    text: "An expert with decades of experience disagrees with a viral social media post backed by a passionate crowd. Whose opinion carries more weight?",
    context: "Epistemic Authority — who do we trust to know?",
    likeText: "The expert",
    dislikeText: "Question everyone equally"
  },
  {
    id: "epi6",
    branch: "epistemology",
    text: "You've seen the sun rise every single day of your life. Can you be 100% certain it will rise tomorrow?",
    context: "Problem of Induction — can the past guarantee the future?",
    likeText: "Yes, I'm certain",
    dislikeText: "Can't be 100% sure"
  },
  {
    id: "epi7",
    branch: "epistemology",
    text: "Two historians examine the same evidence and reach opposite conclusions. Does objective historical truth exist, or is all history interpretation?",
    context: "Historical Epistemology — can we know the past as it really was?",
    likeText: "Objective truth exists",
    dislikeText: "It's all interpretation"
  },
  {
    id: "epi8",
    branch: "epistemology",
    text: "A conspiracy theory perfectly explains all the evidence and can't be disproven. Does that make it a valid explanation?",
    context: "Falsifiability — Karl Popper's criterion for real knowledge.",
    likeText: "If it fits, it works",
    dislikeText: "Unfalsifiable = not knowledge"
  },
  {
    id: "epi9",
    branch: "epistemology",
    text: "You only experience the world through your senses. But your senses can be fooled (optical illusions, hallucinations). Can perception ever give you truth?",
    context: "Descartes' Demon — radical doubt about sensory knowledge.",
    likeText: "Senses are reliable enough",
    dislikeText: "We can't fully trust them"
  },
  {
    id: "epi10",
    branch: "epistemology",
    text: "Is mathematics discovered or invented? Are we uncovering truths that already exist, or building useful tools from scratch?",
    context: "Philosophy of Mathematics — the nature of mathematical knowledge.",
    likeText: "Discovered",
    dislikeText: "Invented"
  },

  // ===== AESTHETICS =====
  {
    id: "aes1",
    branch: "aesthetics",
    text: "An AI generates a painting that moves people to tears. Is it art, even though no human created it?",
    context: "Art and Authorship — does art require a human creator?",
    likeText: "It's still art",
    dislikeText: "Art needs a human"
  },
  {
    id: "aes2",
    branch: "aesthetics",
    text: "A urinal is placed in a museum and called art (Duchamp actually did this). Is it art just because someone says it is?",
    context: "Fountain by Duchamp — the institutional theory of art.",
    likeText: "If it's in a museum, sure",
    dislikeText: "That's not art"
  },
  {
    id: "aes3",
    branch: "aesthetics",
    text: "A sunset is beautiful, but beauty is just your brain releasing chemicals. Does that make beauty \"real\" or just a biological trick?",
    context: "Objective vs. Subjective Beauty — is beauty in the world or in our heads?",
    likeText: "Beauty is real",
    dislikeText: "Just brain chemistry"
  },
  {
    id: "aes4",
    branch: "aesthetics",
    text: "A song you love turns out to be written by someone who did terrible things. Can you still enjoy the art, or is it tainted?",
    context: "Art vs. Artist — separating creation from creator.",
    likeText: "Art stands alone",
    dislikeText: "The artist taints it"
  },
  {
    id: "aes5",
    branch: "aesthetics",
    text: "A forgery of a famous painting is so perfect that no expert can tell the difference. Is it worth less than the original? Why?",
    context: "The Value of Authenticity — what makes an original special?",
    likeText: "Same quality, same value",
    dislikeText: "The original is priceless"
  },
  {
    id: "aes6",
    branch: "aesthetics",
    text: "Should art be comfortable and beautiful, or should it disturb and challenge you? Which is more valuable?",
    context: "The Purpose of Art — decoration vs. disruption.",
    likeText: "Comfort and beauty",
    dislikeText: "Challenge and disturb"
  },
  {
    id: "aes7",
    branch: "aesthetics",
    text: "Video games can make you cry, think, and experience moral dilemmas. Are they art in the same way as novels or films?",
    context: "New Media as Art — expanding the definition of artistic expression.",
    likeText: "Absolutely art",
    dislikeText: "Entertainment, not art"
  },
  {
    id: "aes8",
    branch: "aesthetics",
    text: "A chef spends hours creating a dish that's visually stunning and delicious but disappears in minutes. Is cooking an art form?",
    context: "Ephemeral Art — does art need to last?",
    likeText: "Cooking is art",
    dislikeText: "Art must endure"
  },
  {
    id: "aes9",
    branch: "aesthetics",
    text: "Nature is beautiful, but nature wasn't \"designed\" to be beautiful. Does beauty require intention, or can it be accidental?",
    context: "Natural Beauty — intention vs. happenstance in aesthetics.",
    likeText: "Beauty needs intention",
    dislikeText: "Beauty can be accidental"
  },
  {
    id: "aes10",
    branch: "aesthetics",
    text: "A movie is critically acclaimed but you found it boring. Are you wrong, or is taste truly subjective?",
    context: "Taste and Criticism — can aesthetic judgment be objectively wrong?",
    likeText: "Taste is subjective",
    dislikeText: "Some art is objectively better"
  }
];

// Branch display names and colors
const BRANCHES = {
  ethics: { name: "Ethics", color: "#e74c3c", icon: "⚖️" },
  logic: { name: "Logic", color: "#3498db", icon: "🧩" },
  political: { name: "Political Philosophy", color: "#9b59b6", icon: "🏛️" },
  metaphysics: { name: "Metaphysics", color: "#1abc9c", icon: "🌌" },
  epistemology: { name: "Epistemology", color: "#f39c12", icon: "🔍" },
  aesthetics: { name: "Aesthetics", color: "#e91e63", icon: "🎨" }
};

// Philosopher types based on preferences
// Axes:
// R vs E — Rationalist vs Empiricist (logic + epistemology)
// I vs M — Idealist vs Materialist (metaphysics)
// A vs E — Altruist vs Egoist (ethics)
// C vs L — Communitarian vs Libertarian (political)
const PHILOSOPHER_TYPES = {
  "RIAC": {
    title: "The Enlightened Guardian",
    subtitle: "Rationalist · Idealist · Altruist · Communitarian",
    description: "You believe in reason, higher truths, helping others, and building a just society. Think Plato meets Kant — you'd design a perfect republic run by philosopher-kings and universal moral laws. You trust logic over feelings and believe we can reason our way to a better world.",
    gif: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
  },
  "RIAL": {
    title: "The Principled Maverick",
    subtitle: "Rationalist · Idealist · Altruist · Libertarian",
    description: "A moral idealist who believes in individual freedom. You think everyone has a duty to help others — but no government should force them. Like Thoreau with a logic textbook. You'd build a utopia, then make attendance voluntary.",
    gif: "https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"
  },
  "RIEC": {
    title: "The Strategic Architect",
    subtitle: "Rationalist · Idealist · Egoist · Communitarian",
    description: "You're a builder of grand systems who believes in higher truths but isn't naive about self-interest. Think Machiavelli with ideals — you'd create a perfect society, and yes, you'd be running it. For the greater good, of course.",
    gif: "https://media.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.gif"
  },
  "RIEL": {
    title: "The Rational Egoist",
    subtitle: "Rationalist · Idealist · Egoist · Libertarian",
    description: "Ayn Rand would be proud. You trust reason, believe in transcendent principles, look after yourself first, and want maximum freedom. You see the world clearly and think everyone should earn their own way to enlightenment.",
    gif: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif"
  },
  "RMAC": {
    title: "The People's Philosopher",
    subtitle: "Rationalist · Materialist · Altruist · Communitarian",
    description: "You're grounded in reality, care about others, and think society should be organized for the common good. Very Marx-meets-Aristotle energy — you'd use reason and evidence to build systems that actually help people.",
    gif: "https://media.giphy.com/media/l4FGuhL4U2WSOXsmI/giphy.gif"
  },
  "RMAL": {
    title: "The Pragmatic Liberator",
    subtitle: "Rationalist · Materialist · Altruist · Libertarian",
    description: "You believe in what's real, care about people, but think freedom is the best way to help them. Like John Stuart Mill — maximize happiness, minimize interference. You'd rather educate than legislate.",
    gif: "https://media.giphy.com/media/xT0xeJpnrWC3niaWUS/giphy.gif"
  },
  "RMEC": {
    title: "The Power Realist",
    subtitle: "Rationalist · Materialist · Egoist · Communitarian",
    description: "Hobbes energy. You see the world as it is — material, competitive, and in need of strong systems. Self-interest is natural, and a well-designed society channels it productively. You'd build institutions that work with human nature, not against it.",
    gif: "https://media.giphy.com/media/3og0ITQOC5wlyk8ffy/giphy.gif"
  },
  "RMEL": {
    title: "The Cold Logician",
    subtitle: "Rationalist · Materialist · Egoist · Libertarian",
    description: "Pure reason, hard facts, self-reliance, total freedom. You're the philosopher who actually does the math. No fuzzy feelings, no utopian dreams — just clear thinking and personal responsibility. Think Spock with a libertarian streak.",
    gif: "https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif"
  },
  "EIAC": {
    title: "The Empathic Visionary",
    subtitle: "Empiricist · Idealist · Altruist · Communitarian",
    description: "You learn from experience, dream of higher truths, care deeply about others, and believe in community. You're the philosopher who volunteers at shelters while reading Hegel. Heart and mind in perfect balance.",
    gif: "https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif"
  },
  "EIAL": {
    title: "The Gentle Rebel",
    subtitle: "Empiricist · Idealist · Altruist · Libertarian",
    description: "You trust your experience, believe in something greater, want to help everyone, but refuse to be told how. Gandhi vibes — change the world through example, not force. You're the philosopher at the protest with a flower.",
    gif: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
  },
  "EIEC": {
    title: "The Intuitive Leader",
    subtitle: "Empiricist · Idealist · Egoist · Communitarian",
    description: "You trust your gut, believe in big ideas, look after yourself, and think society needs structure. You lead through charisma and experience. Think a philosophical CEO who reads Marcus Aurelius unironically.",
    gif: "https://media.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.gif"
  },
  "EIEL": {
    title: "The Wandering Sage",
    subtitle: "Empiricist · Idealist · Egoist · Libertarian",
    description: "Experience is your teacher, you sense deeper truths, you focus on your own path, and you refuse to be constrained. Nietzsche meets Kerouac. You're the philosopher on a motorcycle, searching for meaning on the open road.",
    gif: "https://media.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif"
  },
  "EMAC": {
    title: "The Ground-Level Hero",
    subtitle: "Empiricist · Materialist · Altruist · Communitarian",
    description: "Totally grounded, deeply practical, genuinely caring, and committed to community. You're the philosopher who fixes things. No abstract theories — just real solutions for real people. Think a pragmatist social worker with a philosophy degree.",
    gif: "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"
  },
  "EMAL": {
    title: "The Practical Idealist",
    subtitle: "Empiricist · Materialist · Altruist · Libertarian",
    description: "Feet on the ground, heart in the right place, hands off my freedom. You believe the best way to help people is to let them help themselves — with good info and fair chances. Adam Smith's better angel.",
    gif: "https://media.giphy.com/media/l0Iy69RBOv3hIRyBq/giphy.gif"
  },
  "EMEC": {
    title: "The Survivor Philosopher",
    subtitle: "Empiricist · Materialist · Egoist · Communitarian",
    description: "You've learned from life that the world is material, self-interest is real, and strong communities survive. Not cynical — realistic. You'd build a society that accounts for human nature and actually works. Machiavelli with field experience.",
    gif: "https://media.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif"
  },
  "EMEL": {
    title: "The Lone Wolf Thinker",
    subtitle: "Empiricist · Materialist · Egoist · Libertarian",
    description: "You trust what you can see and touch, take care of yourself first, and want to be left alone. Diogenes in a barrel, but by choice. The world is what it is — you see it clearly and navigate it on your own terms.",
    gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
  }
};
