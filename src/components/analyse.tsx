// useful links:
// custom easing by Lochie (x.com/lochieaxon): https://www.easing.dev
// motion-primitives by Ibelick (x.com/Ibelick): https://motion-primitives.com/docs
// The Magic of Clip Path article by Emil Kowalski (x.com/emilkowalski_): https://emilkowal.ski/ui/the-magic-of-clip-path
"use client";
import { TextShimmer } from "../../components/motion-primitives/text-shimmer";
import { DefaultIcon } from "./icons/icon";
import { PixelatedIcon } from "./icons/icon";
import { motion } from "framer-motion";
// we use same transition for every element to make it look consistent
const transition = {
    duration: 2.5,
    // custom easing from https://www.easing.dev
    ease: [0.175, 0.885, 0.32, 1],
    // consistent times for identical animation in any direction
    times: [0, 0.6, 0.6, 1],
    // looping our animation
    repeat: Infinity,
    repeatType: 'mirror',
    // adding a delay between repeats to avoid immediate restart
    repeatDelay: 0.2,
};

export const AnalyzingImage = () => {
    return (
        // our container
        <div className="flex items-center gap-2">
            {/* container for icons + divider */}
            <div className="flex items-center justify-center relative isolate">
                <motion.div
                    // we don't clip any width of our icon initially
                    initial={{
                        clipPath: 'inset(0px 0px 0px 0px)',
                    }}
                    animate={{
                        // our times animation to clip icon from right to left and back
                        clipPath: [
                            'inset(0px 0px 0px 0px)',
                            'inset(0px 24px 0px 0px)',
                            'inset(0px 24px 0px 0px)',
                            'inset(0px 0px 0px 0px)',
                        ],
                    }}
                    transition={transition as any}
                    // we need this styles to hide the icon underneath
                    className="bg-white z-10"
                >
                    <DefaultIcon />
                </motion.div>
                <motion.div
                    // move our divider to the right for initial state
                    initial={{ transform: 'translateX(10px)' }}
                    animate={{
                        // our times animation to move divider from right to left and back
                        transform: [
                            'translateX(10px)',
                            'translateX(-10px)',
                            'translateX(-10px)',
                            'translateX(10px)',
                        ],
                    }}
                    transition={transition as any}
                    // added z-index to make it above `<DefaultIcon />`
                    className="absolute w-[3px] rounded-full bg-[#909090] h-full z-10"
                />
                {/* make sure your second icon has `absolute` position to stack it underneath the first icon */}
                <PixelatedIcon className="text-[#909090] absolute" />
            </div>
            {/* custom component from https://motion-primitives.com/docs/text-shimmer */}
            <TextShimmer className="text-sm font-medium" duration={1.5}>
                Analyzing image
            </TextShimmer>
        </div>
    );
};