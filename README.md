# PublicSpeak Coach: AI-Powered Presentation Feedback

AI-powered presentation feedback: record a practice speech, get metrics and coaching, track progress.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. All screens use fake data from `lib/mockData.ts`.

## Deploy early
1. `git init && git add . && git commit -m "day 1"`
2. Push to a new GitHub repo.
3. Go to vercel.com, import the repo, click Deploy.
4. Open the Vercel URL on your phone.

## Plan
| Day | Goal |
|---|---|
| 1 | Screens with fake data, deployed |
| 2 | Real recording and transcript (MediaRecorder + Web Speech API) |
| 3 | Supabase auth + DB, POST /api/analyze |
| 4 | Sessions APIs, remove fake data |
| 5 | Env vars, CORS/auth, phone testing |
| 6 | Freeze, abstract, docs, PPT, rehearse |

## Structure
- `app/` pages (Home, Login, Record, Results, History)
- `components/` Nav and ScoreChart
- `lib/mockData.ts` Day 1 fake data (delete on Day 4)
- `supabase/schema.sql` run on Day 3
