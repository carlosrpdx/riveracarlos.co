import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <h1>Resume</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <section id="personal-info">
        <h1>Carlos Rivera</h1>
        <h2>Computer Science Student | Technology Service Technician</h2>
        <p>Phone: 503-997-8492</p>
        <p>Email: riveracarlos.co@gmail.com</p>
        <p>Website: Carlosrpdx.com</p>
        <p>Linked In: Carlosrpdx</p>
        <p>Github: Carlosrpdx</p>
      </section>

      <section id="professional-summary">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>As a skilled and experienced student at Portland State University, I bring a unique blend of technical expertise and business acumen to the table. With 1 year of professional experience in technology support and 2 years of computer science coursework, I am well-versed in managing business problems, analyzing needs, and implementing effective solutions. I am now eager to take the next step in my career by seeking an internship in software development, where I can apply my skills, passion for problem-solving and my ability to think critically in a dynamic and innovative environment. I am confident that I will be an asset to any team, and I am eager to contribute my talents to help drive success.</p>
      </section>

      <section id="work-experience">
        <h2>WORK EXPERIENCE</h2>
        <ul>
          <li>
            <h3>Multnomah Athletic Club</h3>
            <p>Technology Service Technician I</p>
            <p>Full-Time</p>
            <p>Portland, OR</p>
            <ul id="list-work-desc">
              <li>Monitored & resolved technology support tickets for 700+ end users across a Microsoft Exchange Hybrid environment. I provided support over the phone, email, and video conferencing. All activity was tracked and reviewed in Zendesk ticketing system.</li>
              <li>Created and maintained documentation for Microsoft applications and 3rd Party software. (NorthStar, Genentech, Insight Software, VMWare Horizon, iLand 365 Backup).</li>
              <li>Diagnosed and troubleshoot end user devices and business systems (Windows/ Mac OS Computers, POS Terminals, Printers, Virtual machines, Commercial Displays, Conference Rooms).</li>
              <li>Automated access for end users by using Azure dynamic membership groups and 3rd party software access using Azure SAML Authentication.</li>
              <li>Worked closely with Executive Leadership, Directors, Department Managers & Supervisors, Members of the Club and Board of Trustees.</li>
            </ul>
          </li>
          <li>
            <h3>Amazon</h3>
            <p>Sales Associate I</p>
            <p>Part-Time</p>
            <p>Portland, OR</p>
            <ul id="list-work-desc">
              <li>Provided excellent customer support and handled POS transactions.</li>
              <li>Ability to multi-task and work in a fast-paced environment.</li>
              <li>Monitor sales metrics & inventory including books, amazon first & 3rd party devices, and top selling merchandise from amazon.com.</li>
            </ul>
          </li>
          <li>
            <h3>Verizon Wireless</h3>
            <p>Sales Associate I</p>
            <p>Full-Time</p>
            <p>Beaverton, OR</p>
            <ul id="list-work-desc">
              <li>Provided quality customer service & sell quality products based on customer needs.</li>
              <li>Inventory management for phones, tablet, and mobile internet devices.</li>
              <li>End users troubleshooting over the phone and onsite. Provided efficient and satisfactory solutions.</li>
            </ul>
          </li>
        </ul>
      </section>      

      <section id="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>
            <h3>Portland Community College</h3>
            <p>University Transfer Program</p>
            <p>General Studies & Introduction to Computer Science</p>
            <p>Fall 2020 – Spring 2022</p>
            <ul id="list-edu-desc">
              <li><strong>Relevant Course Experience:</strong> Data Structures, UNIX/Linux Operating Systems</li>
              <li>Strong practice with stacks, queues, lists, vectors, hash tables, graphs, trees, and algorithms including sorting, searching, iterating over data structures and recursion.</li>
              <li>Task scheduling and management, memory management, input/output processing, internal and external commands, shell configuration, and shell customization. File management, scripting, and C/C++ compilers.</li>
            </ul>
          </li>
            <h3>Portland State University</h3>
            <p>Degree: Bachelor of Science</p>
            <p>Major: Computer Science</p>
            <p>Fall 2021 – Present</p>
            <ul id="list-edu-desc">
              <li><strong>Relevant Course Experience:</strong> Programming Systems, Discrete Structures/Mathematics</li>
              <li>C++ & Java language, operating system calls, and shell-level programming. Low-level debugging of high-level programs. Programming applications from data structures.</li>
              <li>C and assembly language, system programming tools, data representation, implementation of control flow, procedure calls, and complex data types at machine level. Exceptions and interrupts, Process control and signals, system calls, File I/O, timing and improving program performance. Memory hierarchy and dynamic memory allocation techniques.</li>
            </ul>
          </ul>
      
      <section id="skills">
      <h2>SKILLS</h2>
        <ul>
          <li>
          <h3>Languages</h3>
            <ul id="list-skills-desc">
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>PowerShell</li>
              <li>Bash</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          <li>
          <h3>Systems</h3>
            <ul id="list-skills-desc">
              <li>UNIX</li>
              <li>Linux (Ubuntu | Debian)</li>
              <li>Windows (Home | Pro | Enterprise)</li>
              <li>Windows Server</li>
              <li>MacOS (Intel | ARM)</li>
              <li>Virtual Desktops (VMWare Horizon)</li>
            </ul>
          </li>
          <li>
          <h3>Software & Tools</h3>
            <ul id="list-skills-desc">
              <li>Git</li>
              <li>Vim</li>
              <li>gcc</li>
              <li>makefile</li>
              <li>gdb</li>
              <li>Microsoft Azure (End User Administration)</li>
              <li>Microsoft Active Directory & Exchange</li>
              <li>Enterprise Application Implementation (SQL and Non-SQL)</li>
              <li>Zendesk Ticketing System</li>
              <li>Avaya Phone Systems</li>
            </ul>
          </li>
        </ul>
      </section>  
      </section>
      
    </Layout>
  );
}