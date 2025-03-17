export default function PartnerLogos() {
    return (
      <section className="w-full bg-[#1d5c5c] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="flex items-center">
              <img src="/pharmacy-logo.svg" alt="Pharmacy" className="h-auto w-[200px]" />
            </div>
            <div className="flex items-center">
              <img src="/healthcare-logo.svg" alt="Healthcare" className="h-auto w-[200px]" />
            </div>
            <div className="flex items-center">
              <img src="/panacea-logo.svg" alt="Panacea Clinic" className="h-auto w-[200px]" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  