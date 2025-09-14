import { Image, Video, Palette, Camera, Wand2, Mic, Move, Zap } from "lucide-react";
import { ReactElement } from "react";

type GenerateTool = {
  icon: ReactElement;
  title: string;
  description: string;
  tag: string;
  isNew: boolean;
  color: string;
};

export const generateTools: GenerateTool[] = [
        {
            icon: <Image className="w-6 h-6" />,
            title: "Image",
            description: "Generate realistic and artistic images with FLUX.1 [dev] model",
            tag: "Free",
            isNew: true,
            color: "bg-gray-300"
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: "Video",
            description: "Create high-quality AI-generated videos from text or images",
            tag: "New",
            isNew: true,
            color: "bg-yellow-200"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Realtime",
            description: "Draw and type with instant AI-powered generation in real-time",
            tag: "",
            isNew: false,
            color: "bg-blue-200"
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Enhancer",
            description: "Upscale, restore, and enhance images using advanced AI tools",
            tag: "Pro",
            isNew: true,
            color: "bg-amber-100"
        },
        {
            icon: <Wand2 className="w-6 h-6" />,
            title: "Edit",
            description: "Remove objects, change backgrounds, and retouch with AI",
            tag: "New",
            isNew: true,
            color: "bg-purple-300"
        },
        {
            icon: <Mic className="w-6 h-6" />,
            title: "Video Lipsync",
            description: "Sync lip movements in videos to match any audio or speech",
            tag: "",
            isNew: false,
            color: "bg-green-300"
        },
        {
            icon: <Move className="w-6 h-6" />,
            title: "Motion Transfer",
            description: "Apply one person’s movements to another using AI motion transfer",
            tag: "",
            isNew: false,
            color: "bg-orange-300"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Train",
            description: "Train and fine-tune AI models on your custom data",
            tag: "",
            isNew: false,
            color: "bg-red-200"
        }
    ];
