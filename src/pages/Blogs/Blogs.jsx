import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Banner Section */}
        <div className="bg-[#FFCCEB] h-48 rounded-md mb-14 flex justify-center items-center">
          <h2 className="uppercase text-2xl font-bold text-center text-[#ff0099]">
            Blogs
          </h2>
        </div>
        {/* Blogs Section */}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-3 text-[#ff0099]">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>
            <strong>What Is a Refresh Token? </strong>
            <br /> A refresh token is a special key that enables a client for an
            API or service to retrieve new access tokens without requiring the
            user to perform a complete login. In other words, an application can
            exchange a valid refresh token for a new access token. In addition
            to the new access token, the service may return a new refresh token
            too. Refresh tokens ensure a more seamless authentication experience
            by allowing a user to obtain new access tokens without having to
            re-authenticate. This is done by using a long-lived refresh token to
            obtain new access tokens, even after the original access token has
            expired.
            <br />
            <br />
            <strong>What Is the Purpose of a Refresh Token? </strong>
            <br />
            Why do refresh tokens matter, and does a client need to exchange
            them for a new access token? The main reason why refresh tokens
            exist is because most access tokens don't live forever. That is to
            say, an access token may expire after a specific period of time like
            a few hours or days. Hence, in order to avoid requesting that the
            client perform an activity like entering a username and password to
            retrieve a new access token, you can use refresh tokens to get a new
            access token. Refresh tokens matter a lot because they can improve
            the user experience and the general security of an application. On
            the side of user experience, imagine forcing your users to log in
            every time they return to your application after the access token
            expires. Most popular services seamlessly allow users to return to
            their previous session by silently generating new access tokens
            using refresh tokens.
            <br />
            <br />
            <strong>Refresh Token Best Practices</strong>
            <br />
            Storage Storing of Refresh Tokens should be in long-term safe
            storage: Long-term Use durable storage like a database. It could be
            a relational or non-relational database. Just keep in consideration
            that your refresh token storage should survive server restarts.
            Considering in-memory storage doesn't work due to its volatile
            nature. Safe Use encryption-at-rest all the time. It guarantees that
            your refresh tokens are still safe if your storage is compromised
            since they're encrypted. Using encryption-at-rest can impact the
            performance of your application since the process of encryption and
            decryption requires processing. Consistency A refresh token is used
            to get a new non-expired access token with the same credentials.
            Your application shouldn’t request additional scopes not issued in
            the original expired access token. The Authorization Server already
            knows the original scopes granted to the access token. If the
            Authorization Server returns a new refresh token as part of the new
            token request, store the new refresh token; otherwise, assume the
            current refresh token used remains valid.
            <br />
            <br />
            <strong>There are three solutions </strong>
            <br />
            1) Storing the refresh token in an in-memory JavaScript variable,
            which has two drawbacks: a) It's vulnerable to XSS (but may be not
            as obvious as local/session storage b) It looses the "session" if a
            user closes the browser tab Especially the latter drawback makes
            will turn out as a bad UX.
            <br />
            2) Storing the access token in session storage and sending it via a
            Bearer access_token authorization header to my resource server. Then
            I can use httpOnly cookies for the refresh token. This has one
            drawback that I can think of: a) The refresh token is exposed to
            CSRF with every request made to the Resource Server.
            <br />
            3) Keep both tokens in httpOnly cookies which has the mentioned
            drawback that both tokens are exposed to the same attack vector.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-3 text-[#ff0099]">
            Compare SQL and NoSQL databases?
          </h3>
          <p>
            <strong>What is SQL?</strong>
            <br /> SQL is a domain-specific language used to query and manage
            data. It works by allowing users to query, insert, delete, and
            update records in relational databases. SQL also allows for complex
            logic to be applied through the use of transactions and embedded
            procedures such as stored functions or views.
            <br />
            <br />
            <strong>What is NoSQL?</strong>
            <br />
            NoSQL stands for Not only SQL. It is a type of database that uses
            non-relational data structures, such as documents, graph databases,
            and key-value stores to store and retrieve data. NoSQL systems are
            designed to be more flexible than traditional relational databases
            and can scale up or down easily to accommodate changes in usage or
            load. This makes them ideal for use in applications
            <br />
            <br />
            <strong>What are Relational Databases?</strong>
            <br />
            Relational databases use Structured Query Language (SQL) to store
            and retrieve data. Relational databases (also called relational
            database management systems or RDBMSs) store data in rows and
            tables. These systems connect information from various tables with
            keys — unique identifiers that the database assigns to rows of data
            in tables. Primary keys and foreign keys facilitate this process.
            <br />
            <br />
            <strong>What are Non-Relational Databases (NoSQL)?</strong>
            <br />
            Non-relational, or NoSQL databases are more flexible and don’t
            necessarily require the same rigid structure as SQL. Non-relational
            databases store data just like relational databases. However, they
            don't contain any rows, tables, or keys. This type of database
            utilizes a storage model based on the type of data it stores.
            <br />
            <br />
            <strong>
              The five critical differences between SQL and NoSQL are:
            </strong>
            <br />
            <li>
              SQL databases are relational, and NoSQL databases are
              non-relational.
            </li>
            <li>
              SQL databases use structured query language (SQL) and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
            </li>
            <li>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </li>
            <li>
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores.
            </li>
            <li>
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </li>
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-3 text-[#ff0099]">
            What is express js? What is Nest JS?
          </h3>
          <p>
            <strong>What is NestJS?</strong>
            <br /> NestJS is a Node.js framework for building server-side
            applications. It is based on TypeScript and JavaScript. This
            framework is inspired by Angular, so most of what you find in
            Angular can also be found in Nest, including providers, middleware,
            components, and services. It is safe to say that Nest can be easily
            learned by Angular developers for any type of project.
            <br />
            <br />
            <strong>NestJS core components</strong>
            <br />
            Each NestJS application contains at least one module, known as the
            root module. Nest uses the root module as a starting point to
            resolve the structure and relationships of the application. Dynamic
            modules are a powerful feature of the Nest module system. This
            feature allows you to easily create customizable modules that can
            dynamically register and configure providers. Providers are very
            important, as Nest relies heavily on them to create relationships
            between different objects. A provider can be injected as a
            dependency.
            <br />
            <br />
            <strong>What is Express.js?</strong>
            <br />
            Express is a Node.js web application framework that provides a wide
            range of functionality for constructing web and mobile applications.
            It is a layer built on top of Node that aids in the management of
            servers and routes. You can use Express with Node to create
            single-page, multi-page, or hybrid web applications. It supports the
            MVC architectural pattern for designing web applications: Model,
            View, and Controller.
            <br />
            <br />
            <strong>
              NestJS vs. Express.js: Opinionated and un-opinionated
            </strong>
            <br />
            Nest is a framework with strong opinions. It adheres to the design
            paradigm of “convention over configuration,” which allows developers
            to use standard tools and code in a specific manner, thus reducing
            the need for explicit configuration. In addition, NestJS is
            Angular-based, so TypeScript is its primary programming language,
            although you can also use JavaScript. The use of TypeScript ensures
            that the application is reliable and bug-free.
            <br />
            <br />
            <strong>NestJS vs. Express.js: Perfomance</strong>
            <br />
            Express can execute multiple operations independently of each other
            using asynchronous programming. Nest employs the Express framework
            by default. However, Nest also provides an alternative way to change
            the underlying framework from Express to Fastify for significantly
            improved performance.
            <br />
            <br />
            <strong>NestJS vs. Express.js: Architecture</strong>
            <br />
            Nest offers a ready-to-use application architecture using
            controllers, providers, and modules. This enables developers and
            teams create applications that are simple to test and maintain.
            Express does not require a specific structure, which can provide
            flexibility for small or one-person development teams. However, this
            can become a problem as team size or app complexity grows,
            especially with developers working on different aspects of the app.
            <br />
            <br />
            <strong>NestJS vs. Express.js: Popularity</strong>
            <br />
            When it comes to which framework is the most popular, Express.js
            takes home the title. With over 57,000 stars on Github, Express is
            the most popular framework. It brands itself as a fast,
            un-opinionated, and minimalist framework. Nest.js follows closely
            behind. It has over 47,000 stars on Github, ranking second among the
            top Node.js frameworks by Github stars.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-3 text-[#ff0099]">
            What is MongoDB aggregate and how does it work?
          </h3>
          <p>
            <strong>Definition of MongoDB Aggregation</strong>
            <br /> MongoDB Aggregation uses an aggregate() method to perform the
            aggregation operations. Basically, this aggregation operation
            practices data records and provides calculated results. The
            aggregation operations assemble values from various documents
            together and are able to execute a range of operations, such as
            average, sum, maximum, minimum, etc., on the assembled data to
            provide only a result. A corresponding of MongoDB Aggregation in SQL
            is count(*) and with the group by. MongoDB Aggregation is identical
            to the aggregate function provided in SQL.
            <br />
            <br />
            <strong>
              MongoDB supports three techniques to execute aggregation
              operations:
            </strong>
            <br />
            <li>Single-purpose aggregation</li>
            <li> Aggregation pipeline</li>
            <li>Map-reduce function</li>
            <br />
            <br />
            <strong>How does Aggregation work in MongoDB?</strong>
            <br />
            There is no better method than MongoDB Aggregations when we need to
            collect the metrics from MongoDB for any graphical illustration or
            maybe other operations. Aggregation in MongoDB is responsible for
            processing the data, which results in the calculated outputs,
            generally by assembling the data from several documents and then
            executes in various ways on those assembled data in order to yield
            one collective result. It practices documents and then yield
            computed outputs and thus execute a range of operations on the
            assembled data to return only one result. 
            <br />
            <br />
            Aggregation in MongoDB was
            progressed when limitations were viewed because of having millions
            of embedded documents, taking much time in processing, and server’s
            random memory which may terminate the operations. This MongoDB
            Aggregation uses the Pipeline concept in the UNIX command, where the
            pipeline defines the possibility to perform an operation on few
            inputs and apply the output resulted as the input for the succeeding
            command, and it follows the same. MongoDB supports this idea in the
            aggregation framework.
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
