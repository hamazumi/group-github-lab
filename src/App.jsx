import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { About } from './About'
import { AboutArray } from './data/AboutArray'

export const App = () => {
    return (
        <BrowserRouter>
            <Route
                exact path="/"
                render={() => <About aboutArray={AboutArray}/>}
            />
        </BrowserRouter>
    )
}