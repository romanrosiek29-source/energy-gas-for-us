"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, Menu, X, MapPin, CheckCircle2, XCircle, Loader2, Flame, Package, Check, Star, ChevronDown, Lightbulb, Search, FileCheck, Smile, Headphones, Shield, Smartphone, FileText } from "lucide-react";
import Link from "next/link";

const SERVICE_AREAS = ["77001","77002","77003","77004","77005","77006","77007","77008","77009","77010","77019","77027","77056","77057","77063","77077","77079","77082","77094","77096","10001","10002","10003","90001","90002","60601","60602","33101","33102","75201","75202"];
const faqs = [{q:"How do I check availability?",a:"Enter your ZIP code in the availability checker on our homepage."},{q:"What ZIP codes do you serve?",a:"We serve many ZIP codes across Texas, New York, California, Illinois, Florida, and other states."},{q:"How do I choose an electricity plan?",a:"Compare our electricity plans based on rate type, contract term, and features."},{q:"Can I manage my account online?",a:"Yes! Our My Account portal lets you view bills, make payments, and track usage."},{q:"How do I pay my bill?",a:"You can pay your bill online through the My Account portal."}];
const testimonials = [{name:"Michael",initial:"R.",text:"Switching to Energy & Gas made managing our energy account much easier."},{name:"Sarah",initial:"T.",text:"I liked being able to compare plans before making a decision."},{name:"James",initial:"W.",text:"The account dashboard makes it easy to keep track of bills and payments."}];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 20); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  const handleCheckAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zipCode)) { alert("Please enter a valid 5-digit ZIP code"); return; }
    setIsChecking(true);
    await new Promise(r => setTimeout(r, 1000));
    setResult(SERVICE_AREAS.includes(zipCode) ? "available" : "unavailable");
    setIsChecking(false);
  };
  return (
    <>
      <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5")}>
        <div className="container-custom flex items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center space-x-2"><div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div><span className="text-xl font-bold text-charcoal-800">Energy and Gas for US</span></Link>
          <div className="hidden lg:flex items-center space-x-1">{["Home","Electricity","Natural Gas","Plans","How It Works","FAQs","Contact"].map((item) => (<Link key={item} href={item==="Home"?"/":"/"+item.toLowerCase().replace(" ","-")} className="px-3 py-2 text-charcoal-700 hover:text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors">{item}</Link>))}</div>
          <div className="hidden lg:flex items-center space-x-3"><Link href="/availability" className="px-4 py-2 text-primary-700 font-semibold hover:bg-primary-50 rounded-lg">Check Availability</Link><Link href="/pay-my-bill" className="px-4 py-2 text-charcoal-700 font-semibold hover:bg-gray-100 rounded-lg">Pay My Bill</Link><Link href="/my-account" className="btn-primary px-5 py-2.5 text-sm">My Account</Link></div>
          <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">{isMobileMenuOpen?<X className="w-6 h-6 text-charcoal-700" />:<Menu className="w-6 h-6 text-charcoal-700" />}</button>
        </div>
        {isMobileMenuOpen && (<div className="lg:hidden bg-white border-t border-gray-200 shadow-lg"><div className="px-4 py-4 space-y-2">{["Home","Electricity","Natural Gas","Plans","How It Works","FAQs","Contact"].map((item)=>(<Link key={item} href={item==="Home"?"/":"/"+item.toLowerCase().replace(" ","-")} onClick={()=>setIsMobileMenuOpen(false)} className="block px-4 py-3 text-charcoal-700 hover:text-primary-600 hover:bg-primary-50 font-medium rounded-lg">{item}</Link>))}<div className="pt-4 space-y-2 border-t border-gray-200 mt-4"><Link href="/availability" onClick={()=>setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 text-primary-700 font-semibold bg-primary-50 rounded-lg">Check Availability</Link><Link href="/pay-my-bill" onClick={()=>setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 text-charcoal-700 font-semibold bg-gray-100 rounded-lg">Pay My Bill</Link><Link href="/my-account" onClick={()=>setIsMobileMenuOpen(false)} className="block w-full text-center btn-primary px-4 py-3">My Account</Link></div></div></div>)}
      </nav>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-20">
        <div className="absolute inset-0"><motion.div animate={{y:[0,-20,0],opacity:[0.3,0.5,0.3]}} transition={{duration:6,repeat:Infinity}} className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" /><motion.div animate={{y:[0,30,0],opacity:[0.2,0.4,0.2]}} transition={{duration:8,repeat:Infinity,delay:1}} className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" /></div>
        <div className="container-custom px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8"><Zap className="w-4 h-4 text-primary-600" /><span className="text-sm font-medium text-charcoal-700">Trusted Energy Provider</span></motion.div>
            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-900 leading-tight mb-6">Powering American Homes With <span className="text-gradient">Smarter Energy Choices</span></motion.h1>
            <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-lg sm:text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">Reliable electricity and natural gas plans designed to give you more choice, more flexibility, and a simpler way to manage your energy.</motion.p>
            <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="flex flex-col sm:flex-row items-center justify-center gap-4"><Link href="/availability" className="btn-primary inline-flex items-center space-x-2"><span>Check Availability</span><ArrowRight className="w-5 h-5" /></Link><Link href="/plans" className="btn-secondary">Explore Energy Plans</Link></motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-2xl mb-4"><MapPin className="w-7 h-7 text-primary-600" /></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Is Energy & Gas Available At Your Address?</h2>
              <p className="text-lg text-charcoal-600">Enter your ZIP code to discover available electricity and natural gas plans in your area.</p>
            </motion.div>
            <form onSubmit={handleCheckAvailability} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input type="text" value={zipCode} onChange={(e)=>setZipCode(e.target.value.replace(/\D/g,"").slice(0,5))} placeholder="Enter ZIP Code" className="input-field flex-1 text-center text-lg" maxLength={5} pattern="\d{5}" required />
                <button type="submit" disabled={isChecking} className="btn-primary inline-flex items-center justify-center space-x-2 min-w-[180px]">{isChecking?(<><Loader2 className="w-5 h-5 animate-spin" /><span>Checking...</span></>):(<span>Check Availability</span>)}</button>
              </div>
            </form>
            <AnimatePresence mode="wait">
              {result==="available" && (<motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}} className="card-glass p-8 text-center max-w-xl mx-auto border-primary-200"><motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",duration:0.5}} className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4"><CheckCircle2 className="w-10 h-10 text-white" /></motion.div><h3 className="text-2xl font-bold text-charcoal-900 mb-2">Great news - Energy & Gas is available at your address!</h3><p className="text-charcoal-600 mb-6">You are in an eligible service area. Explore available electricity and natural gas plans designed for your needs.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/plans" className="btn-primary">View Available Plans</Link><Link href="/electricity" className="btn-secondary">Continue</Link></div></motion.div>)}
              {result==="unavailable" && (<motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="card-glass p-8 text-center max-w-xl mx-auto"><div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4"><XCircle className="w-10 h-10 text-gray-500" /></div><h3 className="text-2xl font-bold text-charcoal-900 mb-2">We are not available in this area yet.</h3><p className="text-charcoal-600 mb-6">We are continuing to expand our service areas. Leave your email and we will notify you when service becomes available.</p><form className="space-y-4 max-w-md mx-auto"><input type="email" placeholder="Your email address" className="input-field" required /><input type="text" value={zipCode} readOnly className="input-field bg-gray-50 text-gray-500" placeholder="ZIP Code" /><button type="submit" className="btn-primary w-full">Notify Me</button></form></motion.div>)}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">What type of energy service are you looking for?</h2></motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {[{icon:Zap,title:"Electricity",description:"Reliable electricity plans for your home or business.",href:"/electricity",gradient:"from-primary-500 to-primary-700"},{icon:Flame,title:"Natural Gas",description:"Flexible natural gas plans built around your energy needs.",href:"/natural-gas",gradient:"from-orange-500 to-orange-700"}].map((service,i)=>(<motion.div key={service.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="card p-8 hover:shadow-2xl transition-all duration-300 group"><div className={"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br "+service.gradient+" rounded-2xl mb-6 group-hover:scale-110 transition-transform"}><service.icon className="w-8 h-8 text-white" /></div><h3 className="text-2xl font-bold text-charcoal-900 mb-3">{service.title}</h3><p className="text-charcoal-600 mb-6">{service.description}</p><Link href={service.href} className="btn-primary">{service.title==="Electricity"?"Explore Electricity Plans":"Explore Natural Gas Plans"}</Link></motion.div>))}
          </div>
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card-glass p-8 max-w-2xl mx-auto text-center"><div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-2xl mb-4"><Package className="w-7 h-7 text-primary-600" /></div><h3 className="text-2xl font-bold text-charcoal-900 mb-3">Bundle & Save</h3><p className="text-charcoal-600 mb-6">Need both electricity and natural gas? Explore bundled options.</p><Link href="/plans" className="btn-outline">View Bundle Plans</Link></motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Electricity Plans Made Simple</h2><p className="text-lg text-charcoal-600 max-w-2xl mx-auto">Choose an electricity plan that fits the way you live.</p></motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{name:"Essential",description:"For everyday energy needs",features:["Competitive electricity rate","Flexible plan options","Online account management","Customer support","Paperless billing"],cta:"Choose Essential"},{name:"Smart Choice",description:"For customers who want predictable pricing",features:["Fixed-rate options","Predictable monthly energy costs","Online bill management","Automatic payment options","Customer support"],cta:"Choose Smart Choice",isPopular:true},{name:"Green Energy",description:"For environmentally conscious customers",features:["Renewable energy options","Flexible plan terms","Online account management","Paperless billing","Customer support"],cta:"Choose Green Energy",isGreen:true}].map((plan,i)=>(<motion.div key={plan.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className={"card p-8 relative "+(plan.isPopular?"border-2 border-primary-500 shadow-xl":"")}>{plan.isPopular&&(<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center space-x-1"><Star className="w-4 h-4" /><span>MOST POPULAR</span></span></div>)}<div className="text-center mb-6"><h3 className="text-2xl font-bold text-charcoal-900 mb-2">{plan.name}</h3><p className="text-charcoal-600">{plan.description}</p></div><ul className="space-y-3 mb-8">{plan.features.map((feature)=>(<li key={feature} className="flex items-start space-x-3"><Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" /><span className="text-charcoal-700">{feature}</span></li>))}</ul><Link href="/my-account" className="btn-primary w-full text-center block">{plan.cta}</Link></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Energy That Works For You</h2></motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{icon:CheckCircle,title:"Simple Choices",description:"Easy-to-understand plans without unnecessary complexity."},{icon:Zap,title:"Flexible Options",description:"Choose plans based on your energy needs."},{icon:Smartphone,title:"Easy Account Management",description:"Manage your energy online anytime."},{icon:FileText,title:"Transparent Experience",description:"Clear plan information and straightforward account tools."},{icon:Headphones,title:"Customer Support",description:"Friendly support when you need it."},{icon:Shield,title:"Modern Technology",description:"A digital-first experience designed around the customer."}].map((feature,i)=>(<motion.div key={feature.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="card p-6 hover:shadow-xl transition-all duration-300"><div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4"><feature.icon className="w-6 h-6 text-primary-600" /></div><h3 className="text-xl font-semibold text-charcoal-900 mb-2">{feature.title}</h3><p className="text-charcoal-600">{feature.description}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">How It Works</h2></motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{icon:Search,number:"1",title:"Check Availability",description:"Enter your ZIP code to see available services."},{icon:FileCheck,number:"2",title:"Choose Your Plan",description:"Compare electricity and natural gas plans."},{icon:Smile,number:"3",title:"Enjoy Simple Energy Management",description:"Manage your account, bills and energy usage online."}].map((step,i)=>(<motion.div key={step.number} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="text-center relative"><div className="relative z-10"><div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 shadow-lg"><step.icon className="w-8 h-8 text-white" /></div></div><div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full text-primary-700 font-bold text-lg mb-4">{step.number}</div><h3 className="text-xl font-semibold text-charcoal-900 mb-2">{step.title}</h3><p className="text-charcoal-600">{step.description}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Simple Ways To Use Energy Smarter</h2></motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[{icon:Lightbulb,title:"Reduce unnecessary electricity usage"},{icon:Smartphone,title:"Use smart thermostats"},{icon:Check,title:"Monitor monthly energy usage"}].map((tip,i)=>(<motion.div key={tip.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="card p-6 hover:shadow-xl transition-all duration-300"><div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4"><tip.icon className="w-6 h-6 text-primary-600" /></div><h3 className="text-lg font-semibold text-charcoal-900">{tip.title}</h3></motion.div>))}
          </div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center"><Link href="/energy-tips" className="btn-outline">Explore Energy Tips</Link></motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Customers Choose Energy & Gas</h2></motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t,i)=>(<motion.div key={t.name+t.initial} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="card p-8"><div className="flex items-center space-x-1 mb-4">{[...Array(5)].map((_,j)=>(<Star key={j} className="w-5 h-5 fill-primary-500 text-primary-500" />))}</div><p className="text-charcoal-700 mb-6 italic">&ldquo;{t.text}&rdquo;</p><div className="flex items-center space-x-3"><div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">{t.name[0]}</div><div><p className="font-semibold text-charcoal-900">{t.name} {t.initial}</p></div></div></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">Frequently Asked Questions</h2></motion.div>
          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.03}} className="card overflow-hidden"><button onClick={()=>setOpenFaqIndex(openFaqIndex===i?null:i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50"><span className="font-semibold text-charcoal-900 pr-4">{faq.q}</span><ChevronDown className={"w-5 h-5 text-charcoal-500 transition-transform "+(openFaqIndex===i?"rotate-180":"")} /></button>{openFaqIndex===i&&<div className="px-6 pb-5 text-charcoal-700">{faq.a}</div>}</motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto"><h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Your Energy Plan?</h2><p className="text-lg text-primary-100 mb-8">Enter your ZIP code and discover available electricity and natural gas options.</p><Link href="/availability" className="inline-flex items-center space-x-2 bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"><span>Check Availability</span><ArrowRight className="w-5 h-5" /></Link></motion.div>
        </div>
      </section>
      <footer className="bg-charcoal-900 text-white pt-16 pb-8">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div><h3 className="text-lg font-semibold mb-4">Energy & Gas</h3><ul className="space-y-2">{["About Us","Electricity","Natural Gas","Plans","How It Works"].map((item)=>(<li key={item}><Link href={"/"+item.toLowerCase().replace(" ","-")} className="text-gray-300 hover:text-primary-400 transition-colors">{item}</Link></li>))}</ul></div>
            <div><h3 className="text-lg font-semibold mb-4">Customer</h3><ul className="space-y-2">{["My Account","Pay My Bill","Billing","Energy Usage","Support"].map((item)=>(<li key={item}><Link href={"/"+item.toLowerCase().replace(" ","-")} className="text-gray-300 hover:text-primary-400 transition-colors">{item}</Link></li>))}</ul></div>
            <div><h3 className="text-lg font-semibold mb-4">Resources</h3><ul className="space-y-2">{["FAQs","Energy Saving Tips","Moving","Contact"].map((item)=>(<li key={item}><Link href={"/"+item.toLowerCase().replace(" ","-")} className="text-gray-300 hover:text-primary-400 transition-colors">{item}</Link></li>))}</ul></div>
            <div><h3 className="text-lg font-semibold mb-4">Legal</h3><ul className="space-y-2">{["Terms & Conditions","Privacy Policy","Accessibility","Important Disclosures"].map((item)=>(<li key={item}><Link href={"/"+item.toLowerCase().replace(" ","-")} className="text-gray-300 hover:text-primary-400 transition-colors">{item}</Link></li>))}</ul></div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div><span className="font-semibold">Energy and Gas for US</span></div>
              <p className="text-gray-400 text-sm">P.O. Box 460008, Houston, TX 77056</p>
              <p className="text-gray-400 text-sm">� 2026 Energy and Gas for US. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
