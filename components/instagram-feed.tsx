import Image from "next/image"
import Link from "next/link"

// Mock Instagram posts data
const instagramPosts = [
  {
    id: "1",
    image: "/elegant-fashion-model.png",
    link: "https://instagram.com/p/1",
    likes: 124,
    comments: 8,
  },
  {
    id: "2",
    image: "/placeholder-rfbp9.png",
    link: "https://instagram.com/p/2",
    likes: 89,
    comments: 5,
  },
  {
    id: "3",
    image: "/placeholder-tj7j7.png",
    link: "https://instagram.com/p/3",
    likes: 156,
    comments: 12,
  },
  {
    id: "4",
    image: "/placeholder.svg?height=600&width=600&query=smartphone with accessories",
    link: "https://instagram.com/p/4",
    likes: 102,
    comments: 7,
  },
  {
    id: "5",
    image: "/placeholder.svg?height=600&width=600&query=home decor with plants",
    link: "https://instagram.com/p/5",
    likes: 78,
    comments: 4,
  },
  {
    id: "6",
    image: "/placeholder.svg?height=600&width=600&query=fashion accessories flat lay",
    link: "https://instagram.com/p/6",
    likes: 113,
    comments: 9,
  },
]

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <Link
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-md"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Instagram post ${post.id}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-white text-sm flex gap-3">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                {post.comments}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
