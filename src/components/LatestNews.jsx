export default function LatestNews() {
    const news = [
      {
        image: "/placeholder-news.jpg",
        title: "Appropriately productize",
        date: "Jan 21, 2019",
        comments: "45 Comments",
        shares: "10 Share",
        excerpt: "Some quick example text to build on the",
      },
      {
        image: "/placeholder-news.jpg",
        title: "Quickly formulate backend",
        date: "May 26, 2019",
        comments: "30 Comments",
        shares: "5 Share",
        excerpt: "Synergistically engage effective ROI after",
      },
      {
        image: "/placeholder-news.jpg",
        title: "Objectively extend extensive",
        date: "Apr 25, 2019",
        comments: "41 Comments",
        shares: "30 Share",
        excerpt: "Holisticly mesh open-source leadership",
      },
      {
        image: "/placeholder-news.jpg",
        title: "Appropriately productize",
        date: "Jan 21, 2019",
        comments: "45 Comments",
        shares: "10 Share",
        excerpt: "Some quick example text to build on the",
      },
    ]
  
    return (
      <section className="py-16 md:py-24 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-4">Our Latest News</h2>
          <p className="text-center text-gray-600 mb-2">
            Enthusiastically drive revolutionary opportunities before emerging leadership.
          </p>
          <p className="text-center text-gray-600 mb-16">
            Distinctively transform tactical methods of empowerment via resource.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div key={index} className="mb-8">
                <img src={item.image || "/placeholder-news.jpg"} alt={item.title} className="w-full h-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <div className="flex text-sm text-gray-500 mb-2">
                  <span className="mr-2">• {item.date}</span>
                  <span className="mr-2">• {item.comments}</span>
                  <span>• {item.shares}</span>
                </div>
                <p className="text-gray-600 mb-2">{item.excerpt}</p>
                <a href="#" className="text-[#1d5c5c] inline-flex items-center">
                  Read more
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  