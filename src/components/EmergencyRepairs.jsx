export default function EmergencyRepairs() {
    return (
      <section className="w-full relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
        <div
          className="w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Rpairs-nZPtgcVCwwISBCGxj7bIo1DfpI35nB.png')",
          }}
        ></div>
  
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            Emergency repairs for all broken dentures:
          </h2>
          <p className="text-lg mb-8 max-w-3xl">
            If your dentures have broken, we endeavour to repair them ASAP, often on the same day.
          </p>
          <a
            href="/emergency-repairs"
            className="bg-[#40E0D0] text-[#1d5c5c] px-8 py-4 inline-block uppercase font-medium"
          >
            LEARN MORE
          </a>
        </div>
      </section>
    )
  }
  
  