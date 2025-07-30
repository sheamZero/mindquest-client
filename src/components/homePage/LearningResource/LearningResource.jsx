

const tutorialVideos = [
    {
        id: 1,
        title: "Master CSS Grid in 10 Minutes",
        description: "A quick walkthrough of modern CSS Grid layout techniques.",
        videoUrl: "https://www.youtube.com/embed/7kVeCqQCxlk", 
    },
    {
        id: 2,
        title: "React Hooks Crash Course",
        description: "Understand useState, useEffect, and custom hooks with examples.",
        videoUrl: "https://www.youtube.com/embed/f687hBjwFcM",
    },
];

const LearningResource = () => {
    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-heading dark:text-headingDark mb-3">Learning Resources & Tutorials</h2>
                <p className="text-paragraph dark:text-paragraphDark max-w-2xl mx-auto mb-10">
                    Boost your skills with curated tutorials, videos, and hands-on guides. Learn by watching, doing, and exploring real-world code.
                </p>

                {/* Tutorials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {tutorialVideos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white rounded-xl shadow  transition duration-300 overflow-hidden"
                        >
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={video.videoUrl}
                                    title={video.title}
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-5 text-left space-y-2">
                                <h3 className="text-xl font-semibold text-heading">{video.title}</h3>
                                <p className="text-sm text-paragraph">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LearningResource;
