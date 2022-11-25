import React from 'react';


const Blog = () => {
  return (
    <div className="lg:w-[800px] mx-auto w-[95%] lg:my-20 my10">
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">What are the different ways to manage a state in a React application?</h1>
        <p className="text-black text-base">Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.
        <br />
        The Four Kinds of React State to Manage :- <br />
        Local state. Global state. Server state. URL state.
        </p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">How does prototypical inheritance work?</h1>
        <p className="text-black text-base">
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">What is a unit test? Why should we write unit tests?</h1>
        <p className="text-black text-base">
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        </p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">React vs. Angular vs. Vue?</h1>
        <p className="text-black text-base">
          <small className='font-bold text-xl'>Angular vs React :</small>
          If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

          React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

          React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
        </p>
        <br />
        <p className="text-black text-base">
          <small className='font-bold text-xl'>React vs Vue :</small>
          The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

          Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

          Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
        </p>
        <br />
        <p className="text-black text-base">
          <small className='font-bold text-xl'>Angular vs Vue :</small>
          In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

          A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

          It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
        </p>

      </div>
    </div>
  );
};

export default Blog;