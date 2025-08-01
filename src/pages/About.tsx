import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const teamMembers = [
    {
        name: "Sonam Jain",
        role: "Committe",
        image: "/images/sonam-maam.jpeg"
    },
    {
      name: "Raman Pratap Singh",
      role: "Team",
      image: "/images/raman.jpeg"
  },
    {
      name: "Somaiya dhara",
      role: "Team",
      image: "/images/somaiya.jpeg"
  },
  {
      name: "Dharm Prakash Rudra",
      role: "Committe",
      image: "/images/dharm.jpeg"
  },
  {
    name: "Rahul Sharma",
    role: "Team",
    image: "/images/rahul.jpeg"
},

{
  name: "Sarah Shivangi mehra",
  role: "Team",
  image: "/images/shivangi.jpeg"
},
{
  name: "Lovell Prabhu",
  role: "Team",
  image: "/images/loveli.jpeg"
},
{
  name: "Mahima Rathore",
  role: "Committe",
  image: "/images/mahima.jpeg"
},
{
  name: "Anirudh Pratap Singh",
  role: "Team",
  image: "/images/anirudh.jpeg"
},
{
  name: " Rakesh Kumar",
  role: "Committe",
  image: "/images/rakesh.jpeg"
},
{
  name: " Purna Behera",
  role: "Committe",
  image: "/images/purna.jpeg"
},
{
  name: "Jasmin Khurana",
  role: "Committe",
  image: "/images/jasmin.jpeg"
},
{
  name: "Ashima Chauhan",
  role: "Committe",
  image: "/images/ashima.jpeg"
},
{
  name: "Simran Khan",
  role: "Committe",
  image: "/images/simran.jpeg"
},
{
  name: "Pragya A. Tripathi ",
  role: "Committe",
  image: "/images/pragya.jpeg"
},
{
  name: "Ishita Thakur",
  role: "Committe",
  image: "/images/ishita.jpeg"
},

];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="min-h-screen bg-[#f2f2f2]">
        {/* Section 1 - Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">

          <div className="absolute inset-0">
            <img
              src="/images/about-cover.JPG"
              alt="Volunteer Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[36px] font-bold mb-4">About AICWA</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Empowering the Unsung Heroes of the Indian Film Industry
            </p>
          </div>
        </section>


        <section className="-mt-36 relative z-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#303C69] p-8 rounded-3xl shadow-2xl ">
              <h2 className="text-2xl font-semibold text-[#303C69]  text-white mb-4">Our Belief</h2>
              <p className="text-white  text-lg">
                To empower and uplift workers, technicians, junior artists, and artists of the Indian film industry—Bollywood and regional—by providing access to healthcare, education, food, housing, and financial support.
              </p>
            </div>

            <div className="bg-[#303C69] p-8 rounded-3xl shadow-2xl ">
              <h2 className="text-2xl font-semibold text-[#303C69]  text-white mb-4">Our Dream</h2>
              <p className="text-white text-lg">
                To build a fair, organized, and supportive ecosystem for Indian film industry workers where no artist or technician is left behind. We envision a future where workers have access to charity hospitals.
              </p>
            </div>
          </div>
        </section> 

{/* Section 2.5 - About AICWA Foundation */}
{/* Section 2.5 - About AICWA Foundation */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Text Content */}
    <div>
  <h2 className="text-3xl font-semibold text-[#303C69] mb-4 border-b-4 inline-block">
    About AICWA
  </h2>
  <p className="text-gray-700 text-lg  mb-6">
    AICWA Foundation is committed to supporting the backbone of the film industry—technicians, junior artists, and backstage crew members. 
    Through dedicated initiatives, we ensure their health, dignity, and professional recognition.
  </p>

  {/* Bullet Points */}
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✅</span>
      <p className="text-gray-700">
        <strong>Technician Welfare:</strong> Programs tailored for lightmen, cameramen, and other technical crew to ensure job security and growth.
      </p>
    </div>
    <div className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✅</span>
      <p className="text-gray-700">
        <strong>Junior Artist Support:</strong> Financial aid, work safety advocacy, and recognition for aspiring and working junior artists.
      </p>
    </div>
    <div className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✅</span>
      <p className="text-gray-700">
        <strong>Healthcare for Crew:</strong> Regular checkups, emergency medical assistance, and wellness drives for on-set crew.
      </p>
    </div>
  </div>
</div>


    {/* Right Image */}
    <div className="overflow-hidden  w-full h-full">
      <img
        src="/images/1.JPG"
        alt="AICWA Support"
        className="w-full h-full rounded-[8px] object-cover "
      />
    </div>

  </div>
