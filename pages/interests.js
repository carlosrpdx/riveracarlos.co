import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Interests.module.css';
import UI from '../styles/UI.module.css';

export default function Interests() {
  return (
    <>
    <Layout>
      <Head>
        <title>Interests</title>
      </Head>
      <div className={UI.container}> 
        <h1 className={UI.title}>Interests</h1>
        <div className={UI.grid}>
          <div className={UI.card}> 
            <h3>PC Building</h3>
            <p>
              I enjoy the process of selecting and assembling components to create a custom computer. 
              I appreciate the ability to upgrade and modify my system as technology evolves and the freedom of choice that comes with building my own PC. 
            </p>
          </div>
          <div className={UI.card}> 
            <h3>Soccer</h3>
            <p>
              Watching a live soccer match is an unforgettable experience. 
              The energy and excitement of the crowd, the skill and athleticism of the local legends, and the tension and drama of the game all squeeze together in the 90 minute game. 
              I love the unpredictability of the game and being a Timbers supporter, there is not shortage of that.  
              I admire the sense of community that comes with being a fan, whether I'm watching the game at a bar with friends or at a stadium with thousands of other fans. 
              The sport has given me the opportunity to connect with people from different cultures and backgrounds at the most random of times & locations. 
              The emotional rollercoaster of the game is an unforgettable experience, having a local team just adds an extra layer of excitement and passion to my love for the game.
            </p>
          </div>
          <div className={UI.card}> 
            <h3>Basketball</h3>
            <p>
              I love the level of strategy and chess-like gameplay, the constant adjustments and exploitation of weaknesses are interesting to watch and unfold in real-time. 
              I appreciate the artistry and creativity of the players, their ability to handle the ball with grace, make fancy passes and execute spectacular moves.
              I'm constanlty amazed at the talent and leadership of Damien Lillard. 
              He is one of the most dynamic players in the league, capable of taking over a game with his scoring, passing and presence on the court. It's a pleasure to see him play every time.
            </p>
          </div>
          <div className={UI.card}> 
            <h3>Movies</h3>
            <p>
              Being a devotee of the movies. There are 3 names that come to mind right away. Guillermo del Toro, Damien Chazelle, and Christopher Nolan.
              For Del Toro, its his ability to blend genres and create fully-realized worlds with carefully crafted attention to details. 
              Chazelle is a proven master of storytelling, capturing emotions and performances. 
              Nolans mind-bending narratives speak for themselves. He is captivating and posses the ability to tackle complex themes and ideas. 
              The realms they craft and the distinctive narratives they weave are always master classes. Each of these filmmakers has a unique style that sticks with me.
            </p>
          </div>
          <div className={UI.card}> 
            <h3>Video Games</h3>
            <p>
              I'm a huge fan of competive FPS. Most notably, Valorant, Apex Legends, and Call of Duty. I'm captivated by their unique gameplay and strategies to win. 
              In Valorant, success is built on strategy and teamwork. Apex Legends offers a unique mix of survival, exploration, and combat. 
              Call of Duty's multiplayer mode is intense and fast-paced. 
              Each game requires players to make quick decisions, adapt to changing situations and master different weapons, perks, and abilities to outsmart and outplay opponents.
            </p>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
}