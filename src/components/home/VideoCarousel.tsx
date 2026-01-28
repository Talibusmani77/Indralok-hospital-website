import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const videoData = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=450&fit=crop",
        title: "Advanced Gastroenterology Care",
        description: "State-of-the-art facilities for digestive health",
    },
    {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=450&fit=crop",
        title: "Pediatric Excellence",
        description: "Compassionate care for your little ones",
    },
    {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=450&fit=crop",
        title: "24/7 Emergency Services",
        description: "Always ready to serve you",
    },
    {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop",
        title: "Modern Hospital Facilities",
        description: "Equipped with latest medical technology",
    },
];

const VideoCarousel = () => {
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    const togglePlay = (id: number) => {
        const video = videoRefs.current[id];
        if (!video) return;

        if (playingVideo === id) {
            video.pause();
            setPlayingVideo(null);
        } else {
            // Pause all other videos
            Object.values(videoRefs.current).forEach((v) => v?.pause());
            video.play();
            setPlayingVideo(id);
        }
    };

    return (
        <section className="section-padding bg-muted/30">
            <div className="container-hospital">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Virtual Tour
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Experience Our <span className="text-gradient">Healthcare Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take a virtual tour of our state-of-the-art facilities and see how we provide world-class medical care
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {videoData.map((video) => (
                            <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="card-hospital group cursor-pointer"
                                    onClick={() => togglePlay(video.id)}
                                >
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
                                                {playingVideo === video.id ? (
                                                    <Pause className="w-8 h-8 text-primary" />
                                                ) : (
                                                    <Play className="w-8 h-8 text-primary ml-1" />
                                                )}
                                            </div>
                                        </div>
                                        {/* Hidden video element for future implementation */}
                                        <video
                                            ref={(el) => (videoRefs.current[video.id] = el)}
                                            className="hidden"
                                            onEnded={() => setPlayingVideo(null)}
                                        />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{video.description}</p>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-8">
                        <CarouselPrevious className="relative left-0 translate-y-0" />
                        <CarouselNext className="relative right-0 translate-y-0" />
                    </div>
                </Carousel>

                <div className="text-center mt-8">
                    <Link
                        to="/facilities"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        Explore All Facilities →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;
