import { createContext, useContext } from "react"
const Context = createContext()
function GlobalContext({children})
{
   <Context.Provider>
   {children}
   </Context.Provider>
}
export default GlobalContext