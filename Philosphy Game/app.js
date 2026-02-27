// Philosophy Game — Main Application Logic

class PhilosophyGame {
  constructor() {
    this.totalCards = 30; // default number of cards
    this.currentIndex = 0;
    this.responses = []; // { questionId, branch, liked }
    this.branchScores = {};
    this.askedIds = new Set();
    this.currentQuestion = null;
    this.isAnimating = false;

    // Initialize branch scores
    Object.keys(BRANCHES).forEach(branch => {
      this.branchScores[branch] = { likes: 0, dislikes: 0, asked: 0 };
    });

    this.init();
  }

  init() {
    this.bindEvents();
    this.showScreen('start-screen');
  }

  bindEvents() {
    // Start button
    document.getElementById('start-btn').addEventListener('click', () => this.startGame());

    // Like / Dislike buttons
    document.getElementById('like-btn').addEventListener('click', () => this.respond(true));
    document.getElementById('dislike-btn').addEventListener('click', () => this.respond(false));

    // Finish Now button
    document.getElementById('finish-btn').addEventListener('click', () => this.finishGame());

    // Play Again button
    document.getElementById('play-again-btn').addEventListener('click', () => this.restart());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (this.isAnimating) return;
      const gameScreen = document.getElementById('game-screen');
      if (gameScreen.classList.contains('hidden')) return;

      if (e.key === 'ArrowRight' || e.key === 'l') this.respond(true);
      if (e.key === 'ArrowLeft' || e.key === 'd') this.respond(false);
    });
  }

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
  }

  startGame() {
    this.currentIndex = 0;
    this.responses = [];
    this.askedIds = new Set();
    Object.keys(BRANCHES).forEach(branch => {
      this.branchScores[branch] = { likes: 0, dislikes: 0, asked: 0 };
    });
    this.showScreen('game-screen');
    this.showNextCard();
  }

  // Adaptive question selection
  pickNextQuestion() {
    const remaining = QUESTIONS.filter(q => !this.askedIds.has(q.id));
    if (remaining.length === 0) return null;

    const totalAsked = this.currentIndex;

    // Phase 1: First round — ensure each branch gets represented (first 6 questions)
    if (totalAsked < Object.keys(BRANCHES).length) {
      const branchesAsked = new Set(this.responses.map(r => r.branch));
      const unaskedBranches = Object.keys(BRANCHES).filter(b => !branchesAsked.has(b));

      if (unaskedBranches.length > 0) {
        const branch = unaskedBranches[Math.floor(Math.random() * unaskedBranches.length)];
        const branchQuestions = remaining.filter(q => q.branch === branch);
        if (branchQuestions.length > 0) {
          return branchQuestions[Math.floor(Math.random() * branchQuestions.length)];
        }
      }
    }

    // Phase 2: Second round — ensure each branch has at least 2 questions (questions 7-12)
    if (totalAsked < Object.keys(BRANCHES).length * 2) {
      const branchCounts = {};
      Object.keys(BRANCHES).forEach(b => branchCounts[b] = 0);
      this.responses.forEach(r => branchCounts[r.branch]++);

      const underRepresented = Object.keys(BRANCHES).filter(b => branchCounts[b] < 2);
      if (underRepresented.length > 0) {
        const branch = underRepresented[Math.floor(Math.random() * underRepresented.length)];
        const branchQuestions = remaining.filter(q => q.branch === branch);
        if (branchQuestions.length > 0) {
          return branchQuestions[Math.floor(Math.random() * branchQuestions.length)];
        }
      }
    }

    // Phase 3: Adaptive — favor branches with more likes, but occasionally mix in others
    // 70% chance: pick from a liked branch (weighted)
    // 30% chance: pick from any branch (exploration)
    const roll = Math.random();

    if (roll < 0.7) {
      // Build weight map based on likes
      const weights = {};
      let totalWeight = 0;
      Object.keys(BRANCHES).forEach(branch => {
        const score = this.branchScores[branch];
        // Weight = likes + 1 (so even with 0 likes there's a small chance)
        const w = score.likes + 1;
        weights[branch] = w;
        totalWeight += w;
      });

      // Weighted random selection of branch
      let r = Math.random() * totalWeight;
      let selectedBranch = null;
      for (const branch of Object.keys(weights)) {
        r -= weights[branch];
        if (r <= 0) {
          selectedBranch = branch;
          break;
        }
      }

      const branchQuestions = remaining.filter(q => q.branch === selectedBranch);
      if (branchQuestions.length > 0) {
        return branchQuestions[Math.floor(Math.random() * branchQuestions.length)];
      }
    }

    // Fallback: random from all remaining
    return remaining[Math.floor(Math.random() * remaining.length)];
  }

  showNextCard() {
    if (this.currentIndex >= this.totalCards) {
      this.finishGame();
      return;
    }

    const question = this.pickNextQuestion();
    if (!question) {
      this.finishGame();
      return;
    }

    this.currentQuestion = question;
    this.askedIds.add(question.id);

    // Update progress
    const progress = ((this.currentIndex) / this.totalCards) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('card-count').textContent = `${this.currentIndex + 1} / ${this.totalCards}`;

    // Update card content
    const card = document.getElementById('question-card');
    const branchInfo = BRANCHES[question.branch];

    document.getElementById('card-branch').textContent = `${branchInfo.icon} ${branchInfo.name}`;
    document.getElementById('card-branch').style.background = branchInfo.color;
    document.getElementById('card-text').textContent = question.text;
    document.getElementById('card-context').textContent = question.context;
    document.getElementById('like-btn-text').textContent = question.likeText;
    document.getElementById('dislike-btn-text').textContent = question.dislikeText;

    // Animate card in
    card.classList.remove('card-exit-left', 'card-exit-right');
    card.classList.add('card-enter');
    requestAnimationFrame(() => {
      card.classList.remove('card-enter');
    });
  }

  respond(liked) {
    if (this.isAnimating || !this.currentQuestion) return;
    this.isAnimating = true;

    const question = this.currentQuestion;
    const branch = question.branch;

    // Record response
    this.responses.push({
      questionId: question.id,
      branch: branch,
      liked: liked
    });

    // Update scores
    this.branchScores[branch].asked++;
    if (liked) {
      this.branchScores[branch].likes++;
    } else {
      this.branchScores[branch].dislikes++;
    }

    // Animate card out
    const card = document.getElementById('question-card');
    card.classList.add(liked ? 'card-exit-right' : 'card-exit-left');

    // Flash button
    const btn = liked ? document.getElementById('like-btn') : document.getElementById('dislike-btn');
    btn.classList.add('btn-flash');
    setTimeout(() => btn.classList.remove('btn-flash'), 300);

    this.currentIndex++;

    setTimeout(() => {
      this.isAnimating = false;
      this.showNextCard();
    }, 400);
  }

  finishGame() {
    this.showScreen('results-screen');
    this.calculateResults();
  }

  calculateResults() {
    // Determine philosopher type on 4 axes
    const scores = this.branchScores;

    // Axis 1: R vs E — Rationalist vs Empiricist
    // Logic likes + Epistemology "certainty" responses push R
    const logicLikes = scores.logic.likes;
    const logicDislikes = scores.logic.dislikes;
    const epiLikes = scores.epistemology.likes;
    const epiDislikes = scores.epistemology.dislikes;
    const rScore = logicLikes + epiLikes;
    const eScore = logicDislikes + epiDislikes;
    const axis1 = rScore >= eScore ? 'R' : 'E';

    // Axis 2: I vs M — Idealist vs Materialist
    const metLikes = scores.metaphysics.likes;
    const metDislikes = scores.metaphysics.dislikes;
    const aesLikes = scores.aesthetics.likes;
    const aesDislikes = scores.aesthetics.dislikes;
    const iScore = metLikes + aesLikes;
    const mScore = metDislikes + aesDislikes;
    const axis2 = iScore >= mScore ? 'I' : 'M';

    // Axis 3: A vs E — Altruist vs Egoist
    const ethLikes = scores.ethics.likes;
    const ethDislikes = scores.ethics.dislikes;
    const axis3 = ethLikes >= ethDislikes ? 'A' : 'E';

    // Axis 4: C vs L — Communitarian vs Libertarian
    const polLikes = scores.political.likes;
    const polDislikes = scores.political.dislikes;
    const axis4 = polLikes >= polDislikes ? 'C' : 'L';

    const typeCode = axis1 + axis2 + axis3 + axis4;
    const type = PHILOSOPHER_TYPES[typeCode] || PHILOSOPHER_TYPES["RIAC"];

    // Render results
    document.getElementById('type-code').textContent = typeCode;
    document.getElementById('type-title').textContent = type.title;
    document.getElementById('type-subtitle').textContent = type.subtitle;
    document.getElementById('type-description').textContent = type.description;
    document.getElementById('result-gif').src = type.gif;

    // Render branch stats
    this.renderStats();

    // Render axis indicators
    this.renderAxes(rScore, eScore, iScore, mScore, ethLikes, ethDislikes, polLikes, polDislikes);

    // Animate in
    document.getElementById('results-screen').classList.add('results-animate');
  }

  renderAxes(rScore, eScore, iScore, mScore, aScore, egScore, cScore, lScore) {
    // Calculate position (0% = left trait, 100% = right trait)
    const calcPos = (left, right) => {
      const total = left + right;
      if (total === 0) return 50;
      return Math.round((right / total) * 100);
    };

    document.getElementById('axis-re').style.left = `${calcPos(rScore, eScore)}%`;
    document.getElementById('axis-im').style.left = `${calcPos(iScore, mScore)}%`;
    document.getElementById('axis-ae').style.left = `${calcPos(aScore, egScore)}%`;
    document.getElementById('axis-cl').style.left = `${calcPos(cScore, lScore)}%`;
  }

  renderStats() {
    const container = document.getElementById('branch-stats');
    container.innerHTML = '';

    const totalResponses = this.responses.length;

    Object.keys(BRANCHES).forEach(branch => {
      const info = BRANCHES[branch];
      const score = this.branchScores[branch];
      const total = score.likes + score.dislikes;

      if (total === 0) return;

      const likePercent = total > 0 ? Math.round((score.likes / total) * 100) : 0;
      const dislikePercent = 100 - likePercent;

      const statEl = document.createElement('div');
      statEl.className = 'branch-stat';
      statEl.innerHTML = `
        <div class="branch-stat-header">
          <span class="branch-stat-name">${info.icon} ${info.name}</span>
          <span class="branch-stat-count">${total} questions</span>
        </div>
        <div class="stat-bar-container">
          <div class="stat-bar stat-bar-like" style="width: ${likePercent}%; background: ${info.color}">
            ${likePercent > 15 ? `👍 ${score.likes}` : ''}
          </div>
          <div class="stat-bar stat-bar-dislike" style="width: ${dislikePercent}%">
            ${dislikePercent > 15 ? `👎 ${score.dislikes}` : ''}
          </div>
        </div>
      `;
      container.appendChild(statEl);
    });

    // Total stats
    const totalLikes = this.responses.filter(r => r.liked).length;
    const totalDislikes = this.responses.filter(r => !r.liked).length;
    document.getElementById('total-stats').textContent =
      `${totalResponses} questions answered · ${totalLikes} likes · ${totalDislikes} dislikes`;
  }

  restart() {
    document.getElementById('results-screen').classList.remove('results-animate');
    this.currentIndex = 0;
    this.responses = [];
    this.askedIds = new Set();
    this.currentQuestion = null;
    Object.keys(BRANCHES).forEach(branch => {
      this.branchScores[branch] = { likes: 0, dislikes: 0, asked: 0 };
    });
    this.showScreen('start-screen');
  }
}

// Boot the game
document.addEventListener('DOMContentLoaded', () => {
  new PhilosophyGame();
});
