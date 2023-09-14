import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const container = {
    hidden:{},
    visible: {
        transition:{ staggerChildren: 0.2}
    }
};

const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}

const Project = ({ title, url }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div
            variants={projectVariant}
            className="relative"
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{ title }</p>
                <p className="mt-7">
                    Please click on the button and visit my project and please share your valuable feedback via mail.
                </p>
                <button
                    type="button"
                    className = "rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href =  `${url}` 
                    }}
                    // href = "https://www.linkedin.com/in/chauhan-abhi28"
                        
                >
                    <div className = "bg-deep-blue hover:text-white transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                        Let's talk
                    </div>

                </button>
            </div>

            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />

        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id = "projects" className = "pt-48 pb-48">

            {/* HEADINGS */}

            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                    
                <p className="mt-10 mb-10">
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                    fames odio in at.
                </p>
            </motion.div>

            {/* PROJECTS */}

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        My Web and ML Projects
                    </div>

                    <Project title="Project 1" url = "https://www.linkedin.com/in/chauhan-abhi28"/>
                    <Project title="Project 2" url = "https://github.com/AbhishekChauhan28"/>

                    {/* ROW 2 */}

                    <Project title="Project 3"/>
                    <Project title="Project 4"/>
                    <Project title="Project 5"/>


                </motion.div>

            </div>

        </section>
    )
}

export default Projects;