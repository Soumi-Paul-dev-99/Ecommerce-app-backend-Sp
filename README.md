<!--for interview preparation questions and answer why i am facing this project -->

1. Why we use jwt token?
"JWT tokens are commonly used in Node.js for user authentication and authorization for several compelling reasons:

Enhanced Security: JWT tokens help enhance security by reducing the need to store sensitive information, like a user's password, on the server. When a user logs in, a JWT token is generated and sent to the client. This token is signed and optionally encrypted, ensuring that the data it carries can't be tampered with. This reduces the risk of data breaches and exposure of sensitive information.

Stateless Authentication: JWT tokens enable stateless authentication, which means that each request from the client includes the token, and the server can independently verify the user's identity without needing to store session information. This simplifies server architecture and reduces the need for session management.

Scalability: Stateless authentication with JWT tokens simplifies server scaling. Servers can be added or removed without concerns about session synchronization because each server can independently validate tokens.

Cross-Origin Compatibility: JWT tokens are compatible with Cross-Origin Resource Sharing (CORS) policies. This is particularly useful for securing single-page applications or APIs that are accessed from different domains.

Authorization: JWT tokens often include user roles and permissions, making it easy to implement fine-grained authorization. This allows for controlling what actions a user can perform based on their role and the contents of the token.

Decoupling Frontend and Backend: JWT tokens allow for the decoupling of the frontend and backend. The frontend can be hosted on a different domain or server, and as long as it sends the token with requests, the backend can authenticate the user. This is crucial for modern web applications where frontend and backend may be separate entities.

Single Sign-On (SSO): JWT tokens are a fundamental component of Single Sign-On solutions. Users can log in once and access multiple services without needing to log in again for each service.

In Node.js, libraries like Passport.js, jsonwebtoken, and various authentication middleware make it easy to handle token creation and validation, simplifying the implementation of token-based authentication for securing web applications and APIs."


2. what is middleware?
Middleware in Node.js is a crucial concept that refers to functions or code snippets that are executed between the processing of an incoming HTTP request and the generation of an HTTP response in a Node.js application. It acts as a bridge or intermediary layer that enhances the functionality of the application by performing various tasks on the request or response.

Node.js middleware functions are typically used with web frameworks like Express.js and connect, and they are added to the application's request-response cycle. Each middleware function can modify the request or response, end the request-response cycle, or call the next middleware function in the chain.

Common use cases for middleware in Node.js include:

Logging: Logging incoming requests, which is useful for debugging and monitoring.

Authentication: Checking and validating user authentication, ensuring that only authorized users can access certain routes.

Data Parsing: Parsing data from the request body, making it accessible to the application.

Error Handling: Catching and handling errors that occur during request processing.

Routing: Implementing route-specific logic or URL rewriting.

CORS Handling: Dealing with Cross-Origin Resource Sharing (CORS) issues to allow or restrict access to resources from different origins.

In summary, middleware in Node.js is a powerful mechanism for extending and customizing the behavior of your application by adding functions that can process requests and responses at various points in the application's workflow, enhancing its functionality and maintainability.