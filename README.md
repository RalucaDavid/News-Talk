# Description
News Talk is a web application that allows users to access the latest news and leave comments on each article.

# Functional Specifications
<ul>
  <li>
    <strong>News:</strong> Users can view the latest news articles, each with a representative picture, a clear title, a small description of the article and a direct link to the original source of the article.
  </li>
  <li>
    <strong>Comments:</strong> Each news article has a comment section where users can leave opinions and discuss topics.
  </li>
  <li>
    <strong>Form For Adding Comments:</strong> Users can add comments directly on each article.
  </li>
  <li>
    <strong>Mobile Responsive:</strong> The app is fully mobile responsive, ensuring that articles and functionality are accessible and optimized for all types of mobile devices.
  </li>
</ul>

# Technical Specifications
<ul>
   <li>
     <strong>Frontend:</strong> React, TypeScript, Axios
   </li>
  <li>
     <strong>External APIs:</strong> News API
   </li>
   <li>
     <strong>Backend:</strong> C#, ASP.NET Core
   </li>
   <li>
     <strong>Database:</strong> MongoDB
   </li>
  <li>
     <strong>Testing:</strong> 
     <ul>
        <li>
          <strong>Unit Testing:<strong> xUnit, Moq
        </li>
        <li>
          <strong>Integration Testing:<strong> xUnit, Mongo2Go
        </li>
        <li>
          <strong>End-to-end Testing:<strong> Playwright
        </li>
        <li>
          <strong>Performance Testing:<strong> Apache JMeter
        </li>
     </ul>
  </li>
</ul>

# System Architectural Diagram
![image](https://github.com/user-attachments/assets/24bf6a69-3777-41d4-a742-4d6fc6a019cc)

# Installation procedure
  Clone the repository using the following command:
    <pre><code class="bash">git clone https://github.com/RalucaDavid/News-Talk</code></pre>
<h2>Backend:</h2>

  **Requirements:**
  - [Visual Studio 2022+](https://visualstudio.microsoft.com/) (ASP.NET and Web Development)
  - [MongoDB](https://www.mongodb.com/)
  - [MongoDB Compass](https://www.mongodb.com/products/tools/compass)

  **Steps:**
  1. Navigate to the `NewsTalkAPI` directory:
     ```bash
     cd path/News-Talk/Backend/NewsTalkAPI
     ```

  2. Open the `NewsTalkAPI` directory in Visual Studio:
     ```bash
     start NewsTalkAPI.sln
     ```

  3. Open **MongoDB Compass** and connect to MongoDB.
  
  4. **Create a database** named `NewsTalkDB`.

  5. **Copy the Connection String** from MongoDB Compass.

  6. **Update `appsettings.json`**:
     - Paste the copied Connection String into the `ConnectionString` field of the `appsettings.json` file.

     Example:
     ```json
     {
       "MongoDBSettings": {
         "ConnectionString": "mongodb://localhost:27017",  // Or your MongoDB Compass connection string
         "DatabaseName": "NewsTalkDB",
         "CommentsCollectionName": "Comments"
       }
     }
     ```

  7. **Build and Run** the backend in Visual Studio.
     
<h2>Frontend:</h2>

  **Requirements:**
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Node.js](https://nodejs.org/en) (version 16.x or higher)
  - [npm](https://www.npmjs.com/) (Node Package Manager)
  - You need to obtain an API key from [News API](https://newsapi.org/) to fetch news data.

  **Steps:**
  1. Navigate to the frontend directory:
     ```bash
     cd path/News-Talk/Frontend/news-talk
     ```

  2. Install the dependencies using npm:
     ```bash
     npm install
     ```

  3. Create a `.env` file in the root of the frontend directory and add your News API key:
     ```
     VITE_NEWS_API_KEY=your_api_key_here
     ```

  4. Start the development server:
     ```bash
     npm run dev
     ```

  5. Open the application in your browser at [http://localhost:5173](http://localhost:5173) or use the URL displayed in the terminal.

# Photos
![image](https://github.com/user-attachments/assets/3efd65cd-c2c7-4635-85ae-f7878f8c222b)
![image](https://github.com/user-attachments/assets/989e9f0a-fb04-4983-b006-e8a3d41077cc)
![image](https://github.com/user-attachments/assets/2c79ce35-8696-465b-92ab-908aa1d5ea79)
![image](https://github.com/user-attachments/assets/310606b2-2bc9-4c8d-bb56-e10dae4986f1)

