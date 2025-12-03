// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import DetailsHero from "../components/blog/DetailsHero";
import ContentRenderer from "../components/blog/ContentRenderer";
import BackToAllButton from "../components/blog/BackToAllButton";
import RelatedGrid from "../components/blog/RelatedGrid";
import GradientButton from "../components/ui/GradientButton";

// 🔴 NEW: use the dynamic service instead of blogData
import { listPosts } from "../libs/postsService";

export default function BlogDetail() {
  const { id } = useParams(); // /blog/:id → id from URL

  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    async function load() {
      try {
        setLoading(true);

        // Get all posts from service (local blogData or API later)
        const { data } = await listPosts({
          page: 1,
          limit: 9999, // enough to get all posts for now
        });

        setAllPosts(data || []);

        // match by id (string compare, same as you did earlier)
        const match = (data || []).find(
          (p) => String(p.id) === String(id)
        );

        setPost(match || null);
      } catch (err) {
        console.error("Error loading blog detail:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  // Simple loading state so "Blog not found" doesn’t flash
  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center bg-[#0b1020] text-white px-6">
        <p className="text-sm text-gray-400">Loading blog...</p>
      </div>
    );
  }

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

      {/* use allPosts (dynamic) for related */}
      <RelatedGrid items={allPosts} currentId={String(post.id)} />
    </div>
  );
}
