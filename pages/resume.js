import Head from 'next/head';
import Layout from '../components/layout';
import UI from '../styles/UI.module.css';
import Image from 'next/image';
import styles from '../styles/Resume.module.css';
import Link from 'next/link';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <div className={UI.container}> 
        <h1 className={UI.title}>Resume</h1>
        <div className={UI.grid}>
          <div className={UI.card}>
            <h2>Carlos Rivera</h2>
            <h3>Computer Science Student | Technology Service Technician</h3>
            <div className={styles.contactGrid}>
                <div className={styles.iconAndText}>
                <Image className={styles.icon} src="/phone.svg" alt="Phone Logo" width={42} height={36}/>
                  <p>503-997-8492</p>
                </div>
                <div className={styles.iconAndText}>
                  <Image className={styles.icon} src="/email.svg" alt="Email Logo" width={42} height={36}/>
                  <p>riveracarlos.co@gmail.com</p>
                </div>
                  <div className={styles.iconAndText}>
                  <Image className={styles.icon} src="/home.svg" alt="Website Logo" width={42} height={36}/>
                  <Link href ='/'><p>Carlosrivera.co</p></Link>
                </div>
              </div>
            <div className={styles.contactGrid}>
                <Link href="https://www.linkedin.com/in/carlosrpdx/">
                    <Image className={styles.icon} src="/linkedin.svg" alt="LinkedIn Logo" width={42} height={36} />
                </Link>
                <Link href="https://github.com/carlosrpdx">
                    <Image className={styles.icon} src="/github.svg" alt="GitHub Logo" width={42} height={36} />
                </Link>
              </div>
          </div>
          <div className={UI.card}>
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>As a skilled and experienced student at Portland State University, I bring a unique blend of technical expertise and business acumen to the table. With 1 year of professional experience in technology support and 2 years of computer science coursework, I am well-versed in managing business problems, analyzing needs, and implementing effective solutions. I am now eager to take the next step in my career by seeking an internship in software development, where I can apply my skills, passion for problem-solving and my ability to think critically in a dynamic and innovative environment. I am confident that I will be an asset to any team, and I am eager to contribute my talents to help drive success.</p>
          </div>

          <div className={UI.card}>
            <h2>WORK EXPERIENCE</h2>
              <div className={styles.miniGrid}>
                <h3>Multnomah Athletic Club</h3>
              </div>
                <ul>
                  <li><strong>Technology Service Technician I</strong></li>
                  <li><strong>Full-Time</strong></li>
                  <li><strong>Portland, OR</strong></li>
                </ul>
                <ul>
                  <li>Monitored & resolved technology support tickets for 700+ end users across a Microsoft Exchange Hybrid environment. I provided support over the phone, email, and video conferencing. All activity was tracked and reviewed in Zendesk ticketing system.</li>
                  <li>Created and maintained documentation for Microsoft applications and 3rd Party software. (NorthStar, Genentech, Insight Software, VMWare Horizon, iLand 365 Backup).</li>
                  <li>Diagnosed and troubleshoot end user devices and business systems (Windows/ Mac OS Computers, POS Terminals, Printers, Virtual machines, Commercial Displays, Conference Rooms).</li>
                  <li>Automated access for end users by using Azure dynamic membership groups and 3rd party software access using Azure SAML Authentication.</li>
                  <li>Worked closely with Executive Leadership, Directors, Department Managers & Supervisors, Members of the Club and Board of Trustees.</li>
                </ul>
              <div className={styles.miniGrid}>
                <Image className={styles.icon} src="/amazon.svg" alt="Amazon Logo" width={52} height={46} />
                <h3>Amazon</h3>
              </div>
              <ul>
                <li><strong>Sales Associate I</strong></li>
                <li><strong>Part-Time</strong></li>
                <li><strong>Portland, OR</strong></li>
              </ul>
              <ul>
                <li>Provided excellent customer support and handled POS transactions.</li>
                <li>Ability to multi-task and work in a fast-paced environment.</li>
                <li>Monitor sales metrics & inventory including books, amazon first & 3rd party devices, and top selling merchandise from amazon.com.</li>
              </ul>
              <div className={styles.miniGrid}>
                <Image className={styles.icon} src="/verizon.svg" alt="Verizon Logo" width={52} height={46} />
                <h3>Verizon Wireless </h3>
              </div>
              <ul>
                <li><strong>Sales Associate I</strong></li>
                <li><strong>Full-Time</strong></li>
                <li><strong>Beaverton, OR</strong></li>
              </ul>
                <ul>
                  <li>Provided quality customer service & sell quality products based on customer needs.</li>
                  <li>Inventory management for phones, tablet, and mobile internet devices.</li>
                  <li>End users troubleshooting over the phone and onsite. Provided efficient and satisfactory solutions.</li>
                </ul>
          </div>     
          <div className={UI.card}>
            <h2>EDUCATION</h2>
            <h3>Portland Community College</h3>
              <ul>
                <li><strong>University Transfer Program</strong></li>
                <li>General Studies & Introduction to Computer Science</li>
                <li>Fall 2020 – Spring 2022</li>
              </ul>
              <ul>
                <li><strong>Relevant Course Experience:</strong> Data Structures, UNIX/Linux Operating Systems</li>
                <li>Strong practice with stacks, queues, lists, vectors, hash tables, graphs, trees, and algorithms including sorting, searching, iterating over data structures and recursion.</li>
                <li>Task scheduling and management, memory management, input/output processing, internal and external commands, shell configuration, and shell customization. File management, scripting, and C/C++ compilers.</li>
              </ul>
            <h3>Portland State University</h3>
              <ul>
              <li><strong>Degree: Bachelor of Science</strong></li>
                <li>Major: Computer Science</li>
                <li>Fall 2021 – Present</li>
              </ul>
              <ul>
                <li><strong>Relevant Course Experience:</strong> Programming Systems, Discrete Structures/Mathematics</li>
                <li>C++ & Java language, operating system calls, and shell-level programming. Low-level debugging of high-level programs. Programming applications from data structures.</li>
                <li>C and assembly language, system programming tools, data representation, implementation of control flow, procedure calls, and complex data types at machine level. Exceptions and interrupts, Process control and signals, system calls, File I/O, timing and improving program performance. Memory hierarchy and dynamic memory allocation techniques.</li>
              </ul>
            </div>
          
          <div className={UI.card}>
          <h2>SKILLS</h2>
          <h3>Programming</h3>
            <ul>
              <Image className={styles.icon} src="/c.svg" alt="C Logo" width={52} height={46} />
              <Image className={styles.icon} src="/c++.svg" alt="C++ Logo" width={52} height={46} />
              <Image className={styles.icon} src="/java.svg" alt="Java Logo" width={52} height={46} />
              <Image className={styles.icon} src="/python.svg" alt="Python Logo" width={52} height={46} />
              <Image className={styles.icon} src="/ps.svg" alt="Powershell Logo" width={52} height={46} />
              <Image className={styles.icon} src="/js.svg" alt="Javascript Logo" width={52} height={46} />
              <Image className={styles.icon} src="/html.svg" alt="HTML Logo" width={52} height={46} />
              <Image className={styles.icon} src="/css.svg" alt="CSS Logo" width={52} height={46} />
            </ul>
          <h3>Frameworks</h3>
            <ul>
              <Image className={styles.icon} src="/react.svg" alt="React Logo" width={52} height={46} />
              <Image className={styles.icon} src="/nextjs.svg" alt="Next-JS Logo" width={52} height={46} />
            </ul>
          <h3>Systems</h3>
            <ul>
              <Image className={styles.icon} src="/linux.svg" alt="Linux Logo" width={52} height={46} />
              <Image className={styles.icon} src="/ubuntu.svg" alt="Ubuntu Logo" width={52} height={46} />
              <Image className={styles.icon} src="/windows.svg" alt="Windows Logo" width={52} height={46} />
              <Image className={styles.icon} src="/macos.svg" alt="MacOS Logo" width={52} height={46} />
              <Image className={styles.icon} src="/vm.svg" alt="VM Logo" width={52} height={46} />
            </ul>
          <h3>Tools</h3>
            <ul>
              <Image className={styles.icon} src="/git.svg" alt="Git Logo" width={52} height={46} />
              <Image className={styles.icon} src="/github.svg" alt="Github Logo" width={52} height={46} />
              <Image className={styles.icon} src="/vim.svg" alt="Vim Logo" width={52} height={46} />
              <Image className={styles.icon} src="/zendesk.svg" alt="Zendesk Logo" width={52} height={46} />
              <Image className={styles.icon} src="/vs.svg" alt="VS-Code Logo" width={52} height={46} />
              <Image className={styles.icon} src="/azure.svg" alt="Azure Logo" width={52} height={46} />
              <Image className={styles.icon} src="/mysql.svg" alt="MySQL Logo" width={52} height={46} />
            </ul>
            </div>
          </div>
      </div>
    </Layout>
  );
}