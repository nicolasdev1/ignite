const express = require('express')

const app = express()

app.use(express.json())

app.get('/courses', (request, response) => {
    const query = request.query
    console.log(query)

    return response.json([ 'Curso 01', 'Curso 02', 'Curso 03' ])
})

app.post('/courses', (request, response) => {
    const body = request.body
    console.log(body)

    return response.json([ 'Curso 01', 'Curso 02', 'Curso 03', 'Curso 04' ])
})

app.put('/courses/:id', (request, response) => {
    const { id } = request.params
    console.log(id)

    return response.json([ 'Curso 06', 'Curso 02', 'Curso 03' ])
})

app.patch('/courses/:id',
    (_, response) => response.json([ 'Curso 01', 'Curso 07', 'Curso 03' ]))

app.delete('/courses/:id',
    (_, response) => response.json([ 'Curso 01', 'Curso 02' ]))

const port = 3031
app.listen(port, () => console.log(`Server running on port ${port}...`))
