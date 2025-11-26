# Workout Diary UI Standards

## 1. Component Usage Rules (STRICT)

**ABSOLUTELY NO CUSTOM COMPONENTS WHATSOEVER**
- ONLY use shadcn/ui components exactly as provided
- NO wrapper components, no composed components
- NO custom styling that overrides shadcn/ui defaults
- NO custom Tailwind classes on shadcn/ui components
- All UI must be built exclusively from shadcn/ui components

## 2. Approved Components List

### Core Components (High Priority)
- **Button** - Replace ALL button implementations
- **Card** - Replace all custom card layouts
- **Badge** - Replace status indicators
- **Separator** - Replace custom dividers
- **Skeleton** - Replace loading states
- **Input/Label/Select/Textarea** - Form components
- **Sheet/Dialog** - Modal and slide-out components
- **Dropdown Menu** - Action menus
- **Container** - Consistent layout wrapper

### Optional Components (For Future Features)
- **Calendar** - For date selection in workout forms
- **Tabs** - For tabbed interfaces
- **Table** - For data tables (future analytics)
- **Progress** - For progress indicators

## 3. Date Formatting Standards

### Required Format
All dates throughout the application MUST use ordinal format:

```typescript
// Required format examples
1st Sep 2025
2nd Aug 2025
3rd Jul 2025
4th Jun 2025
```

### Implementation
```typescript
import { format } from 'date-fns';

export function formatDateWithOrdinal(date: Date): string {
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);

  return format(date, 'do MMMM yyyy', {
    day: `${day}${suffix}`
  });
}

function getOrdinalSuffix(day: number): string {
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}
```

### Integration Strategy
- Replace ALL `format(date, "MMMM d, yyyy")` calls
- Update dashboard date picker to use ordinal format
- Apply to ALL date displays throughout application
- Maintain consistent formatting across all components

## 4. Color & Typography Standards

### Colors
- **Primary**: `bg-blue-600`, `text-blue-600` (actions, primary buttons)
- **Secondary**: `bg-gray-600`, `text-gray-600`
- **Success**: `bg-green-600`, `text-green-600` (positive actions, success states)
- **Warning**: `bg-yellow-500`, `text-yellow-500` (caution, warnings)
- **Error**: `bg-red-600`, `text-red-600` (destructive actions, errors)
- **Background**: `bg-gray-50` (light mode) / `bg-gray-900` (dark mode)
- **Surface**: `bg-white` (light mode) / `bg-gray-800` (dark mode)

### Typography
- **Headings**: `text-2xl` to `text-6xl` with `font-bold`
- **Body**: `text-sm` to `text-lg` with regular weight
- **Small text**: `text-xs` to `text-sm` for metadata

## 5. Spacing & Layout Standards

### Padding Scale
- `p-2`, `p-4`, `p-6`, `p-8`, `p-12`

### Margin Scale
- `m-2`, `m-4`, `m-6`, `m-8`

### Gap Scale
- `gap-2`, `gap-4`, `gap-6`

### Grid System
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Responsive: `grid-cols-1 md:grid-cols-3 lg:grid-cols-4`

## 6. Component Patterns

