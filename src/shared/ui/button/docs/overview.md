# Button

## Purpose

`Button` is a reusable component for representing user actions across the application.

It provides a consistent API for appearance, size, layout, and state, helping maintain a cohesive design system and user experience throughout the application.
---

## Features

- Multiple appearances (solid, outline, ghost...)
- Semantic intents (primary, success, danger...)
- Multiple sizes
- Icon support
- Loading state
- Disabled state
- Selected state
- Full width support
- Flexible icon layout

---

## Public API

### Component

```tsx
<Button />
```

### Constants

```ts
BUTTON_APPEARANCES
BUTTON_INTENTS
BUTTON_LAYOUTS
BUTTON_SIZES
ACTION_LABELS
```

---

## Basic Usage

```tsx
<Button
  intent={BUTTON_INTENTS.PRIMARY}
  appearance={BUTTON_APPEARANCES.SOLID}
  onClick = {handler}
>
  Save
</Button>
```

---

## Common Patterns

### Primary Action

```tsx
<Button
  intent={BUTTON_INTENTS.PRIMARY}
  appearance={BUTTON_APPEARANCES.SOLID}
  onClick = {handler}
>
  Save
</Button>
```

Used for the main action on a page.

---

### Secondary Action

```tsx
<Button
  intent={BUTTON_INTENTS.SECONDARY}
  appearance={BUTTON_APPEARANCES.OUTLINE}
  onClick = {handler}
>
  Cancel
</Button>
```

Used for supporting actions.

---

### Icon Button

```tsx
<Button
  icon={Search}
  appearance={BUTTON_APPEARANCES.GHOST}
  onClick = {handler}
/>
```

Used in toolbars and compact actions.

---

### Loading State

```tsx
<Button loading>
  Saving...
</Button>
```

Used while an action is in progress.

---

### Disabled State

```tsx
<Button disabled>
  Save
</Button>
```

Used when an action is temporarily unavailable.

---

## Design Principles

- Use semantic props instead of custom CSS.
- Prefer `intent` to communicate meaning.
- Prefer `appearance` to control visual emphasis.
- Avoid overriding styles with `className` unless extending the design system.

---

## Related Documentation

- api.md
- examples.md
