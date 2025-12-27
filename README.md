<h1 align="center"><strong>To-Do List Web App</strong></h1>

A To-Do List web application built incrementally using course concepts from **Programming Language for Web Applications**.

This project is intentionally developed in **small, testable steps** so course concepts can be reviewed, practiced, and understood one by one.

<hr />

<h2><strong>Project Overview</strong></h2>

The application begins as a **single-user, client-side web app** and is later expanded into a **server-backed, multi-user application**.

<h3><strong>Phase 1: Client-Side (Single User)</strong></h3>

- Runs entirely in the browser  
- Tasks stored using Web Storage (localStorage)  
- Deployed using GitHub Pages  
- Focused on reinforcing frontend fundamentals  

<h3><strong>Phase 2: Server-Side (Shared Tasks)</strong></h3>

- Data persistence moved to a backend server  
- Built using Flask and SQLAlchemy  
- Hosted 24/7 on a dedicated computer  
- Supports shared tasks and multiple users  

<hr />

<h2><strong>Course Concepts Used</strong></h2>

This project strictly follows topics covered in the course, including:

- HTML structure and forms  
- CSS styling and responsive web design  
- JavaScript fundamentals  
- Arrays and objects  
- DOM manipulation  
- Event-driven programming  
- Web Storage (Local Storage)  
- HTTP requests (GET, POST, PUT, DELETE)  
- Server-side programming with Flask  
- Database modeling with SQLAlchemy  
- Basic networking and deployment concepts  

<hr />

<h2><strong>Tech Stack by Phase</strong></h2>

<h3><strong>Phase 1 (GitHub Pages Deployment)</strong></h3>

- HTML  
- CSS  
- Vanilla JavaScript  
- DOM APIs  
- Local Storage  

<h3><strong>Phase 2 (Self-Hosted Backend)</strong></h3>

- Flask  
- SQLAlchemy  
- REST-style HTTP API  
- JSON  
- Linux-based server hosting  

<hr />

<h2><strong>Deployment Strategy</strong></h2>

<h3><strong>Phase 1: GitHub Pages</strong></h3>

The initial version of the application is deployed as a **static website** using GitHub Pages.  
This allows quick iteration, easy sharing, and no server-side complexity.

<h3><strong>Phase 2: Self-Hosted Flask Server</strong></h3>

A later version of the app runs on a **dedicated laptop acting as a server**, hosting:

- Flask backend  
- Database  
- Optional frontend serving  

This transition allows shared task lists and real persistence across devices.

<hr />

<h2><strong>Status</strong></h2>

- Project initialization complete
- Built static HTML user interface.
- Completed form submission handling

Next step:
Dynamically add tasks to the list using DOM manipulation.