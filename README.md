# IT Department Website, NIT Srinagar

## Project Overview

This is a full-stack web application built with React on the frontend and Django on the backend. The project aims to provide .

<!-- ## Features -->


## Technologies Used

- **Frontend:**
  - React
  - Chakra UI

- **Backend:**
  - Django
  - Django REST Framework
  

- **Database:**
  - PostgreSQL

- **Authentication:**
  - JWT

## Getting Started

### Prerequisites

- Node.js and npm
- Python and pip
- PostgreSQL


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SF404/IT-Departmat-Website-NIT-Srinagar.git
   cd IT-Departmat-Website-NIT-Srinagar
2. **Install React Dependencies**
   ```bash
   cd frontend
   npm install
3. **Install Python/Django Requirements**
   ```bash
   cd backend
   pip install -r requirements.txt
4. **Connect PostgreSQL**
    -  create new database in your computer 
    -  edit settings.py to connect database
5. **Now Setup Backend**
    - .../backend>
    ```bash
    py manage.py makemigrations   
    py manage.py migrate --run-syncdb
6. **Create Superuser**
    ```bash
    py manage.py createsuperuser   
7. **Now Create Data Entry in Database**
    ```bash
    py manage.py createcourseentries
8. **Start Django Server**
    ```bash
    py manage.py runserver
9. **Start React App**
    - .../frontend>
    ```bash
    npm run start
10. **You are ready to go**

