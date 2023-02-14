import { motion } from "framer-motion";

const variantCon = {
    visible: {
        transition: {
            delay: 0.2,
            staggerChildren: 0.15,
        }
    },
    hidden: {

    }
}

const variant = (x: number, y: number) => {
    return {
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.2,
            }
        },
        hidden: {
            opacity: 0,
            y: y,
            x: x,
        },
        hover: {
            scale: 1.1,
        }
    }
}

const Content404 = () => {

    return (
        <div className="h-full w-full">
            <motion.div
                className="flex flex-col w-full text-center font-bold h-full flex-grow justify-center items-center mx-auto gap-y-4"
                variants={variantCon}
                viewport={{ once: false, amount: 0.75 }}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div variants={variant(0, 10)} className="text-lime-300 text-9xl font-bold text-center">
                    404
                </motion.div>
                <motion.div className="text-white text-2xl" variants={variant(0, 10)}>
                    Page Not Found
                </motion.div>
                <motion.a
                    href="/"
                    className="rounded-md border-2 border-lime-300 px-14 py-4 text-lg font-bold text-lime-300 "
                    variants={variant(0, 10)}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#001F54",
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    GO HOME
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Content404;