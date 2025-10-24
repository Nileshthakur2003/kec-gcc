
-----

# GCC KEC - Official Club Website

This is the official website for the **General Coding Club (GCC) at Katihar Engineering College (KEC)**. It's a modern, responsive frontend application built with Next.js and Tailwind CSS, designed to be the central hub for all club-related information.

The website features a sleek, "glassy" dark-mode theme and is fully mobile-first.

## 🚀 Pages & Features

The website currently consists of four main pages:

1.  **Home:** A landing page introducing the club, its mission, and a quick link to upcoming events.
2.  **Events:** A dedicated page with a tabbed view to display **Upcoming** and **Past** events, including workshops, contests, and sessions.
3.  **Projects:** A showcase page with a tabbed view for **Club Projects** and **Member Showcase**. Each project card displays the tech stack, links to code/demos, and an accordion to view involved members.
4.  **Community:** A "Meet the Team" page displaying the core club leads with their roles and social links (GitHub, LinkedIn, Email). It also includes a call-to-action to join the community.

## 🛠️ Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/) (using App Router)
  * **Library:** [React](https://reactjs.org/)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **UI Philosophy:** Built using reusable, atomic components (`Card`, `Button`, `Separator`) to simulate a design system like [shadcn/ui](https://ui.shadcn.com/).
  * **Icons:** Simulated `lucide-react` icons (embedded as inline SVGs for portability).

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running for development and testing.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v18.0 or later) and `npm` or `yarn` installed on your machine.

### 1\. Clone the Repository

Clone this project to your local machine:

```bash
git clone https://github.com/[YOUR-USERNAME]/[YOUR-REPO-NAME].git
cd [YOUR-REPO-NAME]
```

### 2\. Install Dependencies

Install all the required `npm` packages:

```bash
npm install
# or
yarn install
```

### 3\. Run the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result. You can start editing the pages, and the app will auto-update as you make changes.

## 🏗️ Project Structure

The project is structured with components for each page.

```
/app
├── (pages)               # Main page routes
│   ├── community
│   │   └── page.tsx      # CommunityPage component
│   ├── events
│   │   └── page.tsx      # EventsPage component
│   ├── projects
│   │   └── page.tsx      # ProjectsPage component
│   └── page.tsx          # HomePage component
│
├── layout.tsx            # Root layout
└── globals.css           # Global styles
```

  * **Simulated Components:** All UI components (like `Button`, `Card`, `Navbar`) and icons are self-contained within each page file (`page.tsx`). In a real-world project, these would be extracted into a separate `/components` directory for better reusability and maintenance.