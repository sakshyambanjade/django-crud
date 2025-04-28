# Library Management System

This project is a comprehensive full-stack CRUD (Create, Read, Update, Delete) application developed using Django for the backend and React for the frontend. It serves as a recap and demonstration of my proficiency in building scalable web applications with modern technologies.

## 🛠️ Technologies Used

### Backend

- **Django** – High-level Python web framework that encourages rapid development.
- **Django REST Framework** – Powerful and flexible toolkit for building Web APIs.
- **SQLite** – Lightweight disk-based database, used for development and testing.

### Frontend

- **React.js** – JavaScript library for building user interfaces.
- **Axios** – Promise-based HTTP client for the browser and Node.js, used for making API requests.
- **CSS** – Styling the React components for a responsive and clean UI.

## 📁 Project Structure

```

django-crud/
├── Client/
│   └── app/             # React application source code
│       ├── public/
│       └── src/
│           ├── components/  # React components
│           ├── App.js
│           └── index.js
├── Server/
│   └── server/          # Django project source code
│       ├── api/         # Django app for API
│       ├── server/      # Django project settings
│       ├── db.sqlite3
│       └── manage.py
├── .gitignore
└── README.md
```


## 🚀 Features

- **Create:** Add new records through a user-friendly form interface.
- **Read:** View a list of all records with detailed information.
- **Update:** Edit existing records seamlessly.
- **Delete:** Remove records with confirmation prompts to prevent accidental deletions.
- **Responsive Design:** Ensures usability across various devices and screen sizes.
- **API Integration:** Frontend communicates with backend through RESTful APIs.

## 🔧 Setup Instructions

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup (Django)

1. Navigate to the Server directory:

   ```bash
   cd Server
   ```


2. Create and activate a virtual environment:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```


3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```


4. Apply migrations: ([GitHub - gowthamand/django-crud-ajax-login-register-fileupload: Django Crud Github, Django Crud, Django Crud Application, Django ajax CRUD,Django Boilerplate application, Django Register, Django Login,Django fileupload, CRUD, Bootstrap, AJAX, sample App](https://github.com/gowthamand/django-crud-ajax-login-register-fileupload?utm_source=chatgpt.com))

   ```bash
   python manage.py migrate
   ```


5. Run the development server: ([Develop a CRUD Application using Django and React (Part 1) | by Fizaashraf | Medium](https://medium.com/%40fizaashraf37/develop-a-crud-application-using-django-and-react-part-1-2e8927a1e0c8?utm_source=chatgpt.com))

   ```bash
   python manage.py runserver
   ```


### Frontend Setup (React)

1. Navigate to the React app directory: ([django-crud · GitHub Topics · GitHub](https://github.com/topics/django-crud?utm_source=chatgpt.com))

   ```bash
   cd Client/app
   ```


2. Install the dependencies:

   ```bash
   npm install
   ```


3. Start the React development server:

   ```bash
   npm start
   ```


4. Open your browser and navigate to `http://localhost:3000` to view the application.

## 📌 Highlights

- **Full-Stack Integration:** Demonstrates the integration of Django and React for a seamless user experience.
- **Modular Codebase:** Organized project structure for maintainability and scalability.
- **RESTful APIs:** Backend APIs are designed following REST principles, facilitating easy communication with the frontend.
- **State Management:** Utilizes React's state and effect hooks for efficient state management. ([Develop a CRUD Application using Django and React (Part 1) | by Fizaashraf | Medium](https://medium.com/%40fizaashraf37/develop-a-crud-application-using-django-and-react-part-1-2e8927a1e0c8?utm_source=chatgpt.com))

## 📫 Contact

For any inquiries or collaboration opportunities, feel free to reach out:

- **GitHub:** [sakshyambanjade](https://github.com/sakshyambanjade)

---
