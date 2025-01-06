### 1. **Light Switch Simulator**

**Objective:** Simulate a light switch using `useReducer`.

**Instructions:**
- Manage the light's state (`ON` or `OFF`) with `useReducer`.
- Actions include:
  - `TOGGLE`: Switch between `ON` and `OFF`.
  - `RESET`: Reset the light to `OFF`.
- Display the light's current state and include buttons for actions.

**Expected Output:**
- Clicking "Toggle" switches the state.
- Clicking "Reset" always sets it to `OFF`.

---

### 2. **Theme Toggler**

**Objective:** Create a theme toggler with light and dark modes.

**Instructions:**
- Use `useReducer` to manage theme state (`light` or `dark`).
- Actions include:
  - `TOGGLE_THEME`: Switch between light and dark themes.
- Change the background color and text style based on the theme.

**Expected Output:**
- Clicking the "Toggle Theme" button switches between light and dark themes.

---

### 3. **Bank Account Manager**

**Objective:** Simulate basic banking operations.

**Instructions:**
- Use `useReducer` to manage account balance.
- Actions include:
  - `DEPOSIT`: Add a specified amount to the balance.
  - `WITHDRAW`: Subtract a specified amount from the balance (if sufficient funds exist).
  - `RESET`: Reset the balance to zero.
- Display the current balance and provide inputs for deposit/withdrawal amounts.

**Expected Output:**
- Balance updates correctly based on user input.

---

### 4. **Simple Stopwatch**

**Objective:** Build a stopwatch using `useReducer`.

**Instructions:**
- Use `useReducer` to manage state (`time` and `isRunning`).
- Actions include:
  - `START`: Start the stopwatch.
  - `STOP`: Stop the stopwatch.
  - `RESET`: Reset the stopwatch to zero.
- Use `setInterval` to update the `time` state when running.

**Expected Output:**
- Stopwatch tracks elapsed time and allows the user to start, stop, and reset.
