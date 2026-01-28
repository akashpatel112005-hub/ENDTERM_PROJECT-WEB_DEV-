# LearnTech – Interactive Learning Dashboard  
**Web Dev II – End Term Project (Batch 2029)**

A fully functional **DOM-based learning dashboard** developed using **HTML, CSS, and Vanilla JavaScript**.  
This project simulates a real-world digital learning platform with interactive modules, quizzes, progress tracking, and persistent client-side state — all implemented **without using any frontend frameworks**.

---

## Project Details
- **Submission by:** Akash Patel  
- **Roll No:** 25BCS10098
- **Student Mail Id:** akash.25bcs10098@sst.scaler.com 
- **Submitted to:** Mrinal Bhattacharya 

---

## Project Description

The application focuses on **digital tools that support learning, revision, testing, and skill building**, allowing users to:
- Assess knowledge through quizzes
- Track learning progress
- Interact with dynamic UI components
- Maintain persistent data using LocalStorage

The project emphasizes:
- Dynamic UI updates
- Event-driven programming
- Frontend application logic
- State-based UI rendering  
All achieved using **pure JavaScript and direct DOM manipulation**, as required by the course guidelines.

---

## Theme Focus – Digital Learning Support System

### Theme
Digital tools that support learning, revision, testing, and skill building.

### What Students Can Explore
- Interactive quizzes with real-time score calculation  
- Visual progress indicators and completion tracking  
- Event-driven dashboards with conditional rendering  

### Why This Theme Works
- Requires dynamic DOM updates  
- Uses time-based logic (timers, intervals)  
- Involves state transitions (login → dashboard → quiz)  
- Provides clear evaluation metrics (scores, progress, completion)

---

## Features
- Client-side login system using LocalStorage
- Personalized dashboard with welcome message
- Learning modules with completion tracking
- Dynamic progress bars
- Quiz system with:
  - Timer
  - Auto submission
  - Score calculation
  - Result modal
- Recent activity tracking
- Light / Dark theme toggle
- Persistent client-side data
- Responsive layout using Flexbox

---

## How to Use
1. Open `index.html` in a modern browser
2. Log in with your details
3. Navigate through learning modules
4. Attempt quizzes
5. Track progress and view results

---

          ## Project Structure
          
          LearnTech-Dashboard
          │
          ├── index.html # Application structure and layout
          ├── style.css # UI styling, themes, responsiveness
          ├── script.js # DOM manipulation, logic, state handling
          └── README.md # Project documentation
          
          ### Project Structure – Detailed Breakdown
          LearnTech-Dashboard
          │
          ├── index.html
          │ ├── Login UI
          │ ├── Dashboard
          │ ├── Learning Modules
          │ ├── Quizzes
          │ └── Activity Section
          │
          ├── style.css
          │ ├── Layout & Grid/Flexbox
          │ ├── Themes (Light / Dark)
          │ ├── Cards & UI Components
          │ ├── Animations
          │ └── Responsive Design
          │
          ├── script.js
          │ ├── User Authentication (LocalStorage)
          │ ├── Dynamic DOM Rendering
          │ ├── Progress Tracking Logic
          │ ├── Quiz Engine & Scoring
          │ ├── Event Handling
          │ ├── State Management
          │ ├── Conditional Rendering
          │ ├── Modal & Timer Handling
          │ └── LocalStorage (User Data & Progress)
          │
          └── README.md
          └── Project Documentation

## Key JavaScript & DOM Concepts Used

### DOM Manipulation
- Dynamic element creation using `createElement()`
- DOM querying with `querySelector()` / `querySelectorAll()`
- Conditional rendering of UI components
- Adding and removing elements dynamically
- Updating styles and classes via JavaScript
- Modal creation and removal

### Event Handling
- Click events
- Form submissions
- Keyboard interactions
- Event delegation for scalable event handling

### State Management
- User login state
- Progress and quiz state
- Theme preference
- Screen transitions controlled via JavaScript logic

### Time-Based Logic
- Quiz timers using `setInterval`
- Automatic submission on timeout

### Data Persistence
- Browser `localStorage` used to store:
  - User details
  - Module completion status
  - Quiz scores
  - Theme preference

---

## UI / UX Design
- Clean and readable card-based interface
- Logical user flow
- Clear visual feedback for actions
- Input validation and error handling
- Responsive design using Flexbox

---

## Technologies Used
- **HTML5** – Structure and semantics  
- **CSS3** – Styling, layout, responsiveness  
- **Vanilla JavaScript (ES6+)** – DOM manipulation and logic  
- **Browser APIs** – LocalStorage, Timers  

---

## Known Limitations
- No backend authentication (client-side only)
- Clearing LocalStorage resets all progress
- Optimized mainly for desktop browsers
- Public APIs not integrated

---

## Evaluation Alignment
This project demonstrates:
- Strong DOM manipulation depth
- Event-driven interactivity
- Clear JavaScript logic and state handling
- Meaningful user interaction
- Real-world frontend application behavior

---

## Restrictions Followed
- Vanilla JavaScript only  
- No React / Angular / Vue  
- No jQuery  
- No UI libraries  
- Fully DOM-based application  

---

## License
This is an educational project created strictly for academic evaluation purposes.

---

