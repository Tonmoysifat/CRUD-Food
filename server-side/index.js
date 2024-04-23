const app = require("./app")
const port = 7414;
app.listen(port, ()=>{
    console.log(` back-end is running on http://localhost:${port}`)
})