import Link from "next/link";

export default function ElectricityPage() {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-4">Electricity Plans Made Simple</h1>
            <p className="text-xl text-charcoal-600 mb-8">Choose an electricity plan that fits the way you live.</p>
            <Link href="/availability" className="btn-primary inline-block">Check Availability</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <p className="text-center text-charcoal-700">Electricity plans page - Full implementation in progress</p>
        </div>
      </section>
    </div>
  );
}
