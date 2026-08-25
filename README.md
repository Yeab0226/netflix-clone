# Netflix Clone

React + Vite Netflix clone project using the TMDB API.

## Starting Skeleton

This repository is the team's shared starting point. The implementation has intentionally been left incomplete so each assigned task can be developed through GitHub branches and pull requests.

## Main folders

- `src/components/` — React components
- `src/assets/image/` — static image assets
- `src/Data/` — static movie data
- `src/Utility/` — TMDB Axios instance and request endpoints
- `Resources/` — project design references and supporting resources

## Environment

Create a local `.env` file and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Do not commit `.env`.

## Run

```bash
npm install
npm run dev
```

## Team workflow

- `main` = stable integrated project
- `subgroup-a` = Subgroup A integration branch
- `subgroup-b` = Subgroup B integration branch
- `feature/tXX-description` = individual task branches
- Never push directly to `main`.
- Individual members open PRs into their subgroup branch.
- Subgroup leaders review and merge member PRs.
- Subgroup leaders open the final PR from their subgroup branch into `main`.
