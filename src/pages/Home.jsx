import Hero from "../components/Hero";
import wave from "../assets/wave.svg"


const Home = () => {
    return (
        <>
            <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center bg-base-200 relative">
                <Hero></Hero>
                <img src={wave} alt="" className="absolute bottom-0 w-full"/>
            </div>
        </>
    );
};

export default Home;