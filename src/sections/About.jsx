import React, { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'

const About = () => {
    const globeRef = useRef();

    const location = {
        lat: 9.005401,
        lng: 38.763611,
    };

    useEffect(() => {
        // Zoom into the specified location
        if (globeRef.current) {
            globeRef.current.pointOfView(
                { lat: location.lat, lng: location.lng, altitude: 0.5 }, // Adjust altitude for zoom level
                2000 // Duration of zoom animation in milliseconds
            );
        }
    }, []);
    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6
                        md:grid-cols-2 
                        grid-cols-1 gap-5 h-full'>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit  object-contain' />

                        <div>
                            <p className='grid-headtext'>Hi, I'm Amanuel</p>
                            <p className='grid-subtext'>With 2 Years of Experience,
                                I've worked in various industries, from developing full-stack applications to building ML models.
                                I'm always eager to learn more and contribute to the community.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/workLogo.png" alt="grid-2" className='spin w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                Front-End Stack
                            </p>
                            <p className='grid-subtext'>
                            I specialize in creating dynamic web applications using JavaScript and TypeScript, with a strong emphasis on React and Next.js to deliver seamless user experiences.                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/backend.png" alt="grid-2" className='spin w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                Back-End Stack
                            </p>
                            <p className='grid-subtext'>
                            I work on server-side development with a focus on Node.js and Express, ensuring robust and efficient API design and integration.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/ml.png" alt="grid-2" className='spin w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                ML Stack
                            </p>
                            <p className='grid-subtext'>
                            I build intelligent systems using Python, focusing on frameworks like TensorFlow and scikit-learn to develop predictive models and data-driven solutions.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/devops.png" alt="grid-2" className='spin w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                DevOps Stack
                            </p>
                            <p className='grid-subtext'>
                            I automate deployment and infrastructure management, utilizing tools like Docker, Kubernetes, and CI/CD pipelines to enhance collaboration and streamline workflows.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                           <Globe ref={globeRef}
            height={326}
            width={326}
            backgroundColor='rgba(0,0,0,0)'
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[
                {
                    lat: location.lat,
                    lng: location.lng,
                    text: "I am here",
                    color: "yellow",
                    size: 200000000,
                    fontWeight: "bold",
                }
            ]}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About