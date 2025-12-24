

const Youridea = () => {
    return (
        // SECTION: background set to 'gray-light' (#EFF0F6) as per "Sections" constraint
        // Spacing: py-24 for "Generous spacing"
        <section className="bg-white-light py-24 border-t border-blue-soft-2/50">
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* HEADING: Color 'navy' (#1A356A) for strong visual hierarchy. Weight 700. */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight">
                    Your idea is ready. <br className="hidden md:block" />
                    Let’s build it.
                </h2>

                {/* DECORATION: Simple separator using 'blue-main' (#056FFD) */}
                <div className="h-1.5 w-20 bg-blue-main mx-auto rounded-full mb-10 opacity-90"></div>

                {/* BODY TEXT: Color 'gray-dark' (#25252B) with 'leading-relaxed' */}
                <p className="text-lg md:text-xl text-gray-dark mb-8 leading-relaxed font-normal">
                    You’ve got a software idea you want to bring to life—but getting it built can
                    feel harder than it should. Finding great developers is tough, building the
                    right team takes time, and managing delivery without blowing your budget
                    can quickly turn into a constant headache.
                </p>

                {/* SECOND PARAGRAPH */}
                <p className="text-lg md:text-xl text-gray-dark leading-relaxed font-normal">
                    That’s where we come in. We guide you through the entire process with a
                    ready 
                    
                    {/* HIGHLIGHT: 'blue-main' (#056FFD) as requested for highlights. 
                        Removed underline to keep it "Clean" and "No clutter". 
                        Used font-semibold for emphasis. */}
                    <span className="text-blue-main font-semibold mx-1.5">
                        pool of experienced software talent
                    </span>, 
                    
                    covering 
                    
                    {/* HIGHLIGHT 2 */}
                    <span className="text-blue-main font-semibold mx-1.5">
                        everything from design and coding to testing and deployment
                    </span>. 
                    
                    We help you move forward with clarity, confidence, and control.
                </p>
                
                {/* OPTIONAL CTA: Matches "Primary CTA" rules if you wanted to add a button here later
                <div className="mt-12">
                     <button className="btn bg-blue-main hover:bg-blue-strong text-white rounded-lg border-none px-8">
                        Start Your Project
                     </button>
                </div> 
                */}

            </div>
        </section>
    );
};

export default Youridea;