### Button
```tsx
<Button variant="default" size="sm">Button Text</Button>
<Button variant="destructive" size="lg">Delete</Button>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Workout Title</CardTitle>
  </CardHeader>
  <CardContent>
    Workout content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Loading State
```tsx
<Skeleton className="h-8 w-8" />
```

## 7. Date Formatting Examples

### Workout Dates
```tsx
<p>Workout for {formatDateWithOrdinal(new Date(2025, 8, 26))}</p>
// Output: "Workout for 26th Aug 2025"
```

### Exercise Dates
```tsx
<p>Exercise added on {formatDateWithOrdinal(new Date(2025, 7, 15))}</p>
// Output: "Exercise added on 15th Jul 2025"
```

## 8. Migration Guidelines

### Phase 1: Setup
```bash
npx shadcn-ui@latest add button card badge separator skeleton input label select textarea sheet dialog dropdown-menu container
```

### Phase 2: Homepage Migration
**Custom Components → shadcn/ui Replacements:**
- Hero section buttons → `<Button>` components
- Feature cards → `<Card><CardHeader><CardContent></Card></Card>`
- Custom layouts → `<Container>` components
- Status badges → `<Badge>` components

### Phase 3: Dashboard Migration
**Component Replacements:**
| Current Custom | shadcn/ui Replacement |
|---------------|---------------------|
| Custom buttons | Button (variants) |
| Custom cards | Card, CardHeader, CardContent |
| Custom badges | Badge |
| Custom dividers | Separator |
| Custom loading | Skeleton |
| Custom date picker | Dialog + Calendar |
| Action buttons | Button variants |

### Phase 4: Documentation Creation
- Create this `docs/ui.md` file with all standards
- Include code examples for both current custom components and their shadcn/ui replacements
- Before/after comparisons for each component
- Migration step-by-step guide

## 9. Code Examples

### Before (Custom Components)
```tsx
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
  <Plus className="w-4 h-4" />
  Log Workout
</button>
```

### After (shadcn/ui)
```tsx
<Button className="flex items-center gap-2">
  <Plus className="w-4 h-4" />
  Log Workout
</Button>
```

## 10. Component Catalog

### Button
- **Variants**: default, secondary, destructive, outline, ghost, link
- **Sizes**: sm, md, lg, xl, icon
- **Usage**: Actions, form submission, navigation

### Card
- **Structure**: Card, CardHeader, CardTitle, CardContent, CardFooter
- **Usage**: Workout cards, exercise displays, summary cards

### Badge
- **Variants**: default, secondary, destructive, outline
- **Usage**: Status indicators, counts, categories

### Separator
- **Orientation**: horizontal, vertical
- **Usage**: Visual content separation

### Skeleton
- **Usage**: Loading states, content placeholders

### Input/Label/Select/Textarea
- **Usage**: Forms, data entry, filtering
- **Validation**: Built-in error states

### Container
- **Usage**: Consistent layouts and spacing

## 11. Dark Mode

### Implementation
- Use shadcn/ui built-in dark mode support
- Apply dark mode classes consistently
- Test color contrast and accessibility

## 12. Accessibility

### Standards
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Button elements with appropriate ARIA labels
- Color contrast compliance for dark mode
- Focus states on interactive elements

## 13. Enforcement Rules

### Linting
- ESLint rules to prevent custom components
- TypeScript strict checking for component imports
- Import restrictions to enforce shadcn/ui usage

### Code Review
- PR must use only shadcn/ui components
- Automated checks for custom Tailwind classes on shadcn/ui components

## 14. Implementation Checklist

### Setup Phase
- [ ] Install required shadcn/ui components
- [ ] Configure components.json aliases
- [ ] Create date formatting utility
- [ ] Test shadcn/ui components work

### Migration Phase
- [ ] Replace homepage custom components
- [ ] Replace dashboard custom components
- [ ] Update all date formatting
- [ ] Remove all custom component files

### Documentation Phase
- [ ] Complete this docs/ui.md file
- [ ] Add component usage examples
- [ ] Include before/after code comparisons
- [ ] Add migration step-by-step guide

### Quality Assurance
- [ ] Verify no custom components remain
- [ ] Test all component variants work
- [ ] Validate date formatting consistency
- [ ] Test responsive design works correctly
- [ ] Ensure accessibility standards met

## 15. Supporting Files

### Configuration Files
- `components.json` - Component aliases and shadcn/ui configuration
- `lib/utils.ts` - Utility functions (cn, date formatting)
- `app/layout.tsx` - Main layout and theme provider

### Documentation Files
- `docs/ui.md` - This file (complete UI standards and usage guidelines)

### Implementation Files
- `app/page.tsx` - Homepage (shadcn/ui components only)
- `app/dashboard/DashboardClient.tsx` - Dashboard (shadcn/ui components only)

This document ensures consistent, maintainable UI development across the entire workout diary application using exclusively shadcn/ui components.