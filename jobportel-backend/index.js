import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

const jokes = [
  
  {
    id: 1,
    title:"frontend dev",
    desc: "this is job for react",
  },
  {
    id: 2,
    title:"backend dev",
    desc: "this is job for node",
  },
  {
    id: 3,
    title:"ai/ml ",
    desc: "this is job for python",
  },

];


// Root route
app.get("/", (req, res) => {
  res.send("Server is ready to send data to frontend");
});

// GET all jobs
app.get("/api/saurabh/jobs", (req, res) => {
  res.json(jokes); 
  // Use res.json to explicitly send JSON
});



// POST a new joke
app.post("/api/saurabh/add", (req, res) => {
  const { id, desc } = req.body;

  // Basic validation
  if (!id || !desc) {
    return res.status(400).send("job must have an id and description");
  }

  // Optional: check if joke with same id exists
  if (jokes.find(j => j.id === id)) {
    return res.status(409).send("job with this id already exists");
  }

  jokes.push({ id,title, desc });
  res.status(201).send("job added to the list");

});












// Start server
app.listen(port, () => {
  console.log(`server listening at port http://localhost:${port}`);
});


console.log("saurabh")