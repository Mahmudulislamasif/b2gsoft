"use client";
import { useState } from "react";

const ReviewAndRating = () => {
  const [activeTab, setActiveTab] = useState("Review & Rating");

  const reviews = [
    {
      id: 1,
      user: "Cameron Williamson",
      date: "3 days ago",
      comment: "Very Nice!!",
      rating: 4,
      likes: 10,
      avatar: "/images/user-avatar.jpg", // Replace with an actual avatar path
    },
    {
      id: 2,
      user: "Cameron Williamson",
      date: "3 days ago",
      comment: "Very Nice!!",
      rating: 4,
      likes: 10,
      avatar: "/images/user-avatar.jpg", // Replace with an actual avatar path
    },
  ];

  const ratingBreakdown = {
    totalReviews: 121,
    averageRating: 4.0,
    breakdown: {
      5: 50,
      4: 5,
      3: 10,
      2: 30,
      1: 2,
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {["Details", "Review & Rating", "Discussion"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Review & Rating" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reviews Section */}
          <div className="md:col-span-2 space-y-4">
            {/* Sorting Dropdown */}
            <div className="flex items-center justify-between">
              <select
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600"
                defaultValue="Newest"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Highest Rating">Highest Rating</option>
                <option value="Lowest Rating">Lowest Rating</option>
              </select>
            </div>

            {/* Individual Reviews */}
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex items-start space-x-4 border-b pb-4"
              >
                {/* Avatar */}
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{review.user}</h4>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex items-center text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        <path d="M12 2.472l2.909 5.891 6.49.942-4.695 4.578 1.109 6.463L12 16.73 7.187 20.346l1.109-6.463L3.6 9.305l6.49-.942L12 2.472z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                  <div className="mt-2 text-gray-500 text-sm flex items-center space-x-2">
                    <button className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14 9V5a5 5 0 00-10 0v4H3a1 1 0 000 2h1v8a1 1 0 001 1h12a1 1 0 001-1v-8h1a1 1 0 000-2h-1z" />
                      </svg>
                      <span>{review.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-lg font-bold">Product Review</h3>
              <span className="text-sm text-purple-600">
                {ratingBreakdown.totalReviews} reviews
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 ${
                      i < ratingBreakdown.averageRating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    <path d="M12 2.472l2.909 5.891 6.49.942-4.695 4.578 1.109 6.463L12 16.73 7.187 20.346l1.109-6.463L3.6 9.305l6.49-.942L12 2.472z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold text-gray-600">
                {ratingBreakdown.averageRating.toFixed(1)}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {Object.entries(ratingBreakdown.breakdown).map(
                ([stars, count]) => (
                  <div key={stars} className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{stars}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${
                            (count / ratingBreakdown.totalReviews) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{count}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewAndRating;
