import type { App } from 'vue'

import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteRecordRaw } from 'vue-router/auto'

import { useAuth } from '@/store/auth'
import { createRouter, createWebHistory } from 'vue-router/auto'

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  return setupLayouts([route])[0]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }

    return { top: 0 }
  },
  extendRoutes: pages => [
    ...[...pages].map(route => recursiveLayouts(route)),
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  const loggedIn = auth.isAuth && auth.token && auth.user

  // to.matched.some(record => record.meta.requiresAuth) && 
  if (!loggedIn && to.path !== AUDIT_PARTNER.REDIRECT_ROUTER.login) {
    next(AUDIT_PARTNER.REDIRECT_ROUTER.login);
  } else {
    next()
  }
})

export { router }

export default function (app: App) {
  app.use(router)
}
