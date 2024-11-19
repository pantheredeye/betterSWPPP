
### **Design Philosophy**

- **Dark Mode Minimalist with Neuromorphism**: Combine the simplicity of dark mode minimalist design with the subtle depth and tactile feel of neuromorphism.
- **Consistency**: Maintain a consistent look and feel across all components.
- **Accessibility**: Ensure all elements are accessible to all users, including those using assistive technologies.

---

### **1. Typography**

- **Font Family**: Use a clean, sans-serif font for all text elements.
  - **Tailwind Class**: `font-sans`
- **Font Weights**:
  - **Regular Text**: `font-normal`
  - **Headings/Titles**: `font-bold` or `font-semibold`
- **Font Sizes**:
  - **Base Text**: `text-base` (`1rem`)
  - **Small Text**: `text-sm` (`0.875rem`)
  - **Large Text**: `text-lg` (`1.125rem`)
  - **Titles**: `text-2xl` (`1.5rem`) and above

**Example**:

```html
<h1 class="text-2xl font-bold text-gray-200">SWPPP-Tip</h1>
<p class="text-base font-normal text-gray-300">Welcome to the app.</p>
```

---

### **2. Colors**

- **Backgrounds**:
  - **Primary Background**: `bg-gray-900`
  - **Secondary Background**: `bg-gray-800`
  - **Hover Background**: `hover:bg-gray-700`
- **Text Colors**:
  - **Primary Text**: `text-gray-200`
  - **Secondary Text**: `text-gray-300`
  - **Muted Text**: `text-gray-400`
- **Accent Colors**:
  - **Interactive Elements**: `text-indigo-500` or `text-green-500` for status indicators
- **Borders**:
  - Use `border-gray-700` for subtle borders and dividers.

**Example**:

```html
<div class="bg-gray-900 text-gray-200 p-4 rounded-xl shadow-inner">
  <h2 class="text-xl font-semibold">Dashboard</h2>
  <p class="text-gray-300">Your overview at a glance.</p>
</div>
```

---

### **3. Buttons and Interactions**

- **Shape**: Rounded corners using `rounded-xl` for a smooth, tactile feel.
- **Background**:
  - **Default**: `bg-gray-800`
  - **Hover**: `hover:bg-gray-700`
- **Text**:
  - **Default**: `text-gray-200`
  - **Hover**: `hover:text-gray-100`
- **Shadows**:
  - Use `shadow-lg` for elevated elements to create depth.

**Example**:

```html
<button class="flex items-center px-4 py-2 bg-gray-800 text-gray-200 rounded-xl shadow-lg hover:bg-gray-700 focus:outline-none">
  <span>Click Me</span>
</button>
```

---

### **4. Icons**

- **Style**: Use outline icons for a minimalist look.
- **Size**: Standard size is `h-6 w-6`.
- **Color**:
  - **Default**: `text-gray-400`
  - **Hover**: `group-hover:text-gray-200`
- **Placement**: Align icons with text or use them as standalone elements in buttons and navigation.

**Example**:

```html
<svg class="h-6 w-6 text-gray-400 group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <!-- SVG Path -->
</svg>
```

---

### **5. Navigation**

- **Sidebar**:
  - **Background**: `bg-gray-900`
  - **Width**: Collapsible between `w-64` (expanded) and `w-20` (collapsed)
  - **Items**:
    - **Default State**:
      - **Background**: `bg-gray-800`
      - **Text**: `text-gray-200`
      - **Icons**: `text-gray-400`
    - **Hover State**:
      - **Background**: `hover:bg-gray-700`
      - **Text**: `hover:text-gray-200`
      - **Icons**: `group-hover:text-gray-200`
  - **Shape**: Use `rounded-xl` for navigation items.
  - **Shadows**: Apply `shadow-lg` to items for neuromorphic depth.

- **Top Navigation (Header)**:
  - **Background**: `bg-gray-900`
  - **Height**: `h-16`
  - **Elements**:
    - **Collapse Button**: For mobile views, use `Bars3Icon`.
    - **Notifications**: Place `BellIcon` in the header or profile section.

**Example**:

```html
<nav class="bg-gray-900">
  <ul>
    <li class="group flex items-center rounded-xl bg-gray-800 p-2 shadow-lg hover:bg-gray-700">
      <HomeIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-200" />
      <span class="ml-3 text-gray-200">Dashboard</span>
    </li>
    <!-- More items -->
  </ul>
</nav>
```

---

### **6. Profile Section**

- **Profile Image**:
  - **Size**: `h-10 w-10`
  - **Shape**: `rounded-full`
  - **Shadow**: Apply `shadow-lg` for depth.
- **Status Indicator**:
  - **Position**: `absolute bottom-0 right-0`
  - **Size**: `h-3 w-3`
  - **Color**: `bg-green-500` with `ring-2 ring-gray-900`
- **Text**:
  - **Name**: `text-sm font-medium text-gray-200`
  - **Buttons**:
    - **Logout and Back**:
      - **Style**: `flex items-center text-xs text-gray-400 hover:text-gray-200`
      - **Icons**: Use appropriate icons (`ArrowLeftOnRectangleIcon`, `ArrowUturnLeftIcon`)

**Example**:

