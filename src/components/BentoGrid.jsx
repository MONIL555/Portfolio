"use client";

export default function BentoGrid() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-8 md:px-16 max-w-7xl 3xl:max-w-[2000px] mx-auto w-full">
      <div className="mb-8 mt-12 md:mt-0">
        <h2 className="text-lg md:text-xl 3xl:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2 3xl:mb-4">Background & Experience</h2>
        <p className="text-gray-600 text-xs md:text-[13px] 3xl:text-lg">My technical journey and credentials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 3xl:gap-10 auto-rows-[minmax(200px,auto)]">
        
        {/* Experience Card */}
        <div className="glass-panel rounded-3xl p-7 3xl:p-14 md:col-span-2 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm">
          <div>
            <p className="text-[10px] md:text-[11px] 3xl:text-base font-semibold tracking-widest text-gray-500 mb-3 3xl:mb-6">EXPERIENCE</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 3xl:mb-10">
              <div>
                <h3 className="text-[15px] md:text-base 3xl:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1 3xl:mb-3">Backend Developer Intern</h3>
                <p className="text-xs md:text-[13px] 3xl:text-xl text-gray-600 font-medium">Port Links India Private Limited</p>
              </div>
              <p className="text-[10px] md:text-[11px] 3xl:text-lg font-medium text-gray-500 bg-white/60 px-3 py-1.5 3xl:px-5 3xl:py-2.5 rounded-full w-max mt-2 md:mt-0 border border-white/40">Feb 2026 – Apr 2026</p>
            </div>
          </div>
          <ul className="space-y-3 3xl:space-y-6 text-gray-600 text-xs md:text-[13px] 3xl:text-xl leading-relaxed mt-auto">
            <li className="flex items-start gap-3 3xl:gap-5">
              <span className="w-1.5 h-1.5 3xl:w-2.5 3xl:h-2.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
              <span>Engineered a Lead-to-Ledger Project Management System using <strong>Next.js and MongoDB</strong>, implementing complete CRUD functionality across 6 core business modules.</span>
            </li>
            <li className="flex items-start gap-3 3xl:gap-5">
              <span className="w-1.5 h-1.5 3xl:w-2.5 3xl:h-2.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
              <span>Systematized operational workflows, <strong>reducing manual data entry by 40%</strong> for a 6-person team.</span>
            </li>
            <li className="flex items-start gap-3 3xl:gap-5">
              <span className="w-1.5 h-1.5 3xl:w-2.5 3xl:h-2.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
              <span>Architected a digital lead-to-project conversion pipeline, slashing manual handoff transition times from <strong>2 days to under 30 minutes</strong>.</span>
            </li>
            <li className="flex items-start gap-3 3xl:gap-5">
              <span className="w-1.5 h-1.5 3xl:w-2.5 3xl:h-2.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
              <span>Constructed highly scalable <strong>RESTful APIs</strong> utilizing the MVC architectural pattern and implemented reusable middleware for authentication, validation, and error handling, accelerating new feature deployment by 30%.</span>
            </li>
          </ul>
        </div>

        {/* Education Card */}
        <div className="glass-panel rounded-3xl p-7 3xl:p-14 md:col-span-1 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm">
          <div>
            <p className="text-[10px] md:text-[11px] 3xl:text-base font-semibold tracking-widest text-gray-500 mb-5 3xl:mb-8">EDUCATION</p>
            
            <div className="mb-6 3xl:mb-10">
              <h3 className="text-sm md:text-[15px] 3xl:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1.5 3xl:mb-3 leading-tight">B.Tech in Computer Engineering</h3>
              <p className="text-xs md:text-[13px] 3xl:text-xl text-gray-600 mb-3 3xl:mb-5 font-medium">Silver Oak University</p>
              <div className="inline-flex items-center w-max px-3.5 py-1.5 3xl:px-5 3xl:py-2.5 bg-white/60 border border-white/40 rounded-full text-[10px] md:text-[11px] 3xl:text-base font-semibold shadow-sm text-gray-700">
                9.28 GPA
              </div>
            </div>

            <div>
              <h3 className="text-sm md:text-[15px] 3xl:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1.5 3xl:mb-3 leading-tight">Diploma in Computer Engineering</h3>
              <p className="text-xs md:text-[13px] 3xl:text-xl text-gray-600 mb-3 3xl:mb-5 font-medium">Government Polytechnic Bhuj</p>
              <div className="inline-flex items-center w-max px-3.5 py-1.5 3xl:px-5 3xl:py-2.5 bg-white/60 border border-white/40 rounded-full text-[10px] md:text-[11px] 3xl:text-base font-semibold shadow-sm text-gray-700">
                8.4 Score
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="glass-panel rounded-3xl p-7 3xl:p-14 md:col-span-3 flex flex-col justify-center group hover:bg-white/50 transition-colors shadow-sm">
          <p className="text-[10px] md:text-[11px] 3xl:text-base font-semibold tracking-widest text-gray-500 mb-5 3xl:mb-8">CERTIFICATIONS</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 3xl:gap-10">
            <div className="p-5 3xl:p-10 rounded-2xl 3xl:rounded-3xl bg-white/40 border border-white/60 relative overflow-hidden group-hover:bg-white/60 transition-all shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 3xl:w-2 h-full bg-green-400"></div>
              <h4 className="text-sm md:text-[15px] 3xl:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] flex items-center gap-2.5 3xl:gap-4 mb-1.5 3xl:mb-3">
                <span className="w-2.5 h-2.5 3xl:w-4 3xl:h-4 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                AI + Developer
              </h4>
              <p className="text-[10px] md:text-[11px] 3xl:text-base text-gray-500 mb-3 3xl:mb-5 font-medium tracking-wide">AI CERTS (2025)</p>
              <p className="text-xs md:text-[13px] 3xl:text-xl text-gray-700 leading-relaxed">Completed with distinction; covered Deep Learning and Applied AI with Python.</p>
            </div>

            <div className="p-5 3xl:p-10 rounded-2xl 3xl:rounded-3xl bg-white/40 border border-white/60 relative overflow-hidden group-hover:bg-white/60 transition-all shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 3xl:w-2 h-full bg-blue-400"></div>
              <h4 className="text-sm md:text-[15px] 3xl:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] flex items-center gap-2.5 3xl:gap-4 mb-1.5 3xl:mb-3">
                <span className="w-2.5 h-2.5 3xl:w-4 3xl:h-4 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                Design and Analysis of Algorithms
              </h4>
              <p className="text-[10px] md:text-[11px] 3xl:text-base text-gray-500 mb-3 3xl:mb-5 font-medium tracking-wide">NPTEL & SKILL INDIA (2024)</p>
              <p className="text-xs md:text-[13px] 3xl:text-xl text-gray-700 leading-relaxed">Ranked in the top 10% for complexity analysis and dynamic programming.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
