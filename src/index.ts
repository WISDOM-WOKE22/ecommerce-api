import express, { json, urlencoded } from 'express';
const app = express();

import productRoutes from './routers/products'

const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }))
app.use(json({ limit: "10mb" }))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/products', productRoutes)

app.listen(port, () => {
    console.log(`Application running at port: ${port}`)
});