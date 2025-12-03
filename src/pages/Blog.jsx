import React, {useMemo,useState,useEffect,useRef}from 'react';
import Hero from "../components/blog/Hero"
import SearchFilter from"../components/blog/SearchFilter"
import Card from "../components/blog/Card";


import { listPosts,categories as getCategories} from "../libs/postsService";

// const CAPABILITIES = ["All", "Capabilities", "Security", "Cloud", "Data & AI"];
// const INDUSTRIES  = ["All", "Digital Business", "Financial Services", "Retail"];
// const GEOS        = ["All", "North America", "Europe", "APAC"];

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
export default function Blog(){
      
  // const {blogData} = useContext(BlogContext)
   const [q, setQ] = useState("");
   const [category,setCategory]=useState("All");
   const [cats,setCats]=useState(["All"]);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 12;
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const debounce = useRef(null);

  // const [capability,setCapability] = useState(CAPABILITIES[0]);
  // const [industry,setIndustry]= useState(INDUSTRIES[0]);
  // const [geo,setGeo]= useState(GEOS[0]);

   useEffect(() => {
    scrollToTop();
  }, []);
   useEffect(() => { setPage(1); }, [q, category]);

    useEffect(() => {
    getCategories().then(setCats).catch(() => {});
  }, []);

useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);


    const load = async () => {
      try {
        setLoading(true);
        setErr("");
        const { data, total } = await listPosts({ q, category, page, limit });
        setPosts(data);
        setTotal(total);
      } catch (e) {
        setErr(e.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

      // debounce only the search text
    if (q.trim()) debounce.current = setTimeout(load, 300);
    else load();

    return () => { if (debounce.current) clearTimeout(debounce.current); };
  }, [q, category, page]);
 
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const effectiveCount = useMemo(() => total || posts.length, [total, posts]);

    return(
    <div className="relative min-h-screen text-white">
      <Hero />
      {/* Page container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-4 md:-mt-8 py-10 md:py-14">
         <SearchFilter
          q={q}
         setQ={setQ}
         count={effectiveCount}
         category={category}
         setCategory={setCategory}
         CATEGORIES={cats}
          onSearch={scrollToTop}
        />
         {err && (
          <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm">
            {err}
          </div>
        )}
      
       <section className="mt-6">
       {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-64 animate-pulse rounded-xl bg-white/5" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-white/70">No results found.</p>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Card key={post.id} post={post} />
                ))}
              </div>
                  <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1 || loading}
                >
                  Previous
                </button>
                <span className="text-sm tabular-nums">
                  Page {page} of {totalPages}
                </span>
                <button
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-50"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages || loading}
                >
                  Next
                </button>
              </div>
            </>
          )}   
        </section>
      </div>
    </div>
    );
}