```html
<div class="flex items-center">
  <div class="relative">
    <img class="h-10 w-10 rounded-full bg-gray-800 shadow-lg" src="profile.jpg" alt="Profile" />
    <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-gray-900"></span>
  </div>
  <div class="ml-3">
    <p class="text-sm font-medium text-gray-200">Username</p>
    <div class="flex space-x-2 mt-1">
      <button class="flex items-center text-xs text-gray-400 hover:text-gray-200">
        <ArrowLeftOnRectangleIcon class="h-4 w-4 mr-1" />
        Logout
      </button>
      <button class="flex items-center text-xs text-gray-400 hover:text-gray-200">
        <ArrowUturnLeftIcon class="h-4 w-4 mr-1" />
        Back
      </button>
    </div>
  </div>
</div>
```

---

### **7. Cards and Containers**

- **Background**: `bg-gray-800`
- **Shape**: `rounded-xl`
- **Padding**: `p-4` or `p-6` for sufficient spacing
- **Shadows**: Use `shadow-lg` to create depth
- **Borders**: If needed, use `border border-gray-700`

**Example**:

```html
<div class="bg-gray-800 p-6 rounded-xl shadow-lg">
  <h3 class="text-lg font-semibold text-gray-200">Card Title</h3>
  <p class="text-gray-300">Card content goes here.</p>
</div>
```

---

### **8. Forms and Inputs**

- **Input Fields**:
  - **Background**: `bg-gray-800`
  - **Text**: `text-gray-200`
  - **Placeholder**: `placeholder-gray-500`
  - **Border**: `border border-gray-700`
  - **Focus State**: `focus:border-indigo-500 focus:ring-indigo-500`
  - **Shape**: `rounded-xl`
  - **Shadows**: Optional `shadow-inner` for inset effect

- **Labels**:
  - **Text**: `text-gray-200`
  - **Font Weight**: `font-medium`

**Example**:

```html
<label for="email" class="block text-sm font-medium text-gray-200">Email</label>
<input type="email" id="email" name="email" class="mt-1 block w-full bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-xl p-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
```

---

### **9. Buttons in Forms**

- **Primary Button**:
  - **Background**: `bg-indigo-600`
  - **Text**: `text-white`
  - **Hover**: `hover:bg-indigo-500`
  - **Shape**: `rounded-xl`
  - **Shadows**: Use `shadow-lg` for prominence

- **Secondary Button**:
  - **Background**: `bg-gray-800`
  - **Text**: `text-gray-200`
  - **Hover**: `hover:bg-gray-700`
  - **Shape**: `rounded-xl`

**Example**:

```html
<button type="submit" class="w-full flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
  Submit
</button>
```

---

### **10. Modals and Dialogs**

- **Overlay**:
  - **Background**: `bg-gray-900 bg-opacity-80`
- **Modal Container**:
  - **Background**: `bg-gray-800`
  - **Shape**: `rounded-xl`
  - **Padding**: `p-6`
  - **Shadows**: Use `shadow-xl` for prominence
- **Text**:
  - **Title**: `text-xl font-semibold text-gray-200`
  - **Content**: `text-gray-300`

**Example**:

```html
<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
  <div class="bg-gray-800 p-6 rounded-xl shadow-xl">
    <h2 class="text-xl font-semibold text-gray-200">Modal Title</h2>
    <p class="mt-2 text-gray-300">Modal content goes here.</p>
    <div class="mt-4">
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500">Confirm</button>
      <button class="ml-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-xl hover:bg-gray-700">Cancel</button>
    </div>
  </div>
</div>
```

---

### **11. Tooltips**

- **Background**: `bg-gray-800`
- **Text**: `text-gray-200`
- **Shape**: `rounded-md`
- **Padding**: `px-2 py-1`
- **Shadows**: Use `shadow-md` for subtle depth
- **Opacity Transition**: Use `opacity-0 group-hover:opacity-100` for smooth appearance

**Example**:

```html
<span class="absolute left-full ml-3 w-auto min-w-max whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-200 shadow-md opacity-0 group-hover:opacity-100">
  Tooltip Text
</span>
```

---

### **12. Shadows**

- **Shadow Classes**:
  - **Inner Shadow**: `shadow-inner` (for recessed elements)
  - **Small Shadow**: `shadow-md`
  - **Medium Shadow**: `shadow-lg`
  - **Large Shadow**: `shadow-xl`
- **Usage**:
  - Apply `shadow-inner` to containers that should appear recessed.
  - Use `shadow-lg` or `shadow-xl` on elements that should appear elevated.

---

### **13. Rounded Corners**

- **Standard Rounding**: Use `rounded-xl` for most elements to maintain consistency.
- **Full Rounding**: Use `rounded-full` for profile images and status indicators.

---

### **14. Focus States**

- **Outline Removal**: Use `focus:outline-none` to remove default outlines.
- **Focus Rings**: Apply `focus:ring-2 focus:ring-indigo-500` for accessible focus indicators.

**Example**:

```html
<button class="focus:outline-none focus:ring-2 focus:ring-indigo-500">
  Button
</button>
```

---

### **15. Accessibility**

- **Keyboard Navigation**:
  - Ensure all interactive elements are focusable.
  - Use `tabindex` where necessary.
- **Screen Readers**:
  - Use `sr-only` classes for visually hidden labels.
  - Include `aria-hidden="true"` on decorative icons.
- **Contrast Ratios**:
  - Maintain sufficient contrast between text and background colors.

