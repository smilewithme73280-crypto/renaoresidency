import app from "./src/app.js";
const port = process.env.PORT || 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`PG site running on http://localhost:${port}`);
});
