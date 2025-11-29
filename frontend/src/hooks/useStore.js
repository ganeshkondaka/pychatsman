import {create} from 'zustand';
export const Store = create((set) => (
    {
        theme:"dark",
        changeTheme:()=>set((state)=>({
            theme: state.theme === "dark" ? "white" : "dark"
        }))
    }
))