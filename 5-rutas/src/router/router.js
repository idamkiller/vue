import {createRouter, createWebHashHistory} from 'vue-router'
import isAuthenticated from './auth-guard'

const routes = [
    {
      path: '/',
      redirect: {name: 'pokemon-home'}
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('@/modules/pokemon/layouts/PokemonLayout.vue'),
      children: [
        { 
          path: '',
          name: 'pokemon-home', 
          component: () => import('@/modules/pokemon/pages/ListPage')
        },
        { 
          path: 'about',
          name: 'pokemon-about',
          component: () => import('@/modules/pokemon/pages/AboutPage')
        },
        { 
          path: ':id', 
          name: 'pokemon-id',
          component: () => import('@/modules/pokemon/pages/PokemonPage'),
          props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? {id: 1} : { id: id }
          }
        },
      ]
    },
    {
      path: '/dbz',
      name: 'dbz',
      beforeEnter: [isAuthenticated],
      component: () => import('@/modules/dbz/layouts/DragonBallLayout.vue'),
      children: [
        { 
          path: 'characters',
          name: 'dbz-characters', 
          component: () => import('@/modules/dbz/pages/CharactersPage')
        },
        { 
          path: 'about',
          name: 'dbz-about',
          component: () => import('@/modules/dbz/pages/AboutPage')
        },
        {
          path: '',
          redirect: {name: 'dbz-characters'}
        }
      ]
    },
    { 
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/modules/shared/pages/NoPageFound')
    }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  // router.beforeEach((to, from, next) => {
  //   const random = Math.floor(Math.random() * 100)
  //   if (random > 50) {
  //     console.log('random > 50')
  //     next()
  //   }else{
  //     console.log('random <= 50')
  //     next({name: '404'})
  //   }
  // })

  // const canAccess = () => {
  //   return new Promise(resolve => {
  //         const random = Math.floor(Math.random() * 100)
  //         if (random > 50) {
  //           console.log('can access')
  //           resolve(true)
  //         }else{
  //           console.log('Not access')
  //           resolve(false)
  //         }
  //   })
  // }

  // router.beforeEach(async (to, from, next) => {
  //   const auth = await canAccess()
  //   auth ? next() : next({name: '404'})
  // })

  export default router