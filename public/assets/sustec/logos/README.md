# Sustec logos

Drop logo files into this folder and they will appear automatically on `/sustec/visuals/logo` and `/sustec/downloads`.

## Expected variants

SVG, PNG, EPS for each of:

- Primary (full colour)
- Mono (single black)
- Reverse (white, for dark backgrounds)
- Single colour (one brand colour)
- Stacked (logo + mark vertical lockup, if used)
- Mark only (icon without wordmark)

## File naming

Use the convention so the auto-detected variant pill renders cleanly:

```
sustec-logo-primary-fullcolour.svg
sustec-logo-mono-black.png
sustec-logo-reverse-white.svg
sustec-logo-mark-cyan.svg
```

Keywords picked up automatically: `primary`, `mono`, `reverse`, `horizontal`, `stacked`, `mark`.

README.md and dotfiles are ignored by the asset reader.
