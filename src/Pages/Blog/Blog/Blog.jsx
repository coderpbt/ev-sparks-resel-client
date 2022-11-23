import React from 'react';


const Blog = () => {
  return (
    <div className="lg:w-[800px] mx-auto w-[95%] lg:my-20 my10">
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">difference between sql and nosql?</h1>
        <p className="text-black text-base">
          sql---
          <br />
          1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
          <br />
          2.These databases have fixed or static or predefined schema
          <br />
          3.These databases are not suited for hierarchical data storage.
          <br />
          4.These databases are best suited for complex queries
          <br />
          5.Vertically Scalable
          <br />
          6.Follows ACID property
          <br />
          7.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
          <br />
          Nosql---
          <br />
          1.They have dynamic schema
          <br />
          2.These databases are best suited for hierarchical data storage.
          <br />
          3.These databases are not so good for complex queries
          <br />
          4.Horizontally scalable
          <br />
          5.Follows CAP(consistency, availability, partition tolerance)
          <br />
          6.MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">What is JWT, and how does it work?</h1>
        <p className="text-black text-base"> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
        </p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2"> What is the difference between javascript and NodeJS?</h1>
        <p className="text-black text-base">1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

          As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
          <br />
          2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
          <br />
          3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
          <br />
          4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

          Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
          <br />
          5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

          Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</p>
      </div>
      <div className="my-8 text-left">
        <h1 className="lg:text-3xl text-2xl text-black capitalize font-bold mb-2">How does NodeJS handle multiple requests at the same time?</h1>
        <p className="text-black text-base">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
      </div>
    </div>
  );
};

export default Blog;