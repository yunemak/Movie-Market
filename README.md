# 🎬 MovieMarket

A modern movie discovery web application built with **React**, **Vite**, **Tailwind CSS**, **TMDB API**, and **Appwrite**.

MovieMarket allows users to search for movies, browse popular titles, and displays trending searches based on user search activity.

🔗 **Live Demo:** https://moviemarket.appwrite.network/

---

## ✨ Features

- 🔎 Search for movies using the TMDB API
- 🎬 Browse popular movies
- 🔥 Trending movies based on search frequency
- 📊 Store and track movie search statistics with Appwrite
- ⏳ Debounced movie search
- 📱 Responsive interface
- ⚡ Fast development and build process with Vite
- ☁️ Deployed using Appwrite Sites

---

## 🛠️ Technologies

- **React** — UI development
- **Vite** — Development environment and build tool
- **Tailwind CSS** — Styling
- **TMDB API** — Movie data
- **Appwrite** — Database and backend services
- **Appwrite Sites** — Deployment
- **react-use** — Debounced search handling

---

## 🧩 How It Works

MovieMarket uses the **TMDB API** to retrieve movie information.

When a user searches for a movie:

1. The search query is sent to TMDB.
2. The returned movie data is displayed.
3. The search term is stored in Appwrite.
4. If the same search already exists, its search count is increased.
5. The most frequently searched movies are displayed in the **Trending Movies** section.

### Architecture

```text
User
 │
 ▼
React + Vite
 │
 ├──────────────► TMDB API
 │                  │
 │                  ▼
 │             Movie Data
 │
 └──────────────► Appwrite
                    │
                    ▼
               Search Data
                    │
                    ▼
             Trending Movies
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

> Do not commit your `.env` file to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🗄️ Appwrite Setup

The application uses an Appwrite database to store search information.

The collection contains information such as:

| Field        | Description                              |
| ------------ | ---------------------------------------- |
| `searchTerm` | The movie search query                   |
| `count`      | Number of times the search was performed |
| `movie_id`   | TMDB movie ID                            |
| `poster_url` | Movie poster URL                         |

When a search is performed, MovieMarket checks whether the search term already exists.

If it exists:

```text
count → count + 1
```

Otherwise, a new document is created.

The trending section retrieves the most searched movies using the search count.

---

## 🔐 Environment Variables

The project uses Vite environment variables for configuration.

```env
VITE_TMDB_API_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

For production deployment, these variables should be configured in the hosting platform instead of committing them to the repository.

> **Note:** Variables prefixed with `VITE_` are exposed to the client-side application after the Vite build. They should not be used for highly sensitive server-side secrets.

---

## ☁️ Deployment

MovieMarket is deployed using **Appwrite Sites**.

Production URL:

**https://moviemarket.appwrite.network/**

The deployment process connects the GitHub repository to Appwrite Sites and builds the Vite application using:

```bash
npm install
npm run build
```

The generated production files are served from:

```text
dist/
```

---

## 🎯 What I Learned

Through this project, I practiced:

- Building a React application from scratch
- Working with React components and hooks
- Managing application state with `useState`
- Handling side effects with `useEffect`
- Implementing debounced search
- Working with REST APIs
- Using environment variables with Vite
- Integrating Appwrite into a frontend application
- Working with Appwrite databases and documents
- Tracking and querying user search data
- Deploying a Vite application
- Connecting GitHub with Appwrite Sites

---

## 📌 Future Improvements

Some features that could be added in the future:

- Movie details page
- Genre filtering
- Pagination
- User authentication
- Watchlist functionality
- Favorites
- More advanced movie recommendations
- Improved mobile experience

---

## 👨‍💻 Author

**Yunus Emre Ak**

B.Sc. Mathematical Engineering Student @ Istanbul Technical University
Software Development Student @ 42 Türkiye

---

## 📄 License

This project was created for learning and portfolio purposes.
