import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Front end KYO website',
      tags: ['Front-end'],
      projectLink: 'https://kyo.co.id/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Notes app',
      tags: ['Development'],
      projectLink: 'https://github.com/farrasazhary/note-apps'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Rass Movie',
      tags: ['Development'],
      projectLink: 'https://github.com/farrasazhary/rass-movie'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Restaurant website with PWA',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/farrasazhary/RassRestaurant'
    },
    // {
    //   imgSrc: '/images/project-5.jpg',
    //   title: 'eCommerce website',
    //   tags: ['eCommerce', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    // {
    //   imgSrc: '/images/project-6.jpg',
    //   title: 'vCard Personal portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
  ];

const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portofolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work