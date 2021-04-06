import { lazy } from "react"

const Home = lazy(() => import('../pages/home/HomePage'));



export const Pages = {
    Home
}

export const RoutesString = {
    Home: '/'
}