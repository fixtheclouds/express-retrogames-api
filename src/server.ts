import "dotenv/config";
import app from "./app";
import apiRoutes from "./routes/api";

const { PORT } = process.env;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);  // tslint:disable-line:no-console
});
