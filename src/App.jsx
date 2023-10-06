import { useRef } from "react";
import profilePic from "./assets/images/profile.webp";
import { useEffect } from "react";
import { useState } from "react";

const sidebarLinks = ["about", "skills", "projects", "contact"];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = useRef([]);

  useEffect(() => {
    // Callback
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };

    // Observer
    const observer = new IntersectionObserver(intersectionHandler, {});
    sectionRefs.current.forEach((section) => observer.observe(section));

    // Clean up
    // return observer.disconnect();
  }, []);

  // Handler Functions
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <div className="fixed left-5 top-5 w-12 h-12 rounded-full bg-black/30 z-10 grid place-content-center">
        <button
          className="w-5 h-5 flex items-center"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "hidden" : "block"}`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "block" : "hidden"}`}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <header
        className={`${
          isSidebarOpen ? "w-72" : "w-0"
        } fixed left-0 top-0 lg:w-72 h-screen bg-sidebar/80 grid place-content-center text-center overflow-hidden transition-all duration-1000`}
      >
        <a
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <img
            src={profilePic}
            alt="Profile Picture"
            title="Profile Picture"
            className="w-40 h-40 rounded-full border-6 border-white/60 shadow mb-8"
          />
        </a>

        <nav>
          <ul>
            {sidebarLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  activeSection === link ? "text-white" : "text-white/50"
                } hover:text-white mb-4 text-lg font-semibold uppercase`}
              >
                <a href={`#${link}`} onClick={(e) => scrollToSection(e, link)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content  */}
      <main
        className={`${
          isSidebarOpen ? "ml-72" : "ml-0"
        } lg:ml-72 h-screen bg-gray-100 transition-all duration-1000`}
      >
        <section id="about" ref={(el) => sectionRefs.current.push(el)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          amet magni veritatis repellat suscipit. Similique ad nam, quisquam sit
          reiciendis possimus officiis, sunt adipisci dicta quae quas placeat
          eius tenetur beatae. Cumque accusantium iste deserunt quaerat placeat,
          eveniet consectetur quae enim incidunt? Earum vitae reprehenderit
          perferendis, odit nesciunt quam cupiditate placeat error pariatur
          suscipit dolores alias dolorem deserunt voluptas sed ut quas incidunt
          dignissimos, est cum, consectetur iste doloremque in! Quisquam autem
          saepe voluptatibus odit, optio sed voluptates nulla quod blanditiis
          impedit explicabo, ipsum dolores ut. Illo error modi quasi? Quos quia
          accusamus tempore id expedita. Eveniet nisi, excepturi quo dolor ipsam
          voluptas. Dolorem, quidem sed ullam ad quisquam minima unde nobis
          voluptatem! Magnam quasi ratione iusto! Quos saepe aliquam quaerat?
          Necessitatibus beatae fuga corporis cupiditate ad facilis dolor
          mollitia consectetur rerum omnis. Sapiente dicta officiis debitis modi
          dignissimos quibusdam temporibus, blanditiis, libero neque dolor
          aliquid eligendi assumenda id qui nemo deserunt a labore voluptatibus.
          Id eaque fugit iste? Voluptatum porro, cupiditate ipsum veniam nulla
          minus minima est aliquid optio, perferendis officia animi dicta
          explicabo error assumenda corporis consectetur nobis eius odio,
          asperiores ducimus maiores? Ratione ducimus nihil dolorem temporibus
          sequi officia doloribus ex ea beatae corrupti exercitationem mollitia
          enim similique nam nemo quia corporis aliquam, minus vero fugiat,
          suscipit blanditiis inventore? Nam nisi dolorum praesentium temporibus
          omnis non autem voluptas quod! Quo architecto ipsa aspernatur nulla,
          magni at, vel molestiae ea vero error in quidem ducimus, porro hic
          debitis saepe temporibus maiores laboriosam perferendis minima
          deserunt non quos? Consectetur unde aliquam reiciendis sunt nulla
          incidunt qui accusantium, cupiditate rem officia quam magni molestias
          perspiciatis voluptates debitis. Non, cumque laboriosam. Sint quisquam
          illum natus minus dolorem magnam nisi autem quis, fugit quibusdam?
          Voluptatem magnam perspiciatis aut eligendi ex architecto quia.
          Tempore ea corporis quidem tenetur est possimus quis earum aliquam
          repellat assumenda! Sed accusamus nostrum facere architecto quidem
          dolores, excepturi soluta? Laudantium ducimus dolorem, iure odit hic
          reprehenderit tempore earum atque. Error minima similique culpa, velit
          eius eveniet impedit dolores provident dolorum incidunt officiis minus
          et quia officia perspiciatis! Ex veritatis iusto adipisci distinctio
          soluta pariatur illum amet dolorum et, deserunt sunt officia, iste
          porro! Delectus voluptas doloremque soluta ut beatae quis odio omnis
          suscipit officiis, magnam nam ad dolor nihil molestiae culpa impedit
          architecto eaque maxime praesentium fugiat consequuntur veritatis
          sapiente quae facere. Molestias, rerum reprehenderit. Quos
          consequuntur asperiores ex magnam, omnis nisi cumque. Qui consequuntur
          magnam quas aliquid exercitationem doloribus illo. Rerum voluptatibus
          enim libero, in esse quidem culpa inventore modi autem labore
          recusandae, amet molestias veniam blanditiis officiis unde
          exercitationem ipsam voluptatum aliquid harum perspiciatis placeat
          fugiat cumque adipisci! Corporis eos qui illum culpa. Veniam quas
          adipisci dolorem error pariatur porro iure earum aliquam asperiores
          recusandae delectus autem, minima neque doloremque fugit voluptatem
          voluptate quaerat reprehenderit minus, aut quo accusantium odio
          molestias iusto? Alias earum repellat nam libero amet delectus modi,
          nobis fugiat cum! Perspiciatis ducimus eius facere laudantium maiores
          adipisci quod rem cumque? Nemo sequi nisi maxime et? Eveniet maxime
          dolor assumenda incidunt, dolorum enim sint itaque ea expedita
          recusandae numquam porro quasi id voluptates corrupti pariatur natus
          rerum architecto deserunt sed nesciunt sunt consectetur odio. Sequi
          commodi officiis ipsum est voluptatum illo unde a corporis asperiores
          dolore mollitia, possimus sapiente accusantium aperiam exercitationem
          totam voluptatibus rerum? Commodi beatae ratione non voluptatem ullam
          minima aliquid molestiae blanditiis, cumque veniam unde totam
          consequuntur quia mollitia saepe reiciendis magni modi? Tempora,
          quidem itaque quam autem enim laudantium. Deleniti repellendus
          excepturi perferendis maiores dolore, dignissimos, earum minima eum
          aut natus debitis in autem est harum recusandae vero, ea atque?
          Maiores, aperiam cupiditate. Tempora, voluptatum provident, illum,
          dicta neque deserunt vel esse accusamus placeat natus itaque magnam
          dolorum. Iusto voluptate fugiat sed provident consectetur nesciunt,
          dolore suscipit aspernatur quasi dolor, sunt officia quisquam eum fuga
          modi officiis nostrum! Sequi labore quia iure incidunt quod veniam
          tempora odio repellendus, quos ut optio officiis iste eius itaque,
          sapiente explicabo vero amet, fuga quo eligendi reiciendis molestias.
          Adipisci fugiat fugit ex incidunt rem nesciunt ipsam sapiente saepe
          dolorum, tenetur, hic qui cumque expedita voluptatibus molestiae
          reprehenderit. Veritatis eos dolor dignissimos, totam architecto quas,
          perferendis et nisi nemo, ea saepe harum facilis aspernatur fugit illo
          eligendi. Fugiat et maiores molestiae at deserunt explicabo nobis
          tempore consectetur in quae ea dolore, laudantium ipsam modi facilis
          eum culpa. Consectetur alias laudantium officia dignissimos suscipit
          ipsam est similique ad explicabo optio. A cumque suscipit hic corporis
          dignissimos optio, dolorem cum omnis nobis debitis quidem est ex ipsa
          explicabo dolores vero quis alias voluptas! Aut explicabo rem iste
          nisi rerum? Asperiores temporibus sint rem excepturi repellat
          architecto, doloremque at incidunt! Optio architecto omnis aut
          accusantium? Voluptatum, ab ullam necessitatibus dolorum rem
          consequatur, consequuntur doloribus amet beatae possimus, qui
          aspernatur doloremque architecto quia facere odit laborum omnis
          voluptatibus sunt magnam repellat eum sed nisi fugiat? Aliquid quam
          accusantium officiis tempora placeat illo, labore dignissimos nam vero
          quidem saepe quas, pariatur autem dolorem numquam quaerat unde dicta
          voluptate, consequatur recusandae dolorum! Sunt doloremque tempora,
          animi dolorem quas aspernatur obcaecati dolores repellat consectetur
          eos laborum aliquid fugiat veniam earum! Ut, esse debitis nihil
          corporis corrupti possimus consectetur commodi atque earum quae
          obcaecati, dolor amet, similique quo quaerat placeat consequatur quam
          aperiam eius quis consequuntur! Minima dolores eius quidem eos ab, a
          incidunt veritatis, dolore sint ullam obcaecati. Iure sed ipsam
          magnam, rerum vitae nam a aspernatur ipsum itaque ea quidem,
          voluptatem quos reiciendis, placeat voluptatibus praesentium
          repellendus id maiores. Est perspiciatis amet itaque, quam, accusamus
          ex nostrum enim recusandae cumque accusantium sit? Molestiae illum
          explicabo repellat atque sed officiis, fugiat, vel ab impedit quos
          aliquam architecto dolore ipsa! Facere illum ea incidunt ducimus nemo
          perspiciatis assumenda itaque illo omnis quis? Nobis dicta nam
          suscipit earum, consequatur, officiis molestias tempore nihil minus
          error veritatis similique blanditiis, laborum tempora rem sequi eaque.
          Sed, ullam. Illo eos distinctio ipsa, obcaecati cupiditate inventore
          vel itaque debitis ratione qui ipsam recusandae eveniet, rem fugit
          repellendus modi aperiam non veniam nihil voluptatem quam perferendis.
          Libero voluptate sint minima quibusdam, voluptates similique quasi aut
          perferendis earum fugiat temporibus!
        </section>

        <section id="skills" ref={(el) => sectionRefs.current.push(el)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          amet magni veritatis repellat suscipit. Similique ad nam, quisquam sit
          reiciendis possimus officiis, sunt adipisci dicta quae quas placeat
          eius tenetur beatae. Cumque accusantium iste deserunt quaerat placeat,
          eveniet consectetur quae enim incidunt? Earum vitae reprehenderit
          perferendis, odit nesciunt quam cupiditate placeat error pariatur
          suscipit dolores alias dolorem deserunt voluptas sed ut quas incidunt
          dignissimos, est cum, consectetur iste doloremque in! Quisquam autem
          saepe voluptatibus odit, optio sed voluptates nulla quod blanditiis
          impedit explicabo, ipsum dolores ut. Illo error modi quasi? Quos quia
          accusamus tempore id expedita. Eveniet nisi, excepturi quo dolor ipsam
          voluptas. Dolorem, quidem sed ullam ad quisquam minima unde nobis
          voluptatem! Magnam quasi ratione iusto! Quos saepe aliquam quaerat?
          Necessitatibus beatae fuga corporis cupiditate ad facilis dolor
          mollitia consectetur rerum omnis. Sapiente dicta officiis debitis modi
          dignissimos quibusdam temporibus, blanditiis, libero neque dolor
          aliquid eligendi assumenda id qui nemo deserunt a labore voluptatibus.
          Id eaque fugit iste? Voluptatum porro, cupiditate ipsum veniam nulla
          minus minima est aliquid optio, perferendis officia animi dicta
          explicabo error assumenda corporis consectetur nobis eius odio,
          asperiores ducimus maiores? Ratione ducimus nihil dolorem temporibus
          sequi officia doloribus ex ea beatae corrupti exercitationem mollitia
          enim similique nam nemo quia corporis aliquam, minus vero fugiat,
          suscipit blanditiis inventore? Nam nisi dolorum praesentium temporibus
          omnis non autem voluptas quod! Quo architecto ipsa aspernatur nulla,
          magni at, vel molestiae ea vero error in quidem ducimus, porro hic
          debitis saepe temporibus maiores laboriosam perferendis minima
          deserunt non quos? Consectetur unde aliquam reiciendis sunt nulla
          incidunt qui accusantium, cupiditate rem officia quam magni molestias
          perspiciatis voluptates debitis. Non, cumque laboriosam. Sint quisquam
          illum natus minus dolorem magnam nisi autem quis, fugit quibusdam?
          Voluptatem magnam perspiciatis aut eligendi ex architecto quia.
          Tempore ea corporis quidem tenetur est possimus quis earum aliquam
          repellat assumenda! Sed accusamus nostrum facere architecto quidem
          dolores, excepturi soluta? Laudantium ducimus dolorem, iure odit hic
          reprehenderit tempore earum atque. Error minima similique culpa, velit
          eius eveniet impedit dolores provident dolorum incidunt officiis minus
          et quia officia perspiciatis! Ex veritatis iusto adipisci distinctio
          soluta pariatur illum amet dolorum et, deserunt sunt officia, iste
          porro! Delectus voluptas doloremque soluta ut beatae quis odio omnis
          suscipit officiis, magnam nam ad dolor nihil molestiae culpa impedit
          architecto eaque maxime praesentium fugiat consequuntur veritatis
          sapiente quae facere. Molestias, rerum reprehenderit. Quos
          consequuntur asperiores ex magnam, omnis nisi cumque. Qui consequuntur
          magnam quas aliquid exercitationem doloribus illo. Rerum voluptatibus
          enim libero, in esse quidem culpa inventore modi autem labore
          recusandae, amet molestias veniam blanditiis officiis unde
          exercitationem ipsam voluptatum aliquid harum perspiciatis placeat
          fugiat cumque adipisci! Corporis eos qui illum culpa. Veniam quas
          adipisci dolorem error pariatur porro iure earum aliquam asperiores
          recusandae delectus autem, minima neque doloremque fugit voluptatem
          voluptate quaerat reprehenderit minus, aut quo accusantium odio
          molestias iusto? Alias earum repellat nam libero amet delectus modi,
          nobis fugiat cum! Perspiciatis ducimus eius facere laudantium maiores
          adipisci quod rem cumque? Nemo sequi nisi maxime et? Eveniet maxime
          dolor assumenda incidunt, dolorum enim sint itaque ea expedita
          recusandae numquam porro quasi id voluptates corrupti pariatur natus
          rerum architecto deserunt sed nesciunt sunt consectetur odio. Sequi
          commodi officiis ipsum est voluptatum illo unde a corporis asperiores
          dolore mollitia, possimus sapiente accusantium aperiam exercitationem
          totam voluptatibus rerum? Commodi beatae ratione non voluptatem ullam
          minima aliquid molestiae blanditiis, cumque veniam unde totam
          consequuntur quia mollitia saepe reiciendis magni modi? Tempora,
          quidem itaque quam autem enim laudantium. Deleniti repellendus
          excepturi perferendis maiores dolore, dignissimos, earum minima eum
          aut natus debitis in autem est harum recusandae vero, ea atque?
          Maiores, aperiam cupiditate. Tempora, voluptatum provident, illum,
          dicta neque deserunt vel esse accusamus placeat natus itaque magnam
          dolorum. Iusto voluptate fugiat sed provident consectetur nesciunt,
          dolore suscipit aspernatur quasi dolor, sunt officia quisquam eum fuga
          modi officiis nostrum! Sequi labore quia iure incidunt quod veniam
          tempora odio repellendus, quos ut optio officiis iste eius itaque,
          sapiente explicabo vero amet, fuga quo eligendi reiciendis molestias.
          Adipisci fugiat fugit ex incidunt rem nesciunt ipsam sapiente saepe
          dolorum, tenetur, hic qui cumque expedita voluptatibus molestiae
          reprehenderit. Veritatis eos dolor dignissimos, totam architecto quas,
          perferendis et nisi nemo, ea saepe harum facilis aspernatur fugit illo
          eligendi. Fugiat et maiores molestiae at deserunt explicabo nobis
          tempore consectetur in quae ea dolore, laudantium ipsam modi facilis
          eum culpa. Consectetur alias laudantium officia dignissimos suscipit
          ipsam est similique ad explicabo optio. A cumque suscipit hic corporis
          dignissimos optio, dolorem cum omnis nobis debitis quidem est ex ipsa
          explicabo dolores vero quis alias voluptas! Aut explicabo rem iste
          nisi rerum? Asperiores temporibus sint rem excepturi repellat
          architecto, doloremque at incidunt! Optio architecto omnis aut
          accusantium? Voluptatum, ab ullam necessitatibus dolorum rem
          consequatur, consequuntur doloribus amet beatae possimus, qui
          aspernatur doloremque architecto quia facere odit laborum omnis
          voluptatibus sunt magnam repellat eum sed nisi fugiat? Aliquid quam
          accusantium officiis tempora placeat illo, labore dignissimos nam vero
          quidem saepe quas, pariatur autem dolorem numquam quaerat unde dicta
          voluptate, consequatur recusandae dolorum! Sunt doloremque tempora,
          animi dolorem quas aspernatur obcaecati dolores repellat consectetur
          eos laborum aliquid fugiat veniam earum! Ut, esse debitis nihil
          corporis corrupti possimus consectetur commodi atque earum quae
          obcaecati, dolor amet, similique quo quaerat placeat consequatur quam
          aperiam eius quis consequuntur! Minima dolores eius quidem eos ab, a
          incidunt veritatis, dolore sint ullam obcaecati. Iure sed ipsam
          magnam, rerum vitae nam a aspernatur ipsum itaque ea quidem,
          voluptatem quos reiciendis, placeat voluptatibus praesentium
          repellendus id maiores. Est perspiciatis amet itaque, quam, accusamus
          ex nostrum enim recusandae cumque accusantium sit? Molestiae illum
          explicabo repellat atque sed officiis, fugiat, vel ab impedit quos
          aliquam architecto dolore ipsa! Facere illum ea incidunt ducimus nemo
          perspiciatis assumenda itaque illo omnis quis? Nobis dicta nam
          suscipit earum, consequatur, officiis molestias tempore nihil minus
          error veritatis similique blanditiis, laborum tempora rem sequi eaque.
          Sed, ullam. Illo eos distinctio ipsa, obcaecati cupiditate inventore
          vel itaque debitis ratione qui ipsam recusandae eveniet, rem fugit
          repellendus modi aperiam non veniam nihil voluptatem quam perferendis.
          Libero voluptate sint minima quibusdam, voluptates similique quasi aut
          perferendis earum fugiat temporibus!
        </section>

        <section id="projects" ref={(el) => sectionRefs.current.push(el)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          amet magni veritatis repellat suscipit. Similique ad nam, quisquam sit
          reiciendis possimus officiis, sunt adipisci dicta quae quas placeat
          eius tenetur beatae. Cumque accusantium iste deserunt quaerat placeat,
          eveniet consectetur quae enim incidunt? Earum vitae reprehenderit
          perferendis, odit nesciunt quam cupiditate placeat error pariatur
          suscipit dolores alias dolorem deserunt voluptas sed ut quas incidunt
          dignissimos, est cum, consectetur iste doloremque in! Quisquam autem
          saepe voluptatibus odit, optio sed voluptates nulla quod blanditiis
          impedit explicabo, ipsum dolores ut. Illo error modi quasi? Quos quia
          accusamus tempore id expedita. Eveniet nisi, excepturi quo dolor ipsam
          voluptas. Dolorem, quidem sed ullam ad quisquam minima unde nobis
          voluptatem! Magnam quasi ratione iusto! Quos saepe aliquam quaerat?
          Necessitatibus beatae fuga corporis cupiditate ad facilis dolor
          mollitia consectetur rerum omnis. Sapiente dicta officiis debitis modi
          dignissimos quibusdam temporibus, blanditiis, libero neque dolor
          aliquid eligendi assumenda id qui nemo deserunt a labore voluptatibus.
          Id eaque fugit iste? Voluptatum porro, cupiditate ipsum veniam nulla
          minus minima est aliquid optio, perferendis officia animi dicta
          explicabo error assumenda corporis consectetur nobis eius odio,
          asperiores ducimus maiores? Ratione ducimus nihil dolorem temporibus
          sequi officia doloribus ex ea beatae corrupti exercitationem mollitia
          enim similique nam nemo quia corporis aliquam, minus vero fugiat,
          suscipit blanditiis inventore? Nam nisi dolorum praesentium temporibus
          omnis non autem voluptas quod! Quo architecto ipsa aspernatur nulla,
          magni at, vel molestiae ea vero error in quidem ducimus, porro hic
          debitis saepe temporibus maiores laboriosam perferendis minima
          deserunt non quos? Consectetur unde aliquam reiciendis sunt nulla
          incidunt qui accusantium, cupiditate rem officia quam magni molestias
          perspiciatis voluptates debitis. Non, cumque laboriosam. Sint quisquam
          illum natus minus dolorem magnam nisi autem quis, fugit quibusdam?
          Voluptatem magnam perspiciatis aut eligendi ex architecto quia.
          Tempore ea corporis quidem tenetur est possimus quis earum aliquam
          repellat assumenda! Sed accusamus nostrum facere architecto quidem
          dolores, excepturi soluta? Laudantium ducimus dolorem, iure odit hic
          reprehenderit tempore earum atque. Error minima similique culpa, velit
          eius eveniet impedit dolores provident dolorum incidunt officiis minus
          et quia officia perspiciatis! Ex veritatis iusto adipisci distinctio
          soluta pariatur illum amet dolorum et, deserunt sunt officia, iste
          porro! Delectus voluptas doloremque soluta ut beatae quis odio omnis
          suscipit officiis, magnam nam ad dolor nihil molestiae culpa impedit
          architecto eaque maxime praesentium fugiat consequuntur veritatis
          sapiente quae facere. Molestias, rerum reprehenderit. Quos
          consequuntur asperiores ex magnam, omnis nisi cumque. Qui consequuntur
          magnam quas aliquid exercitationem doloribus illo. Rerum voluptatibus
          enim libero, in esse quidem culpa inventore modi autem labore
          recusandae, amet molestias veniam blanditiis officiis unde
          exercitationem ipsam voluptatum aliquid harum perspiciatis placeat
          fugiat cumque adipisci! Corporis eos qui illum culpa. Veniam quas
          adipisci dolorem error pariatur porro iure earum aliquam asperiores
          recusandae delectus autem, minima neque doloremque fugit voluptatem
          voluptate quaerat reprehenderit minus, aut quo accusantium odio
          molestias iusto? Alias earum repellat nam libero amet delectus modi,
          nobis fugiat cum! Perspiciatis ducimus eius facere laudantium maiores
          adipisci quod rem cumque? Nemo sequi nisi maxime et? Eveniet maxime
          dolor assumenda incidunt, dolorum enim sint itaque ea expedita
          recusandae numquam porro quasi id voluptates corrupti pariatur natus
          rerum architecto deserunt sed nesciunt sunt consectetur odio. Sequi
          commodi officiis ipsum est voluptatum illo unde a corporis asperiores
          dolore mollitia, possimus sapiente accusantium aperiam exercitationem
          totam voluptatibus rerum? Commodi beatae ratione non voluptatem ullam
          minima aliquid molestiae blanditiis, cumque veniam unde totam
          consequuntur quia mollitia saepe reiciendis magni modi? Tempora,
          quidem itaque quam autem enim laudantium. Deleniti repellendus
          excepturi perferendis maiores dolore, dignissimos, earum minima eum
          aut natus debitis in autem est harum recusandae vero, ea atque?
          Maiores, aperiam cupiditate. Tempora, voluptatum provident, illum,
          dicta neque deserunt vel esse accusamus placeat natus itaque magnam
          dolorum. Iusto voluptate fugiat sed provident consectetur nesciunt,
          dolore suscipit aspernatur quasi dolor, sunt officia quisquam eum fuga
          modi officiis nostrum! Sequi labore quia iure incidunt quod veniam
          tempora odio repellendus, quos ut optio officiis iste eius itaque,
          sapiente explicabo vero amet, fuga quo eligendi reiciendis molestias.
          Adipisci fugiat fugit ex incidunt rem nesciunt ipsam sapiente saepe
          dolorum, tenetur, hic qui cumque expedita voluptatibus molestiae
          reprehenderit. Veritatis eos dolor dignissimos, totam architecto quas,
          perferendis et nisi nemo, ea saepe harum facilis aspernatur fugit illo
          eligendi. Fugiat et maiores molestiae at deserunt explicabo nobis
          tempore consectetur in quae ea dolore, laudantium ipsam modi facilis
          eum culpa. Consectetur alias laudantium officia dignissimos suscipit
          ipsam est similique ad explicabo optio. A cumque suscipit hic corporis
          dignissimos optio, dolorem cum omnis nobis debitis quidem est ex ipsa
          explicabo dolores vero quis alias voluptas! Aut explicabo rem iste
          nisi rerum? Asperiores temporibus sint rem excepturi repellat
          architecto, doloremque at incidunt! Optio architecto omnis aut
          accusantium? Voluptatum, ab ullam necessitatibus dolorum rem
          consequatur, consequuntur doloribus amet beatae possimus, qui
          aspernatur doloremque architecto quia facere odit laborum omnis
          voluptatibus sunt magnam repellat eum sed nisi fugiat? Aliquid quam
          accusantium officiis tempora placeat illo, labore dignissimos nam vero
          quidem saepe quas, pariatur autem dolorem numquam quaerat unde dicta
          voluptate, consequatur recusandae dolorum! Sunt doloremque tempora,
          animi dolorem quas aspernatur obcaecati dolores repellat consectetur
          eos laborum aliquid fugiat veniam earum! Ut, esse debitis nihil
          corporis corrupti possimus consectetur commodi atque earum quae
          obcaecati, dolor amet, similique quo quaerat placeat consequatur quam
          aperiam eius quis consequuntur! Minima dolores eius quidem eos ab, a
          incidunt veritatis, dolore sint ullam obcaecati. Iure sed ipsam
          magnam, rerum vitae nam a aspernatur ipsum itaque ea quidem,
          voluptatem quos reiciendis, placeat voluptatibus praesentium
          repellendus id maiores. Est perspiciatis amet itaque, quam, accusamus
          ex nostrum enim recusandae cumque accusantium sit? Molestiae illum
          explicabo repellat atque sed officiis, fugiat, vel ab impedit quos
          aliquam architecto dolore ipsa! Facere illum ea incidunt ducimus nemo
          perspiciatis assumenda itaque illo omnis quis? Nobis dicta nam
          suscipit earum, consequatur, officiis molestias tempore nihil minus
          error veritatis similique blanditiis, laborum tempora rem sequi eaque.
          Sed, ullam. Illo eos distinctio ipsa, obcaecati cupiditate inventore
          vel itaque debitis ratione qui ipsam recusandae eveniet, rem fugit
          repellendus modi aperiam non veniam nihil voluptatem quam perferendis.
          Libero voluptate sint minima quibusdam, voluptates similique quasi aut
          perferendis earum fugiat temporibus!
        </section>

        <section id="contact" ref={(el) => sectionRefs.current.push(el)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          amet magni veritatis repellat suscipit. Similique ad nam, quisquam sit
          reiciendis possimus officiis, sunt adipisci dicta quae quas placeat
          eius tenetur beatae. Cumque accusantium iste deserunt quaerat placeat,
          eveniet consectetur quae enim incidunt? Earum vitae reprehenderit
          perferendis, odit nesciunt quam cupiditate placeat error pariatur
          suscipit dolores alias dolorem deserunt voluptas sed ut quas incidunt
          dignissimos, est cum, consectetur iste doloremque in! Quisquam autem
          saepe voluptatibus odit, optio sed voluptates nulla quod blanditiis
          impedit explicabo, ipsum dolores ut. Illo error modi quasi? Quos quia
          accusamus tempore id expedita. Eveniet nisi, excepturi quo dolor ipsam
          voluptas. Dolorem, quidem sed ullam ad quisquam minima unde nobis
          voluptatem! Magnam quasi ratione iusto! Quos saepe aliquam quaerat?
          Necessitatibus beatae fuga corporis cupiditate ad facilis dolor
          mollitia consectetur rerum omnis. Sapiente dicta officiis debitis modi
          dignissimos quibusdam temporibus, blanditiis, libero neque dolor
          aliquid eligendi assumenda id qui nemo deserunt a labore voluptatibus.
          Id eaque fugit iste? Voluptatum porro, cupiditate ipsum veniam nulla
          minus minima est aliquid optio, perferendis officia animi dicta
          explicabo error assumenda corporis consectetur nobis eius odio,
          asperiores ducimus maiores? Ratione ducimus nihil dolorem temporibus
          sequi officia doloribus ex ea beatae corrupti exercitationem mollitia
          enim similique nam nemo quia corporis aliquam, minus vero fugiat,
          suscipit blanditiis inventore? Nam nisi dolorum praesentium temporibus
          omnis non autem voluptas quod! Quo architecto ipsa aspernatur nulla,
          magni at, vel molestiae ea vero error in quidem ducimus, porro hic
          debitis saepe temporibus maiores laboriosam perferendis minima
          deserunt non quos? Consectetur unde aliquam reiciendis sunt nulla
          incidunt qui accusantium, cupiditate rem officia quam magni molestias
          perspiciatis voluptates debitis. Non, cumque laboriosam. Sint quisquam
          illum natus minus dolorem magnam nisi autem quis, fugit quibusdam?
          Voluptatem magnam perspiciatis aut eligendi ex architecto quia.
          Tempore ea corporis quidem tenetur est possimus quis earum aliquam
          repellat assumenda! Sed accusamus nostrum facere architecto quidem
          dolores, excepturi soluta? Laudantium ducimus dolorem, iure odit hic
          reprehenderit tempore earum atque. Error minima similique culpa, velit
          eius eveniet impedit dolores provident dolorum incidunt officiis minus
          et quia officia perspiciatis! Ex veritatis iusto adipisci distinctio
          soluta pariatur illum amet dolorum et, deserunt sunt officia, iste
          porro! Delectus voluptas doloremque soluta ut beatae quis odio omnis
          suscipit officiis, magnam nam ad dolor nihil molestiae culpa impedit
          architecto eaque maxime praesentium fugiat consequuntur veritatis
          sapiente quae facere. Molestias, rerum reprehenderit. Quos
          consequuntur asperiores ex magnam, omnis nisi cumque. Qui consequuntur
          magnam quas aliquid exercitationem doloribus illo. Rerum voluptatibus
          enim libero, in esse quidem culpa inventore modi autem labore
          recusandae, amet molestias veniam blanditiis officiis unde
          exercitationem ipsam voluptatum aliquid harum perspiciatis placeat
          fugiat cumque adipisci! Corporis eos qui illum culpa. Veniam quas
          adipisci dolorem error pariatur porro iure earum aliquam asperiores
          recusandae delectus autem, minima neque doloremque fugit voluptatem
          voluptate quaerat reprehenderit minus, aut quo accusantium odio
          molestias iusto? Alias earum repellat nam libero amet delectus modi,
          nobis fugiat cum! Perspiciatis ducimus eius facere laudantium maiores
          adipisci quod rem cumque? Nemo sequi nisi maxime et? Eveniet maxime
          dolor assumenda incidunt, dolorum enim sint itaque ea expedita
          recusandae numquam porro quasi id voluptates corrupti pariatur natus
          rerum architecto deserunt sed nesciunt sunt consectetur odio. Sequi
          commodi officiis ipsum est voluptatum illo unde a corporis asperiores
          dolore mollitia, possimus sapiente accusantium aperiam exercitationem
          totam voluptatibus rerum? Commodi beatae ratione non voluptatem ullam
          minima aliquid molestiae blanditiis, cumque veniam unde totam
          consequuntur quia mollitia saepe reiciendis magni modi? Tempora,
          quidem itaque quam autem enim laudantium. Deleniti repellendus
          excepturi perferendis maiores dolore, dignissimos, earum minima eum
          aut natus debitis in autem est harum recusandae vero, ea atque?
          Maiores, aperiam cupiditate. Tempora, voluptatum provident, illum,
          dicta neque deserunt vel esse accusamus placeat natus itaque magnam
          dolorum. Iusto voluptate fugiat sed provident consectetur nesciunt,
          dolore suscipit aspernatur quasi dolor, sunt officia quisquam eum fuga
          modi officiis nostrum! Sequi labore quia iure incidunt quod veniam
          tempora odio repellendus, quos ut optio officiis iste eius itaque,
          sapiente explicabo vero amet, fuga quo eligendi reiciendis molestias.
          Adipisci fugiat fugit ex incidunt rem nesciunt ipsam sapiente saepe
          dolorum, tenetur, hic qui cumque expedita voluptatibus molestiae
          reprehenderit. Veritatis eos dolor dignissimos, totam architecto quas,
          perferendis et nisi nemo, ea saepe harum facilis aspernatur fugit illo
          eligendi. Fugiat et maiores molestiae at deserunt explicabo nobis
          tempore consectetur in quae ea dolore, laudantium ipsam modi facilis
          eum culpa. Consectetur alias laudantium officia dignissimos suscipit
          ipsam est similique ad explicabo optio. A cumque suscipit hic corporis
          dignissimos optio, dolorem cum omnis nobis debitis quidem est ex ipsa
          explicabo dolores vero quis alias voluptas! Aut explicabo rem iste
          nisi rerum? Asperiores temporibus sint rem excepturi repellat
          architecto, doloremque at incidunt! Optio architecto omnis aut
          accusantium? Voluptatum, ab ullam necessitatibus dolorum rem
          consequatur, consequuntur doloribus amet beatae possimus, qui
          aspernatur doloremque architecto quia facere odit laborum omnis
          voluptatibus sunt magnam repellat eum sed nisi fugiat? Aliquid quam
          accusantium officiis tempora placeat illo, labore dignissimos nam vero
          quidem saepe quas, pariatur autem dolorem numquam quaerat unde dicta
          voluptate, consequatur recusandae dolorum! Sunt doloremque tempora,
          animi dolorem quas aspernatur obcaecati dolores repellat consectetur
          eos laborum aliquid fugiat veniam earum! Ut, esse debitis nihil
          corporis corrupti possimus consectetur commodi atque earum quae
          obcaecati, dolor amet, similique quo quaerat placeat consequatur quam
          aperiam eius quis consequuntur! Minima dolores eius quidem eos ab, a
          incidunt veritatis, dolore sint ullam obcaecati. Iure sed ipsam
          magnam, rerum vitae nam a aspernatur ipsum itaque ea quidem,
          voluptatem quos reiciendis, placeat voluptatibus praesentium
          repellendus id maiores. Est perspiciatis amet itaque, quam, accusamus
          ex nostrum enim recusandae cumque accusantium sit? Molestiae illum
          explicabo repellat atque sed officiis, fugiat, vel ab impedit quos
          aliquam architecto dolore ipsa! Facere illum ea incidunt ducimus nemo
          perspiciatis assumenda itaque illo omnis quis? Nobis dicta nam
          suscipit earum, consequatur, officiis molestias tempore nihil minus
          error veritatis similique blanditiis, laborum tempora rem sequi eaque.
          Sed, ullam. Illo eos distinctio ipsa, obcaecati cupiditate inventore
          vel itaque debitis ratione qui ipsam recusandae eveniet, rem fugit
          repellendus modi aperiam non veniam nihil voluptatem quam perferendis.
          Libero voluptate sint minima quibusdam, voluptates similique quasi aut
          perferendis earum fugiat temporibus!
        </section>
      </main>
    </div>
  );
};

export default App;
