import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c:any) =>{
  return c.text('Hello Hono !!')
})

app.post('/api/v1/user/signin', (c:any) =>{
  return c.text('Hello Hono !!')
})

app.post('/api/v1/blog', (c:any) =>{
  return c.text('Hello Hono !!')
})

app.put('/api/v1/blog', (c:any) =>{
  return c.text('Hello Hono !!')
})

app.get('/api/v1/blog/:id', (c:any) =>{
  return c.text('Hello Hono !!')
})

app.get('/api/v1/blog/bulk', (c:any) =>{
  return c.text('Hello Hono !!')
})

export default app
