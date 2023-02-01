import { useMemo } from "react"

export const useSortPosts = (filter, posts) => {
    const sortedPosts = useMemo(() => {
    if(filter){
      return [...posts].sort((a, b) => a[filter].localeCompare(b[filter]))
    }
    else {
      return posts
    }
  }, [filter, posts])
  return sortedPosts;
}

export const useSortAndSearchPosts = (searchInput, filter, posts) => {
    const sortedPosts = useSortPosts(filter, posts);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(searchInput))
      }, [searchInput, sortedPosts])
      return sortedAndSearchedPosts;
} 