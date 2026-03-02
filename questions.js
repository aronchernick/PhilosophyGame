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
  {
    id: "eth11",
    branch: "ethics",
    text: "You witness a stranger shoplifting food from a grocery store. Do you report them?",
    context: "Necessity vs. Law — when survival conflicts with social rules.",
    likeText: "Report them",
    dislikeText: "Look away"
  },
  {
    id: "eth12",
    branch: "ethics",
    text: "A self-driving car must choose: swerve to kill one pedestrian or stay straight and kill five. Who should program that decision — and how?",
    context: "Algorithmic Ethics — when machines must make moral choices.",
    likeText: "Program to save the most",
    dislikeText: "It shouldn't decide"
  },
  {
    id: "eth13",
    branch: "ethics",
    text: "You can save one person you love or five strangers. Does love justify choosing the one?",
    context: "Partiality vs. Impartiality — do our relationships create special moral duties?",
    likeText: "Save the one I love",
    dislikeText: "Save the five strangers"
  },
  {
    id: "eth14",
    branch: "ethics",
    text: "A terminally ill patient in agony begs their doctor for a lethal dose of medication. Should the doctor provide it?",
    context: "Euthanasia — autonomy, mercy, and the limits of medical duty.",
    likeText: "Honor their wish",
    dislikeText: "Never end a life"
  },
  {
    id: "eth15",
    branch: "ethics",
    text: "You can donate a kidney and save a stranger's life at significant risk and pain to yourself. Are you morally obligated to?",
    context: "Supererogation — the line between duty and sainthood.",
    likeText: "It's my obligation",
    dislikeText: "It's above and beyond"
  },
  {
    id: "eth16",
    branch: "ethics",
    text: "A whistleblower leaks classified documents that expose government corruption — but also endanger lives. Were they right to do it?",
    context: "Whistleblowing — public interest vs. personal loyalty and consequences.",
    likeText: "Truth had to come out",
    dislikeText: "Too dangerous to justify"
  },
  {
    id: "eth17",
    branch: "ethics",
    text: "You're a judge sentencing someone who committed a terrible crime out of genuine desperation. The law demands 10 years. Do you follow the law?",
    context: "Equity vs. Law — when justice and the legal system diverge.",
    likeText: "Follow the law",
    dislikeText: "Show mercy"
  },
  {
    id: "eth18",
    branch: "ethics",
    text: "You could save 1,000 lives in a faraway country by donating your life savings. Are you morally required to?",
    context: "Effective Altruism — how far does moral obligation actually extend?",
    likeText: "Yes, I'm obligated",
    dislikeText: "That's too much to ask"
  },
  {
    id: "eth19",
    branch: "ethics",
    text: "A friend tells you something in confidence, then you learn it's putting someone else in danger. Do you break their trust?",
    context: "Confidentiality vs. Harm Prevention — the ethics of secrets.",
    likeText: "Break the confidence",
    dislikeText: "Honor the trust"
  },
  {
    id: "eth20",
    branch: "ethics",
    text: "Is it ever ethical to lie to make someone feel better — even if they'd want to know the truth?",
    context: "White Lies — when honesty conflicts with compassion.",
    likeText: "Kindness over honesty",
    dislikeText: "Truth always"
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
  {
    id: "log11",
    branch: "logic",
    text: "\"If you're not with us, you're against us.\" Is this a valid way to frame a disagreement?",
    context: "False Dichotomy — when a binary framing hides a spectrum of options.",
    likeText: "Sometimes it's that simple",
    dislikeText: "There's always a middle ground"
  },
  {
    id: "log12",
    branch: "logic",
    text: "A politician says: \"Crime rose after we cut police funding, therefore the cuts caused the crime.\" Is that a sound argument?",
    context: "Post Hoc Fallacy — correlation mistaken for causation.",
    likeText: "Sounds reasonable",
    dislikeText: "Correlation isn't causation"
  },
  {
    id: "log13",
    branch: "logic",
    text: "\"This painkiller is safe — it's been used for centuries.\" Does tradition make something trustworthy?",
    context: "Appeal to Tradition — the assumption that old equals reliable.",
    likeText: "Time-tested counts for something",
    dislikeText: "Age proves nothing"
  },
  {
    id: "log14",
    branch: "logic",
    text: "Can a statement be both true and false at the same time, in the same sense?",
    context: "Law of Non-Contradiction — the bedrock of classical logic.",
    likeText: "Never — logic forbids it",
    dislikeText: "Some paradoxes break the rule"
  },
  {
    id: "log15",
    branch: "logic",
    text: "You flip a fair coin and get heads ten times in a row. Is tails now more likely on the next flip?",
    context: "The Gambler's Fallacy — misreading probability and independence.",
    likeText: "Tails is overdue",
    dislikeText: "Still 50/50 every time"
  },
  {
    id: "log16",
    branch: "logic",
    text: "\"Nobody has ever proven ghosts don't exist — so they might.\" Is absence of evidence evidence of absence?",
    context: "Argument from Ignorance — when lack of disproof becomes proof.",
    likeText: "Unproven doesn't mean impossible",
    dislikeText: "Absence of proof matters"
  },
  {
    id: "log17",
    branch: "logic",
    text: "Every rule has an exception. But if that's a rule, does it have an exception too?",
    context: "Self-Defeating Statements — when a claim undermines itself.",
    likeText: "It's a genuine paradox",
    dislikeText: "It's just a figure of speech"
  },
  {
    id: "log18",
    branch: "logic",
    text: "A detective concludes: \"The butler is the most likely suspect, therefore the butler did it.\" Is that valid reasoning?",
    context: "Jumping to Conclusions — the gap between likelihood and proof.",
    likeText: "Most likely is good enough",
    dislikeText: "Likely isn't certain"
  },
  {
    id: "log19",
    branch: "logic",
    text: "Can an omnipotent being create a rock so heavy that even they can't lift it?",
    context: "The Omnipotence Paradox — when absolute power contradicts itself.",
    likeText: "Yes — omnipotence means anything",
    dislikeText: "No — it's a logical contradiction"
  },
  {
    id: "log20",
    branch: "logic",
    text: "\"I know one thing: that I know nothing.\" Is this statement itself a form of knowledge?",
    context: "Socratic Paradox — self-referential claims about the limits of knowing.",
    likeText: "Yes, it's meaningful knowledge",
    dislikeText: "It contradicts itself"
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
  
  // ===== ETHICS (eth11–eth20) =====
  {
    id: "eth11",
    branch: "ethics",
    text: "You witness a stranger shoplifting food from a grocery store. Do you report them?",
    context: "Necessity vs. Law — when survival conflicts with social rules.",
    likeText: "Report them",
    dislikeText: "Look away"
  },
  {
    id: "eth12",
    branch: "ethics",
    text: "A self-driving car must choose: swerve to kill one pedestrian or stay straight and kill five. Who should program that decision — and how?",
    context: "Algorithmic Ethics — when machines must make moral choices.",
    likeText: "Program to save the most",
    dislikeText: "It shouldn't decide"
  },
  {
    id: "eth13",
    branch: "ethics",
    text: "You can save one person you love or five strangers. Does love justify choosing the one?",
    context: "Partiality vs. Impartiality — do our relationships create special moral duties?",
    likeText: "Save the one I love",
    dislikeText: "Save the five strangers"
  },
  {
    id: "eth14",
    branch: "ethics",
    text: "A terminally ill patient in agony begs their doctor for a lethal dose of medication. Should the doctor provide it?",
    context: "Euthanasia — autonomy, mercy, and the limits of medical duty.",
    likeText: "Honor their wish",
    dislikeText: "Never end a life"
  },
  {
    id: "eth15",
    branch: "ethics",
    text: "You can donate a kidney and save a stranger's life at significant risk and pain to yourself. Are you morally obligated to?",
    context: "Supererogation — the line between duty and sainthood.",
    likeText: "It's my obligation",
    dislikeText: "It's above and beyond"
  },
  {
    id: "eth16",
    branch: "ethics",
    text: "A whistleblower leaks classified documents that expose government corruption — but also endanger lives. Were they right to do it?",
    context: "Whistleblowing — public interest vs. personal loyalty and consequences.",
    likeText: "Truth had to come out",
    dislikeText: "Too dangerous to justify"
  },
  {
    id: "eth17",
    branch: "ethics",
    text: "You're a judge sentencing someone who committed a terrible crime out of genuine desperation. The law demands 10 years. Do you follow the law?",
    context: "Equity vs. Law — when justice and the legal system diverge.",
    likeText: "Follow the law",
    dislikeText: "Show mercy"
  },
  {
    id: "eth18",
    branch: "ethics",
    text: "You could save 1,000 lives in a faraway country by donating your life savings. Are you morally required to?",
    context: "Effective Altruism — how far does moral obligation actually extend?",
    likeText: "Yes, I'm obligated",
    dislikeText: "That's too much to ask"
  },
  {
    id: "eth19",
    branch: "ethics",
    text: "A friend tells you something in confidence, then you learn it's putting someone else in danger. Do you break their trust?",
    context: "Confidentiality vs. Harm Prevention — the ethics of secrets.",
    likeText: "Break the confidence",
    dislikeText: "Honor the trust"
  },
  {
    id: "eth20",
    branch: "ethics",
    text: "Is it ever ethical to lie to make someone feel better — even if they'd want to know the truth?",
    context: "White Lies — when honesty conflicts with compassion.",
    likeText: "Kindness over honesty",
    dislikeText: "Truth always"
  },

  // ===== LOGIC (log11–log20) =====
  {
    id: "log11",
    branch: "logic",
    text: "\"If you're not with us, you're against us.\" Is this a valid way to frame a disagreement?",
    context: "False Dichotomy — when a binary framing hides a spectrum of options.",
    likeText: "Sometimes it's that simple",
    dislikeText: "There's always a middle ground"
  },
  {
    id: "log12",
    branch: "logic",
    text: "A politician says: \"Crime rose after we cut police funding, therefore the cuts caused the crime.\" Is that a sound argument?",
    context: "Post Hoc Fallacy — correlation mistaken for causation.",
    likeText: "Sounds reasonable",
    dislikeText: "Correlation isn't causation"
  },
  {
    id: "log13",
    branch: "logic",
    text: "\"This painkiller is safe — it's been used for centuries.\" Does tradition make something trustworthy?",
    context: "Appeal to Tradition — the assumption that old equals reliable.",
    likeText: "Time-tested counts for something",
    dislikeText: "Age proves nothing"
  },
  {
    id: "log14",
    branch: "logic",
    text: "Can a statement be both true and false at the same time, in the same sense?",
    context: "Law of Non-Contradiction — the bedrock of classical logic.",
    likeText: "Never — logic forbids it",
    dislikeText: "Some paradoxes break the rule"
  },
  {
    id: "log15",
    branch: "logic",
    text: "You flip a fair coin and get heads ten times in a row. Is tails now more likely on the next flip?",
    context: "The Gambler's Fallacy — misreading probability and independence.",
    likeText: "Tails is overdue",
    dislikeText: "Still 50/50 every time"
  },
  {
    id: "log16",
    branch: "logic",
    text: "\"Nobody has ever proven ghosts don't exist — so they might.\" Is absence of evidence evidence of absence?",
    context: "Argument from Ignorance — when lack of disproof becomes proof.",
    likeText: "Unproven doesn't mean impossible",
    dislikeText: "Absence of proof matters"
  },
  {
    id: "log17",
    branch: "logic",
    text: "Every rule has an exception. But if that's a rule, does it have an exception too?",
    context: "Self-Defeating Statements — when a claim undermines itself.",
    likeText: "It's a genuine paradox",
    dislikeText: "It's just a figure of speech"
  },
  {
    id: "log18",
    branch: "logic",
    text: "A detective concludes: \"The butler is the most likely suspect, therefore the butler did it.\" Is that valid reasoning?",
    context: "Jumping to Conclusions — the gap between likelihood and proof.",
    likeText: "Most likely is good enough",
    dislikeText: "Likely isn't certain"
  },
  {
    id: "log19",
    branch: "logic",
    text: "Can an omnipotent being create a rock so heavy that even they can't lift it?",
    context: "The Omnipotence Paradox — when absolute power contradicts itself.",
    likeText: "Yes — omnipotence means anything",
    dislikeText: "No — it's a logical contradiction"
  },
  {
    id: "log20",
    branch: "logic",
    text: "\"I know one thing: that I know nothing.\" Is this statement itself a form of knowledge?",
    context: "Socratic Paradox — self-referential claims about the limits of knowing.",
    likeText: "Yes, it's meaningful knowledge",
    dislikeText: "It contradicts itself"
  },

  // ===== POLITICAL PHILOSOPHY (pol11–pol20) =====
  {
    id: "pol11",
    branch: "political",
    text: "Should a democracy ever override the will of the majority to protect a minority group?",
    context: "Tyranny of the Majority — when democratic outcomes conflict with rights.",
    likeText: "Protect the minority",
    dislikeText: "Majority rules"
  },
  {
    id: "pol12",
    branch: "political",
    text: "A government bans a political party that openly wants to dismantle democracy. Is that justified?",
    context: "Militant Democracy — can democracy defend itself by limiting itself?",
    likeText: "Ban them to protect democracy",
    dislikeText: "All parties must be allowed"
  },
  {
    id: "pol13",
    branch: "political",
    text: "Should wealthy nations forgive the debt of poor nations, even if those debts were legally agreed upon?",
    context: "Global Justice — the ethics of international financial obligation.",
    likeText: "Forgive the debt",
    dislikeText: "A deal is a deal"
  },
  {
    id: "pol14",
    branch: "political",
    text: "Is it ever justified to go to war to stop a genocide happening in another country?",
    context: "Humanitarian Intervention — sovereignty vs. the responsibility to protect.",
    likeText: "Intervene to stop atrocities",
    dislikeText: "Respect national sovereignty"
  },
  {
    id: "pol15",
    branch: "political",
    text: "Should people who commit crimes lose their right to vote, even after serving their sentence?",
    context: "Civic Punishment — does incarceration extend beyond prison walls?",
    likeText: "They forfeited that right",
    dislikeText: "Voting is a basic right"
  },
  {
    id: "pol16",
    branch: "political",
    text: "Should the internet be treated as a public utility — regulated like electricity — or a free market product?",
    context: "Digital Commons — who controls the infrastructure of modern life?",
    likeText: "Public utility",
    dislikeText: "Free market"
  },
  {
    id: "pol17",
    branch: "political",
    text: "A country's constitution is 200 years old and doesn't reflect modern values. Should it be rewritten from scratch?",
    context: "Constitutional Change — the tension between stability and progress.",
    likeText: "Rewrite it for today",
    dislikeText: "Preserve its foundations"
  },
  {
    id: "pol18",
    branch: "political",
    text: "Should a government have the right to censor scientific findings it believes would cause mass panic?",
    context: "Epistemic Paternalism — when the state decides what truth the public can handle.",
    likeText: "Protect public stability",
    dislikeText: "Truth must be free"
  },
  {
    id: "pol19",
    branch: "political",
    text: "Universal Basic Income: should every citizen receive a guaranteed income from the state, regardless of employment?",
    context: "UBI — redefining the social contract in a post-labor economy.",
    likeText: "Yes, it's a right",
    dislikeText: "Earn what you get"
  },
  {
    id: "pol20",
    branch: "political",
    text: "Should there be a global government with real authority over nations — or does that make tyranny too easy?",
    context: "World Government — cosmopolitanism vs. national sovereignty.",
    likeText: "Global governance makes sense",
    dislikeText: "Too dangerous to centralize"
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
  {
    id: "met11",
    branch: "metaphysics",
    text: "If the universe is infinite, does that mean every possible version of your life is being lived somewhere right now?",
    context: "The Infinite Universe — what infinity actually implies about possibility.",
    likeText: "Every version exists",
    dislikeText: "Infinity doesn't mean everything"
  },
  {
    id: "met12",
    branch: "metaphysics",
    text: "Is the self an illusion? Or is there a continuous \"you\" that persists through all your changes?",
    context: "The Self — Buddhism, Hume, and the bundle theory of identity.",
    likeText: "There's a real continuous self",
    dislikeText: "The self is a useful fiction"
  },
  {
    id: "met13",
    branch: "metaphysics",
    text: "Could something come from absolute nothing — no space, no time, no laws of physics? Or is \"nothing\" impossible?",
    context: "Ex Nihilo — the ultimate origin question.",
    likeText: "Something from nothing is possible",
    dislikeText: "True nothing is impossible"
  },
  {
    id: "met14",
    branch: "metaphysics",
    text: "Is consciousness just brain activity — or is there something it's like to be you that can't be reduced to neurons?",
    context: "The Hard Problem of Consciousness — qualia and the explanatory gap.",
    likeText: "Consciousness is brain activity",
    dislikeText: "There's something irreducible"
  },
  {
    id: "met15",
    branch: "metaphysics",
    text: "Could there be a universe with completely different laws of logic — where contradictions are true?",
    context: "Modal Realism — the nature and limits of possible worlds.",
    likeText: "Logic could be different elsewhere",
    dislikeText: "Logic is necessarily universal"
  },
  {
    id: "met16",
    branch: "metaphysics",
    text: "When you remember a past event, are you experiencing something real — or constructing a present fiction?",
    context: "Memory and Reality — the metaphysics of the past.",
    likeText: "Memory touches the real past",
    dislikeText: "Memory is always reconstruction"
  },
  {
    id: "met17",
    branch: "metaphysics",
    text: "Do causes actually produce effects — or do we just observe things happening in sequence and assume connection?",
    context: "Causation — Hume's skepticism about the necessity of cause and effect.",
    likeText: "Causation is real",
    dislikeText: "We project it onto the world"
  },
  {
    id: "met18",
    branch: "metaphysics",
    text: "Is there a fact of the matter about what's happening \"right now\" on the other side of the universe?",
    context: "Simultaneity — relativity and the metaphysics of the present moment.",
    likeText: "There's an objective present",
    dislikeText: "\"Now\" is relative, not absolute"
  },
  {
    id: "met19",
    branch: "metaphysics",
    text: "Could a philosophical zombie — a being physically identical to you but with no inner experience — exist?",
    context: "Philosophical Zombies — testing whether consciousness is over and above the physical.",
    likeText: "Zombies are conceivable",
    dislikeText: "No inner life means not identical"
  },
  {
    id: "met20",
    branch: "metaphysics",
    text: "Is the universe fine-tuned for life — or do we just notice it because we're here to notice it?",
    context: "The Anthropic Principle — selection bias in cosmological reasoning.",
    likeText: "It's genuinely fine-tuned",
    dislikeText: "We only see what lets us exist"
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
  {
    id: "epi11",
    branch: "epistemology",
    text: "If two people raised in completely different cultures disagree on a moral fact, is one of them simply wrong?",
    context: "Moral Epistemology — can cultural context affect access to moral truth?",
    likeText: "One of them is wrong",
    dislikeText: "Both can be right in their context"
  },
  {
    id: "epi12",
    branch: "epistemology",
    text: "Is there knowledge that humans are simply too cognitively limited to ever understand?",
    context: "Cognitive Closure — the possibility of permanently unknowable truths.",
    likeText: "Some things are beyond us",
    dislikeText: "In principle, anything is knowable"
  },
  {
    id: "epi13",
    branch: "epistemology",
    text: "You believe something false your entire life, but it makes you happier and more effective. Was it better not to know the truth?",
    context: "Epistemic Value — is knowledge always better than useful fiction?",
    likeText: "Truth matters more than comfort",
    dislikeText: "A useful belief has real value"
  },
  {
    id: "epi14",
    branch: "epistemology",
    text: "Can you ever truly understand someone else's pain — or are you always just projecting your own experience?",
    context: "The Problem of Other Minds — the limits of empathic knowledge.",
    likeText: "Genuine understanding is possible",
    dislikeText: "We only ever know our own experience"
  },
  {
    id: "epi15",
    branch: "epistemology",
    text: "If a lie detector were 100% accurate, should its results be admissible as evidence in court?",
    context: "Technology and Truth — the epistemology of machine-verified knowledge.",
    likeText: "Perfect accuracy earns trust",
    dislikeText: "The method still matters"
  },
  {
    id: "epi16",
    branch: "epistemology",
    text: "Is it possible to have genuine knowledge about the future — or is all forecasting just educated guessing?",
    context: "Predictive Knowledge — the epistemological status of forecasts.",
    likeText: "Some forecasts count as knowledge",
    dislikeText: "The future can't be known"
  },
  {
    id: "epi17",
    branch: "epistemology",
    text: "You read the same book twice, years apart, and it means something completely different. Which reading was correct?",
    context: "Interpretation — does meaning live in the text or in the reader?",
    likeText: "One interpretation is more correct",
    dislikeText: "Both readings are equally valid"
  },
  {
    id: "epi18",
    branch: "epistemology",
    text: "Dreams feel completely real while you're in them. What makes waking life more real?",
    context: "Dreaming and Reality — Descartes' first radical doubt.",
    likeText: "Waking life is clearly more real",
    dislikeText: "It's harder to prove than it seems"
  },
  {
    id: "epi19",
    branch: "epistemology",
    text: "Should we believe something if it makes our lives better, even without sufficient evidence?",
    context: "Pragmatism — William James and truth as what works.",
    likeText: "Useful belief has epistemic value",
    dislikeText: "Evidence is non-negotiable"
  },
  {
    id: "epi20",
    branch: "epistemology",
    text: "A child raised in isolation with no language — do they still have knowledge? Can you think without words?",
    context: "Language and Thought — the Sapir-Whorf hypothesis and prelinguistic cognition.",
    likeText: "Knowledge exists without language",
    dislikeText: "Language is required for real thought"
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
  },
   {
    id: "aes11",
    branch: "aesthetics",
    text: "A building is perfectly functional but visually ugly. Does that make it a design failure?",
    context: "Form vs. Function — whether beauty is a requirement or a bonus.",
    likeText: "Ugly design is bad design",
    dislikeText: "Function is what matters"
  },
  {
    id: "aes12",
    branch: "aesthetics",
    text: "Can silence be music? John Cage's 4'33\" is literally just a performer sitting at a piano without playing. Is that a composition?",
    context: "4'33\" by John Cage — the boundaries of what music can be.",
    likeText: "Silence is musical",
    dislikeText: "Music requires sound"
  },
  {
    id: "aes13",
    branch: "aesthetics",
    text: "Does knowing the meaning behind a piece of art change how beautiful it is — or should art speak for itself?",
    context: "Intentionalism — whether the artist's intent is part of the work's meaning.",
    likeText: "Context changes everything",
    dislikeText: "Art should stand alone"
  },
  {
    id: "aes14",
    branch: "aesthetics",
    text: "A novel written by an algorithm wins a literary prize. Does it deserve it?",
    context: "Algorithmic Creativity — whether art requires a conscious creator.",
    likeText: "The writing speaks for itself",
    dislikeText: "Art needs human intention"
  },
  {
    id: "aes15",
    branch: "aesthetics",
    text: "Is there such a thing as objectively bad taste — or is dismissing someone's taste always a form of snobbery?",
    context: "Aesthetic Elitism — who gets to define cultural value?",
    likeText: "Some taste is objectively worse",
    dislikeText: "Judging taste is always snobbery"
  },
  {
    id: "aes16",
    branch: "aesthetics",
    text: "Street art gets painted over by the city. Was it ever really art if society didn't sanction it?",
    context: "Outsider Art — legitimacy, permission, and the definition of art.",
    likeText: "Legitimacy doesn't make it art",
    dislikeText: "Without acceptance, it's just graffiti"
  },
  {
    id: "aes17",
    branch: "aesthetics",
    text: "Should art that was created to serve propaganda — but is genuinely beautiful — be displayed in museums?",
    context: "Art and Ideology — can aesthetic value be separated from moral origin?",
    likeText: "Display it for its beauty",
    dislikeText: "The ideology taints the art"
  },
  {
    id: "aes18",
    branch: "aesthetics",
    text: "Is a perfectly restored ancient statue more beautiful — or less — than one weathered and broken by time?",
    context: "Wabi-Sabi vs. Restoration — the aesthetics of age, damage, and perfection.",
    likeText: "Restoration makes it more beautiful",
    dislikeText: "Time adds its own beauty"
  },
  {
    id: "aes19",
    branch: "aesthetics",
    text: "If a piece of music makes you feel nothing, is it because the music failed — or because you did?",
    context: "Aesthetic Responsiveness — where does the failure of art lie?",
    likeText: "The music failed to connect",
    dislikeText: "The listener wasn't open enough"
  },
  {
    id: "aes20",
    branch: "aesthetics",
    text: "Fashion is often dismissed as shallow, but it shapes identity, culture, and self-expression. Is fashion art?",
    context: "Fashion as Art — the boundaries of aesthetic disciplines.",
    likeText: "Fashion is absolutely art",
    dislikeText: "Utility disqualifies it"
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

// Branch descriptions for results
const BRANCH_DESCRIPTIONS = {
  ethics: {
    name: "Ethics",
    tagline: "The Moralist",
    description: "You're drawn to questions of right and wrong, duty and consequence. You naturally evaluate the world through a moral lens — weighing fairness, obligation, and the impact of choices on others.",
    icon: "⚖️",
    color: "#e74c3c"
  },
  logic: {
    name: "Logic",
    tagline: "The Logician",
    description: "Puzzles, paradoxes, and precision — your mind lights up when structure meets contradiction. You love testing whether arguments actually hold up and catching subtle fallacies others miss.",
    icon: "🧩",
    color: "#3498db"
  },
  political: {
    name: "Political Philosophy",
    tagline: "The Civic Thinker",
    description: "You're fascinated by how societies should be organized — who gets power, what's fair, and where the line is between freedom and order.",
    icon: "🏛️",
    color: "#9b59b6"
  },
  metaphysics: {
    name: "Metaphysics",
    tagline: "The Metaphysician",
    description: "Reality itself is your playground. Identity, consciousness, time, existence — you're drawn to the biggest questions with no easy answers.",
    icon: "🌌",
    color: "#1abc9c"
  },
  epistemology: {
    name: "Epistemology",
    tagline: "The Epistemologist",
    description: "You question knowledge itself — how we know what we know, whether certainty is possible, and why we trust what we trust.",
    icon: "🔍",
    color: "#f39c12"
  },
  aesthetics: {
    name: "Aesthetics",
    tagline: "The Aesthete",
    description: "Beauty, art, taste, and meaning — you're captivated by what makes things matter beyond the purely logical.",
    icon: "🎨",
    color: "#e91e63"
  }
};

// Combination labels for primary + secondary pairs
const COMBO_LABELS = {
  "Ethics-Logic": "The Principled Analyst",
  "Ethics-political": "The Justice Seeker",
  "Ethics-Metaphysics": "The Moral Philosopher",
  "Ethics-Epistemology": "The Moral Skeptic",
  "Ethics-Aesthetics": "The Moral Romantic",
  "Logic-Ethics": "The Analytical Moralist",
  "Logic-Political": "The Systems Architect",
  "Logic-Metaphysics": "The Reality Debugger",
  "Logic-Epistemology": "The Truth Machine",
  "Logic-Aesthetics": "The Structured Creative",
  "Political-Ethics": "The Civic Moralist",
  "Political-Logic": "The Policy Engineer",
  "Political-Metaphysics": "The Visionary Statesperson",
  "Political-Epistemology": "The Informed Citizen",
  "Political-Aesthetics": "The Cultural Critic",
  "Metaphysics-Ethics": "The Existential Moralist",
  "Metaphysics-Logic": "The Abstract Reasoner",
  "Metaphysics-Political": "The Utopian Dreamer",
  "Metaphysics-Epistemology": "The Deep Doubter",
  "Metaphysics-Aesthetics": "The Reality Artist",
  "Epistemology-Ethics": "The Thoughtful Skeptic",
  "Epistemology-Logic": "The Knowledge Engineer",
  "Epistemology-Political": "The Critical Citizen",
  "Epistemology-Metaphysics": "The Philosophical Detective",
  "Epistemology-Aesthetics": "The Perceptive Artist",
  "Aesthetics-Ethics": "The Beautiful Mind",
  "Aesthetics-Logic": "The Elegant Thinker",
  "Aesthetics-Political": "The Cultural Revolutionary",
  "Aesthetics-Metaphysics": "The Transcendent Creator",
  "Aesthetics-Epistemology": "The Perceptive Artist"
};

// Book recommendations per branch (3 for primary, 2 for secondary)
const BOOK_RECOMMENDATIONS = {
  ethics: [
    { title: "Justice", author: "Michael Sandel", hook: "A practical tour through moral dilemmas that connects ethics to real policy choices.", url: "https://www.amazon.com/s?k=Justice+Michael+Sandel" },
    { title: "Nicomachean Ethics", author: "Aristotle", hook: "A foundational guide to character, virtue, and what it means to live well.", url: "https://www.amazon.com/s?k=Nicomachean+Ethics+Aristotle" },
    { title: "Practical Ethics", author: "Peter Singer", hook: "A challenging modern take that forces clear thinking about hard moral tradeoffs.", url: "https://www.amazon.com/s?k=Practical+Ethics+Peter+Singer" },
    { title: "On Liberty", author: "John Stuart Mill", hook: "A classic argument about freedom, harm, and the limits of social power.", url: "https://www.amazon.com/s?k=On+Liberty+John+Stuart+Mill" },
    { title: "Groundwork of the Metaphysics of Morals", author: "Immanuel Kant", hook: "A rigorous case for duty and universal moral principles.", url: "https://www.amazon.com/s?k=Groundwork+of+the+Metaphysics+of+Morals+Kant" }
  ],
  logic: [
    { title: "The Art of Logic", author: "Eugenia Cheng", hook: "Shows how formal reasoning improves everyday arguments and decisions.", url: "https://www.amazon.com/s?k=The+Art+of+Logic+Eugenia+Cheng" },
    { title: "Being Logical", author: "D.Q. McInerny", hook: "A concise, practical handbook for cleaner thinking.", url: "https://www.amazon.com/s?k=Being+Logical+D.Q.+McInerny" },
    { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", hook: "A deep and creative journey through logic, systems, and intelligence.", url: "https://www.amazon.com/s?k=Godel+Escher+Bach+Douglas+Hofstadter" },
    { title: "Logicomix", author: "Apostolos Doxiadis", hook: "A narrative introduction to the drama behind modern logic.", url: "https://www.amazon.com/s?k=Logicomix+Apostolos+Doxiadis" },
    { title: "How to Prove It", author: "Daniel J. Velleman", hook: "Builds formal proof skills from first principles.", url: "https://www.amazon.com/s?k=How+to+Prove+It+Daniel+Velleman" }
  ],
  political: [
    { title: "A Theory of Justice", author: "John Rawls", hook: "Defines fairness in institutions and remains central to modern political theory.", url: "https://www.amazon.com/s?k=A+Theory+of+Justice+John+Rawls" },
    { title: "The Republic", author: "Plato", hook: "The original grand blueprint for justice and political order.", url: "https://www.amazon.com/s?k=The+Republic+Plato" },
    { title: "Anarchy, State, and Utopia", author: "Robert Nozick", hook: "A strong libertarian reply that tests your assumptions about state power.", url: "https://www.amazon.com/s?k=Anarchy+State+and+Utopia+Robert+Nozick" },
    { title: "The Social Contract", author: "Jean-Jacques Rousseau", hook: "A foundational text on legitimacy, consent, and civic freedom.", url: "https://www.amazon.com/s?k=The+Social+Contract+Rousseau" },
    { title: "On Tyranny", author: "Timothy Snyder", hook: "A modern, practical guide to protecting democracy and civil institutions.", url: "https://www.amazon.com/s?k=On+Tyranny+Timothy+Snyder" }
  ],
  metaphysics: [
    { title: "The Problems of Philosophy", author: "Bertrand Russell", hook: "A clear doorway into classic questions about reality and identity.", url: "https://www.amazon.com/s?k=The+Problems+of+Philosophy+Bertrand+Russell" },
    { title: "Meditations", author: "Marcus Aurelius", hook: "A timeless reflection on self, change, and what matters in finite life.", url: "https://www.amazon.com/s?k=Meditations+Marcus+Aurelius" },
    { title: "Being and Time", author: "Martin Heidegger", hook: "A demanding but transformative exploration of existence.", url: "https://www.amazon.com/s?k=Being+and+Time+Martin+Heidegger" },
    { title: "Sophie's World", author: "Jostein Gaarder", hook: "A narrative way to absorb big metaphysical ideas quickly.", url: "https://www.amazon.com/s?k=Sophies+World+Jostein+Gaarder" },
    { title: "Reality Is Not What It Seems", author: "Carlo Rovelli", hook: "Connects modern physics to philosophical questions about what is real.", url: "https://www.amazon.com/s?k=Reality+Is+Not+What+It+Seems+Carlo+Rovelli" }
  ],
  epistemology: [
    { title: "Meditations on First Philosophy", author: "René Descartes", hook: "Starts from radical doubt to rebuild what can count as knowledge.", url: "https://www.amazon.com/s?k=Meditations+on+First+Philosophy+Descartes" },
    { title: "An Enquiry Concerning Human Understanding", author: "David Hume", hook: "A classic challenge to certainty, causality, and induction.", url: "https://www.amazon.com/s?k=An+Enquiry+Concerning+Human+Understanding+Hume" },
    { title: "On Certainty", author: "Ludwig Wittgenstein", hook: "Explores the hidden assumptions beneath claims of knowing.", url: "https://www.amazon.com/s?k=On+Certainty+Wittgenstein" },
    { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", hook: "Explains how paradigms shape what a field accepts as truth.", url: "https://www.amazon.com/s?k=The+Structure+of+Scientific+Revolutions+Thomas+Kuhn" },
    { title: "Epistemology: A Contemporary Introduction", author: "Robert Audi", hook: "A modern map of the field with clear definitions and debates.", url: "https://www.amazon.com/s?k=Epistemology+A+Contemporary+Introduction+Robert+Audi" }
  ],
  aesthetics: [
    { title: "Ways of Seeing", author: "John Berger", hook: "Changes how you interpret art, images, and cultural framing.", url: "https://www.amazon.com/s?k=Ways+of+Seeing+John+Berger" },
    { title: "The Birth of Tragedy", author: "Friedrich Nietzsche", hook: "A passionate argument for art as a central force in life.", url: "https://www.amazon.com/s?k=The+Birth+of+Tragedy+Nietzsche" },
    { title: "Art as Experience", author: "John Dewey", hook: "Shows how aesthetics lives in everyday experience, not just museums.", url: "https://www.amazon.com/s?k=Art+as+Experience+John+Dewey" },
    { title: "On Photography", author: "Susan Sontag", hook: "A sharp analysis of representation, meaning, and visual culture.", url: "https://www.amazon.com/s?k=On+Photography+Susan+Sontag" },
    { title: "The Aesthetic Brain", author: "Anjan Chatterjee", hook: "Links neuroscience with the psychology of beauty and taste.", url: "https://www.amazon.com/s?k=The+Aesthetic+Brain+Anjan+Chatterjee" }
  ]
};

// GIFs mapped by dominant branch
const RESULT_GIFS = {
  ethics: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
  logic: "https://media.giphy.com/media/xUPGcqaVH1cDeKZTBS/giphy.gif",
  political: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhpcXUxd2JzNHBkbG16NHd2cXNvc2Vjemg1dDE5ZnloMXU1NDBwdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZXwppK51PjNTQp8ILO/giphy.gif",
  metaphysics: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2x1cXU2ZjN0NDl2ZWd3cmR3aDg0bmMzbGZndmEycDR2bDVieW1xbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OK27wINdQS5YQ/giphy.gif",
  epistemology: "https://media.giphy.com/media/3og0ITQOC5wlyk8ffy/giphy.gif",
  aesthetics: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBocDc3bHJqMHV1aW1lb29sbGNkcWU0OWsyOGl0bDN2eXd6amE5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cu5WadRPu2Ilb4nLeM/giphy.gif"
};
