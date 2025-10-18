import { FaEye, FaStar, FaRegStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
const { title, author, thumbnail_url, details, rating, total_view, tags, } = news;

  // Format date
  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Generate 5-star rating
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating.number ? (
      <FaStar key={i} className="text-orange-500" />
    ) : (
      <FaRegStar key={i} className="text-orange-500" />
    )
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 px-5 py-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-primary text-lg cursor-pointer">
          <FaRegBookmark className="hover:text-secondary transition" />
          <FaShareAlt className="hover:text-secondary transition" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 py-3">
        <Link to={"/newsDetails"} className="text-primary font-semibold text-lg leading-snug hover:underline hover:transition">{title}</Link>
      </div>

      {/* Thumbnail */}
      <figure className="px-5">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full max-h-90 object-cover rounded-sm"
        />
      </figure>

      {/* Details */}
      <div className="px-5 py-4 text-sm text-primary">
        <p>
          {details.length > 250 ? `${details.slice(0, 250)}...` : details}
        </p>
        {details.length > 250 && (
          <span className=" text-secondary font-semebold hover:underline cursor-pointer">
            Read More
          </span>
        )}
      </div>
      {/* Divider */}
        <div className="divider px-5 "></div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 pb-5 text-sm text-primary">
        {/* Rating (5 Stars) */}
        <div className="flex items-center gap-1">
          {stars}
          <span className="ml-1 text-primary font-medium">
            ({rating.number.toFixed(1)})
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="px-5 pb-5 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="badge badge-soft badge-sm capitalize">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
