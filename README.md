# ToDo List Application

A  modern task management application built with React, Vite, and Tailwind CSS. This application allows users to create, edit, complete, and delete tasks with a clean, intuitive interface.

## Features

- **Create Tasks**: Add new tasks with unique IDs
- **Mark Tasks as Complete**: Toggle task completion status with visual indicators
- **Edit Tasks**: Modify existing task descriptions
- **Delete Tasks**: Remove unwanted tasks
- **Persistent Storage**: Tasks are saved in localStorage, persisting between browser sessions
- **Timestamps**: Each task includes creation date

## Project Structure

## Components

### App Component

The main component that:
- Manages the todo list state using React's useState hook
- Uses localStorage to persist tasks between sessions
- Renders the Header and ToDoList components

### Header Component

Responsible for:
- Displaying the application title
- Providing an input field and button for adding new tasks
- Generating unique IDs for each task using UUID

### ToDoList Component

Responsible for:
- Rendering the list of todo items
- Mapping through the todo array and rendering individual ToDoItem components

### ToDoItem Component

Handles individual todo items with functionality for:
- Marking tasks as complete/incomplete with visual indicators (✅/⬜)
- Editing task text via prompt
- Deleting tasks


## Technical Stack

- **React**: JS library for building user interfaces (v19.1.0)
- **Vite**: Next generation frontend tooling (fast builds, hot module replacement)
- **Tailwind CSS**: Utility-first CSS framework (v4.1.8)
- **UUID**: Library for generating unique identifiers (v11.1.0)
- **LocalStorage API**: Browser-based persistent storage

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How It Works

1. **Task Creation**: Users enter task text and click "Add task" to create a new task with:
   - The entered task text
   - A unique ID (via UUID)
   - A timestamp of creation date
   - An initial completion status of false

2. **Task Management**:
   - Click the checkbox to toggle completion status
   - Click the edit button (✏️) to modify task text
   - Click the delete button (🗑️) to remove a task

3. **Data Persistence**:
   - All tasks are automatically saved to localStorage
   - Tasks persist between page refreshes and browser sessions

