import app from "./app";
import database from "./config/database";

const PORT = process.env.PORT || 8080;
const startServer = async () => {
  await database(); // Connect to the database only once when the server starts
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer()
// startServer();
//  database();
// app.listen(PORT, () => {
//   console.log(`Express Server started on port: `, PORT);
  
// });


export default app