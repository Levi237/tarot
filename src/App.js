import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as routes from './constants/routes';

import { auth }                       from './firebase/config';
import { onAuthStateChanged }         from 'firebase/auth';
import fs                             from './firebase/config';
import { collection, getDocs }        from 'firebase/firestore'; 

import UserAuth                       from './components/authentication';
import NavMenu                        from './components/nav';

import Account                        from './pages/Account';
import Draw                           from './pages/Draw';
import Home                           from './pages/Home';
import Admin                          from './pages/Admin';
import CardModal                      from './components/modals/CardModal';

const App = () => {

  const [card, setCard] = useState([]);
  const [placement, setPlacement] = useState([]);
  const [deck, setDeck] = useState([]);
  const [user, setUser] = useState([]);
    //=> hardcode in layouts with descriptions
  const [layouts] = useState([{  
      id: `draw-single-card`,
      type: `draw-single-card`,
      image: `./deck/back.png`,
      cards: 1,
      name: `Single Card Draw`,
      note: `Helpful in understanding the general energy of a specific situation or period of time.`,
      order: [{
          title: `Single Card`,
          description: `Relates to what is most present on your heart at the time of the card pull`,
          prompt: `Is the relationship of your card to your question at once clear, or is it hidden? Sometimes the most important piece is not the most obvious. In what way does the card present a challenge? In what way is it a gift?`,
      }]
  },{           
      id: `spread-three-simple`,            
      type: `spread-three-simple`,            
      cards: 3,
      name: `Past, Present, Future`,
      note: `Ideal for gaining perspective in a situation or relationship`,
      order: [{
          title: `Past`,
          description: `This card is energy that is on the way out, or that which is at the foundation of the question`,
          prompt: `What past moments, and/or feelings come to mind when looking at the card? How does that relate to the question?`,
      },{
          title: `Present`,
          description: `This card speaks to what is happening now`,
          prompt: `How does the energy & symbolism of the card reflect the current moment related to the question?`,
      },{
          title: `Future`,
          description: `This card indicates incoming energy. (Remember: You make your own destiny! Tarot is a tool which helps us see.)`,
          prompt: `What story do the three cards tell together? What feelings arise? Is this a path that I wish to continue on?`,
      }]
  },{          
      id: `spread-three-simple-two`,            
      type: `spread-three-simple`,            
      cards: 3,
      name: `Desire, Challenge, Resolution`,
      note: `Ideal for gaining clarity when setting goals`,
      order: [{
          title: `Desire`,
          description: `What you want to create or call in`,
          prompt: `How is the card surprising or not surprising? What's at the root of the desire?`,
      },{
          title: `Challenge`,
          description: `That which stands between you, and your goals`,
          prompt: `Does the card affirm your perception, or offer a challenge of its own? How might the card be offering a new way to view the challenge? What are you holding that no longer serves you?`,
      },{
          title: `Resolution`,
          description: `This is the best possible outcome`,
          prompt: `Where is the path leading? What feelings arise when considering the spread?`,
      }]
  },{            
      id: `spread-five-simple`,            
      type: `spread-five-simple`,            
      image: './spread/-spread.png',
      cards: 5,
      name: `Personal Inventory`,
      note: `Path finding; Introspection`,
      order: [{
          title: `Me at this Moment`,
          description: `This card is you in the present moment`,
          prompt: `Who Am I now? What is my focus? Am I being honest with myself?`,
      },{
          title: `What Serves Me`,
          description: `This card is what is needed now. You already have access to these strengths and tools`,
          prompt: `What supports my highest and best good? Does the card point to an asset I have yet to realize? How do the details and imagery of the card speak to me personally?`,
      },{
          title: `What Serves Me Not`,
          description: `This card is what needs releasing`,
          prompt: `What do I hold out of stubbornness or pride? What am I chasing that drains my energy, and causes me strife? How do the details and imagery of the card speak to me personally? What thoughts and memories arise as I consider this card?`,
      },{
          title: `The Way Onward`,
          description: `This card indicates choices ahead, and options available`,
          prompt: `How does the card relate to potential actions? Are these actions overt or subtle? How will I get to where I'm going? (Consider: a reversed card in this position may emphasize the duality of the card's meaning rather than the inverse; you have choices.)`,
      },{
          title: `Path Ahead`,
          description: `This card speaks to where you are headed`,
          prompt: `Is the direction I'm going the direction I intend? How might my choices affect my outcome?`,
      }]
  },{            
      id: `spread-cross`,           
      type: `spread-cross`,           
      image: './spread/-spread.png',
      cards: 5,
      name: `5 Card Cross`,
      note: `Decision making and goal setting`,
      order: [{
          title: `Present Moment`,
          description: `The situation at hand/ state of mind`,
          prompt: `How is my attitude reflected in the card? Does the card affirm or challenge my perception of the situation?`,
      },{
          title: `Crown`,
          description: `Ultimate goal/ the highest ideal`,
          prompt: `What am I ultimately working toward? What story does the card tell? Does the card affirm or challenge the story in my mind?`,
      },{
          title: `Roots`,
          description: `The subconscious mind/ Tools at my disposal`,
          prompt: `Is my subconscious self supportive of my conscious goals? What strengths and resources does the card call to mind?`,
      },{
          title: `Past`,
          description: `That which led to the present situation`,
          prompt: `How do my past influences, and lessons give me strength now? What thoughts and memories does the card call to mind? (Trust your gut)`,
      },{
          title: `Near Future`,
          description: `Incoming energy/ Where I am headed`,
          prompt: `Is this the future I want? How do my present choices and actions lead to this? (You are the master of your own destiny! Tarot is a tool of understanding, like a compass it indicates the direction one is headed)`,
      }]
    },{
      id: `spread-horseshoe`,
      type: `spread-horseshoe`,
      image: './spread/horseshoe-spread.png',
      cards: 7,
      name: `7 Card Horseshoe`,
      note: `Perfect for clarity in decision-making`,
      order: [{
          title: `The Past`,
          description: `That which lead to the present moment/ What is passing away`,
          prompt: `What past moments, and/or feelings come to mind when looking at the card? How does that relate to the question?`,
      },{
          title: `Present Moment`,
          description: `Speaks to what is happening now`,
          prompt: `How does the energy & symbolism of the card reflect the current moment related to the question?`,
      },{
          title: `What may be`,
          description: `Indicates incoming energy`,
          prompt: `How does this card relate to the past and present? What story do they tell? What feelings arise?`,
      },{
          title: `The Querent`,
          description: `You at the present moment`,
          prompt: `What are your attitudes about the question? Are you being honest with yourself?`,
      },{
          title: `Influences`,
          description: `Outside circumstances, and attitudes of those around you`,
          prompt: `What about your circumstance comes to mind? What people, and in what way? How can this be viewed through the lens of the card?`,
      },{
          title: `Challenges`,
          description: `That which stands between you, and your goals`,
          prompt: `What are you holding that no longer serves you? Are there habits or attitudes that are standing in the way?`,
      },{
          title: `Outcome`,
          description: `This card unites the spread`,
          prompt: `How do the past, present and future, personal attitudes, outside influences, and challenges culminate in the final card? What feelings arise?`,
      }]
  },{            
      id: `spread-ten-celtic-cross`,
      type: `spread-ten-celtic-cross`,
      image: './spread/-spread.png',
      cards: 10,
      name: `Celtic Cross`,
      note: `A deeper dive. Helpful for complex issues. Guidance on life changes. Overview of a period of time, such as the month to come`,
      order: [{
          title: `This Covers You`,
          description: `The present moment. Indicates state of mind, perception, and influences related to the question`,
          prompt: `What guides my present course? Am I moving with love and serenity in my purpose? Am I reacting (or frozen) in fear? Are my heart, mind, and gut in alignment?`,
      },{
          title: `This Crosses You`,
          description: `The most immediate challenge or obstacle (always read as upright)`,
          prompt: `Pushing back against resistance can strengthen the body, yet flowing like water can shape the world. Does this challenge build my strength or wear me down? How does the obstacle guide my path? Does the card encourage me to stay the course, or is a shift needed?`,
      },{
          title: `This Crowns You`,
          description: `The goal/ Idealized outcome`,
          prompt: `What am I working toward? How does the card challenge or affirm my perception of the goal?`,
      },{
          title: `This Supports You`,
          description: `Subconscious/ Tools at your disposal`,
          prompt: `Are my heart, mind, and body in harmony or conflict on this matter? What strengths, and skills do I bring to the table? Does the card highlight these or ask me to consider a different approach?`,
      },{
          title: `This is Behind You`,
          description: `What led to now/ What is passing away`,
          prompt: `What moments from the past does the card call to mind? How do these moments relate to the question? Does the card call to mind an aspect of the present that may be ending? What feelings arise?`,
      },{
          title: `This is Before You`,
          description: `Near future/ Next steps`,
          prompt: `What does the card say about the energy coming in now? Does the card encourage action, or is it a time to watch and wait? Is it time to rest? Is this work external or internal?`,
      },{
          title: `Guidance`,
          description: `Advice from Spirit/ Suggested Approach`,
          prompt: `What kind of path is the card showing me? Does the card suggest a shift in perception or a change of tactic?`,
      },{
          title: `Outside Influences`,
          description: `People, energies, and events that surround the situation outside of your control`,
          prompt: `How does this card relate to earlier cards in the spread? What story does the spread tell? Does the card challenge or confirm my perception of these influences, and in what way?`,
      },{
          title: `Hopes & Fears`,
          description: `One's emotional state related to the topic.`,
          prompt: `Hope and fear can at times be deeply interwoven. We may hope for something we fear, or fear that for which we hope. Is fear causing me to work against myself? In what ways do the meaning and imagery of the card relate to my internal dialogue?`,
      },{
          title: `What May Be`,
          description: `This final card shows where the current path is leading. (Remember: You make your own destiny! Tarot is a tool which helps us see.)`,
          prompt: `How does this final card complete the story the first nine have been telling? How does this knowledge empower me?`,
      }]        
  }]);
  const [layout, setLayout] = useState([]);
  
  useEffect(() => {
    //=> Get deck from deck collection doc
      fetchData();
  }, []);

  const fetchData = async () => {
    //=> Get deck from deck collection doc
      const getDeck = collection(fs, 'deck');
      const docSnap = await getDocs(getDeck);
      docSnap.forEach((doc) => {
        if (doc.id === 'iymsYXSnDc6LZ6cwxeWn'){
          setDeck(doc.data().deck);
        }
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // console.log("user.uid =>", user.uid);
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const clickSignOut = (e) => {
    auth.signOut().then(function() {
        console.log('Signed Out');
        setUser([]);
      }, function(error) {
        console.error('Sign Out Error', error);
      });
  };
  const openSignIn = (e) => {
    const modal = document.getElementById('auth-container');
    modal.style.opacity = 1;
    modal.style.marginTop = '0vh';
  };

  const selectLayout = (e) => {
    let _key = e.currentTarget.value;
    let _id = e.currentTarget.id;
    if (_id){
      const getData = layouts.map((data) => {
        if (data.id === _id) {
          setLayout(data);
        }
      });
    } else if ( _key !== "" ){
      const getData = layouts.map((data) => {
        if (data.id === _key) {
          setLayout(data);
        }
      });
    } else {
      setLayout([]);
    }
  };

  const viewCard = (e, data, layout) => {

    setCard(data);
    setPlacement(layout);
    // include layout in data
    // setSearches(searches => [...searches, query])
    console.log(e.currentTarget.id, "viewcard id", layout, data)
  };
  
  const closeCardModal = (e) => {
    e.preventDefault();
    setCard([]);
  }



  return (
    <div className="App">
      {/* { user.uid && <div>{user.displayName ? user.displayName : user.email}</div> } */}
      {/* <NavMenu user={user} clickSignOut={clickSignOut} openSignIn={openSignIn}/> */}
      {/* <UserAuth user={user} clickSignOut={clickSignOut}/> */}
      { card.title && <CardModal card={card} placement={placement} closeCardModal={closeCardModal}/>}
      <Routes>
          <Route path={routes.DRAW} exact element={
            <Draw 
              deck={deck}
              layouts={layouts}
              layout={layout}
              selectLayout={selectLayout}
              viewCard={viewCard}
            />
            } />
          <Route path={routes.ACCT} exact element={<Account />}/>
          <Route path={routes.ROOT} exact element={
            <Home 
              deck={deck}
              layouts={layouts}
              layout={layout}
              selectLayout={selectLayout}
              viewCard={viewCard}
            />
            }/>
          <Route path={routes.ROOT} element={<>wrong url</>}/>
        </Routes>
      { (user.uid === 'IcaB6QA5frhOaMWRf80gqxYF8Er2') && <Admin /> }
    </div>
  );
}

export default App;