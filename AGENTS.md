<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Portfolio content (texts, links, projects, skills) lives in `src/content/profile.ts` and UI strings in `src/content/i18n.tsx` (pt/en); components only render it — keeps editing in one place.
- The site is a single scrolling page with anchor sections, by explicit user request for smooth in-page navigation.
