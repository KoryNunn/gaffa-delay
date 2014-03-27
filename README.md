gaffa-delay
==============

delay action for gaffa

basically setTimeout.

## Install:

    npm i gaffa-delay

## Add to gaffa:

    gaffa.behaviours.constructors.delay = require('gaffa-delay');

# API

## Properties (instanceof Gaffa.Property)

### delay

Number of miliseconds to delay calling 'trigger'

## Actions

### trigger

called when the delay timer goes off.