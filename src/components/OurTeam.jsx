export default function OurTeam() {
    const team = [
      {
        image: "/placeholder-doctor.jpg",
        name: "STACIA MCCAHAN",
        position: "Registered Mental Health",
      },
      {
        image: "/placeholder-doctor.jpg",
        name: "KATIE STUART",
        position: "LMHC",
      },
      {
        image: "/placeholder-doctor.jpg",
        name: "ALYSSA FINKELSTEIN",
        position: "Registered Mental Health",
      },
      {
        image: "/placeholder-doctor.jpg",
        name: "ALYSSA FINKELSTEIN",
        position: "Registered Mental Health",
      },
    ]
  
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6">Our team</h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
            Our dedicated team of mental health professionals is committed to providing personalized care, guidance, and
            support. With a compassionate approach and evidence-based techniques.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-4">
                <img src={member.image || "/placeholder-doctor.jpg"} alt={member.name} className="w-full h-auto mb-4" />
                <h3 className="text-lg font-medium text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  