import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const App = ()=>{
    const query_client_instance = new QueryClient()
    return (
        <>
        <QueryClientProvider client={query_client_instance}>
        <Provider store={store}>
        <Header/>
        <Outlet/>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
        </>
    )
}

export default App