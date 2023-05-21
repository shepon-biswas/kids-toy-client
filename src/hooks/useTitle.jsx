import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() =>{
        document.title = `${title} - Kids Toys With Education`
    }, [title])
};

export default useTitle;