

const SocialMediaIcons = () => {
    return (
        <div className = "flex justify-center md:justify-start my-10 gap-7">
            <a
                className = "hover:opacity-50 transition duration 500"
                href="https://www.linkedin.com/in/chauhan-abhi28"
                target = "_blank"
                rel = "noreferrer"
            >
                <img alt = "linkedin-link" src = "../assets/linkedin.png" />
            </a>

            <a
                className = "hover:opacity-50 transition duration 500"
                href="https://www.instagram.com/abhishek_chauhan28/"
                target = "_blank"
                rel = "noreferrer"
            >
                <img alt = "instagram-link" src = "../assets/instagram.png" />
            </a>

            <a
                className = "hover:opacity-50 transition duration 500"
                href="https://github.com/AbhishekChauhan28"
                target = "_blank"
                rel = "noreferrer"
            >
                <img alt = "github-link" src = "../assets/social.png" />
            </a>

        </div>
    );
};

export default SocialMediaIcons;