import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [isLoading, setisLoading] = useState(true);
    const [pageNumber, setpageNumber] = useState(1);
    const [blogPosts, setblogPosts] = useState([]);
    const [TotalPages, setTotalPages] = useState(null);
    
    async function fetchBlogs(pageNumber) {
        setisLoading(true)
        let url = "https://codehelp-apis.vercel.app/api/get-blogs?page=";
        try {
            const result = await fetch(url+pageNumber);
            const data = await result.json();
            let { page, posts, totalPages } = data;
            setpageNumber(page)
            setblogPosts(posts)
            setTotalPages(totalPages)
        } catch (err) {
            console.log(err);
        }
        setisLoading(false)
    }


    const value = {
        isLoading,
        setisLoading,
        pageNumber,
        setpageNumber,
        blogPosts,
        setblogPosts,
        TotalPages,
        setTotalPages,
        fetchBlogs
    }

    return < AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>;


};

export default AppContextProvider;