import { useContext,createContext,useReducer,} from "react";
import { reducer } from "utility/reducer/reducer";

const ConfigContext = createContext(); 

 export const StateProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer, {user:{}, items:[]});
    return (
        <ConfigContext.Provider value = {{state,dispatch}}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useCustomContext = () => {
    const context = useContext(ConfigContext);
    return context;
}
