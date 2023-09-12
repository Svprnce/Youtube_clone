import { lazy, Suspense } from 'react';

const SuggestionBar = lazy(()=>import('./SuggestionBar'))
const Video = lazy(()=> import('./Video'))

const Container = () =>{
    return (
        <div className="container">
            <Suspense fallback={<h2>LOading</h2>}>
            <SuggestionBar/>
            <Video/>
            </Suspense>
        </div>
    
    )
}

export default Container