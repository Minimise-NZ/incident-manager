
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/incident', component: () => import('pages/Incident.vue') },
      { path: '/plantDamage', component: () => import('pages/Plant Damage.vue') },
      { path: '/hazard', component: () => import('pages/Hazard.vue') },
      { path: '/observation', component: () => import('pages/Observation.vue') },
      { path: '/suggestion', component: () => import('pages/Suggestion.vue') },
      { path: '/notifications', component: () => import('pages/Notifications.vue') },
      { path: '/user', component: () => import('pages/User.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
