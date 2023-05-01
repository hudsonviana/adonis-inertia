import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/home', async ({ inertia }) => {
  return inertia.render('Home', {
    testando: 'Isto é um teste',
  })
})
