import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { About } from './About'
import { AboutArray } from './data/AboutArray'
import { Footer } from './Footer'

export const App = () => {
    return (
        <BrowserRouter>
            <Route
                exact path="/"
                render={() => <About aboutArray={AboutArray}/>}
            />


        <Footer />

        
        </BrowserRouter>
    )
}