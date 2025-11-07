import React, { useMemo, useEffect, useContext  } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../libs/blogData";

import DetailsHero from "../components/blog/DetailsHero";
import ContentRenderer from "../components/blog/ContentRenderer";
import BackToAllButton from "../components/blog/BackToAllButton";
import RelatedGrid from "../components/blog/RelatedGrid";
import GradientButton from "../components/ui/GradientButton"; // for 404 button
import { BlogContext } from "../Context/BlogContext";

export default function BlogDetail() {
  // const {blogData} = useContext(BlogContext)
  const { id } = useParams();
     
  console.log(id , "samraaat")
  
   useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); 
  }, [id]);

    const post = useMemo(
    () =>
      blogData.find(
        (p) => String(p.id) === String(id) || String(p.slug) === String(id) // ← NEW: slug fallback
      ),
    [id]
  );

  console.log(post , "post data is coming")


  if (!post) {
    return (
      <div className="min-h-[60vh] grid place-items-center bg-[#0b1020] text-white px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Blog not found</h1>
          <GradientButton as={Link} to="/blog" size="sm" className="mt-4">
            Back to all blogs
          </GradientButton>
        </div>
      </div>
    );
  }

  const {
    title,
    image,
    date = "—",
    category = "Blogs",
    readTime = "—",
    desc,
    content = [],
  } = post;

  return (
    <div className="bg-[#0b1020] text-white min-h-screen">
      <DetailsHero
        image={image}
        category={category}
        title={title}
        meta={`${date} • ${readTime}`}
      />

      <ContentRenderer desc={desc} content={content} />

      <div className="mx-auto max-w-3xl px-6 md:px-0">
        <BackToAllButton />
      </div>

      <RelatedGrid items={blogData} currentId={id} />
    </div>
  );
}




 

