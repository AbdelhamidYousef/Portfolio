import { useEffect, useState } from "react";

import profilePic from "./assets/images/profile5.webp";

const sidebarLinks = ["about", "skills", "projects", "contact"];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {}, []);

  return (
    <div
      className={`${
        isSidebarOpen ? "grid-cols-[17rem_1fr]" : "grid-cols-[0_1fr]"
      } grid lg:grid-cols-[17rem_1fr] relative transition-all duration-1000`}
    >
      {/* Sidebar Toggle Button  */}
      <div className="lg:hidden absolute left-6 top-6 w-8 h-8 rounded-full bg-slate-500/70 grid place-content-center focus:border-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-4 focus:outline-none"
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
      <header className="h-screen bg-sidebar grid place-content-center gap-y-5 text-center font-semibold text-gray-100 text-lg overflow-hidden">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-40 h-40 object-cover rounded-full border-8 border-slate-300/30 mb-2"
        />

        {sidebarLinks.map((link, i) => (
          <a key={i} href={`#${link}`} className="uppercase">
            {link}
          </a>
        ))}
      </header>

      {/* Main Sections */}
      <main>
        <section id="home">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          perspiciatis molestias libero delectus, similique rem quos eius ipsum
          cumque ipsa aspernatur? Nemo, vel accusamus? Qui maxime tenetur veniam
          accusantium repellendus error, cum beatae ratione debitis voluptatibus
          facilis illo explicabo velit voluptates quibusdam, numquam eius earum
          eligendi. Necessitatibus voluptatem, repellat quaerat repellendus
          perspiciatis quibusdam rerum iure nisi nihil obcaecati omnis, amet
          nostrum voluptates, autem aliquam molestiae nesciunt fugit cum
          corrupti libero minus dignissimos laboriosam suscipit sed. Quo ex,
          placeat cumque deleniti eius autem eos. Culpa tenetur iusto magni
          molestiae animi architecto incidunt deleniti quaerat fugiat recusandae
          ullam, commodi saepe accusamus molestias modi eius placeat nam quis
          quibusdam quasi ipsam consequatur cupiditate sapiente similique! Non
          excepturi nulla nesciunt amet? Sint quis porro veniam ipsum, neque,
          itaque tempore dolores libero labore quasi unde repudiandae sit magni
          pariatur rem accusantium debitis adipisci, fugit excepturi fuga vitae
          ab dolor? Molestias ipsa, aliquam consequatur, officiis aut amet
          assumenda quos quae error dolorem obcaecati quis suscipit veritatis
          provident perspiciatis quia, aperiam consequuntur a quam? Fuga
          voluptatem vitae saepe a vel, nostrum iusto ipsum corrupti minima.
          Dolores, quos. Totam perferendis repudiandae, neque excepturi,
          praesentium nihil quis sequi sed corporis quos distinctio incidunt
          facere aspernatur numquam beatae nulla quas consequuntur laboriosam
          quo doloremque odio eligendi. Nisi minus qui odio reiciendis maiores
          perspiciatis a vitae cum! Quas nisi non consectetur. Ipsam quod
          aliquid, officia tempore odio facere ex, sint soluta numquam rerum
          saepe? Fugiat et perferendis libero nam repudiandae molestiae qui sed
          numquam perspiciatis explicabo blanditiis quae a nihil unde modi atque
          sit, tempora minima optio officiis aut cupiditate nisi tenetur
          consequuntur. Nulla nam incidunt molestiae laboriosam adipisci
          suscipit impedit omnis delectus id beatae, quae dolor dolorum quaerat
          velit quod, repudiandae natus voluptatibus architecto et, modi saepe
          veniam assumenda. Eaque eius numquam alias quos velit earum nam
          praesentium eveniet commodi modi? Perspiciatis voluptas mollitia
          iusto, enim ipsum delectus ducimus! Iste, animi accusantium, provident
          repellendus ipsa deserunt beatae veniam error voluptates quae mollitia
          recusandae id, atque sed rerum deleniti aut sequi perferendis voluptas
          sit accusamus inventore perspiciatis. Ut molestias velit dicta ullam
          beatae. Eligendi esse aliquam reiciendis, vitae recusandae nesciunt
          cupiditate sunt omnis mollitia. Sequi perferendis autem ea ipsum
          laudantium unde, illo cum incidunt quaerat quasi, voluptas ratione ad
          ab laboriosam suscipit dicta dolore enim animi, nemo quidem harum
          distinctio! Eaque adipisci est provident ipsum repellendus a,
          consequuntur eum impedit iure deserunt quibusdam, illo repellat
          praesentium, labore voluptate nulla rerum eos reprehenderit! Fugit
          vitae expedita aspernatur enim est quidem delectus fugiat architecto
          quaerat iste totam sunt illo earum nulla exercitationem iusto,
          laboriosam doloribus, magnam maiores quibusdam esse at tenetur
          ratione? Obcaecati saepe amet quia eveniet recusandae quod. Dolor
          voluptate sit earum ullam, aliquid accusantium totam iusto recusandae
          fugiat consequuntur. Culpa, praesentium accusamus. Eius cupiditate
          deserunt esse quae voluptas magnam, nemo odio id maiores! Quam nostrum
          non nihil error culpa mollitia iste adipisci et perferendis esse minus
          vero corporis rerum, molestiae deserunt quasi totam fugiat praesentium
          quaerat? Delectus officiis facere porro quod, vero natus fugit impedit
          modi autem iusto quia quis possimus ullam ducimus placeat assumenda
          voluptate omnis eveniet. Eos deserunt nobis maiores voluptatem
          officia, dolor delectus minima natus eaque ipsam fugit quae tenetur
          adipisci optio! Molestiae aut cumque officiis maxime animi, obcaecati
          omnis praesentium ea nemo. Esse, quo. Ab ratione, voluptatum dolore
          incidunt, nam, corrupti mollitia soluta voluptate ipsa hic pariatur!
          Porro totam, soluta nam adipisci, quia explicabo eveniet suscipit
          incidunt odit veniam sint earum, eligendi alias iure neque at tempora
          amet optio veritatis quos! Veniam alias laudantium sit placeat
          veritatis. At numquam animi accusantium magnam quas incidunt, esse
          atque illo reiciendis eos inventore perferendis ducimus veritatis
          optio vero ab. Rerum perferendis doloremque sed? Commodi animi qui
          quia tempore dolor, maiores reprehenderit maxime natus labore
          blanditiis repudiandae provident voluptas. Doloribus libero enim earum
          laborum harum porro qui vitae esse neque? A impedit quos, corporis,
          rem dolorum minima nemo commodi dolore magnam itaque inventore iure
          quibusdam suscipit expedita id porro tenetur laudantium. Aut eius at
          illo, necessitatibus laboriosam iste aliquid nostrum! Rerum qui
          reprehenderit quod dolorem quae, doloremque animi molestiae ducimus
          iure aliquam non, dolores aperiam, cupiditate accusantium dicta
          architecto! Voluptatum eveniet, saepe nostrum nisi placeat quas
          possimus atque officiis fuga sunt, unde voluptatem enim? Optio, ipsam
          accusamus aspernatur dolorum placeat tenetur nesciunt repellat dicta
          totam tempora beatae quaerat adipisci magnam, hic assumenda vero nemo,
          delectus et quod consequatur esse earum veritatis! Iste et fugit a
          deserunt dolor at expedita, tenetur deleniti, ad perspiciatis
          distinctio sapiente ut, tempore quasi! Vitae earum temporibus tenetur
          assumenda vel, qui cum, similique eos mollitia tempora voluptatibus
          rem atque accusamus eaque ipsa illum est molestias consequatur
          eligendi minima, hic fuga sint? Excepturi incidunt quo cum officia
          laboriosam quia accusantium similique asperiores laudantium,
          perferendis explicabo doloremque corrupti impedit in blanditiis beatae
          ex consequatur voluptate ullam sequi veniam molestias. Et dolorum
          repellat beatae doloribus. Doloribus ipsa, tempore aliquam aperiam
          iure, natus inventore accusamus expedita non quasi, vel maxime harum
          reprehenderit animi. Dolor, mollitia quam modi, possimus beatae ipsa
          doloribus, aliquam accusantium culpa enim cumque maxime nisi adipisci
          provident expedita totam et dolores iusto debitis? Dolorem, cupiditate
          fugit recusandae ratione velit nobis animi provident? At repellat
          dignissimos unde suscipit cum aliquid quod earum excepturi ratione
          commodi numquam maxime hic molestias alias corporis, labore adipisci!
          Dolor deserunt dolore dolores quasi modi molestiae, quo sequi dolorum
          optio corrupti minus sit libero unde ipsa voluptatibus. Modi quia
          possimus eveniet omnis ea quasi mollitia assumenda odio sit rerum
          recusandae velit repellendus accusantium laborum explicabo maxime in,
          quisquam qui molestias voluptatem culpa reprehenderit neque amet.
          Nostrum in debitis vitae tempora asperiores qui quo maiores? Dolorem
          corporis dolores vero architecto commodi suscipit consequatur nesciunt
          laudantium corrupti sit debitis voluptatum animi expedita, alias
          ducimus nihil illum! Nobis quibusdam doloribus similique. Itaque non
          aut ratione quae iure beatae sunt possimus maxime architecto autem
          maiores dicta nisi veritatis natus cupiditate, nulla quis tenetur
          rerum asperiores est placeat quas velit sit esse. Consequatur non
          neque, fugiat odio reprehenderit illum quis, asperiores, iure
          voluptates sed hic nobis. Sed vero eveniet dolores repudiandae
          delectus ex ipsa, eum asperiores libero ducimus, ut qui.
        </section>

        <section id="skills">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          perspiciatis molestias libero delectus, similique rem quos eius ipsum
          cumque ipsa aspernatur? Nemo, vel accusamus? Qui maxime tenetur veniam
          accusantium repellendus error, cum beatae ratione debitis voluptatibus
          facilis illo explicabo velit voluptates quibusdam, numquam eius earum
          eligendi. Necessitatibus voluptatem, repellat quaerat repellendus
          perspiciatis quibusdam rerum iure nisi nihil obcaecati omnis, amet
          nostrum voluptates, autem aliquam molestiae nesciunt fugit cum
          corrupti libero minus dignissimos laboriosam suscipit sed. Quo ex,
          placeat cumque deleniti eius autem eos. Culpa tenetur iusto magni
          molestiae animi architecto incidunt deleniti quaerat fugiat recusandae
          ullam, commodi saepe accusamus molestias modi eius placeat nam quis
          quibusdam quasi ipsam consequatur cupiditate sapiente similique! Non
          excepturi nulla nesciunt amet? Sint quis porro veniam ipsum, neque,
          itaque tempore dolores libero labore quasi unde repudiandae sit magni
          pariatur rem accusantium debitis adipisci, fugit excepturi fuga vitae
          ab dolor? Molestias ipsa, aliquam consequatur, officiis aut amet
          assumenda quos quae error dolorem obcaecati quis suscipit veritatis
          provident perspiciatis quia, aperiam consequuntur a quam? Fuga
          voluptatem vitae saepe a vel, nostrum iusto ipsum corrupti minima.
          Dolores, quos. Totam perferendis repudiandae, neque excepturi,
          praesentium nihil quis sequi sed corporis quos distinctio incidunt
          facere aspernatur numquam beatae nulla quas consequuntur laboriosam
          quo doloremque odio eligendi. Nisi minus qui odio reiciendis maiores
          perspiciatis a vitae cum! Quas nisi non consectetur. Ipsam quod
          aliquid, officia tempore odio facere ex, sint soluta numquam rerum
          saepe? Fugiat et perferendis libero nam repudiandae molestiae qui sed
          numquam perspiciatis explicabo blanditiis quae a nihil unde modi atque
          sit, tempora minima optio officiis aut cupiditate nisi tenetur
          consequuntur. Nulla nam incidunt molestiae laboriosam adipisci
          suscipit impedit omnis delectus id beatae, quae dolor dolorum quaerat
          velit quod, repudiandae natus voluptatibus architecto et, modi saepe
          veniam assumenda. Eaque eius numquam alias quos velit earum nam
          praesentium eveniet commodi modi? Perspiciatis voluptas mollitia
          iusto, enim ipsum delectus ducimus! Iste, animi accusantium, provident
          repellendus ipsa deserunt beatae veniam error voluptates quae mollitia
          recusandae id, atque sed rerum deleniti aut sequi perferendis voluptas
          sit accusamus inventore perspiciatis. Ut molestias velit dicta ullam
          beatae. Eligendi esse aliquam reiciendis, vitae recusandae nesciunt
          cupiditate sunt omnis mollitia. Sequi perferendis autem ea ipsum
          laudantium unde, illo cum incidunt quaerat quasi, voluptas ratione ad
          ab laboriosam suscipit dicta dolore enim animi, nemo quidem harum
          distinctio! Eaque adipisci est provident ipsum repellendus a,
          consequuntur eum impedit iure deserunt quibusdam, illo repellat
          praesentium, labore voluptate nulla rerum eos reprehenderit! Fugit
          vitae expedita aspernatur enim est quidem delectus fugiat architecto
          quaerat iste totam sunt illo earum nulla exercitationem iusto,
          laboriosam doloribus, magnam maiores quibusdam esse at tenetur
          ratione? Obcaecati saepe amet quia eveniet recusandae quod. Dolor
          voluptate sit earum ullam, aliquid accusantium totam iusto recusandae
          fugiat consequuntur. Culpa, praesentium accusamus. Eius cupiditate
          deserunt esse quae voluptas magnam, nemo odio id maiores! Quam nostrum
          non nihil error culpa mollitia iste adipisci et perferendis esse minus
          vero corporis rerum, molestiae deserunt quasi totam fugiat praesentium
          quaerat? Delectus officiis facere porro quod, vero natus fugit impedit
          modi autem iusto quia quis possimus ullam ducimus placeat assumenda
          voluptate omnis eveniet. Eos deserunt nobis maiores voluptatem
          officia, dolor delectus minima natus eaque ipsam fugit quae tenetur
          adipisci optio! Molestiae aut cumque officiis maxime animi, obcaecati
          omnis praesentium ea nemo. Esse, quo. Ab ratione, voluptatum dolore
          incidunt, nam, corrupti mollitia soluta voluptate ipsa hic pariatur!
          Porro totam, soluta nam adipisci, quia explicabo eveniet suscipit
          incidunt odit veniam sint earum, eligendi alias iure neque at tempora
          amet optio veritatis quos! Veniam alias laudantium sit placeat
          veritatis. At numquam animi accusantium magnam quas incidunt, esse
          atque illo reiciendis eos inventore perferendis ducimus veritatis
          optio vero ab. Rerum perferendis doloremque sed? Commodi animi qui
          quia tempore dolor, maiores reprehenderit maxime natus labore
          blanditiis repudiandae provident voluptas. Doloribus libero enim earum
          laborum harum porro qui vitae esse neque? A impedit quos, corporis,
          rem dolorum minima nemo commodi dolore magnam itaque inventore iure
          quibusdam suscipit expedita id porro tenetur laudantium. Aut eius at
          illo, necessitatibus laboriosam iste aliquid nostrum! Rerum qui
          reprehenderit quod dolorem quae, doloremque animi molestiae ducimus
          iure aliquam non, dolores aperiam, cupiditate accusantium dicta
          architecto! Voluptatum eveniet, saepe nostrum nisi placeat quas
          possimus atque officiis fuga sunt, unde voluptatem enim? Optio, ipsam
          accusamus aspernatur dolorum placeat tenetur nesciunt repellat dicta
          totam tempora beatae quaerat adipisci magnam, hic assumenda vero nemo,
          delectus et quod consequatur esse earum veritatis! Iste et fugit a
          deserunt dolor at expedita, tenetur deleniti, ad perspiciatis
          distinctio sapiente ut, tempore quasi! Vitae earum temporibus tenetur
          assumenda vel, qui cum, similique eos mollitia tempora voluptatibus
          rem atque accusamus eaque ipsa illum est molestias consequatur
          eligendi minima, hic fuga sint? Excepturi incidunt quo cum officia
          laboriosam quia accusantium similique asperiores laudantium,
          perferendis explicabo doloremque corrupti impedit in blanditiis beatae
          ex consequatur voluptate ullam sequi veniam molestias. Et dolorum
          repellat beatae doloribus. Doloribus ipsa, tempore aliquam aperiam
          iure, natus inventore accusamus expedita non quasi, vel maxime harum
          reprehenderit animi. Dolor, mollitia quam modi, possimus beatae ipsa
          doloribus, aliquam accusantium culpa enim cumque maxime nisi adipisci
          provident expedita totam et dolores iusto debitis? Dolorem, cupiditate
          fugit recusandae ratione velit nobis animi provident? At repellat
          dignissimos unde suscipit cum aliquid quod earum excepturi ratione
          commodi numquam maxime hic molestias alias corporis, labore adipisci!
          Dolor deserunt dolore dolores quasi modi molestiae, quo sequi dolorum
          optio corrupti minus sit libero unde ipsa voluptatibus. Modi quia
          possimus eveniet omnis ea quasi mollitia assumenda odio sit rerum
          recusandae velit repellendus accusantium laborum explicabo maxime in,
          quisquam qui molestias voluptatem culpa reprehenderit neque amet.
          Nostrum in debitis vitae tempora asperiores qui quo maiores? Dolorem
          corporis dolores vero architecto commodi suscipit consequatur nesciunt
          laudantium corrupti sit debitis voluptatum animi expedita, alias
          ducimus nihil illum! Nobis quibusdam doloribus similique. Itaque non
          aut ratione quae iure beatae sunt possimus maxime architecto autem
          maiores dicta nisi veritatis natus cupiditate, nulla quis tenetur
          rerum asperiores est placeat quas velit sit esse. Consequatur non
          neque, fugiat odio reprehenderit illum quis, asperiores, iure
          voluptates sed hic nobis. Sed vero eveniet dolores repudiandae
          delectus ex ipsa, eum asperiores libero ducimus, ut qui.
        </section>

        <section id="projects">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          perspiciatis molestias libero delectus, similique rem quos eius ipsum
          cumque ipsa aspernatur? Nemo, vel accusamus? Qui maxime tenetur veniam
          accusantium repellendus error, cum beatae ratione debitis voluptatibus
          facilis illo explicabo velit voluptates quibusdam, numquam eius earum
          eligendi. Necessitatibus voluptatem, repellat quaerat repellendus
          perspiciatis quibusdam rerum iure nisi nihil obcaecati omnis, amet
          nostrum voluptates, autem aliquam molestiae nesciunt fugit cum
          corrupti libero minus dignissimos laboriosam suscipit sed. Quo ex,
          placeat cumque deleniti eius autem eos. Culpa tenetur iusto magni
          molestiae animi architecto incidunt deleniti quaerat fugiat recusandae
          ullam, commodi saepe accusamus molestias modi eius placeat nam quis
          quibusdam quasi ipsam consequatur cupiditate sapiente similique! Non
          excepturi nulla nesciunt amet? Sint quis porro veniam ipsum, neque,
          itaque tempore dolores libero labore quasi unde repudiandae sit magni
          pariatur rem accusantium debitis adipisci, fugit excepturi fuga vitae
          ab dolor? Molestias ipsa, aliquam consequatur, officiis aut amet
          assumenda quos quae error dolorem obcaecati quis suscipit veritatis
          provident perspiciatis quia, aperiam consequuntur a quam? Fuga
          voluptatem vitae saepe a vel, nostrum iusto ipsum corrupti minima.
          Dolores, quos. Totam perferendis repudiandae, neque excepturi,
          praesentium nihil quis sequi sed corporis quos distinctio incidunt
          facere aspernatur numquam beatae nulla quas consequuntur laboriosam
          quo doloremque odio eligendi. Nisi minus qui odio reiciendis maiores
          perspiciatis a vitae cum! Quas nisi non consectetur. Ipsam quod
          aliquid, officia tempore odio facere ex, sint soluta numquam rerum
          saepe? Fugiat et perferendis libero nam repudiandae molestiae qui sed
          numquam perspiciatis explicabo blanditiis quae a nihil unde modi atque
          sit, tempora minima optio officiis aut cupiditate nisi tenetur
          consequuntur. Nulla nam incidunt molestiae laboriosam adipisci
          suscipit impedit omnis delectus id beatae, quae dolor dolorum quaerat
          velit quod, repudiandae natus voluptatibus architecto et, modi saepe
          veniam assumenda. Eaque eius numquam alias quos velit earum nam
          praesentium eveniet commodi modi? Perspiciatis voluptas mollitia
          iusto, enim ipsum delectus ducimus! Iste, animi accusantium, provident
          repellendus ipsa deserunt beatae veniam error voluptates quae mollitia
          recusandae id, atque sed rerum deleniti aut sequi perferendis voluptas
          sit accusamus inventore perspiciatis. Ut molestias velit dicta ullam
          beatae. Eligendi esse aliquam reiciendis, vitae recusandae nesciunt
          cupiditate sunt omnis mollitia. Sequi perferendis autem ea ipsum
          laudantium unde, illo cum incidunt quaerat quasi, voluptas ratione ad
          ab laboriosam suscipit dicta dolore enim animi, nemo quidem harum
          distinctio! Eaque adipisci est provident ipsum repellendus a,
          consequuntur eum impedit iure deserunt quibusdam, illo repellat
          praesentium, labore voluptate nulla rerum eos reprehenderit! Fugit
          vitae expedita aspernatur enim est quidem delectus fugiat architecto
          quaerat iste totam sunt illo earum nulla exercitationem iusto,
          laboriosam doloribus, magnam maiores quibusdam esse at tenetur
          ratione? Obcaecati saepe amet quia eveniet recusandae quod. Dolor
          voluptate sit earum ullam, aliquid accusantium totam iusto recusandae
          fugiat consequuntur. Culpa, praesentium accusamus. Eius cupiditate
          deserunt esse quae voluptas magnam, nemo odio id maiores! Quam nostrum
          non nihil error culpa mollitia iste adipisci et perferendis esse minus
          vero corporis rerum, molestiae deserunt quasi totam fugiat praesentium
          quaerat? Delectus officiis facere porro quod, vero natus fugit impedit
          modi autem iusto quia quis possimus ullam ducimus placeat assumenda
          voluptate omnis eveniet. Eos deserunt nobis maiores voluptatem
          officia, dolor delectus minima natus eaque ipsam fugit quae tenetur
          adipisci optio! Molestiae aut cumque officiis maxime animi, obcaecati
          omnis praesentium ea nemo. Esse, quo. Ab ratione, voluptatum dolore
          incidunt, nam, corrupti mollitia soluta voluptate ipsa hic pariatur!
          Porro totam, soluta nam adipisci, quia explicabo eveniet suscipit
          incidunt odit veniam sint earum, eligendi alias iure neque at tempora
          amet optio veritatis quos! Veniam alias laudantium sit placeat
          veritatis. At numquam animi accusantium magnam quas incidunt, esse
          atque illo reiciendis eos inventore perferendis ducimus veritatis
          optio vero ab. Rerum perferendis doloremque sed? Commodi animi qui
          quia tempore dolor, maiores reprehenderit maxime natus labore
          blanditiis repudiandae provident voluptas. Doloribus libero enim earum
          laborum harum porro qui vitae esse neque? A impedit quos, corporis,
          rem dolorum minima nemo commodi dolore magnam itaque inventore iure
          quibusdam suscipit expedita id porro tenetur laudantium. Aut eius at
          illo, necessitatibus laboriosam iste aliquid nostrum! Rerum qui
          reprehenderit quod dolorem quae, doloremque animi molestiae ducimus
          iure aliquam non, dolores aperiam, cupiditate accusantium dicta
          architecto! Voluptatum eveniet, saepe nostrum nisi placeat quas
          possimus atque officiis fuga sunt, unde voluptatem enim? Optio, ipsam
          accusamus aspernatur dolorum placeat tenetur nesciunt repellat dicta
          totam tempora beatae quaerat adipisci magnam, hic assumenda vero nemo,
          delectus et quod consequatur esse earum veritatis! Iste et fugit a
          deserunt dolor at expedita, tenetur deleniti, ad perspiciatis
          distinctio sapiente ut, tempore quasi! Vitae earum temporibus tenetur
          assumenda vel, qui cum, similique eos mollitia tempora voluptatibus
          rem atque accusamus eaque ipsa illum est molestias consequatur
          eligendi minima, hic fuga sint? Excepturi incidunt quo cum officia
          laboriosam quia accusantium similique asperiores laudantium,
          perferendis explicabo doloremque corrupti impedit in blanditiis beatae
          ex consequatur voluptate ullam sequi veniam molestias. Et dolorum
          repellat beatae doloribus. Doloribus ipsa, tempore aliquam aperiam
          iure, natus inventore accusamus expedita non quasi, vel maxime harum
          reprehenderit animi. Dolor, mollitia quam modi, possimus beatae ipsa
          doloribus, aliquam accusantium culpa enim cumque maxime nisi adipisci
          provident expedita totam et dolores iusto debitis? Dolorem, cupiditate
          fugit recusandae ratione velit nobis animi provident? At repellat
          dignissimos unde suscipit cum aliquid quod earum excepturi ratione
          commodi numquam maxime hic molestias alias corporis, labore adipisci!
          Dolor deserunt dolore dolores quasi modi molestiae, quo sequi dolorum
          optio corrupti minus sit libero unde ipsa voluptatibus. Modi quia
          possimus eveniet omnis ea quasi mollitia assumenda odio sit rerum
          recusandae velit repellendus accusantium laborum explicabo maxime in,
          quisquam qui molestias voluptatem culpa reprehenderit neque amet.
          Nostrum in debitis vitae tempora asperiores qui quo maiores? Dolorem
          corporis dolores vero architecto commodi suscipit consequatur nesciunt
          laudantium corrupti sit debitis voluptatum animi expedita, alias
          ducimus nihil illum! Nobis quibusdam doloribus similique. Itaque non
          aut ratione quae iure beatae sunt possimus maxime architecto autem
          maiores dicta nisi veritatis natus cupiditate, nulla quis tenetur
          rerum asperiores est placeat quas velit sit esse. Consequatur non
          neque, fugiat odio reprehenderit illum quis, asperiores, iure
          voluptates sed hic nobis. Sed vero eveniet dolores repudiandae
          delectus ex ipsa, eum asperiores libero ducimus, ut qui.
        </section>
      </main>
    </div>
  );
};

export default App;
