# Assignment 4: Actor-Specific Frontend Development

## **Overview**
This project involves building an actor-specific, dynamic, and responsive frontend using Mantine components. The implementation includes state management with Redux, dynamic navigation based on user roles, and integration with APIs for fetching real-time dashboard data.

---

## **Features**

1. **Redux for State Management:**
   - Manages user roles and dynamic data efficiently.
   - Modular slices for user and data management.

2. **Dynamic Navbar:**
   - Navigation links adapt to the actor's role (`admin`, `manager`, or `user`).
   - Responsive and designed with Mantine components.

3. **API Integration:**
   - Fetches dashboard data from an API.
   - Supports mock API setup using `json-server` for testing.

---

## **Technologies Used**

- **React**: Frontend framework for building UI components.
- **Mantine**: Component library for responsive and customizable UI.
- **Redux Toolkit**: State management for predictable application state.
- **json-server** (optional): Mock API for local data simulation.

---

## **Setup and Installation**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Mock API Setup (Optional):**
   - Install `json-server` globally:
     ```bash
     npm install -g json-server
     ```
   - Create a `db.json` file with sample data.
   - Start the mock API server:
     ```bash
     json-server --watch db.json --port 3001
     ```

---

## **Folder Structure**

```
src/
├── components/
│   ├── common/
│   │   └── DynamicNavbar.jsx
│   └── pages/
│       └── Dashboard.jsx
├── layouts/
│   └── AppLayout.jsx
├── store/
│   ├── index.js
│   ├── userSlice.js
│   └── dataSlice.js
└── main.jsx
```

---

## **How to Run**

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. (Optional) Start a mock API server with `json-server` for testing.

---

## **Conclusion**
This project demonstrates the ability to:
- Implement state management using Redux.
- Create dynamic, actor-specific frontends with Mantine.
- Fetch and display real-time data from an API.

The result is a responsive, scalable, and user-friendly frontend application tailored for specific user roles.

