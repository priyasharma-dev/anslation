// src/libs/postsService.js

const BASE_URL = ""; // e.g. "https://api.yourdomain.com"
const STORAGE_KEY = "anc_blog_form_posts";
let STATIC_CACHE = null; // cache static blogData.json in memory

// Normalize any post object into the shape your UI needs
function normalize(p) {
  const title = p.title || "";
  return {
    id: p.id,
    title,
    desc: p.desc || "",
    image: p.image || "",
    date: p.date ?? "TBA",
    category: p.category ?? "General",
    readTime: p.readTime ?? "-",
    // keep content as-is so ContentRenderer can handle string / array
    content: p.content,
    slug:
      p.slug ??
      title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
  };
}

/* ---------- Local form posts helpers ---------- */

function getFormPosts() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Error reading form posts:", err);
    return [];
  }
}

function saveFormPosts(posts) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (err) {
    console.error("Error saving form posts:", err);
  }
}

/* ---------- Static blogData "API" ---------- */

async function loadStaticPosts() {
  if (STATIC_CACHE) return STATIC_CACHE;

  try {
    const res = await fetch("/blogData.json"); // served from public/
    if (!res.ok) {
      throw new Error(`Failed to load blogData.json: ${res.status}`);
    }

    const raw = await res.json();
    const arr = Array.isArray(raw) ? raw : raw.blogData || raw.data || [];

    STATIC_CACHE = arr.map(normalize);
    return STATIC_CACHE;
  } catch (err) {
    console.error("Error loading static blogData:", err);
    STATIC_CACHE = [];
    return STATIC_CACHE;
  }
}

// Used internally when BASE_URL is not set
async function getAllLocalPosts() {
  const staticPosts = await loadStaticPosts();
  const formPosts = getFormPosts(); // already saved as normalized
  return [...staticPosts, ...formPosts];
}

/* ---------- Public APIs ---------- */

// LIST POSTS (used on Blog page)
export async function listPosts({
  q = "",
  category = "All",
  page = 1,
  limit = 12,
} = {}) {
  // --- Real API mode ---
  if (BASE_URL) {
    const url = new URL(`${BASE_URL}/posts`);
    if (q.trim()) url.searchParams.set("q", q.trim());
    if (category !== "All") url.searchParams.set("category", category);
    url.searchParams.set("page", String(page));
    url.searchParams.set("limit", String(limit));

    const r = await fetch(url);
    if (!r.ok) throw new Error(`Request failed: ${r.status}`);
    return r.json(); // { data, total }
  }

  // --- Local fallback (static + form posts) ---
  const s = q.trim().toLowerCase();
  const all = await getAllLocalPosts();

  const filtered = all.filter((p) => {
    const matchQ =
      !s ||
      p.title.toLowerCase().includes(s) ||
      (p.desc || "").toLowerCase().includes(s);
    const matchCat = category === "All" || p.category === category;
    return matchQ && matchCat;
  });

  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return { data, total: filtered.length };
}

// CATEGORIES (used in filter dropdown)
export async function categories() {
  if (BASE_URL) {
    try {
      const r = await fetch(`${BASE_URL}/posts/categories`);
      if (r.ok) return ["All", ...(await r.json())];
    } catch {
      // fall through to local
    }
  }

  const all = await getAllLocalPosts();
  const set = new Set(all.map((p) => p.category || "General"));
  return ["All", ...Array.from(set)];
}

// GET SINGLE POST (used on BlogDetail page)
export async function getPost(idOrSlug) {
  if (BASE_URL) {
    const r = await fetch(`${BASE_URL}/posts/${idOrSlug}`);
    if (!r.ok) throw new Error(`Post not found: ${r.status}`);
    const json = await r.json();
    return normalize(json);
  }

  const key = String(idOrSlug).toLowerCase();
  const all = await getAllLocalPosts();

  return (
    all.find(
      (p) =>
        String(p.id) === key ||
        (p.slug && p.slug.toLowerCase() === key)
    ) || null
  );
}

// CREATE LOCAL POST (call this on form submit when API isn’t ready)
export function createLocalPost(input) {
  const formPosts = getFormPosts();

  const newPost = normalize({
    ...input,
    id: input.id || Date.now().toString(),
  });

  formPosts.push(newPost);
  saveFormPosts(formPosts);

  return newPost;
}
