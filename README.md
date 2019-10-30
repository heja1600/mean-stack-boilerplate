# MEAN-nodets-base

This project is a base for building a mean application.

- [M] MongoDB
- [E] Express
- [A] Angular
- [N] Nodejs

## commands


```npm run dev ```
will run ng serve to start development for angular and start nodejs typescript server concurrently,
it will also build the project into server/dist whenever frontend/angular application is changed.

------
```npm run dev-https```
will execute npm *run dev but* backend with https instead.
you would have to generate keys in /server/security like following
```OpenSSL> req -newkey rsa:2048 -nodes -keyout keytemp.pem -x509 -days 365 -out cert.pem```
```OpenSSL> rsa -in keytemp.pem -out key.pem```

------
```npm run backend```
will start the server

------
```backend-https```
will start the server in https mode