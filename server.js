import express from 'express';
import http from 'http';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import { routes } from './routes';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    // routes is our object of React routes defined above
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
        if (err) {
            // something went wrong
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            // matched a ReactRouter redirect, so redirect from the server
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            // if we get props, we found a valid component to render
            const markup = renderToString(<RoutingContext {...props} />);

            // render 'index.ejs', but pass in the markup we want to display
            res.render('index', { markup });
        } else {
            // no route match
            res.sendStatus(404);
        }
    });
});

const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
    console.log('Listening on 3003');
});