</section>



      {/* Mission Section */}
      <section className="w-full bg-[#303C69] py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-8">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/images/about-mission.JPG"
              alt="Mission Image"
              width={800}
              height={600}
              className="w-full h-auto rounded shadow-lg object-cover"
            />
          </div>

          {/* Right Side Text Content */}
          <div className="w-full lg:w-1/2 bg-transparent p-6">
            <p className="text-3xl font-semibold text-white mb-4 leading-snug">Mission</p>
            <p className="text-base text-lg text-gray-100 leading-relaxed">
              <Typewriter
                words={[
                  `Behind the glamour of the Indian film industry lies the painful reality of thousands of workers who cannot educate their children, afford medical care for their families, or dream of owning a home. Their work is uncertain, their income unstable, and their future unsecured. Being part of an unorganised sector, they receive no PF, no retirement plan, and no guarantee of employment. Every year, many lose their lives on sets — due to fires, electric shocks, or negligence — and even then, some families are denied basic compensation. In old age, they face the greatest struggle, unable to fulfill even the simplest dreams for their children. AICWA Foundation was established to bring justice, dignity, and lasting support to these unsung heroes of our industry. We exist so that no cine worker ever feels helpless or forgotten again.`
                ]}
                typeSpeed={30}
                cursor
                cursorStyle="|"
                delaySpeed={1000}
                loop={1}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full bg-[#303C69] py-12">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start justify-between px-4 gap-8">
          
          {/* Left Side Text Content */}
          <div className="w-full lg:w-1/2 bg-transparent p-6">
            <p className="text-3xl font-semibold text-white mb-4 leading-snug">Vision</p>
            <p className="text-base text-lg text-gray-100 leading-relaxed">
              <Typewriter
                words={[
                  `To create a just, inclusive, and dignified future for every cine worker in India—where no individual behind the camera is left vulnerable, unrecognized, or unsupported. We envision an industry where every worker, regardless of their role or rank, has access to education for their children, quality healthcare, secure housing, and the assurance of social and financial protection. Through long-term advocacy, welfare initiatives, and systemic reforms, the AICWA Foundation aspires to transform the lives of film workers—ensuring safety on sets, stability in livelihood, and dignity in retirement. Our vision is a film industry where every worker is respected, protected, and empowered.`
                ]}
                typeSpeed={30}
                cursor
                cursorStyle="|"
                delaySpeed={1000}
                loop={1}
              />
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/images/about-vision.jpeg"
              alt="Vision Image"
              width={700}
              height={500}
              className="w-full h-auto rounded shadow-lg object-cover"
            />
          </div>
        </div>
      </section>




        {/* Section 3 - Latest News */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto space-y-16">
    <h2 className="text-3xl font-semibold text-[#303C69]  text-center  mb-12">When the Media Speaks the Truth – Voices for the Voiceless Workers of Indian Cinema</h2>

    {/* News 1 - Image Left */}
<div className="grid md:grid-cols-2 gap-10 items-start">
  <div className="w-full h-[650px] rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/images/news-1.JPG"
      alt="News 1"
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <h3 className="text-2xl font-semibold text-[#303C69] mb-4">A City’s Voice Echoes Ahead of Elections</h3>
    <p className="text-gray-700 text-lg">
    When it comes to the rights of workers behind the camera, AICWA Foundation, under the leadership of Suresh Shyamlal Gupta, speaks with courage and clarity.

In June 2024, Sunday Mid-Day spotlighted his powerful stand for film industry workers — raising issues like delayed payments, exploitation, lack of insurance, and safety for women on film sets.

“Every worker deserves timely payment, dignity, and protection.” – Suresh Shyamlal Gupta

This recognition is a reflection of AICWA Foundation’s ongoing mission — to make the film industry fair, safe, and truly organised for all.
      </p>
  </div>
</div>


    {/* News 2 - Image Right */}
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/images/news2.png" // Or use news-2.png if preferred
    alt="News"
    className="w-full h-full object-cover"
  />
</div>


    {/* News 3 - Image Left 
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/4.jpeg"
          alt="News 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#303C69] mb-4">Free Health Camp for Film Workers</h3>
        <p className="text-gray-700 text-lg">
          AICWA announced an emergency relief fund to support struggling workers during crisis situations. The fund will ensure no technician or artist faces medical or financial challenges alone.
        </p>
      </div>
    </div>*/}
  </div>
</section>


{/* Section - Full-width Image with Overlay and Centered Text */}
<section className="relative w-full h-[500px]">
  <img
    src="/images/suresh-story.jpeg" // 🔁 Replace with your actual image path
    alt="Overlay Banner"
    className="w-full h-full object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <p className="text-white text-xl  md:text-2xl font-semibold text-center px-4 max-w-2xl leading-relaxed">
    “Main awaaz shohrat ke liye nahi uthata — system ko hilaane ke liye uthata hoon,

jab tak har mazdoor tak insaaf na pahunch jaye.”
– Suresh Shyamlal Gupta
    </p>
  </div>
</section>



{/* Section 4 - Our Action */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-[#303C69] mb-12">Our Action</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/health-home.jpg"
          alt="Health Support"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Health for Film Workers
          </h3>
          <p className="text-gray-600 text-lg text-base">
            We organize regular health camps, medical assistance, and provide access to emergency care for artists and crew across the film industry.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/action-1.jpg"
          alt="Education Support"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Education for Artist Families
          </h3>
          <p className="text-gray-600 text-lg">
            From scholarships to skill development, we support the children and spouses of film workers in building brighter futures through learning.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <img
          src="/images/volunteer.JPG"
          alt="Technician Support"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#303C69] mb-3 group-hover:text-yellow-600 transition">
            Support for Technicians
          </h3>
          <p className="text-gray-600 text-lg">
            We ensure financial, legal, and welfare aid reaches backstage heroes—spot boys, camera crews, makeup artists, and sound engineers.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left - Content */}
          <div>
            <h2 className="text-2xl font-medium text-[#303C69] mb-4">Strengthening the Backbone of Indian Cinema</h2>
            <p className="text-gray-700 text-lg">
              The AICWA Foundation is the humanitarian arm of the All Indian Cine Workers Association (AICWA) — dedicated to supporting the lakhs of unsung heroes who make the Indian film industry possible: its workers, technicians, and backstage artists.
            </p>
                        <p className="text-gray-700 text-lg">
              In a landmark moment for Indian cinema, AICWA President Suresh Shyamlal Gupta led a powerful movement in 2019 by meeting the Honourable Leader of Opposition, Shri Radhakrishna Vikhe Patil Ji, to highlight the ongoing challenges faced by cine workers. This resulted in an official high-level meeting on 30th January 2019 at Sahyadri Guest House, Mumbai, chaired by Labour Minister Shri Sambhaji Patil Nilangekar Ji and attended by senior government officials and film industry representatives.
              </p>
          </div>
          {/* Right - Image */}
          <div>
            <img src="/images/blog1.JPG" alt="Row 1" className="w-full rounded-lg shadow" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left - Image */}
          <div>
            <img src="/images/blog2.jpg" alt="Row 2" className="w-full rounded-lg shadow" />
          </div>
          {/* Right - Content */}
          <div>
            <h2 className="text-2xl text-[#303C69] font-medium mb-4"> Standing for Justice: AICWA’s Leadership Initiative</h2>
            <p className="text-gray-700 text-lg">
              In a decisive step towards safeguarding the dignity and rights of the film industry’s backbone — its workers — the President of the All Indian Cine Workers Association (AICWA), Mr. Suresh Shyamlal Gupta, formally sought a meeting with the Honourable Speaker of the Maharashtra Legislative Assembly, Shri Nana Patole Ji.
            </p>
                        <p className="text-gray-700 text-lg">
              Thousands of workers, including technicians, daily wage artists, set laborers, and backstage crew across the Indian film industry continue to face challenges such as non-payment of wages, unsafe working conditions, lack of social security, and absence of legal protection. Despite being the silent force behind the glamour of cinema, their voices often go unheard.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left - Content */}
          <div>
            <h2 className="text-2xl text-[#303C69] font-medium mb-4"> Government Responds to AICWA’s Call: A Breakthrough for Film Industry Workers</h2>
            <p className="text-gray-700 text-lg">
              In a bold and action-oriented move, the President of the All Indian Cine Workers Association (AICWA), Mr. Suresh Shyamlal Gupta, met with the Honourable Labour Minister of Maharashtra, Shri Hasan Mushrif Ji, to raise urgent concerns about the exploitation and hardships faced by thousands of workers in the Indian film industry.
            </p>
                        <p className="text-gray-700 text-lg">
              Responding with rare immediacy and seriousness, Honourable Minister Hasan Mushrif Ji convened an emergency meeting at Mantralaya with concerned officials and stakeholders. In that very session, he personally listened to the problems raised by AICWA and directed actionable solutions, showing a clear commitment to safeguarding the dignity and rights of film industry workers.
            </p>
          </div>
          {/* Right - Image */}
          <div>
            <img src="/images/blog3.JPG" alt="Row 3" className="w-full rounded-lg shadow" />
          </div>
        </div>

      </div>
    </section>

<section className="bg-white py-20">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-[#303C69]  mb-4">Team AICWA – The People Behind the Vision</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="rounded-full overflow-hidden w-[220px] h-[220px] border-4 border-gray-100 shadow-lg bg-gray-200">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="font-medium text-lg">{member.name}</h3>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
