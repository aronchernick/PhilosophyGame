# Philosophy Game

Interactive philosophy preference quiz focused on branch affinity (not MBTI typing).

## Run locally

From the repo root:

```bash
cd "Philosphy Game"
python3 -m http.server 8000
```

Open http://localhost:8000

## Local config (email + Supabase)

1. Copy `Philosphy Game/config.local.example.js` to `Philosphy Game/config.local.js`
2. Fill in:
	- `SUPABASE_URL`
	- `SUPABASE_ANON_KEY`
	- `DEVELOPER_EMAIL`

`config.local.js` is gitignored.

## Supabase schema

Run `Philosphy Game/supabase-schema.sql` in your Supabase SQL editor.

This enables persistent tracking for:

- Total site hits
- Start clicks
- Results completions
- Play again clicks
- Average questions completed
- Dominant-branch percentages
- Popular/least-popular answers
- Longest questions (per user + global)
