import app from "./app";
import database from "./config/database";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Express Server started on port: `, PORT);
  database();
});


export default app